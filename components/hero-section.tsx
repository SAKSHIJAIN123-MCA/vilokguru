"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById("about")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
        <img
          src="/7.jpg"
          alt="Muni Shri Vilok Sagar Ji Maharaj"
          className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-12 group">
            <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange-400/30 to-red-500/30 backdrop-blur-sm border border-orange-300/50 flex items-center justify-center transform transition-all duration-700 hover:scale-110 hover:rotate-12 shadow-2xl">
              <span className="text-5xl animate-pulse group-hover:animate-spin transition-all duration-500">🕉️</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-5 bg-clip-text text-orange-300 leading-tight tracking-wide drop-shadow-2xl animate-fade-in-up">
            मुनि श्री विलोक सागर जी महाराज
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl text-orange-100 mb-12 font-medium leading-relaxed drop-shadow-lg animate-fade-in-up animation-delay-300">
            जैन धर्म के महान संत एवं आध्यात्मिक गुरु
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 text-xl font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 border-2 border-orange-400/50"
              onClick={() => document.getElementById("biography")?.scrollIntoView({ behavior: "smooth" })}
            >
              जीवन परिचय
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-300 text-orange-100 hover:bg-orange-500 hover:text-white px-10 py-4 text-xl font-semibold rounded-full bg-black/20 backdrop-blur-sm shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-orange-300/50"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              फोटो गैलरी
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="text-orange-300 hover:text-orange-100 transition-all duration-300 transform hover:scale-110 animate-bounce hover:animate-pulse"
        >
          <ChevronDown size={40} className="drop-shadow-lg" />
        </button>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-300/30 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-300/40 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-400/20 rounded-full animate-ping animation-delay-3000"></div>
      </div>
    </section>
  )
}
