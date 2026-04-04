"use client"

import { Calendar, MapPin, Briefcase, FolderOpen, Network, ChevronRight } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"
import { experiences, formatDate, calculateExperience } from "@/lib/data"
import { SectionHeading } from "./section-heading"

export function ExperienceSection() {
  const { t, locale } = usePortfolio()

  return (
    <section id="experience" className="relative py-28 px-4">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: `linear-gradient(to bottom, transparent, hsl(var(--accent-color) / 0.4) 10%, hsl(var(--accent-color) / 0.4) 90%, transparent)` }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 z-10 -translate-x-1/2 hidden md:flex">
                  <div className="relative">
                    <div
                      className="absolute -inset-2 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50"
                      style={{ backgroundColor: "hsl(var(--accent-color))" }}
                    />
                    <div
                      className="relative h-4 w-4 rounded-full border-[3px] border-background"
                      style={{ backgroundColor: "hsl(var(--accent-color))" }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="md:ml-16 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[hsl(var(--accent-color))]/50 hover:shadow-2xl hover:-translate-y-1">
                  {/* Header with gradient */}
                  <div className="relative px-6 py-5 border-b border-border/30">
                    <div className="absolute inset-0 opacity-5" style={{ background: `linear-gradient(135deg, hsl(var(--accent-color)), transparent)` }} />
                    <div className="relative flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold">{exp.title[locale]}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                      <span
                        className="shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-md"
                        style={{ backgroundColor: "hsl(var(--accent-color))" }}
                      >
                        {exp.type[locale]}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" style={{ color: "hsl(var(--accent-color))" }} />
                        {formatDate(exp.startDate, locale)} - {exp.endDate ? formatDate(exp.endDate, locale) : t.experience.present}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" style={{ color: "hsl(var(--accent-color))" }} />
                        {exp.location[locale]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {exp.description[locale].map((desc, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <ChevronRight className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "hsl(var(--accent-color))" }} />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mt-6 pt-5 border-t border-border/20">
                      <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                        {t.experience.techUsed}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-105"
                            style={{
                              backgroundColor: "hsl(var(--accent-color) / 0.1)",
                              color: "hsl(var(--accent-color))",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats cards */}
        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <StatsCard
            icon={<Briefcase className="h-7 w-7" />}
            value={calculateExperience("2024-09", locale)}
            label={t.experience.yearsExp}
            delay={0}
          />
          <StatsCard
            icon={<FolderOpen className="h-7 w-7" />}
            value="+20"
            label={t.experience.projectsCompleted}
            delay={0.1}
          />
          <StatsCard
            icon={<Network className="h-7 w-7" />}
            value="15+"
            label={t.experience.systemsIntegrated}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}

function StatsCard({ icon, value, label, delay }: { icon: React.ReactNode; value: string; label: string; delay: number }) {
  return (
    <div
      className="group relative flex flex-col items-center gap-4 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md p-8 text-center transition-all duration-500 hover:border-[hsl(var(--accent-color))]/50 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
        style={{ background: `radial-gradient(circle at center, hsl(var(--accent-color)), transparent 70%)` }}
      />

      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110" style={{ color: "hsl(var(--accent-color))" }}>
        {icon}
      </div>
      <span className="relative z-10 text-4xl font-bold tracking-tight">{value}</span>
      <span className="relative z-10 text-sm text-muted-foreground">{label}</span>
    </div>
  )
}
