"use client"
import Image from "next/image"
import { TypingText } from "./typing-text"
import CircularText from "./circular-text"

export function HeroSection() {
  return (
    <section className="min-h-[500px] relative mx-0 overflow-x-clip px-4 pt-5 text-white sm:px-6 lg:px-8">
      <div className="mt-5 grid grid-cols-1 justify-items-center max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="title-font text-xl font-pixel sm:text-2xl text-enhanced">
            <TypingText text="Hello 👋 I'm" delay={0} />
          </h1>
          <h1 className="mt-2 text-3xl text-red-400 font-pixel-large sm:mt-4 sm:text-4xl lg:text-5xl text-enhanced">
            <TypingText text="<Kshitiz" delay={200} />
          </h1>
          <h1 className="mt-2 text-3xl text-red-400 font-pixel-large sm:mt-4 sm:text-4xl lg:text-5xl text-enhanced">
            <TypingText text="Singh/>" delay={400} />
          </h1>
          <h1 className="mt-4 max-w-md text-lg font-pixel sm:text-xl lg:text-2xl text-enhanced">
            <br />
            <TypingText text="AI & ML Engineer" delay={600} />
          </h1>
        </div>

        <div className="relative mt-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
          {/* Circular Text Container */}
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] mx-auto">
            {/* Circular Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <CircularText
                text="SOFTWARE*ENGINEER*AI*ML*"
                spinDuration={25}
                onHover="speedUp"
                className="portfolio-circular-text"
              />
            </div>

            {/* Profile Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-red-400/30 shadow-2xl">
              <Image
                alt="Kshitiz Singh"
                src="/images/kshitiz-profile.jpg"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Floating Tech Icons - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:block">
            <ul style={{ opacity: 1 }}>
              <li style={{ opacity: 1, transform: "none" }}>
                <div className="bg-gray-800 text-white absolute inline-flex -translate-y-16 translate-x-8 sm:-translate-y-20 sm:translate-x-10 rounded-full p-3 sm:p-4 shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                  </svg>
                </div>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <div className="bg-gray-800 absolute inline-flex -translate-y-56 translate-x-56 sm:-translate-y-72 sm:translate-x-72 lg:-translate-y-96 lg:translate-x-96 rounded-full p-4 sm:p-6 text-purple-600 shadow-2xl">
                  <svg className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 24H0V0h24L12 12Z" />
                  </svg>
                </div>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <div className="bg-gray-800 absolute inline-flex -translate-y-64 translate-x-12 sm:-translate-y-80 sm:translate-x-16 rounded-full p-3 sm:p-4 lg:p-6 text-red-600 shadow-xl">
                  <svg className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                  </svg>
                </div>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <div className="bg-gray-800 absolute inline-flex -translate-y-38 translate-x-0 sm:-translate-y-48 sm:translate-x-0 rounded-full p-4 sm:p-6 text-blue-600">
                  <svg width="32" height="32" className="sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                  </svg>
                </div>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <div className="bg-gray-800 absolute inline-flex -translate-y-35 translate-x-64 sm:-translate-y-44 sm:translate-x-80 lg:translate-x-96 rounded-full p-3 sm:p-4 text-red-600 shadow-xl">
                  <svg width="40" height="40" className="sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
