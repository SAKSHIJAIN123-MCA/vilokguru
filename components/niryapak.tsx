"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { PlayCircle } from "lucide-react";

export function NiryapakSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById("niryapak");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="niryapak"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 px-2">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-orange-600 mb-4 drop-shadow-sm leading-tight">
              निर्यापक पद की घोषणा
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
              गुरु आज्ञा से सुशोभित हुआ — त्याग, सेवा और अनुशासन का प्रतीक पद
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Left Content */}
            <div>
              <Card className="bg-gradient-to-br from-white/80 to-yellow-50/50 backdrop-blur-sm border-2 border-yellow-200/50 hover:border-orange-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-200/30 transform hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-700 to-yellow-700 bg-clip-text text-transparent mb-4 leading-snug">
                    निष्ठा और समर्पण का सम्मान
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                    दमोह के पास मुड़ेरी गांव के कभी ब्र• चक्रेश भैया संघ के बड़े
                    लाडले भैया थे, अब वह गुरु आज्ञा से ही हमारे ही संघ के पूज्य
                    आर्जव सागर जी के संघ में दीक्षित मुनि हैं, जिन्हें अब उनके
                    गुरु ने <strong>निर्यापक पद</strong> से सुशोभित किया है।
                    वह आज भी कोई भी कार्यक्रम करते हैं तो गुरु के साथ
                    <strong> आचार्य भगवान समय सागर जी</strong> का आशीर्वाद लेते हैं।❣
                  </p>
                </CardContent>
              </Card>

              <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg shadow-orange-200/40 transition-all duration-300 hover:scale-105 text-center"
                >
                  <a
                    href="/guruji image/video.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center"
                  >
                    <PlayCircle className="w-5 sm:w-6 h-5 sm:h-6" />
                    <span>
                      आचार्य श्री आर्जव सागर जी महाराज के मुख से सुने
                      <br className="hidden sm:block" />
                      <span className="font-bold">
                        निर्यापक पद की घोषणा
                      </span>
                    </span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative group order-first md:order-last">
              <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-orange-200/50">
                <img
                  src="/guruji image/g15.jpg"
                  alt="निर्यापक मुनि श्री विलोक सागर जी महाराज"
                  className="w-full h-[280px] sm:h-[420px] md:h-[620px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-orange-300/40 to-yellow-300/40 rounded-full animate-float blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
