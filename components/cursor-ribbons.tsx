"use client"

import { useEffect, useRef } from "react"

interface CursorRibbonsProps {
  thickness?: number
  color?: string
  trailLength?: number
  smoothness?: number
}

interface Point {
  x: number
  y: number
}

export default function CursorRibbons({
  thickness = 15,
  color = "#ef4444",
  trailLength = 20,
  smoothness = 0.15,
}: CursorRibbonsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailRef = useRef<Point[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio
      canvas.height = window.innerHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"
    }

    const updateTrail = () => {
      // Add current mouse position to the beginning of trail
      trailRef.current.unshift({ x: mouseRef.current.x, y: mouseRef.current.y })

      // Smooth the trail points
      for (let i = 1; i < trailRef.current.length; i++) {
        const current = trailRef.current[i]
        const target = trailRef.current[i - 1]

        current.x += (target.x - current.x) * smoothness
        current.y += (target.y - current.y) * smoothness
      }

      // Keep trail at desired length
      if (trailRef.current.length > trailLength) {
        trailRef.current.pop()
      }
    }

    const drawRibbon = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (trailRef.current.length < 2) return

      // Create gradient along the ribbon
      const startPoint = trailRef.current[0]
      const endPoint = trailRef.current[trailRef.current.length - 1]

      const gradient = ctx.createLinearGradient(startPoint.x, startPoint.y, endPoint.x, endPoint.y)

      gradient.addColorStop(0, `${color}ff`) // Full opacity at cursor
      gradient.addColorStop(0.5, `${color}aa`) // Medium opacity in middle
      gradient.addColorStop(1, `${color}00`) // Transparent at tail

      ctx.strokeStyle = gradient
      ctx.lineWidth = thickness
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      // Draw the ribbon trail
      ctx.beginPath()
      ctx.moveTo(trailRef.current[0].x, trailRef.current[0].y)

      // Use quadratic curves for smooth ribbon
      for (let i = 1; i < trailRef.current.length - 1; i++) {
        const current = trailRef.current[i]
        const next = trailRef.current[i + 1]
        const cpx = (current.x + next.x) / 2
        const cpy = (current.y + next.y) / 2
        ctx.quadraticCurveTo(current.x, current.y, cpx, cpy)
      }

      // Complete the path to the last point
      if (trailRef.current.length > 1) {
        const lastPoint = trailRef.current[trailRef.current.length - 1]
        ctx.lineTo(lastPoint.x, lastPoint.y)
      }

      ctx.stroke()

      // Add glow effect
      ctx.shadowColor = color
      ctx.shadowBlur = 10
      ctx.globalCompositeOperation = "screen"
      ctx.stroke()
      ctx.globalCompositeOperation = "source-over"
      ctx.shadowBlur = 0
    }

    const animate = () => {
      updateTrail()
      drawRibbon()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseEnter = () => {
      canvas.style.display = "block"
    }

    const handleMouseLeave = () => {
      // Clear the trail when mouse leaves
      trailRef.current = []
    }

    resizeCanvas()
    animate()

    document.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true })
    window.addEventListener("resize", resizeCanvas)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [thickness, color, trailLength, smoothness])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[99999]"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
