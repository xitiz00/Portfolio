import Image from "next/image"

export function Footer() {
  return (
    <div className="z-10 mx-auto mt-5 px-1 lg:px-20">
      <div className="">
        <section className="relative mx-auto overflow-x-hidden rounded-xl body-font z-0 flex justify-center text-white">
          <div className="h-2" />
          <div className="container mx-auto">
            <div className="flex flex-col place-items-center text-white p-4 sm:ml-4 md:ml-6 md:px-10">
              <div className="border-t-3 border-dashed border-red-500">
                <div className="flex flex-col items-center">
                  <a href="/" className="title-font cursor-pointer font-medium">
                    <div className="pixel-logo-container">
                      <Image
                        src="/images/ks-pixel.png"
                        alt="KS"
                        width={40}
                        height={20}
                        className="pixel-image-red hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </a>
                  <p className="mt-2 max-w-sm text-center text-xs md:max-w-lg lg:mt-4">
                    Designed and coded with ❤️ by Kshitiz Singh, built using{" "}
                    <a className="text-red-500" target="_blank" href="https://nextjs.org/" rel="noreferrer">
                      Next.js
                    </a>{" "}
                    and{" "}
                    <a className="text-red-500" target="_blank" href="https://tailwindcss.com/" rel="noreferrer">
                      Tailwind CSS
                    </a>
                    , deployed to{" "}
                    <a className="text-red-500" target="_blank" href="https://vercel.com/" rel="noreferrer">
                      Vercel
                    </a>
                    .
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href="https://drive.google.com/file/d/1u-Ma5btrXcvkTJHZb6j01tzDkjTtaoh2/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-500 hover:text-red-400 transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      <span>Resume</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/xitiz00"
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-500 hover:text-red-400 transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      <span>GitHub</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kshitiz-singh-26364b216/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-500 hover:text-red-400 transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      <span>LinkedIn</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                  <p className="mt-4 text-sm font-bold lg:mt-8">© 2025 Kshitiz Singh</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
