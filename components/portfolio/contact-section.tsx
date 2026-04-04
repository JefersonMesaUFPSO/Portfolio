"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, Clock, Send, Github, Instagram, Linkedin, ArrowUpRight, CheckCircle2, User, MessageSquare, FileText } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"
import { SectionHeading } from "./section-heading"

export function ContactSection() {
  const { t } = usePortfolio()
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSent(false), 4000)
    }, 1500)
  }

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }))

  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form (3 cols) */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md p-8 shadow-xl space-y-6"
          >
            {/* Success message */}
            {sent && (
              <div className="flex items-center gap-3 rounded-xl p-4 text-sm font-medium animate-fade-in-up"
                style={{ backgroundColor: "hsl(var(--accent-color) / 0.1)", color: "hsl(var(--accent-color))" }}>
                <CheckCircle2 className="h-5 w-5" />
                {t.contact.success}
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                id="name"
                label={t.contact.name}
                type="text"
                icon={<User className="h-4 w-4" />}
                value={form.name}
                onChange={(v) => update("name", v)}
                focused={focused === "name"}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
              <FormField
                id="email"
                label={t.contact.email}
                type="email"
                icon={<Mail className="h-4 w-4" />}
                value={form.email}
                onChange={(v) => update("email", v)}
                focused={focused === "email"}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <FormField
              id="subject"
              label={t.contact.subject}
              type="text"
              icon={<FileText className="h-4 w-4" />}
              value={form.subject}
              onChange={(v) => update("subject", v)}
              focused={focused === "subject"}
              onFocus={() => setFocused("subject")}
              onBlur={() => setFocused(null)}
            />

            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                {t.contact.message}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full resize-none rounded-xl border bg-background/50 px-4 py-3.5 text-sm outline-none transition-all duration-300"
                style={{
                  borderColor: focused === "message" ? "hsl(var(--accent-color))" : undefined,
                  boxShadow: focused === "message" ? "0 0 0 3px hsl(var(--accent-color) / 0.1)" : undefined,
                }}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group relative w-full overflow-hidden rounded-xl px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
              style={{ backgroundColor: "hsl(var(--accent-color))" }}
            >
              <span className="absolute inset-0 animate-shimmer" />
              <span className="relative flex items-center justify-center gap-2">
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                {sending ? t.contact.sending : t.contact.send}
              </span>
            </button>
          </form>

          {/* Info card (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact info card */}
            <div className="rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md p-8 shadow-xl">
              <h3 className="text-lg font-bold mb-6" style={{ color: "hsl(var(--accent-color))" }}>
                {t.contact.infoTitle}
              </h3>

              <div className="space-y-5">
                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  label={t.contact.location}
                  value="Ocaña, Norte de Santander"
                />
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  label={t.contact.email}
                  value="jefersonmesa13@gmail.com"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jefersonmesa13@gmail.com"
                />
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  label={t.contact.phone}
                  value="+57 3185766550"
                  href="https://wa.me/573185766550"
                />
                <ContactItem
                  icon={<Clock className="h-5 w-5" />}
                  label={t.contact.schedule}
                  value={t.contact.scheduleValue}
                />
              </div>
            </div>

            {/* Social card */}
            <div className="rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md p-8 shadow-xl">
              <p className="mb-5 text-sm font-semibold">{t.contact.socialMedia}</p>
              <div className="flex gap-3">
                <SocialLink href="https://github.com/JefersonMesaUFPSO" icon={<Github className="h-5 w-5" />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/jefersonmesa/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
                <SocialLink href="https://www.instagram.com/jef.mesa/" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  id,
  label,
  type,
  icon,
  value,
  onChange,
  focused,
  onFocus,
  onBlur,
}: {
  id: string
  label: string
  type: string
  icon: React.ReactNode
  value: string
  onChange: (v: string) => void
  focused: boolean
  onFocus: () => void
  onBlur: () => void
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="flex items-center gap-2 text-sm font-semibold">
        <span className="text-muted-foreground">{icon}</span>
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full rounded-xl border bg-background/50 px-4 py-3.5 text-sm outline-none transition-all duration-300"
        style={{
          borderColor: focused ? "hsl(var(--accent-color))" : undefined,
          boxShadow: focused ? "0 0 0 3px hsl(var(--accent-color) / 0.1)" : undefined,
        }}
      />
    </div>
  )
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return (
    <div className="group flex items-start gap-4">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: "hsl(var(--accent-color) / 0.1)", color: "hsl(var(--accent-color))" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 text-sm font-medium text-foreground hover:underline transition-colors flex items-center gap-1"
          >
            {value}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        ) : (
          <span className="mt-0.5 text-sm font-medium">{value}</span>
        )}
      </div>
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/40 text-muted-foreground transition-all duration-300 hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-xl"
      style={{ ["--hover-bg" as string]: "hsl(var(--accent-color))" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "hsl(var(--accent-color))")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      aria-label={label}
    >
      {icon}
    </a>
  )
}
