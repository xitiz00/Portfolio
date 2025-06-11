"use client"

import { useEffect, useState, useRef } from "react"

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMoving, setIsMoving] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const animationFrameIdRef = useRef<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth updates
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
      animationFrameIdRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        setIsVisible(true)
        setIsMoving(true)

        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        // Set moving to false after a short delay
        timeoutRef.current = setTimeout(() => {
          setIsMoving(false)
        }, 100)
      })
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsMoving(false)
    }

    const handleMouseDown = () => {
      setIsMoving(true)
    }

    const handleMouseUp = () => {
      setIsMoving(false)
    }

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true })
    document.addEventListener("mousedown", handleMouseDown, { passive: true })
    document.addEventListener("mouseup", handleMouseUp, { passive: true })

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)

      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="cursor-container">
      {/* Main cursor dot */}
      <div
        className={`cursor-dot ${isMoving ? "cursor-moving" : ""}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* Trailing glow */}
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* Outer ring */}
      <div
        className={`cursor-ring ${isMoving ? "cursor-ring-moving" : ""}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </div>
  )
}
