"use client"
import type React from "react"
import { useEffect, useMemo, useRef, type ReactNode, type RefObject } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { JSX } from "react/jsx-runtime"

gsap.registerPlugin(ScrollTrigger)

interface ScrollFloatProps {
  children: ReactNode
  scrollContainerRef?: RefObject<HTMLElement>
  containerClassName?: string
  textClassName?: string
  animationDuration?: number
  ease?: string
  scrollStart?: string
  scrollEnd?: string
  stagger?: number
  as?: keyof JSX.IntrinsicElements
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
  as = "div",
}) => {
  const containerRef = useRef<HTMLElement>(null)

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : ""
    return text.split("").map((char, index) => (
      <span className="scroll-char" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window

    const charElements = el.querySelectorAll(".scroll-char")

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger])

  const Component = as as any

  return (
    <Component ref={containerRef} className={`scroll-float-container overflow-hidden ${containerClassName}`}>
      <span className={`scroll-float-text inline-block ${textClassName}`}>{splitText}</span>
    </Component>
  )
}

export default ScrollFloat
