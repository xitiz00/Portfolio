import { PixelSectionHeader } from "./pixel-section-header"
import { TypingText } from "./typing-text"

export function CertificationsSection() {
  const certifications = [
    {
      title: "Python",
      issuer: "Indian Institute of Technology, Bombay",
      icon: "🐍",
      description: "Advanced Python programming and data structures",
    },
    {
      title: "Google Cloud Digital Leader",
      issuer: "Google Career Certificates",
      icon: "☁️",
      description: "Cloud computing fundamentals and Google Cloud Platform",
    },
    {
      title: "AWS Certifications",
      issuer: "Amazon Web Services (AWS)",
      icon: "🚀",
      description: "Cloud infrastructure and AWS services",
    },
    {
      title: "AI Prompt Engineering Workshop",
      issuer: "be10x",
      icon: "🤖",
      description: "Advanced prompt engineering techniques for LLMs",
    },
    {
      title: "Power BI",
      issuer: "Office Master",
      icon: "📊",
      description: "Business intelligence and data visualization",
    },
  ]

  return (
    <section className="relative overflow-x-hidden rounded-xl bg-gray-800/30 z-40 shadow-2xl shadow-red-400/10 mx-4 sm:mx-6 lg:mx-auto lg:max-w-6xl mt-10">
      <div className="h-2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PixelSectionHeader
          title="Certifications"
          imageSrc="/images/certifications-pixel.png"
          className="p-4 md:p-6 lg:p-10"
          delay={100}
        />
        <div className="flex flex-col place-items-center text-white p-4 sm:p-6 lg:p-10 pt-0">
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 certification-card">
                <div className="flex items-start gap-4">
                  <div className="text-3xl bg-gray-700/50 rounded-full w-12 h-12 flex items-center justify-center">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-pixel text-white mb-1">
                      <TypingText text={cert.title} delay={200 + index * 50} speed={30} />
                    </h3>
                    <p className="text-red-400 text-sm font-pixel mb-2">
                      <TypingText text={cert.issuer} delay={250 + index * 50} speed={25} />
                    </p>
                    <p className="text-gray-400 text-sm font-pixel">
                      <TypingText text={cert.description} delay={300 + index * 50} speed={20} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="p-4 pb-2 pt-4 text-xl font-pixel text-white sm:text-2xl md:p-6 lg:p-10 lg:pt-6">{"}"}</h2>
      </div>
    </section>
  )
}
