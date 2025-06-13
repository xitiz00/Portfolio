"use client"

import { useEffect, useRef } from "react"

interface RibbonsProps {
  baseThickness?: number
  colors?: string[]
  speedMultiplier?: number
  maxAge?: number
  enableFade?: boolean
  enableShaderEffect?: boolean
}

interface Ribbon {
  x: number
  y: number
  vx: number
  vy: number
  age: number
  thickness: number
  color: string
  points: { x: number; y: number }[]
}

export default function Ribbons({
  baseThickness = 30,
  colors = ["#ef4444"],
  speedMultiplier = 0.5,
  maxAge = 500,
  enableFade = false,
  enableShaderEffect = true,
}: RibbonsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ribbonsRef = useRef<Ribbon[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
    }

    const createRibbon = (x: number, y: number): Ribbon => {
      const angle = Math.random() * Math.PI * 2
      return {
        x,
        y,
        vx: Math.cos(angle) * speedMultiplier * (0.5 + Math.random() * 0.5),
        vy: Math.sin(angle) * speedMultiplier * (0.5 + Math.random() * 0.5),
        age: 0,
        thickness: baseThickness * (0.5 + Math.random() * 0.5),
        color: colors[Math.floor(Math.random() * colors.length)],
        points: [],
      }
    }

    const updateRibbons = () => {
      ribbonsRef.current = ribbonsRef.current.filter((ribbon) => {
        ribbon.age += 1
        ribbon.x += ribbon.vx
        ribbon.y += ribbon.vy

        // Add slight curve to movement
        ribbon.vx += (Math.random() - 0.5) * 0.02
        ribbon.vy += (Math.random() - 0.5) * 0.02

        // Add current position to points trail
        ribbon.points.push({ x: ribbon.x, y: ribbon.y })

        // Limit trail length
        if (ribbon.points.length > 20) {
          ribbon.points.shift()
        }

        return ribbon.age < maxAge
      })
    }

    const drawRibbons = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ribbonsRef.current.forEach((ribbon) => {
        if (ribbon.points.length < 2) return

        const ageRatio = ribbon.age / maxAge
        const alpha = enableFade ? 1 - ageRatio : 0.8

        // Create gradient effect
        if (enableShaderEffect) {
          const gradient = ctx.createLinearGradient(
            ribbon.points[0].x,
            ribbon.points[0].y,
            ribbon.points[ribbon.points.length - 1].x,
            ribbon.points[ribbon.points.length - 1].y,
          )
          gradient.addColorStop(
            0,
            `${ribbon.color}${Math.floor(alpha * 255)
              .toString(16)
              .padStart(2, "0")}`,
          )
          gradient.addColorStop(
            0.5,
            `${ribbon.color}${Math.floor(alpha * 180)
              .toString(16)
              .padStart(2, "0")}`,
          )
          gradient.addColorStop(
            1,
            `${ribbon.color}${Math.floor(alpha * 60)
              .toString(16)
              .padStart(2, "0")}`,
          )
          ctx.strokeStyle = gradient
        } else {
          ctx.strokeStyle = `${ribbon.color}${Math.floor(alpha * 255)
            .toString(16)
            .padStart(2, "0")}`
        }

        ctx.lineWidth = ribbon.thickness * (1 - ageRatio * 0.5)
        ctx.lineCap = "round"
        ctx.lineJoin = "round"

        // Draw smooth curve through points
        ctx.beginPath()
        ctx.moveTo(ribbon.points[0].x, ribbon.points[0].y)

        for (let i = 1; i < ribbon.points.length - 1; i++) {
          const current = ribbon.points[i]
          const next = ribbon.points[i + 1]
          const cpx = (current.x + next.x) / 2
          const cpy = (current.y + next.y) / 2
          ctx.quadraticCurveTo(current.x, current.y, cpx, cpy)
        }

        ctx.stroke()

        // Add glow effect
        if (enableShaderEffect) {
          ctx.shadowColor = ribbon.color
          ctx.shadowBlur = 10
          ctx.stroke()
          ctx.shadowBlur = 0
        }
      })
    }

    const animate = () => {
      updateRibbons()
      drawRibbons()

      // Randomly spawn new ribbons
      if (Math.random() < 0.02) {
        const x = (Math.random() * canvas.width) / window.devicePixelRatio
        const y = (Math.random() * canvas.height) / window.devicePixelRatio
        ribbonsRef.current.push(createRibbon(x, y))
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top

      // Spawn ribbon at mouse position occasionally
      if (Math.random() < 0.1) {
        ribbonsRef.current.push(createRibbon(mouseRef.current.x, mouseRef.current.y))
      }
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [baseThickness, colors, speedMultiplier, maxAge, enableFade, enableShaderEffect])

  return (
    <div className="ribbons-container">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />
    </div>
  )
}
