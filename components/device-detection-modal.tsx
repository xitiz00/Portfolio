"use client"

import { useState, useEffect } from "react"
import { Monitor, Smartphone } from "lucide-react"
import Image from "next/image"

export function DeviceDetectionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [deviceType, setDeviceType] = useState<"desktop" | "mobile" | null>(null)

  useEffect(() => {
    // Check if user has already selected a device type
    const savedDeviceType = localStorage.getItem("portfolio-device-type")
    if (!savedDeviceType) {
      setIsOpen(true)
    } else {
      setDeviceType(savedDeviceType as "desktop" | "mobile")
      document.documentElement.setAttribute("data-device-type", savedDeviceType)
    }
  }, [])

  const handleDeviceSelection = (type: "desktop" | "mobile") => {
    setDeviceType(type)
    localStorage.setItem("portfolio-device-type", type)
    document.documentElement.setAttribute("data-device-type", type)
    setIsOpen(false)
  }

  const resetSelection = () => {
    localStorage.removeItem("portfolio-device-type")
    document.documentElement.removeAttribute("data-device-type")
    setIsOpen(true)
    setDeviceType(null)
  }

  if (!isOpen) {
    return (
      <button
        onClick={resetSelection}
        className="fixed top-4 right-4 z-50 bg-red-500/20 hover:bg-red-500/30 border border-red-400/50 rounded-lg p-2 text-red-400 hover:text-red-300 transition-all duration-300"
        title="Change device type"
      >
        {deviceType === "desktop" ? <Monitor className="w-5 h-5" /> : <Smartphone className="w-5 h-5" />}
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-800 border border-red-400/30 rounded-xl p-8 max-w-md mx-4 shadow-2xl shadow-red-500/20">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="relative pixel-welcome-container">
              <Image
                src="/images/welcome-pixel.png"
                alt="Welcome"
                width={200}
                height={40}
                className="pixel-image-red"
                priority
              />
            </div>
          </div>
          <p className="text-gray-300 font-semibold">How are you viewing this portfolio?</p>
          <p className="text-sm text-gray-400 mt-2 font-medium">This helps optimize the layout for your device</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleDeviceSelection("desktop")}
            className="flex flex-col items-center p-6 bg-gray-700/50 hover:bg-red-500/20 border border-gray-600 hover:border-red-400/50 rounded-lg transition-all duration-300 group"
          >
            <Monitor className="w-12 h-12 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold text-lg">Desktop</span>
            <span className="text-gray-400 text-sm font-medium">Laptop/PC</span>
          </button>

          <button
            onClick={() => handleDeviceSelection("mobile")}
            className="flex flex-col items-center p-6 bg-gray-700/50 hover:bg-red-500/20 border border-gray-600 hover:border-red-400/50 rounded-lg transition-all duration-300 group"
          >
            <Smartphone className="w-12 h-12 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold text-lg">Mobile</span>
            <span className="text-gray-400 text-sm font-medium">Phone/Tablet</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 font-medium">
            You can change this anytime using the icon in the top-right corner
          </p>
        </div>
      </div>
    </div>
  )
}
