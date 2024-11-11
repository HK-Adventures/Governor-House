import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
    <nav className="fixed top-0 w-full z-50  backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-xl font-semibold">
            HK-Services
          </Link>
            <div className="hidden md:flex space-x-8">
              {["HOME", "ABOUT", "PORTFOLIO", "CONTACT"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              ))}
            </div>
            <button className="md:hidden p-2 text-white">
            </button>
          </div>
        </div>
      </nav>
      <section className="relative min-h-[60vh] flex items-center bg-black text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70" />
          <img
            src="https://wallpapershome.com/images/pages/pic_h/26712.jpg"
            alt="Portfolio background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              PORTFOLIO PAGE
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-400">
              WEB DEVELOPER
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Welcome to my portfolio, where I showcase my skills in HTML, CSS, JavaScript, TypeScript, and Next.js. Explore my projects to see how I create responsive, dynamic, and user-friendly web applications.
            </p>
            <a href="/contact" className="bg-gray-500 text-black hover:bg-gray-400 px-6 py-1 rounded-none text-sm my-2.5" >CONTACT</a>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black">Welcome to My Portfolio</h2>
          
          <div className="space-y-8 text-black">
            <div>
              <p className="mb-4">
                I&apos;m Hassan, a passionate web developer specializing in HTML, CSS, JavaScript, TypeScript, and Next.js. This portfolio showcases the best of my work, where I combine creativity and technical skills to build modern, responsive web applications. With each project, my goal is to provide clean, efficient, and user-friendly solutions that cater to the unique needs of clients and users.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">My Expertise</h3>
              <p className="mb-4">
                I am skilled in:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>HTML & CSS: Crafting well-structured, visually appealing, and responsive layouts</li>
                <li>JavaScript & TypeScript: Adding interactivity and dynamic functionality to websites</li>
                <li>Next.js: Building fast, SEO-friendly, and scalable web applications with modern frameworks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Projects & Experience</h3>
              <p>
                Throughout my journey, I&apos;ve worked on a range of projects—from personal ventures to client-based work—each with a focus on innovation and quality. My experience spans building websites, creating user interfaces, and enhancing web performance, always with a focus on best practices and continuous learning. Explore my portfolio to see the projects that showcase my skills and dedication to web development.
              </p>
            </div>
          </div>
      
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[1].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}