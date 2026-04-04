"use client"

import { useState } from "react"
import { Paintbrush, Check } from "lucide-react"
import { usePortfolio, accentColors, type AccentColor } from "@/lib/portfolio-context"
import { cn } from "@/lib/utils"

const COLOR_KEYS: AccentColor[] = ["blue", "purple", "emerald", "rose", "amber"]

export function ThemeCustomizer() {
  const { t, locale, accent, setAccent } = usePortfolio()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Color panel */}
      {open && (
        <div className="mb-3 rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl p-5 shadow-2xl w-52 animate-fade-in-up">
          <p className="text-sm font-bold mb-1">{t.themeCustomizer.title}</p>
          <p className="text-xs text-muted-foreground mb-4">{"Select an accent color"}</p>
          <div className="flex flex-wrap gap-3">
            {COLOR_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setAccent(key)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl border-2 transition-all duration-300 hover:scale-110",
                  accent === key ? "border-foreground scale-110 shadow-lg" : "border-transparent"
                )}
                style={{ backgroundColor: `hsl(${accentColors[key].hsl})` }}
                aria-label={accentColors[key].name[locale]}
                title={accentColors[key].name[locale]}
              >
                {accent === key && <Check className="h-4 w-4 text-white" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        style={{ backgroundColor: "hsl(var(--accent-color))" }}
        aria-label={t.themeCustomizer.title}
      >
        <Paintbrush className="h-5 w-5" />
      </button>
    </div>
  )
}
