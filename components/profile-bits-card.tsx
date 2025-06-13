"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"

interface ProfileBitsCardProps {
  name: string
  title: string
  bio: string
  image: string
  links: {
    github?: string
    linkedin?: string
    email?: string
    resume?: string
  }
}

export default function ProfileBitsCard({
  name = "Kshitiz Singh",
  title = "Software Engineer",
  bio = "AI & ML Engineer passionate about creating intelligent solutions with cutting-edge technologies.",
  image = "/images/kshitiz-profile-card.jpg",
  links = {
    github: "https://github.com/xitiz00",
    linkedin: "https://www.linkedin.com/in/kshitiz-singh-26364b216/",
    email: "kshitizsingh1688@gmail.com",
    resume: "https://drive.google.com/file/d/1u-Ma5btrXcvkTJHZb6j01tzDkjTtaoh2/view?usp=drive_link",
  },
}: ProfileBitsCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse position for 3D effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Transform mouse position into rotation values
  const rotateX = useTransform(y, [-300, 300], [10, -10])
  const rotateY = useTransform(x, [-300, 300], [-10, 10])

  // Animation controls
  const controls = useAnimation()

  useEffect(() => {
    setIsMounted(true)

    // Initial animation
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    })
  }, [controls])

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  if (!isMounted) {
    return <div className="w-full h-[500px] bg-black/10 rounded-xl animate-pulse"></div>
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Card Background with Gradient Border */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-red-700 p-[2px]">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700 opacity-50 blur-xl"></div>

        {/* Card Content */}
        <div className="relative bg-black rounded-xl overflow-hidden z-10 p-6">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#ff0000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          </div>

          {/* Profile Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Profile Image */}
            <motion.div
              className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-red-500"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d", transform: "translateZ(40px)" }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </motion.div>

            {/* Name & Title */}
            <motion.h2
              className="text-2xl font-bold text-white mb-1"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
            >
              {name}
            </motion.h2>

            <motion.div
              className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium mb-4"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(25px)" }}
            >
              {title}
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-gray-300 text-center mb-6 max-w-xs"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
            >
              {bio}
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4 mb-6"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
            >
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                >
                  <Github size={20} className="text-white" />
                </a>
              )}

              {links.linkedin && (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              )}

              {links.email && (
                <a
                  href={`mailto:${links.email}`}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                >
                  <Mail size={20} className="text-white" />
                </a>
              )}
            </motion.div>

            {/* Resume Button */}
            {links.resume && (
              <motion.a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-lg bg-gradient-to-br from-red-600 to-red-500 hover:from-red-500 hover:to-red-600"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(40px)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative flex items-center">
                  View Resume
                  <ExternalLink className="ml-2 w-4 h-4" />
                </span>
              </motion.a>
            )}
          </div>

          {/* Animated Corner Accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-500 opacity-50"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-500 opacity-50"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-500 opacity-50"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-500 opacity-50"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-red-500/30"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
