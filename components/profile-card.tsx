"use client"
import Image from "next/image"
import { useState } from "react"
import { Linkedin, Github, Mail } from "lucide-react"

export function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div
        className="profile-card-3d relative w-[350px] h-[500px] sm:w-[400px] sm:h-[550px] lg:w-[450px] lg:h-[600px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Card */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-800/95 backdrop-blur-xl border border-red-500/30 rounded-3xl overflow-hidden shadow-2xl">
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/20 via-red-400/30 to-red-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Metallic Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/10 to-transparent -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-full" />

          {/* Card Content */}
          <div className="relative z-10 flex flex-col items-center p-8 h-full">
            {/* Header Text */}
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-pixel-large text-white mb-2 text-enhanced">
                KSHITIZ SINGH
              </h1>
              <p className="text-lg sm:text-xl font-pixel text-red-400 text-enhanced">SOFTWARE ENGINEER</p>
            </div>

            {/* Profile Image Container */}
            <div className="relative mb-8">
              <div className="relative w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56">
                {/* Glowing Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/50 via-red-400/60 to-red-500/50 blur-sm animate-pulse" />

                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-red-400/40 shadow-2xl">
                  <Image
                    src="/images/kshitiz-profile-card.jpg"
                    alt="Kshitiz Singh"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-110"
                    priority
                  />

                  {/* Glossy Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 opacity-60" />
                </div>

                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-400 rounded-full animate-bounce opacity-80" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-red-500 rounded-full animate-bounce delay-300 opacity-60" />
                <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse delay-500" />
              </div>
            </div>

            {/* Status Section */}
            <div className="flex items-center gap-3 mb-8 px-4 py-3 bg-black/40 backdrop-blur-sm rounded-2xl border border-red-500/20">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
              </div>
              <div>
                <p className="text-white font-pixel text-sm">@kshitizsingh</p>
                <p className="text-green-400 font-pixel text-xs">Available for Work</p>
              </div>
            </div>

            {/* Contact Button */}
            <a
              href="https://www.linkedin.com/in/kshitiz-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-2xl font-pixel text-white font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5" />
                <span>CONTACT ME</span>
              </div>

              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 rounded-2xl" />
            </a>

            {/* Additional Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="mailto:kshitiz@example.com"
                className="p-3 bg-black/40 backdrop-blur-sm rounded-xl border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-red-400" />
              </a>
              <a
                href="https://github.com/kshitizsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/40 backdrop-blur-sm rounded-xl border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-red-400" />
              </a>
            </div>
          </div>

          {/* Holographic Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />
        </div>

        {/* 3D Shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-3xl blur-xl transform translate-y-8 scale-95 opacity-60 transition-all duration-500 group-hover:translate-y-12 group-hover:scale-100 group-hover:opacity-80" />
      </div>
    </div>
  )
}
