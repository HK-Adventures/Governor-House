import Link from "next/link"

export default function Home() {
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
                  href={`/${item.toLowerCase()}`}
                  className="text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60" />
          <img
            src="https://wallpapershome.com/images/pages/pic_h/26717.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl text-white">
            <p className="text-xl mb-2">Hello, I&apos;m</p>
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-4 ">
              Azra Talib
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold mb-6">
              WEB DEVELOPER
            </h2>
            <p className="text-lg md:text-xl mb-8 lg:text-1xl ">
              I&apos;m Azra, a skilled web developer specializing in HTML, CSS, JavaScript, TypeScript, and Next.js. Welcome to my portfolio
            </p>
            <div className="flex flex-wrap gap-4">
              
                <a href="/contact"   className="bg-white text-black hover:bg-gray-200 px-8 py-2 rounded-none text-sm">Hire Me</a>
                <a href="/about" className="border-white text-white hover:bg-white/10 px-8 py-2 rounded-none text-sm">See my work</a>
             
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}