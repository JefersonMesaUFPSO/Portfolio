"use client"

import { useState, useEffect } from "react"
import { Code2, Database, Braces, Server } from "lucide-react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const duration = 2000
    const interval = 20
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current++
      const newProgress = Math.min(100, (current / steps) * 100)
      setProgress(newProgress)
      setPhase(Math.floor(newProgress / 25))

      if (newProgress >= 100) {
        clearInterval(timer)
        setTimeout(onComplete, 300)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  const phases = [
    { icon: Code2, text: "Initializing..." },
    { icon: Database, text: "Loading data..." },
    { icon: Server, text: "Building components..." },
    { icon: Braces, text: "Finalizing..." },
  ]

  const CurrentIcon = phases[Math.min(phase, 3)].icon

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] animate-pulse"
          style={{ backgroundColor: "hsl(var(--accent-color))" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo animation */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-full opacity-30 blur-xl animate-pulse"
            style={{ backgroundColor: "hsl(var(--accent-color))" }}
          />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <CurrentIcon className="h-12 w-12 text-white animate-pulse" />
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {"< "}
            <span style={{ color: "hsl(var(--accent-color))" }}>Jeferson Mesa</span>
            {" />"}
          </h1>
          <p className="mt-2 text-sm text-white/60 font-mono">{phases[Math.min(phase, 3)].text}</p>
        </div>

        {/* Progress bar */}
        <div className="w-64">
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`,
                backgroundColor: "hsl(var(--accent-color))",
              }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-white/40 font-mono">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
