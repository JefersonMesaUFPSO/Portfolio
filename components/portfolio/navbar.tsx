"use client"

import { useState, useEffect, useCallback } from "react"
import { Moon, Sun, Menu, X, Globe } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { key: "home", sectionId: "hero" },
  { key: "about", sectionId: "about" },
  { key: "experience", sectionId: "experience" },
  { key: "projects", sectionId: "projects" },
  { key: "technologies", sectionId: "technologies" },
  { key: "contact", sectionId: "contact" },
] as const

export function Navbar() {
  const { t, locale, setLocale, darkMode, toggleDarkMode } = usePortfolio()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Improved section detection using scroll position
  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3

    for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
      const { key, sectionId } = NAV_ITEMS[i]
      const element = document.getElementById(sectionId)
      if (element) {
        const offsetTop = element.offsetTop
        if (scrollPosition >= offsetTop) {
          setActiveSection(key)
          return
        }
      }
    }
    setActiveSection("home")
  }, [])

  useEffect(() => {
    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    return () => window.removeEventListener("scroll", updateActiveSection)
  }, [updateActiveSection])

  const scrollTo = (sectionId: string, key: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setActiveSection(key)
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileOpen(false)
  }

  const navLabel = (key: string) => t.nav[key as keyof typeof t.nav]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-border/40 shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollTo("hero", "home")}
          className="text-lg font-bold tracking-tight transition-colors"
          style={{ color: "hsl(var(--accent-color))" }}
        >
          {"< "}Jeferson Mesa{" />"}
        </button>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map(({ key, sectionId }) => (
            <button
              key={key}
              onClick={() => scrollTo(sectionId, key)}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                activeSection === key
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {navLabel(key)}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full transition-all duration-300",
                  activeSection === key ? "w-4/5 opacity-100" : "w-0 opacity-0"
                )}
                style={{ backgroundColor: "hsl(var(--accent-color))" }}
              />
            </button>
          ))}

          <div className="ml-3 flex items-center gap-1 border-l border-border/50 pl-3">
            <button
              onClick={() => setLocale(locale === "es" ? "en" : "es")}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              {locale === "es" ? "EN" : "ES"}
            </button>

            <button
              onClick={toggleDarkMode}
              className="rounded-lg p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1 lg:hidden">
          <button onClick={() => setLocale(locale === "es" ? "en" : "es")} className="p-2 text-muted-foreground" aria-label="Toggle language">
            <Globe className="h-4 w-4" />
          </button>
          <button onClick={toggleDarkMode} className="p-2 text-muted-foreground" aria-label="Toggle dark mode">
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-muted-foreground" aria-label="Menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border/50 bg-background/95 backdrop-blur-2xl lg:hidden animate-fade-in-up">
          <div className="flex flex-col gap-1 px-4 py-3">
            {NAV_ITEMS.map(({ key, sectionId }) => (
              <button
                key={key}
                onClick={() => scrollTo(sectionId, key)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
                  activeSection === key ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {navLabel(key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
