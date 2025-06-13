"use client"
import { Phone, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EnhancedTechCarousel } from "@/components/enhanced-tech-carousel"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { Footer } from "@/components/footer"
import { DeviceDetectionModal } from "@/components/device-detection-modal"
import { CursorEffect } from "@/components/cursor-effect"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-b-light text-white relative overflow-hidden">
      {/* Custom Cursor Effect */}
      <CursorEffect />

      {/* Device Detection Modal */}
      <DeviceDetectionModal />

      {/* Enhanced Background Pattern */}
      <div className="pointer-events-none absolute h-full w-full overflow-clip">
        <svg
          height="1000"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 800"
          opacity="0.6"
        >
          <defs>
            <filter
              id="blurry-filter"
              x="-100%"
              y="-100%"
              width="300%"
              height="600%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="40"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              />
            </filter>
            <filter id="metallic-filter">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#blurry-filter)">
            <ellipse
              transform="rotate(-40)"
              opacity="0.4"
              rx="84.5"
              ry="577.5"
              cx="70.5037638878946"
              cy="85.13481004325507"
              fill="hsla(0, 73%, 48%, 1.00)"
            />
            <ellipse
              transform="rotate(40)"
              opacity="0.2"
              rx="60"
              ry="400"
              cx="400"
              cy="200"
              fill="hsla(0, 73%, 60%, 0.8)"
            />
          </g>
        </svg>
      </div>

      {/* 3D Side Navigation */}
      <span className="fixed bottom-2 left-2 z-50 hidden sm:block transition-opacity duration-500">
        <div className="flex w-12 flex-col place-items-center justify-center gap-2 text-white glass-card p-3 shine-effect">
          <a
            href="tel:+919161485377"
            className="hover:text-red-400 m-1 cursor-pointer rounded-full ease-out active:scale-110 p-2 shadow-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover-lift"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="mailto:kshitizsingh1688@gmail.com"
            className="hover:text-red-400 m-1 cursor-pointer rounded-full ease-out active:scale-110 p-2 shadow-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover-lift"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/xitiz00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 m-1 cursor-pointer rounded-full ease-out active:scale-110 p-2 shadow-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover-lift"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kshitiz-singh-26364b216/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 m-1 cursor-pointer rounded-full ease-out active:scale-110 p-2 shadow-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover-lift"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <span className="h-16 w-[2px] bg-gradient-to-b from-red-400 to-transparent" />
        </div>
      </span>

      {/* 3D Header */}
      <header className="z-40 text-white glass-card mx-4 mt-4 rounded-2xl">
        <div className="container relative mx-auto flex flex-row place-items-center justify-between px-6 lg:px-10 py-4">
          <a href="/" className="title-font cursor-pointer font-medium shine-effect">
            <div className="pixel-logo-container">
              <Image src="/images/ks-pixel.png" alt="KS" width={60} height={30} className="pixel-image-red" priority />
            </div>
          </a>
          <div className="flex-1" />

          {/* Mobile menu */}
          <div className="flex sm:hidden flex-row gap-2 text-white">
            <a
              href="tel:+919161485377"
              className="hover:text-red-400 cursor-pointer rounded-full ease-out active:scale-110 p-2 transition-all duration-300 hover-lift"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:kshitizsingh1688@gmail.com"
              className="hover:text-red-400 cursor-pointer rounded-full ease-out active:scale-110 p-2 transition-all duration-300 hover-lift"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/xitiz00"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 cursor-pointer rounded-full ease-out active:scale-110 p-2 transition-all duration-300 hover-lift"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kshitiz-singh-26364b216/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 cursor-pointer rounded-full ease-out active:scale-110 p-2 transition-all duration-300 hover-lift"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex mx-2 flex-row gap-2 text-white">
            <a
              href="tel:+919161485377"
              className="hover:text-red-400 m-1 cursor-pointer rounded-full ease-out active:scale-110 p-2 shadow-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover-lift"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:kshitizsingh1688@gmail.com"
              className="hover:text-red-400 m-1 cursor-pointer rounded-full ease-out active:scale-110 p-2 shadow-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover-lift"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/xitiz00"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 m-1 cursor-pointer rounded-full ease-out active:scale-110 p-2 shadow-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover-lift"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kshitiz-singh-26364b216/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 m-1 cursor-pointer rounded-full ease-out active:scale-110 p-2 shadow-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover-lift"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1u-Ma5btrXcvkTJHZb6j01tzDkjTtaoh2/view?usp=drive_link"
            target="_blank"
            className="group relative ml-4 inline-flex items-center font-bold text-red-400 hover:text-red-300 text-sm sm:text-base text-enhanced shine-effect px-4 py-2 rounded-lg glass-card hover-lift"
            rel="noreferrer"
          >
            Resume
            <span className="absolute -right-2 sm:-right-3 block text-sm sm:text-lg transition-all group-hover:-right-4 sm:group-hover:-right-5">
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          </a>
        </div>
      </header>

      {/* Main Content with 3D perspective */}
      <div
        className="relative z-30 mx-auto h-full max-w-screen-xl place-items-center transition-all"
        style={{ perspective: "1000px" }}
      >
        <main>
          <HeroSection />

          {/* 1. About Section */}
          <div className="mx-2 sm:mx-5 md:mx-10 lg:mx-20">
            <AboutSection />
          </div>

          {/* Technologies & Frameworks */}
          <EnhancedTechCarousel />

          {/* 2. Education Section */}
          <EducationSection />

          {/* 3. Experience Section */}
          <ExperienceSection />

          {/* 4. Projects Section */}
          <div className="mx-2 sm:mx-5 md:mx-10 lg:mx-20">
            <ProjectsSection />
          </div>

          {/* 5. Certifications Section */}
          <CertificationsSection />
        </main>
      </div>

      <Footer />
    </div>
  )
}
