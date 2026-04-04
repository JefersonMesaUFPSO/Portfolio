"use client"

import { Github, Linkedin, Instagram, Code2 } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/30 py-12">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-lg font-bold">
            <Code2 className="h-5 w-5" style={{ color: "hsl(var(--accent-color))" }} />
            <span>Jeferson Mesa</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/JefersonMesaUFPSO" icon={<Github className="h-4 w-4" />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/jefersonmesa/" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
            <SocialLink href="https://www.instagram.com/jef.mesa/" icon={<Instagram className="h-4 w-4" />} label="Instagram" />
          </div>

          {/* Divider */}
          <div className="h-px w-24 bg-border/50" />

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs text-muted-foreground/60">
              © {currentYear} Jeferson Mesa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/40 text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-foreground/30 hover:-translate-y-0.5"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
