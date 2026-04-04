"use client"

import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"
import { educationItems, formatDate } from "@/lib/data"
import { SectionHeading } from "./section-heading"

export function EducationSection() {
  const { t, locale } = usePortfolio()

  return (
    <section id="education" className="relative py-24 px-4">
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading title={t.education.title} subtitle={t.education.subtitle} />

        <div className="mt-12 space-y-5">
          {educationItems.map((edu, i) => (
            <div
              key={edu.id}
              className="group flex gap-4 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-[hsl(var(--accent-color))]/40 hover:shadow-lg hover:-translate-y-0.5 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "hsl(var(--accent-color) / 0.1)" }}
              >
                <GraduationCap className="h-6 w-6" style={{ color: "hsl(var(--accent-color))" }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold">{edu.degree[locale]}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" style={{ color: "hsl(var(--accent-color))" }} />
                    {formatDate(edu.startDate, locale)} - {edu.endDate ? formatDate(edu.endDate, locale) : t.education.present}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" style={{ color: "hsl(var(--accent-color))" }} />
                    {edu.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
