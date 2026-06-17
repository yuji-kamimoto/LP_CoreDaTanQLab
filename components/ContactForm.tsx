"use client";

import { useState } from "react";

import { trialCtaGradientClasses } from "@/lib/trial-cta-styles";

const inquiryOptions = [
  "体験授業について",
  "見学・ご説明",
  "授業料・コースについて",
  "その他",
] as const;

const fieldPale =
  "mt-1.5 w-full rounded-xl border border-foreground/15 bg-surface px-3.5 py-3 text-sm text-foreground outline-none ring-accent/25 placeholder:text-muted/70 focus:border-accent focus:ring-2";

const fieldGrey =
  "mt-1.5 w-full rounded-xl border border-foreground/15 bg-surface-warm px-3.5 py-3 text-sm text-foreground outline-none ring-accent/25 placeholder:text-muted/70 focus:border-accent focus:ring-2";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          inquiryType,
          message,
          _hp: hp,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setInquiryType("");
        setMessage("");
        return;
      }

      if (data.error === "mail_not_configured") {
        setErrorMessage(
          "送信機能の準備中です。お手数ですが、時間をおいて再度お試しください。",
        );
      } else {
        setErrorMessage(
          "送信に失敗しました。時間をおいて再度お試しください。",
        );
      }
      setStatus("error");
    } catch {
      setErrorMessage(
        "通信エラーが発生しました。回線状況をご確認のうえ、再度お試しください。",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-foreground/10 bg-surface px-6 py-10 text-center shadow-sm">
        <p className="font-heading text-lg font-bold text-foreground">
          お問い合わせを受け付けました
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          内容を確認のうえ、担当者より折り返しご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-2xl border border-foreground/10 bg-surface px-6 py-8 shadow-sm md:px-8 md:py-10"
    >
      <p className="text-sm leading-relaxed text-muted">
        お待ちいただきありがとうございます。お問い合わせ内容をご記入ください。
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-bold text-foreground"
          >
            お名前
            <span className="ml-0.5 text-red-600" aria-hidden>
              *
            </span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="山田 太郎"
            className={fieldPale}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-bold text-foreground"
          >
            メールアドレス
            <span className="ml-0.5 text-red-600" aria-hidden>
              *
            </span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="◯◯◯@hello.tokyo"
            className={fieldPale}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="text-sm font-bold text-foreground">
            電話番号
            <span className="ml-0.5 text-red-600" aria-hidden>
              *
            </span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={40}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="08012345678"
            className={fieldGrey}
          />
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="text-sm font-bold text-foreground"
          >
            ご用件
            <span className="ml-0.5 text-red-600" aria-hidden>
              *
            </span>
          </label>
          <select
            id="contact-subject"
            name="inquiryType"
            required
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            className={`${fieldPale} appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23635a52' stroke-width='2'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E")`,
            }}
          >
            <option value="">ご用件を選択</option>
            {inquiryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-bold text-foreground"
          >
            お問い合わせ内容
            <span className="ml-0.5 text-red-600" aria-hidden>
              *
            </span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            maxLength={8000}
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="メッセージを入力"
            className={`${fieldPale} min-h-[10rem] resize-y`}
          />
        </div>
      </div>

      {/* スパム対策（非表示） */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="contact-hp">ウェブサイト</label>
        <input
          id="contact-hp"
          tabIndex={-1}
          autoComplete="off"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="mt-6 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className={`mt-8 w-full rounded-full px-6 py-4 text-sm font-bold tracking-wide disabled:opacity-60 ${trialCtaGradientClasses}`}
      >
        {status === "sending" ? "送信中…" : "この内容で送信する"}
      </button>
    </form>
  );
}
