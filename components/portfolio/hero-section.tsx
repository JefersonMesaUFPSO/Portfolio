"use client"

import { useEffect, useState } from "react"
import { Download, Layers, Github, ChevronDown, Code2, Database, Braces, Server, Cpu } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"

const TYPING_TEXTS = [
  "Fullstack Developer",
  "Data Engineer",
  "Backend Specialist",
  "API Designer",
]

type Phase = "typing" | "pausing" | "deleting" | "switching"

export function HeroSection() {
  const { t } = usePortfolio()
  const [typedText, setTypedText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>("typing")

  useEffect(() => {
    const currentText = TYPING_TEXTS[textIndex]

    let delay: number
    let action: () => void

    if (phase === "typing") {
      if (typedText === currentText) {
        // Finished typing – pause before deleting
        delay = 2000
        action = () => setPhase("deleting")
      } else {
        delay = 100
        action = () => setTypedText(currentText.slice(0, typedText.length + 1))
      }
    } else if (phase === "deleting") {
      if (typedText === "") {
        // Finished deleting – brief pause before switching word
        delay = 400
        action = () => setPhase("switching")
      } else {
        delay = 50
        action = () => setTypedText(currentText.slice(0, typedText.length - 1))
      }
    } else if (phase === "pausing") {
      delay = 500
      action = () => setPhase("typing")
    } else {
      // switching: advance index, then start typing
      delay = 50
      action = () => {
        setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length)
        setPhase("pausing")
      }
    }

    const timeout = setTimeout(action, delay)
    return () => clearTimeout(timeout)
  }, [typedText, textIndex, phase])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Animated grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0" />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full opacity-15 blur-[120px]"
        style={{ backgroundColor: "hsl(var(--accent-color))" }}
      />

      {/* Floating tech icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Code2 className="absolute left-[8%] top-[20%] h-8 w-8 text-muted-foreground/15 animate-float" style={{ animationDelay: "0s" }} />
        <Database className="absolute right-[12%] top-[25%] h-6 w-6 text-muted-foreground/15 animate-float" style={{ animationDelay: "1s" }} />
        <Braces className="absolute left-[15%] bottom-[30%] h-10 w-10 text-muted-foreground/15 animate-float" style={{ animationDelay: "2s" }} />
        <Server className="absolute right-[8%] bottom-[35%] h-7 w-7 text-muted-foreground/15 animate-float" style={{ animationDelay: "0.5s" }} />
        <Cpu className="absolute left-[25%] top-[15%] h-5 w-5 text-muted-foreground/15 animate-float" style={{ animationDelay: "1.5s" }} />
        <Code2 className="absolute right-[20%] top-[12%] h-6 w-6 text-muted-foreground/15 animate-float" style={{ animationDelay: "2.5s" }} />
      </div>

      <div className="relative z-10 max-w-4xl animate-fade-in-up">
        {/* Code-style availability tag */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border/40 bg-card/40 backdrop-blur-xl px-5 py-2 shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: "hsl(var(--accent-color))" }} />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "hsl(var(--accent-color))" }} />
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            {"// "}<span className="text-foreground">Available for new projects</span>
          </span>
        </div>

        {/* Main title with typing effect */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-foreground">{t.hero.title}</span>
        </h1>

        {/* Typing subtitle */}
        <div className="mt-4 h-12 flex items-center justify-center">
          <p className="text-xl font-semibold sm:text-2xl md:text-3xl" style={{ color: "hsl(var(--accent-color))" }}>
            {typedText}
            <span className="animate-blink">|</span>
          </p>
        </div>

        {/* Subtitle description */}
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/cv-jeferson-mesa.pdf"
            download
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "hsl(var(--accent-color))" }}
          >
            <span className="absolute inset-0 animate-shimmer" />
            <Download className="relative h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            <span className="relative">{t.hero.downloadCV}</span>
          </a>
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-accent hover:shadow-lg"
          >
            <Layers className="h-4 w-4" />
            {t.hero.viewProjects}
          </button>
          <a
            href="https://github.com/JefersonMesaUFPSO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm p-3.5 transition-all duration-300 hover:scale-105 hover:bg-accent hover:shadow-lg"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>

        {/* Tech stack preview */}
        <div className="mt-12 flex items-center justify-center gap-3 text-muted-foreground/60">
          <span className="text-xs">Built with:</span>
          <div className="flex items-center gap-2">
            {["Java", "Spring", "Python", "React"].map((tech) => (
              <span key={tech} className="rounded-md border border-border/30 bg-card/30 px-2 py-1 text-xs font-medium text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-foreground group"
        aria-label={t.hero.discoverMore}
      >
        <span className="text-xs font-medium tracking-wide">{t.hero.discoverMore}</span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-current p-1 transition-colors group-hover:border-[hsl(var(--accent-color))]">
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
        </div>
      </button>
    </section>
  )
}
