import { Github } from "lucide-react"
import { PixelSectionHeader } from "./pixel-section-header"
import { TypingText } from "./typing-text"

export function ProjectsSection() {
  const projects = [
    {
      title: "EduConnect",
      description:
        "Developed an AI-driven chatbot using OpenAI's GPT-3.5 to assist students with academic queries. Implemented a user-friendly interface with Streamlit, facilitating seamless interactions.",
      link: "https://github.com/xitiz00",
      logo: "/images/project-icon.png",
    },
    {
      title: "Road Traffic Accidents Prediction",
      description:
        "Developed a predictive model to classify road traffic accident severity using Transformer-based deep learning and traditional ML algorithms (Random Forest, XGBoost).",
      link: "https://github.com/xitiz00",
      logo: "/images/project-icon.png",
    },
    {
      title: "LLM Text Summarizer",
      description:
        "Developed a web-based application utilizing Large Language Models (LLMs) to generate concise summaries of extensive textual content with real-time processing.",
      link: "https://github.com/xitiz00",
      logo: "/images/project-icon.png",
    },
    {
      title: "AI Prompt Engineering Workshop",
      description:
        "Completed comprehensive workshop on AI prompt engineering techniques and best practices for optimizing LLM interactions and outputs.",
      link: "https://github.com/xitiz00",
      logo: "/images/project-icon.png",
    },
  ]

  return (
    <section className="relative z-30 mx-auto overflow-x-hidden rounded-xl bg-gray-800/30 mt-10 px-0">
      <div className="h-2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PixelSectionHeader
          title="Projects"
          imageSrc="/images/projects-pixel.png"
          className="p-4 sm:p-6 md:p-6 lg:p-10"
          delay={100}
        />
        <div className="flex flex-col place-items-center text-white p-4 sm:p-6 lg:p-10">
          <h6 className="text-md text-white sm:text-lg font-pixel">
            <TypingText text="Some of my notable work" delay={200} />
          </h6>
          <div className="mt-5 w-full">
            <div className="mx-auto my-2" style={{ opacity: 1 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-stretch">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    className="h-full w-full"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-gray-800 flex h-full w-full flex-col place-items-start rounded-xl p-4 sm:p-6 shadow-md shadow-red-500/5 project-card">
                      <div className="flex w-full justify-between items-center mb-3">
                        <img
                          alt={project.title}
                          className="h-6 object-contain sm:h-7 filter invert"
                          src={project.logo || "/placeholder.svg"}
                        />
                        <Github className="h-5 w-5 text-red-400 sm:h-6 sm:w-6" />
                      </div>
                      <h1 className="text-sm sm:text-base lg:text-lg mt-1 line-clamp-2 font-pixel">
                        <TypingText text={project.title} delay={300 + index * 100} speed={40} />
                      </h1>
                      <span className="group mt-2 inline-flex items-center gap-1 text-xs sm:text-sm font-pixel text-red-400 hover:underline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        <TypingText text="github.com/xitiz00" delay={400 + index * 100} />
                      </span>
                      <p className="mt-2 text-xs sm:text-sm text-gray-300 line-clamp-3 font-pixel">
                        <TypingText text={project.description} delay={500 + index * 100} speed={10} />
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a
            href="/projects"
            className="group relative inline-flex items-center font-pixel text-red-400 hover:text-red-400 text-sm sm:text-base ml-0 mt-6 lg:mt-10 pl-0"
          >
            <TypingText text="View all projects" delay={900} />
            <span className="absolute -right-6 block text-lg transition-all group-hover:-right-8">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>
        </div>
        <h2 className="p-4 pb-2 pt-4 text-xl font-pixel text-white sm:text-2xl md:p-6 lg:p-10 lg:pt-6">{"}"}</h2>
      </div>
    </section>
  )
}
