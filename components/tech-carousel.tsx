"use client"

export function TechCarousel() {
  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "OpenAI", icon: "🤖" },
    { name: "GitHub", icon: "🐙" },
    { name: "SQL", icon: "🗄️" },
    { name: "Power BI", icon: "📊" },
    { name: "Gemini", icon: "✨" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Java", icon: "☕" },
    { name: "Excel", icon: "📈" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Streamlit", icon: "⚡" },
    { name: "LangChain", icon: "🔗" },
    { name: "HuggingFace", icon: "🤗" },
    { name: "Scikit-Learn", icon: "🧠" },
  ]

  // Duplicate the array to create seamless loop
  const duplicatedTechs = [...technologies, ...technologies]

  return (
    <div className="relative overflow-hidden py-12 bg-gray-800/20">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10 pointer-events-none" />

      <div className="flex animate-scroll">
        {duplicatedTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 mx-8 flex flex-col items-center justify-center min-w-[120px] group"
          >
            <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mb-3 border border-green-400/20 group-hover:border-green-400/50 transition-all duration-300 group-hover:scale-110">
              <span className="text-2xl">{tech.icon}</span>
            </div>
            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors duration-300 font-mono">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-20 pointer-events-none" />
    </div>
  )
}
