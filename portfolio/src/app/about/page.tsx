import Link from "next/link"


export default function About() {
  return (
    <div className="min-h-screen">
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
                  href={`/ ${item.toLowerCase()}`}>
                  {item}
                </Link>
              ))}
            </div>
            <button className="md:hidden p-2 pb-20">
            </button>
          </div>
        </div>
      </nav>

      
      <main className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/90" />
          <img
            src="https://wallpapershome.com/images/pages/pic_h/26710.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-4 tracking-tight">
              ABOUT PAGE
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-gray-400">
              WEB DEVELOPER
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto lg:text-1xl">
              Welcome! I&apos;m a skilled web developer with expertise in HTML, CSS, JavaScript, TypeScript, and Next.js, creating responsive and user-friendly applications.
            </p>
              <a href="/portfolio" className="bg-gray-500 text-black hover:bg-gray-300 px-8 py-2 rounded-none text-sm" >PORTFOLIO</a>
          
          </div>

          {/* About Content */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
            <div className="bg-gray-800/50 p-6 backdrop-blur-sm rounded-2xl my-2.5">
              <h3 className="text-xl font-semibold mb-4">ABOUT ME</h3>
              <p className="text-gray-300">
                I&apos;m a passionate web developer dedicated to building responsive and efficient applications.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 backdrop-blur-sm rounded-2xl my-2.5">
              <h3 className="text-xl font-semibold mb-4">SKILLS</h3>
              <p className="text-gray-300">
                Proficient in modern web technologies including HTML5, CSS3, JavaScript, TypeScript, and Next.js.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 backdrop-blur-sm rounded-2xl my-2.5">
              <h3 className="text-xl font-semibold mb-4">EXPERIENCE</h3>
              <p className="text-gray-300">
                Experienced in creating responsive websites and applications with a focus on user experience and performance.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">TECHNICAL SKILLS</h3>
            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                { name: "HTML", percentage: 90 },
                { name: "CSS", percentage: 85 },
                { name: "JavaScript", percentage: 80 },
                { name: "TypeScript", percentage: 75 },
                { name: "Next.js", percentage: 70 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-2 bg-white rounded-full transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}