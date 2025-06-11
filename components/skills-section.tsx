export function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "SQL", "Java", "C++", "HTML", "CSS"],
    },
    {
      category: "AI/ML Frameworks",
      skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "XGBoost", "PyTorch"],
    },
    {
      category: "LLM & AI Tools",
      skills: ["OpenAI GPT", "LangChain", "HuggingFace", "Prompt Engineering", "Streamlit"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Power BI", "Excel", "MySQL", "SHAP", "AWS", "Google Cloud"],
    },
  ]

  return (
    <section className="relative overflow-x-hidden rounded-xl bg-gray-800/30 z-40 shadow-2xl shadow-lime-400/10 mx-4 sm:mx-6 lg:mx-auto lg:max-w-6xl mt-10 section-block">
      <div className="h-2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="p-4 text-xl font-medium text-lime-400 sm:text-2xl md:p-6 lg:p-10">
          Skills <span className="text-white">( ) {"{"} </span>
        </h2>
        <div className="flex flex-col place-items-center text-white p-4 sm:p-6 lg:p-10 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4 border-l-4 border-lime-400 pl-4 sm:text-xl">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 pl-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-lime-400/10 text-lime-300 rounded-full text-sm border border-lime-400/20 hover:border-lime-400/50 transition-colors duration-300 sm:text-base"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="p-4 pb-2 pt-4 text-xl font-medium text-white sm:text-2xl md:p-6 lg:p-10 lg:pt-6">{"}"}</h2>
      </div>
    </section>
  )
}
