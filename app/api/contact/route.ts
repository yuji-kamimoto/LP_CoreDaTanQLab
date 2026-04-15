import { NextResponse } from "next/server";

import { contact, siteName } from "@/lib/site-config";

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
  if (!inquiryType || !INQUIRY_TYPES.has(inquiryType)) {
    return NextResponse.json({ error: "inquiryType" }, { status: 400 });
  }
  if (!message || message.length > LIMITS.message) {
    return NextResponse.json({ error: "message" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to =
    process.env.CONTACT_TO_EMAIL?.trim() || contact.email;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    `${siteName}お問い合わせ <onboarding@resend.dev>`;

  if (!apiKey) {
    return NextResponse.json(
      { error: "mail_not_configured" },
      { status: 503 },
    );
  }

  const text = [
    `お名前: ${name}`,
    `メール: ${email}`,
    phone ? `電話: ${phone}` : "電話: （未入力）",
    `ご用件: ${inquiryType}`,
    "",
    "お問い合わせ内容:",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `【${siteName}】お問い合わせ: ${inquiryType}`,
      text,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error("[contact] Resend error", res.status, errText);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
