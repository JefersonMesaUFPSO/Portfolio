"use client"

import Image from "next/image"
import { User, GraduationCap, Briefcase, Languages, Heart } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"
import { calculateExperience } from "@/lib/data"
import { SectionHeading } from "./section-heading"

export function AboutSection() {
  const { t, locale } = usePortfolio()
  const expDuration = calculateExperience("2024-09", locale)

  return (
    <section id="about" className="relative py-28 px-4">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title={t.about.title} />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 items-start">
          {/* Left column - photo + quote (4 cols) */}
          <div className="flex flex-col items-center gap-8 lg:col-span-4">
            {/* Profile image with decorative elements */}
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed opacity-20 animate-spin" style={{ borderColor: "hsl(var(--accent-color))", animationDuration: "20s" }} />
              {/* Glow effect */}
              <div
                className="absolute -inset-3 rounded-full opacity-25 blur-xl"
                style={{ backgroundColor: "hsl(var(--accent-color))" }}
              />
              <div
                className="relative h-56 w-56 overflow-hidden rounded-full border-4 shadow-2xl sm:h-64 sm:w-64"
                style={{ borderColor: "hsl(var(--accent-color))" }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Jeferson Mesa"
                  fill
                  className="object-cover"
                  sizes="256px"
                  priority
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border/50 bg-card px-4 py-1.5 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-medium">Available</span>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="max-w-xs text-center">
              <p className="text-sm italic text-muted-foreground leading-relaxed">
                {t.about.quote}
              </p>
              <cite className="mt-2 block text-xs font-medium" style={{ color: "hsl(var(--accent-color))" }}>
                — John Ruskin
              </cite>
            </blockquote>
          </div>

          {/* Right column - profile card (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Main profile card */}
            <div className="rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md p-6 sm:p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: "hsl(var(--accent-color) / 0.15)" }}>
                  <User className="h-6 w-6" style={{ color: "hsl(var(--accent-color))" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t.about.profileTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.about.profileDesc}
                  </p>
                </div>
              </div>

              {/* Info grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  icon={<GraduationCap className="h-5 w-5" />}
                  label={t.about.education}
                  value={t.about.educationValue}
                />
                <InfoCard
                  icon={<Briefcase className="h-5 w-5" />}
                  label={t.about.experience}
                  value={`${expDuration} ${t.about.experienceAt}`}
                />
              </div>
            </div>

            {/* Languages card */}
            <div className="rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "hsl(var(--accent-color) / 0.15)" }}>
                  <Languages className="h-5 w-5" style={{ color: "hsl(var(--accent-color))" }} />
                </div>
                <h4 className="font-semibold">{t.about.languages}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                <LanguageBadge label={t.about.spanish} level={100} />
                <LanguageBadge label={t.about.english} level={70} />
              </div>
            </div>

            {/* Soft skills card */}
            <div className="rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "hsl(var(--accent-color) / 0.15)" }}>
                  <Heart className="h-5 w-5" style={{ color: "hsl(var(--accent-color))" }} />
                </div>
                <h4 className="font-semibold">{t.about.softSkills}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.about.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default animate-fade-in-up"
                    style={{
                      borderColor: "hsl(var(--accent-color) / 0.3)",
                      color: "hsl(var(--accent-color))",
                      animationDelay: `${i * 0.05}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="group rounded-xl border border-border/30 bg-background/40 p-4 transition-all duration-300 hover:border-[hsl(var(--accent-color))]/40 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-muted-foreground group-hover:text-[hsl(var(--accent-color))] transition-colors" style={{ color: "hsl(var(--accent-color))" }}>
          {icon}
        </div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</p>
      </div>
      <p className="text-sm font-medium pl-8">{value}</p>
    </div>
  )
}

function LanguageBadge({ label, level }: { label: string; level: number }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border/30 bg-background/40 px-4 py-2.5">
      <span className="text-sm font-medium">{label}</span>
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${level}%`,
            backgroundColor: "hsl(var(--accent-color))"
          }}
        />
      </div>
    </div>
  )
}
