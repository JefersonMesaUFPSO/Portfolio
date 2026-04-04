"use client"

import { useState, useEffect } from "react"
import { PortfolioProvider } from "@/lib/portfolio-context"
import { LoadingScreen } from "@/components/portfolio/loading-screen"
import { ScrollProgress } from "@/components/portfolio/scroll-progress"
import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { TechnologiesSection } from "@/components/portfolio/technologies-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { TerminalWidget } from "@/components/portfolio/terminal-widget"
import { ThemeCustomizer } from "@/components/portfolio/theme-customizer"
import { ScrollToTop } from "@/components/portfolio/scroll-to-top"
import { Footer } from "@/components/portfolio/footer"

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <PortfolioProvider>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <ScrollProgress />
          <Navbar />
          <main className="overflow-x-hidden">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <TechnologiesSection />
            <EducationSection />
            <ContactSection />
          </main>
          <Footer />
          <ThemeCustomizer />
          <ScrollToTop />
          <TerminalWidget />
        </>
      )}
    </PortfolioProvider>
  )
}
