"use client"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"
import { technologies, type TechCategory } from "@/lib/data"
import { getTechIconUrl } from "@/lib/tech-icons"
import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

const FILTER_KEYS = ["all", "languages", "frameworks", "databases", "messaging", "integration", "containers", "visualization", "cloud"] as const

export function TechnologiesSection() {
  const { t } = usePortfolio()
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filtered = useMemo(() => {
    return technologies.filter((tech) => {
      const matchSearch = tech.name.toLowerCase().includes(search.toLowerCase())
      const matchFilter = activeFilter === "all" || tech.category === activeFilter
      return matchSearch && matchFilter
    })
  }, [search, activeFilter])

  const filterLabel = (key: string) => t.technologies.filters[key as keyof typeof t.technologies.filters]
  const categoryLabel = (cat: TechCategory) => t.technologies.filters[cat as keyof typeof t.technologies.filters]

  return (
    <section id="technologies" className="relative py-28 px-4">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title={t.technologies.title} subtitle={t.technologies.subtitle} />

        {/* Controls */}
        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={t.technologies.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border/40 bg-card/50 backdrop-blur-md py-3 pl-11 pr-10 text-sm outline-none transition-all duration-300 focus:border-[hsl(var(--accent-color))] focus:shadow-lg focus:shadow-[hsl(var(--accent-color))]/10"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTER_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={cn(
                  "rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-300 border",
                  activeFilter === key
                    ? "text-white border-transparent shadow-lg scale-105"
                    : "border-border/40 text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-accent/50"
                )}
                style={activeFilter === key ? { backgroundColor: "hsl(var(--accent-color))" } : undefined}
              >
                {filterLabel(key)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((tech, i) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center gap-4 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-md p-6 transition-all duration-500 hover:border-[hsl(var(--accent-color))]/50 hover:shadow-xl hover:-translate-y-2 cursor-default animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${i * 0.03}s` }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                style={{ background: `radial-gradient(circle at center, hsl(var(--accent-color)), transparent 70%)` }}
              />

              {/* Icon */}
              <div className="relative h-12 w-12 transition-transform duration-500 group-hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getTechIconUrl(tech.icon)}
                  alt={tech.name}
                  className="h-12 w-12 object-contain drop-shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <span className="relative z-10 text-sm font-semibold text-center">{tech.name}</span>

              {/* Category badge */}
              <span
                className="relative z-10 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: "hsl(var(--accent-color) / 0.1)",
                  color: "hsl(var(--accent-color))"
                }}
              >
                {categoryLabel(tech.category)}
              </span>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-lg font-medium text-muted-foreground">
              {search ? `No results for "${search}"` : "No technologies found"}
            </p>
            <button
              onClick={() => { setSearch(""); setActiveFilter("all"); }}
              className="mt-4 text-sm font-medium transition-colors hover:underline"
              style={{ color: "hsl(var(--accent-color))" }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
