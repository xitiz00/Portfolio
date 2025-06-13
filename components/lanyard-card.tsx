"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"

export default function LanyardCard() {
  const [isMounted, setIsMounted] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    setIsMounted(true)
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    })
  }, [controls])

  if (!isMounted) {
    return <div className="w-full h-[500px] bg-black/10 rounded-xl animate-pulse"></div>
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {/* Card with Lanyard Effect */}
      <div className="relative">
        {/* Lanyard Strap */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-32 bg-gradient-to-b from-red-600 to-red-500 rounded-md -translate-y-28 z-10">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-white font-bold rotate-180" style={{ writingMode: "vertical-rl" }}>
              KS
            </span>
          </div>

          {/* Lanyard Clip */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-gray-300 rounded-md"></div>
        </div>

        {/* Card Background with Gradient Border */}
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-red-700 p-[2px] mt-4">
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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/kshitiz-profile-card.jpg"
                  alt="Kshitiz Singh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </motion.div>

              {/* Name & Title */}
              <motion.h2 className="text-2xl font-bold text-white mb-1" whileHover={{ scale: 1.05 }}>
                Kshitiz Singh
              </motion.h2>

              <motion.div
                className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Software Engineer
              </motion.div>

              {/* Bio */}
              <motion.p className="text-gray-300 text-center mb-6 max-w-xs">
                AI & ML Engineer passionate about creating intelligent solutions with cutting-edge technologies.
              </motion.p>

              {/* Social Links */}
              <motion.div className="flex space-x-4 mb-6">
                <a
                  href="https://github.com/xitiz00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/kshitiz-singh-26364b216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                <a
                  href="mailto:kshitizsingh1688@gmail.com"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </motion.div>

              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1u-Ma5btrXcvkTJHZb6j01tzDkjTtaoh2/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-lg bg-gradient-to-br from-red-600 to-red-500 hover:from-red-500 hover:to-red-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative flex items-center">
                  View Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </span>
              </motion.a>
            </div>

            {/* Animated Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-500 opacity-50"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-500 opacity-50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-500 opacity-50"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-500 opacity-50"></div>
          </div>
        </div>

        {/* Hole Punch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-600 z-20"></div>
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
