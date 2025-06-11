export function CompaniesCarousel() {
  const companies = [
    { name: "VIT", logo: "/placeholder.svg?height=48&width=176" },
    { name: "Aujus Technology", logo: "/placeholder.svg?height=48&width=176" },
    { name: "Python", logo: "/placeholder.svg?height=48&width=176" },
    { name: "OpenAI", logo: "/placeholder.svg?height=48&width=176" },
    { name: "Google Cloud", logo: "/placeholder.svg?height=48&width=176" },
    { name: "AWS", logo: "/placeholder.svg?height=48&width=176" },
    { name: "Power BI", logo: "/placeholder.svg?height=48&width=176" },
    { name: "Streamlit", logo: "/placeholder.svg?height=48&width=176" },
  ]

  return (
    <div className="">
      <section className="relative z-30 mx-auto overflow-x-hidden rounded-xl mt-10">
        <div className="h-2" />
        <div className="container mx-auto">
          <div className="flex flex-col place-items-center text-white p-4 sm:ml-4 px-0 md:px-0 mx-0 md:mx-0">
            <div className="relative mt-5 block w-full py-1 md:py-2">
              <h2 className="mb-10 text-center text-sm font-medium text-white md:text-lg">
                Technologies I'm passionate about
              </h2>
              <div className="relative">
                <div className="cont-swiper relative overflow-x-clip">
                  <span className="absolute left-0 top-0 z-50 h-full w-10 bg-gradient-to-r from-gray-900 to-transparent py-1" />
                  <div className="animate-scroll flex flex-row">
                    {[...companies, ...companies].map((company, index) => (
                      <img
                        key={index}
                        alt={company.name}
                        className="h-12 w-44 object-contain object-center px-8"
                        src={company.logo || "/placeholder.svg"}
                      />
                    ))}
                  </div>
                  <span className="absolute right-0 top-0 z-50 h-full w-10 bg-gradient-to-l from-gray-900 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
