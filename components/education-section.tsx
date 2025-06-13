import { PixelSectionHeader } from "./pixel-section-header"
import { TypingText } from "./typing-text"
import ScrollFloat from "./scroll-float"

export function EducationSection() {
  return (
    <section className="relative overflow-x-hidden rounded-xl bg-gray-800/30 z-40 shadow-2xl shadow-red-400/10 mx-4 sm:mx-6 lg:mx-auto lg:max-w-6xl mt-10">
      <div className="h-2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PixelSectionHeader
          title={
            <ScrollFloat
              animationDuration={1.3}
              ease="back.inOut(1.8)"
              scrollStart="top bottom-=100px"
              scrollEnd="center center-=50px"
              stagger={0.04}
              containerClassName="inline-block"
              textClassName="text-xl font-pixel text-red-400"
              as="span"
            >
              Education
            </ScrollFloat>
          }
          imageSrc="/images/education-pixel.png"
          className="p-4 md:p-6 lg:p-10"
          delay={2400}
        />
        <div className="flex flex-col place-items-center text-white p-4 sm:p-6 lg:p-10 pt-0">
          <div className="w-full">
            <div className="border-l-4 border-red-400 pl-8 py-4 education-card rounded-r-xl bg-gray-800/20 p-6">
              <h3 className="text-xl font-pixel text-white mb-2">
                <TypingText
                  text="B.Tech in Computer Science with Specialization in AI and ML"
                  delay={2500}
                  speed={25}
                />
              </h3>
              <p className="text-red-400 mb-2 font-pixel">
                <TypingText text="Vellore Institute of Technology" delay={2600} />
              </p>
              <p className="text-gray-400 font-pixel">
                <TypingText text="Sept 2021 - Present" delay={2700} />
              </p>
              <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <p className="text-sm text-gray-300 font-pixel">
                  <TypingText
                    text="Pursuing comprehensive education in Computer Science with specialized focus on Artificial Intelligence and Machine Learning. Gaining hands-on experience in modern AI technologies, deep learning frameworks, and practical applications of ML algorithms."
                    delay={2800}
                    speed={15}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="p-4 pb-2 pt-4 text-xl font-pixel text-white sm:text-2xl md:p-6 lg:p-10 lg:pt-6">{"}"}</h2>
      </div>
    </section>
  )
}
