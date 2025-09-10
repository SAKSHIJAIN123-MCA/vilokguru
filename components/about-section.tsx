"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="py-24 px-4 bg-gradient-to-br from-orange-50/50 via-yellow-50/30 to-amber-50/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-full blur-md animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-6 drop-shadow-sm">
              आध्यात्मिक यात्रा
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto text-balance leading-relaxed font-medium">
              मुनि श्री विलोक सागर जी महाराज का जीवन त्याग, तपस्या और आध्यात्मिक साधना का प्रेरणादायक उदाहरण है
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-white/80 to-orange-50/60 backdrop-blur-sm border-2 border-orange-200/40 hover:border-orange-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/20 transform hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                    प्रारंभिक जीवन
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    मुनि श्री विलोक सागर जी महाराज का जन्म एक धार्मिक परिवार में हुआ। बचपन से ही उनमें आध्यात्मिकता के प्रति गहरी रुचि
                    थी।
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-gradient-to-br from-white/80 to-yellow-50/60 backdrop-blur-sm border-2 border-yellow-200/40 hover:border-yellow-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-200/20 transform hover:-translate-y-2 group"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                    दीक्षा ग्रहण
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    युवावस्था में ही उन्होंने सांसारिक मोह-माया का त्याग कर जैन मुनि की दीक्षा ग्रहण की और आध्यात्मिक मार्ग पर चल पड़े।
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-gradient-to-br from-white/80 to-amber-50/60 backdrop-blur-sm border-2 border-amber-200/40 hover:border-amber-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-200/20 transform hover:-translate-y-2 group"
                style={{ animationDelay: "0.4s" }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                    आध्यात्मिक योगदान
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    उन्होंने अपने जीवन को धर्म प्रचार, समाज सेवा और आध्यात्मिक मार्गदर्शन में समर्पित किया है।
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-orange-200/30 border-4 border-gradient-to-br from-orange-200 to-yellow-200">
                <img
                  src="/images/guruji-main.jpg"
                  alt="Muni Shri Vilok Sagar Ji Maharaj in meditation"
                  className="w-full h-[520px] object-cover hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-yellow-200/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full animate-float blur-sm" />
              <div
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-300/30 to-amber-300/30 rounded-full animate-float blur-sm"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full animate-float blur-sm"
                style={{ animationDelay: "2s" }}
              />

              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                  style={{ animationDelay: "0s" }}
                />
                <div
                  className="absolute top-8 right-8 w-1 h-1 bg-orange-400 rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
