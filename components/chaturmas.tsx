"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { PlayCircle } from "lucide-react";

export function ChaturmasSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById("chaturmas");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="chaturmas"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-100 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-12 right-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 left-10 w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-2xl animate-float"
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
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-orange-700 drop-shadow-sm mb-4 leading-tight">
              2025 का चातुर्मास एवं पिच्छी परिवर्तन
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
              श्रद्धा, भक्ति और गुरुभक्ति से ओतप्रोत ऐतिहासिक अवसर
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Left Image */}
            <div className="relative group order-1 md:order-none">
              <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-200/50">
                <img
                  src="/guruji image/g14.jpg"
                  alt="चातुर्मास पिच्छी परिवर्तन"
                  className="w-full h-[280px] sm:h-[400px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-orange-300/40 to-yellow-300/40 rounded-full animate-float blur-sm" />
            </div>

            {/* Right Text */}
            <div>
              <Card className="bg-gradient-to-br from-white/80 to-yellow-50/50 backdrop-blur-sm border-2 border-orange-200/50 hover:border-orange-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-200/30 transform hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-700 to-yellow-700 bg-clip-text text-transparent mb-4 leading-snug">
                    निर्यापक श्रमण मुनि श्री 108 विलोक सागर जी महाराज का चातुर्मास
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                    वर्ष <strong>2025</strong> का <strong>चातुर्मास</strong>{" "}
                    निर्यापक श्रमण मुनि श्री 108 विलोक सागर जी महाराज का{" "}
                    <strong>मुरैना नगर</strong> में संपन्न हुआ। इस चातुर्मास के
                    दौरान, उनका <strong>पिच्छी परिवर्तन</strong>{" "}
                    <strong>26 अक्टूबर 2025</strong> को हुआ।
                    <br />
                    <br />
                    इस पुण्य अवसर पर, मुनि श्री की{" "}
                    <strong>पिच्छी प्राप्त करने</strong> का सौभाग्य{" "}
                    <strong>
                      श्री नरेश कुमार जैन, श्रीमती बबीता जैन, कु. दीक्षा जैन,
                      कु. साक्षी जैन
                    </strong>{" "}
                    एवं <strong>अनमोल जैन नायक परिवार</strong> को प्राप्त हुआ।
                    <br />
                    <br />
                    यह अवसर श्रद्धा, भाव और समर्पण का अद्भुत संगम था, जिसने
                    समस्त मोरेना नगर को गुरुभक्ति के रंग में रंग दिया।
                  </p>
                </CardContent>
              </Card>

              <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg shadow-orange-200/40 transition-all duration-300 hover:scale-105"
                >
                  <a
                    href="/guruji image/v1.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <PlayCircle className="w-5 sm:w-6 h-5 sm:h-6" />
                    मुनि श्री का पिच्छी प्राप्त करने वाले परिवार के लिए उद्बोधन
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
