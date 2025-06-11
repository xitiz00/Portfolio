export function TechnologiesCarousel() {
  const technologies = [
    "Python",
    "OpenAI",
    "GitHub",
    "SQL",
    "Power BI",
    "Gemini",
    "HTML",
    "CSS",
    "Java",
    "Excel",
    "PyTorch",
    "Streamlit",
    "LangChain",
    "HuggingFace",
    "Scikit-Learn",
    "AWS",
    "Google Cloud",
  ]

  return (
    <div className="">
      <section className="relative z-30 mx-auto overflow-x-hidden rounded-xl mt-5">
        <div className="h-2" />
        <div className="container mx-auto">
          <div className="flex flex-col place-items-center text-white p-4 sm:ml-4 px-0 md:px-0 mx-0 md:mx-0">
            <div className="relative mt-5 block w-full py-1 md:py-2">
              <h2 className="mb-10 text-center text-sm font-medium text-white md:text-lg">Technologies I have used</h2>
              <div className="cont-swiper relative overflow-x-clip">
                <span className="absolute left-0 top-0 z-50 h-full w-10 bg-gradient-to-r from-gray-900 to-transparent py-1" />
                <div className="animate-scroll-reverse flex flex-row">
                  {[...technologies, ...technologies].map((tech, index) => (
                    <span key={index} className="px-4">
                      <div className="flex flex-col items-center justify-center min-w-[120px] group">
                        <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mb-3 border border-lime-400/20 group-hover:border-lime-400/50 transition-all duration-300 group-hover:scale-110">
                          <span className="text-2xl">🔧</span>
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-lime-400 transition-colors duration-300 font-mono text-center">
                          {tech}
                        </span>
                      </div>
                    </span>
                  ))}
                </div>
                <span className="absolute right-0 top-0 z-50 h-full w-10 bg-gradient-to-l from-gray-900 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
