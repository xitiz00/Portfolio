"use client"

import Image from "next/image"
import { TypingText } from "./typing-text"

interface PixelSectionHeaderProps {
  title: string
  imageSrc?: string
  className?: string
  delay?: number
}

export function PixelSectionHeader({ title, imageSrc, className = "", delay = 0 }: PixelSectionHeaderProps) {
  if (imageSrc) {
    return (
      <div className={`flex items-center justify-center mb-6 ${className}`}>
        <div className="pixel-header-container">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={300}
            height={60}
            className="pixel-image-red-header"
            priority
          />
        </div>
      </div>
    )
  }

  return (
    <h2
      className={`text-xl font-pixel-large text-red-400 sm:text-2xl md:text-3xl lg:text-4xl text-enhanced ${className}`}
    >
      <TypingText text={title} delay={delay} />
      <span className="text-white font-pixel-large"> ( ) {"{"} </span>
    </h2>
  )
}
