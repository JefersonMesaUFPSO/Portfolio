"use client"

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center animate-fade-in-up">
      {/* Section number badge */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/50 backdrop-blur-sm px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--accent-color))" }} />
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Section</span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>

      {/* Decorative underline */}
      <div className="mx-auto mt-6 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
        <span className="h-2 w-12 rounded-full" style={{ backgroundColor: "hsl(var(--accent-color))" }} />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-pretty leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
