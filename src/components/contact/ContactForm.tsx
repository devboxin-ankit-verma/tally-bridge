"use client";

import { useState } from "react";
import { contact } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`TallyBridge inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\n\n${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initial);
  };

  const field = (
    id: keyof FormState,
    label: string,
    type: "text" | "email" | "tel" | "textarea",
    required = false
  ) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
        {label}
        {required && <span className="text-[var(--accent)]"> *</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={5}
          required={required}
          value={form[id]}
          onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
          className="w-full resize-y rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--glow)]"
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={form[id]}
          onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
          className="min-h-[48px] w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--glow)]"
        />
      )}
      {errors[id] && (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="card-premium space-y-5 p-6 sm:p-8" noValidate>
      {sent && (
        <p className="rounded-lg bg-[var(--surface)] px-4 py-3 text-sm text-[var(--accent)]" role="status">
          Thank you — your email client should open to send your message.
        </p>
      )}
      {field("name", "Full name", "text", true)}
      {field("email", "Email", "email", true)}
      {field("phone", "Phone (optional)", "tel")}
      {field("message", "Message", "textarea", true)}
      <button
        type="submit"
        className="min-h-[48px] w-full rounded-xl text-sm font-semibold text-white transition hover:opacity-95 sm:w-auto sm:px-10"
        style={{ background: `linear-gradient(135deg, var(--accent), var(--accent-dark))` }}
      >
        Send Message
      </button>
    </form>
  );
}
