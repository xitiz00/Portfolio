import { PixelSectionHeader } from "./pixel-section-header"
import { TypingText } from "./typing-text"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Aujus Technology Pvt Ltd",
      period: "Oct 2023 - Dec 2023",
      logo: "/images/project-icon.png",
      responsibilities: [
        "Engaged in end-to-end development of AI and ML models, encompassing data preprocessing, model training, and evaluation",
        "Collaborated with a cross-functional team to deliver AI models, increasing system efficiency by 15%",
        "Contributed to model design, research methodologies, and feedback loops to improve project outcomes",
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Machine Learning", "Data Analysis"],
    },
  ]

  return (
    <div className="">
      <section className="relative z-30 mx-auto overflow-x-hidden rounded-xl bg-gray-800/30 mb-0 mt-10 pb-0">
        <div className="h-2" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PixelSectionHeader
            title="Experience"
            imageSrc="/images/experience-pixel.png"
            className="p-4 sm:p-6 md:p-6 lg:p-10"
            delay={100}
          />
          <div className="flex flex-col place-items-center text-white p-4 sm:p-6 lg:p-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 mt-4 flex w-full flex-col place-items-start rounded-xl px-8 py-8 shadow-md shadow-red-500/5 experience-card"
              >
                <div className="flex w-full flex-row place-items-center gap-4">
                  <a href="#" target="_blank" className="transition-all duration-300 hover:scale-125" rel="noreferrer">
                    <img
                      alt={exp.title}
                      className="h-8 object-contain filter invert"
                      src={exp.logo || "/placeholder.svg"}
                    />
                  </a>
                  <div>
                    <p className="m-0 p-0 text-xs text-white/80 font-pixel">
                      <TypingText text={exp.period} delay={200} />
                    </p>
                    <p className="text-md m-0 mt-1 p-0 font-pixel">
                      <TypingText text={exp.title} delay={300} />
                    </p>
                    <p className="text-sm text-red-400 font-pixel">
                      <TypingText text={exp.company} delay={400} />
                    </p>
                  </div>
                </div>
                <ul className="mt-2 list-disc pl-5">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="mt-1 text-xs text-red-500 md:text-sm">
                      <span className="text-white font-pixel">
                        <TypingText text={resp} delay={500 + respIndex * 100} speed={15} />
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2">
                  <div className="flex flex-wrap text-3xl">
                    {exp.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="mr-1 mt-1 rounded-full bg-red-400/10 px-2 py-1 text-xs text-red-300 md:mr-2 md:mt-2 md:px-3 md:text-sm font-pixel"
                      >
                        <TypingText text={tech} delay={800 + techIndex * 50} speed={50} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="p-4 pb-2 pt-4 text-xl font-pixel text-white sm:text-2xl md:p-6 lg:p-10 lg:pt-6">{"}"}</h2>
        </div>
      </section>
    </div>
  )
}
