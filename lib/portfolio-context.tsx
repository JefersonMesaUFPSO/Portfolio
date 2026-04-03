"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import type { Locale, Translations } from "./i18n"
import { translations } from "./i18n"

/* --------------------------------------------------------
   Accent color themes
   -------------------------------------------------------- */
export type AccentColor = "purple" | "emerald" | "rose" | "amber" | "blue"

const accentColors: Record<AccentColor, { hsl: string; name: { es: string; en: string } }> = {
  blue:    { hsl: "217 91% 60%",   name: { es: "Azul", en: "Blue" } },
  purple:  { hsl: "270 70% 60%",   name: { es: "Morado", en: "Purple" } },
  emerald: { hsl: "160 84% 39%",   name: { es: "Esmeralda", en: "Emerald" } },
  rose:    { hsl: "347 77% 50%",   name: { es: "Rosa", en: "Rose" } },
  amber:   { hsl: "38 92% 50%",    name: { es: "Ambar", en: "Amber" } },
}

export { accentColors }

/* --------------------------------------------------------
   Context
   -------------------------------------------------------- */
interface PortfolioContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Translations
  accent: AccentColor
  setAccent: (c: AccentColor) => void
  darkMode: boolean
  toggleDarkMode: () => void
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null)

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) throw new Error("usePortfolio must be used within PortfolioProvider")
  return ctx
}

/* --------------------------------------------------------
   Provider
   -------------------------------------------------------- */
export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es")
  const [accent, setAccentState] = useState<AccentColor>("blue")
  const [darkMode, setDarkMode] = useState(true)

  const t = translations[locale]

  const setAccent = useCallback((color: AccentColor) => {
    setAccentState(color)
    document.documentElement.style.setProperty("--accent-color", accentColors[color].hsl)
  }, [])

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev
      document.documentElement.classList.toggle("dark", next)
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.classList.add("dark")
    document.documentElement.style.setProperty("--accent-color", accentColors.blue.hsl)
  }, [])

  return (
    <PortfolioContext.Provider value={{ locale, setLocale, t, accent, setAccent, darkMode, toggleDarkMode }}>
      {children}
    </PortfolioContext.Provider>
  )
}
