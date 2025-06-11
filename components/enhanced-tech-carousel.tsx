"use client"

import { TechLogos } from "./tech-logos"

export function EnhancedTechCarousel() {
  const technologies = [
    { name: "Python", logo: TechLogos.Python, color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { name: "OpenAI", logo: TechLogos.OpenAI, color: "text-red-400", bg: "bg-red-400/10" },
    { name: "GitHub", logo: TechLogos.GitHub, color: "text-purple-400", bg: "bg-purple-400/10" },
    { name: "SQL", logo: TechLogos.SQL, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "Power BI", logo: TechLogos.PowerBI, color: "text-orange-400", bg: "bg-orange-400/10" },
    { name: "Gemini", logo: TechLogos.Gemini, color: "text-pink-400", bg: "bg-pink-400/10" },
    { name: "HTML", logo: TechLogos.HTML, color: "text-red-400", bg: "bg-red-400/10" },
    { name: "CSS", logo: TechLogos.CSS, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "Java", logo: TechLogos.Java, color: "text-orange-400", bg: "bg-orange-400/10" },
    { name: "Excel", logo: TechLogos.Excel, color: "text-red-400", bg: "bg-red-400/10" },
    { name: "PyTorch", logo: TechLogos.PyTorch, color: "text-red-400", bg: "bg-red-400/10" },
    { name: "Streamlit", logo: TechLogos.Streamlit, color: "text-red-400", bg: "bg-red-400/10" },
    { name: "LangChain", logo: TechLogos.LangChain, color: "text-purple-400", bg: "bg-purple-400/10" },
    { name: "HuggingFace", logo: TechLogos.HuggingFace, color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { name: "Scikit-Learn", logo: TechLogos.ScikitLearn, color: "text-orange-400", bg: "bg-orange-400/10" },
  ]

  // Duplicate for seamless loop
  const duplicatedTechs = [...technologies, ...technologies]

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-8">
        <h2 className="text-xl sm:text-2xl font-mono text-red-400 text-center mb-2">
          Technologies & Frameworks <span className="text-white">( ) {"{"}</span>
        </h2>
        <p className="text-gray-400 text-center text-sm sm:text-base">
          Constantly exploring and mastering cutting-edge technologies
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Animated tech logos */}
        <div className="flex animate-scroll-slow">
          {duplicatedTechs.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex-shrink-0 mx-3 sm:mx-4 lg:mx-6 group cursor-pointer">
              <div
                className={`
                  relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border border-gray-700 
                  ${tech.bg} ${tech.color}
                  group-hover:border-red-400/50 group-hover:scale-105 
                  transition-all duration-300 backdrop-blur-sm
                  min-w-[80px] min-h-[80px] sm:min-w-[100px] sm:min-h-[90px] lg:min-w-[120px] lg:min-h-[100px]
                `}
              >
                {/* Logo */}
                <div className="mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                    <tech.logo />
                  </div>
                </div>

                {/* Name */}
                <span className="font-mono text-xs sm:text-xs lg:text-xs font-medium text-center whitespace-nowrap">
                  {tech.name}
                </span>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-20 sm:w-32 lg:w-40 h-full bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 sm:w-32 lg:w-40 h-full bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="text-center mt-6 lg:mt-8">
        <div className="text-red-400 font-mono text-xl sm:text-2xl">{"}"}</div>
      </div>
    </section>
  )
}
