"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { PlayCircle } from "lucide-react"

export function NiryapakSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    const el = document.getElementById("niryapak")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="niryapak"
      className="py-24 px-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-orange-600 mb-4 drop-shadow-sm">
              निर्यापक पद की घोषणा
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              गुरु आज्ञा से सुशोभित हुआ — त्याग, सेवा और अनुशासन का प्रतीक पद
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <Card className="bg-gradient-to-br from-white/80 to-yellow-50/50 backdrop-blur-sm border-2 border-yellow-200/50 hover:border-orange-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-200/30 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-yellow-700 bg-clip-text text-transparent mb-4">
                    निष्ठा और समर्पण का सम्मान
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    दमोह के पास मुड़ेरी गांव के कभी ब्र• चक्रेश भैया संघ के बड़े
                    लाडले भैया थे, अब वह गुरु आज्ञा से ही हमारे ही संघ के पूज्य
                    आर्जव सागर जी के संघ में दीक्षित मुनि हैं, जिन्हें अब उनके
                    गुरु ने <strong>निर्यापक पद</strong> से सुशोभित किया है।
                    वह आज भी कोई भी कार्यक्रम करते हैं तो गुरु के साथ
                    <strong> आचार्य भगवान समय सागर जी</strong> का आशीर्वाद लेते हैं।❣
                  </p>
                </CardContent>
              </Card>

              <div className="mt-8 flex justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-lg font-semibold px-8 py-6 rounded-full shadow-lg shadow-orange-200/40 transition-all duration-300 hover:scale-105"
                >
                  <a
                   href="/guruji image/video.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <PlayCircle className="w-6 h-6" />
                    आचार्य श्री आर्जव सागर जी महाराज के मुख से सुने
                    <br className="hidden md:block" />
                    <span className="font-bold">निर्यापक पद की घोषणा</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-orange-200/50">
                <img
                  src="/guruji image/g15.jpg"
                  alt="निर्यापक मुनि श्री विलोकसागर जी महाराज"
                  className="w-full h-[820px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-300/40 to-yellow-300/40 rounded-full animate-float blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
