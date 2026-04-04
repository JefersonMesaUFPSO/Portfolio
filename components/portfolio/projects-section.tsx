"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { Github, Info, ChevronDown, ChevronUp, X, Code2, Lightbulb, BookOpen, Layers, ListChecks, ChevronLeft, ChevronRight } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"
import { projects, type ProjectItem } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import type { Locale } from "@/lib/i18n"

export function ProjectsSection() {
  const { t, locale } = usePortfolio()
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [detailProject, setDetailProject] = useState<ProjectItem | null>(null)

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              expanded={expandedId === project.id}
              onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
              onDetails={() => setDetailProject(project)}
              index={i}
            />
          ))}
        </div>

        {detailProject && (
          <ProjectDetailModal project={detailProject} locale={locale} onClose={() => setDetailProject(null)} />
        )}
      </div>
    </section>
  )
}

/* Project Card */
interface ProjectCardProps {
  project: ProjectItem
  locale: Locale
  expanded: boolean
  onToggle: () => void
  onDetails: () => void
  index: number
}

function ProjectCard({ project, locale, expanded, onToggle, onDetails, index }: ProjectCardProps) {
  const { t } = usePortfolio()

  return (
    <div
      className="group rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[hsl(var(--accent-color))]/40 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white drop-shadow-md">{project.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-muted-foreground leading-relaxed">{project.shortDesc[locale]}</p>

        {expanded && (
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-3">
            {project.fullDesc[locale]}
          </p>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md px-2.5 py-1 text-xs font-medium"
              style={{ backgroundColor: "hsl(var(--accent-color) / 0.1)", color: "hsl(var(--accent-color))" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 px-3 py-1.5 text-xs font-medium transition-all hover:bg-accent"
          >
            {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            {expanded ? t.projects.viewLess : t.projects.viewMore}
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 px-3 py-1.5 text-xs font-medium transition-all hover:bg-accent"
          >
            <Github className="h-3.5 w-3.5" />
            {t.projects.viewCode}
          </a>
          <button
            onClick={onDetails}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
            style={{ backgroundColor: "hsl(var(--accent-color))" }}
          >
            <Info className="h-3.5 w-3.5" />
            {t.projects.details}
          </button>
        </div>
      </div>
    </div>
  )
}

/* Detail Modal */
function ProjectDetailModal({
  project,
  locale,
  onClose,
}: {
  project: ProjectItem
  locale: Locale
  onClose: () => void
}) {
  const { t } = usePortfolio()
  const [galleryIndex, setGalleryIndex] = useState(0)
  const galleryImages = [project.image, project.image, project.image]

  const nextSlide = useCallback(() => {
    setGalleryIndex((p) => (p + 1) % galleryImages.length)
  }, [galleryImages.length])

  const prevSlide = useCallback(() => {
    setGalleryIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length)
  }, [galleryImages.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prevSlide()
      if (e.key === "ArrowRight") nextSlide()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, prevSlide, nextSlide])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md" onClick={onClose}>
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-lg bg-black/50 p-1.5 text-white hover:bg-black/70 transition-colors"
          aria-label={t.projects.close}
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero image */}
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="900px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <h2 className="absolute bottom-6 left-6 sm:left-8 text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">{project.title}</h2>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Description */}
          <ModalSection icon={<BookOpen className="h-4 w-4" />} title={t.projects.description}>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.fullDesc[locale]}</p>
          </ModalSection>

          {/* Challenges */}
          <ModalSection icon={<Lightbulb className="h-4 w-4" />} title={t.projects.challenges}>
            <ul className="space-y-2">
              {project.challenges[locale].map((c, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "hsl(var(--accent-color))" }} />
                  {c}
                </li>
              ))}
            </ul>
          </ModalSection>

          {/* Learnings */}
          <ModalSection icon={<Layers className="h-4 w-4" />} title={t.projects.learnings}>
            <ul className="space-y-2">
              {project.learnings[locale].map((l, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "hsl(var(--accent-color))" }} />
                  {l}
                </li>
              ))}
            </ul>
          </ModalSection>

          {/* Tech stack */}
          <ModalSection icon={<Code2 className="h-4 w-4" />} title={t.projects.techStack}>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-lg border border-border/50 px-3 py-1.5 text-xs font-medium">{tech}</span>
              ))}
            </div>
          </ModalSection>

          {/* Features */}
          <ModalSection icon={<ListChecks className="h-4 w-4" />} title={t.projects.features}>
            <div className="space-y-3">
              {project.features[locale].map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                    style={{ backgroundColor: "hsl(var(--accent-color))" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm text-muted-foreground pt-0.5">{feat}</span>
                </div>
              ))}
            </div>
          </ModalSection>

          {/* Gallery Carousel */}
          <ModalSection icon={<Layers className="h-4 w-4" />} title={t.projects.gallery}>
            <div className="relative group">
              {/* Main carousel image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/30 bg-black/20">
                <Image
                  src={galleryImages[galleryIndex]}
                  alt={`${project.title} screenshot ${galleryIndex + 1}`}
                  fill
                  className="object-contain transition-opacity duration-300"
                  sizes="(max-width: 900px) 100vw, 800px"
                />
              </div>

              {/* Navigation arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-all hover:bg-black/80 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-all hover:bg-black/80 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Dots indicator */}
              {galleryImages.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setGalleryIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === galleryIndex ? "w-6" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      style={i === galleryIndex ? { backgroundColor: "hsl(var(--accent-color))" } : undefined}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </ModalSection>

          {/* Code highlight */}
          <ModalSection icon={<Code2 className="h-4 w-4" />} title={t.projects.codeHighlight}>
            <div className="rounded-xl border border-border/30 bg-[#0d1117] p-4 overflow-x-auto">
              <pre className="text-xs leading-relaxed text-green-300 font-mono">
                <code>{project.code}</code>
              </pre>
            </div>
          </ModalSection>
        </div>
      </div>
    </div>
  )
}

function ModalSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-base font-semibold mb-4" style={{ color: "hsl(var(--accent-color))" }}>
        {icon} {title}
      </h3>
      {children}
    </div>
  )
}
