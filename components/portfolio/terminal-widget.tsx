"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Terminal, X, Minus, Maximize2 } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"

interface TerminalLine {
  type: "input" | "output" | "system" | "error"
  content: string
}

export function TerminalWidget() {
  const { t, accent, darkMode } = usePortfolio()
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && lines.length === 0) {
      setLines([{ type: "system", content: t.terminal.welcome }])
    }
  }, [open, lines.length, t.terminal.welcome])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [lines])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  const processCommand = useCallback(
    (cmd: string): { type: "output" | "error"; content: string } | null => {
      const trimmed = cmd.trim().toLowerCase()
      const args = cmd.trim().split(" ")

      if (trimmed === "help") return { type: "output", content: t.terminal.helpText }
      if (trimmed === "about") return { type: "output", content: t.terminal.aboutText }
      if (trimmed === "skills") return { type: "output", content: t.terminal.skillsText }
      if (trimmed === "experience") return { type: "output", content: t.terminal.experienceText }
      if (trimmed === "projects") return { type: "output", content: t.terminal.projectsText }
      if (trimmed === "contact") return { type: "output", content: t.terminal.contactText }
      if (trimmed === "whoami") return { type: "output", content: t.terminal.whoamiText }
      if (trimmed === "date") return { type: "output", content: `📅 ${new Date().toLocaleString()}` }
      if (trimmed === "theme") return { type: "output", content: `🎨 Theme: ${darkMode ? "dark" : "light"} | Accent: ${accent}` }
      if (args[0] === "echo" && args.length > 1) return { type: "output", content: args.slice(1).join(" ") }
      if (trimmed === "clear") return null
      if (trimmed === "exit") return null
      if (trimmed === "") return null

      return { type: "error", content: `❌ ${t.terminal.unknownCmd}` }
    },
    [t, darkMode, accent]
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()

    if (trimmed === "clear") {
      setLines([])
      setInput("")
      return
    }
    if (trimmed === "exit") {
      setOpen(false)
      setInput("")
      return
    }
    if (trimmed === "") return

    const result = processCommand(input)
    const newLines: TerminalLine[] = [...lines, { type: "input", content: input }]
    if (result) newLines.push(result)

    setHistory((prev) => [...prev, input])
    setHistoryIdx(-1)
    setLines(newLines)
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length > 0) {
        const newIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1)
        setHistoryIdx(newIdx)
        setInput(history[newIdx])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIdx >= 0) {
        const newIdx = historyIdx + 1
        if (newIdx >= history.length) {
          setHistoryIdx(-1)
          setInput("")
        } else {
          setHistoryIdx(newIdx)
          setInput(history[newIdx])
        }
      }
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--accent-color)/0.4)]"
        style={{ backgroundColor: "hsl(var(--accent-color))" }}
        aria-label={t.terminal.title}
      >
        <Terminal className="h-6 w-6" />
      </button>

      {/* Terminal panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] shadow-2xl sm:w-[480px] animate-fade-in-up"
          style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px hsl(var(--accent-color) / 0.1)" }}
        >
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 bg-[#12121a]">
            <div className="flex items-center gap-3">
              {/* macOS-style traffic lights */}
              <div className="flex gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className="group h-3.5 w-3.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors flex items-center justify-center"
                  aria-label="Close"
                >
                  <X className="h-2 w-2 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="group h-3.5 w-3.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors flex items-center justify-center" aria-label="Minimize">
                  <Minus className="h-2 w-2 text-yellow-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="group h-3.5 w-3.5 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors flex items-center justify-center" aria-label="Maximize">
                  <Maximize2 className="h-2 w-2 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-white/50" />
                <span className="text-xs font-medium text-white/60">{t.terminal.title}</span>
              </div>
            </div>
          </div>

          {/* Output */}
          <div
            ref={scrollRef}
            className="h-80 overflow-y-auto p-4 font-mono text-[13px] leading-6 terminal-scroll"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div key={i} className="mb-1.5">
                {line.type === "system" && (
                  <span className="text-cyan-400 whitespace-pre-wrap">{line.content}</span>
                )}
                {line.type === "input" && (
                  <div className="flex items-center gap-0">
                    <span className="text-emerald-400 font-semibold">jeferson</span>
                    <span className="text-white/30">@</span>
                    <span className="text-blue-400 font-semibold">portfolio</span>
                    <span className="text-white/30">:~$ </span>
                    <span className="text-white ml-1">{line.content}</span>
                  </div>
                )}
                {line.type === "output" && (
                  <span className="text-gray-300 whitespace-pre-wrap pl-4">{line.content}</span>
                )}
                {line.type === "error" && (
                  <span className="text-red-400 whitespace-pre-wrap pl-4">{line.content}</span>
                )}
              </div>
            ))}

            {/* Active prompt */}
            <form onSubmit={handleSubmit} className="flex items-center mt-1">
              <span className="text-emerald-400 font-semibold">jeferson</span>
              <span className="text-white/30">@</span>
              <span className="text-blue-400 font-semibold">portfolio</span>
              <span className="text-white/30">:~$ </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 ml-1 bg-transparent text-white outline-none caret-emerald-400"
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between border-t border-white/5 bg-[#12121a] px-4 py-2 text-[10px] font-mono text-white/30">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                bash
              </span>
              <span>v1.0.0</span>
            </div>
            <span>{lines.filter((l) => l.type === "input").length} commands</span>
          </div>
        </div>
      )}
    </>
  )
}
