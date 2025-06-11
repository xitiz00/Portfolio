"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  children?: React.ReactNode
}

export function TypingText({ text, className = "", speed = 30, delay = 0, children }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [hasTyped, setHasTyped] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const typeIntervalRef = useRef<NodeJS.Timeout>()

  // Use intersection observer to detect when element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the element is visible
  })

  // Start typing when element comes into view
  useEffect(() => {
    if (inView && !hasTyped) {
      timeoutRef.current = setTimeout(() => {
        setIsTyping(true)
        setDisplayText("")

        let index = 0
        typeIntervalRef.current = setInterval(() => {
          if (index < text.length) {
            setDisplayText(text.slice(0, index + 1))
            index++
          } else {
            clearInterval(typeIntervalRef.current)
            setIsTyping(false)
            setHasTyped(true)
          }
        }, speed)
      }, delay)
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (typeIntervalRef.current) clearInterval(typeIntervalRef.current)
    }
  }, [inView, text, speed, delay, hasTyped])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span ref={ref} className={`${className} font-pixel`}>
      {children ? (
        <>
          {children}
          <span className="inline-block">
            {displayText}
            <span className={`${showCursor && isTyping ? "opacity-100" : "opacity-0"} text-red-400 transition-opacity`}>
              |
            </span>
          </span>
        </>
      ) : (
        <>
          {displayText}
          <span className={`${showCursor && isTyping ? "opacity-100" : "opacity-0"} text-red-400 transition-opacity`}>
            |
          </span>
        </>
      )}
    </span>
  )
}
