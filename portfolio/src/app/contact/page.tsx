"use client"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="min-h-screen">
    <nav className="fixed top-0 w-full z-50  backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-xl font-semibold">
            HK-Services
          </Link>
            {/* Desktop Menu */}
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
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray">
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="text-xl font-semibold">+44 7405 265854</p>
                  <p className="text-gray-600">Message us on WhatsApp for any inquiries.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div>
                  <p className="text-xl font-semibold">MONDAY TO SATURDAY</p>
                  <p className="text-gray-600">10AM to 9PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                
                <div>
                  <p className="text-xl font-semibold">XYZRoad, ABC Building</p>
                  <p className="text-gray-600">MALIR, KARACHI, PK</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
              
                <div>
                  <p className="text-xl font-semibold">1234676@gmail.com</p>
                  <p className="text-gray-600">EMAIL US YOUR QUERYE</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter email adress"
                    className="w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your subject"
                    className="w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}