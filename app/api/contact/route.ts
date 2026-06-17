import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { siteName } from "@/lib/site-config";

export const runtime = "nodejs";

const LIMITS = {
  name: 120,
  email: 254,
  phone: 40,
  message: 8000,
} as const;

const INQUIRY_TYPES = new Set([
  "体験授業について",
  "見学・ご説明",
  "授業料・コースについて",
  "その他",
]);

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  if (typeof data._hp === "string" && data._hp.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone =
    typeof data.phone === "string" ? data.phone.trim().slice(0, LIMITS.phone) : "";
  const inquiryType =
    typeof data.inquiryType === "string" ? data.inquiryType.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (!name || name.length > LIMITS.name) {
    return NextResponse.json({ error: "name" }, { status: 400 });
  }
  if (!email || email.length > LIMITS.email || !isValidEmail(email)) {
    return NextResponse.json({ error: "email" }, { status: 400 });
  }
  if (!phone || phone.length > LIMITS.phone) {
    return NextResponse.json({ error: "phone" }, { status: 400 });
  }
  if (!inquiryType || !INQUIRY_TYPES.has(inquiryType)) {
    return NextResponse.json({ error: "inquiryType" }, { status: 400 });
  }
  if (!message || message.length > LIMITS.message) {
    return NextResponse.json({ error: "message" }, { status: 400 });
  }

  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT?.trim() || "465");
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || user;

  if (!host || !user || !pass || !to || !from) {
    return NextResponse.json(
      { error: "mail_not_configured" },
      { status: 503 },
    );
  }

  const text = [
    `お名前: ${name}`,
    `メール: ${email}`,
    `電話: ${phone}`,
    `ご用件: ${inquiryType}`,
    "",
    "お問い合わせ内容:",
    message,
  ].join("\n");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `${siteName}お問い合わせ <${from}>`,
      to,
      replyTo: email,
      subject: `【${siteName}】お問い合わせ: ${inquiryType}`,
      text,
    });
  } catch (err) {
    console.error("[contact] SMTP error", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
