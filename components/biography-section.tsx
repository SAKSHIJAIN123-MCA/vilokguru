"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function BiographySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("biography");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const biographyData = [
    { label: "नाम", value: " बाल ब्र. चक्रेश कुमार जैन" },
    { label: "पिता का नाम", value: "श्री कोमल चंद जी जैन" },
    { label: "माता का नाम", value: "श्रीमती सुशीला जी जैन" },
    { label: "भाई", value: "राजकुमार जैन, लालचंद्र जैन" },
    { label: "बहन", value: "बबिता जैन" },
    { label: "जन्म स्थान", value: "ग्राम मुढेरी, दमोह (म.प्र.)" },
    { label: "जन्म तिथि", value: "18 अप्रैल 1981 (वैशाख शुक्ल पूर्णिमा)" },
    { label: "ब्रह्मचर्य व्रत", value: "1998" },
    { label: "ब्रह्मचर्य व्रत स्थान", value: "आदिश्वर गिरी, नोटा ग्राम" },
    {
      label: "प्रतिमा व्रत",
      value: "परम पूज्य आचार्य श्री 108 आर्जव सागर जी महाराज से",
    },
    {
      label: "दीक्षा गुरु",
      value: "परम पूज्य आचार्य श्री 108 आर्जव सागर जी महाराज",
    },
    {
      label: "दादा गुरु",
      value: "परम पूज्य आचार्य श्री 108 विद्यासागर जी महाराज",
    },
    {
      label: "दीक्षा दिनांक",
      value: "11 अक्टूबर 2019 (आश्विन शुक्ल त्रयोदशी)",
    },
    { label: "दीक्षा स्थान", value: "भोपाल (म.प्र.)" },
    { label: "प्रथम गुरु दर्शन", value: "डबरा (म.प्र.)" },
    { label: "शिक्षा अध्ययन", value: "शास्त्री" },
    { label: "शिक्षा अध्ययन स्थल", value: "वर्णी गुरुकुल, जबलपुर मढिया जी" },
  ];

  return (
    <section
      id="biography"
      className="relative py-24 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-orange-500 mb-6 drop-shadow-lg">
              जीवन परिचय
            </h2>
            <div className="w-32 h-1 text-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-700 text-balance font-medium leading-relaxed max-w-3xl mx-auto">
              मुनि श्री 108 विलोक सागर जी महाराज का विस्तृत जीवन वृत्तांत
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-lg border-2 border-orange-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-8 bg-gradient-to-r from-orange-100/50 to-amber-100/50">
              <CardTitle className="text-4xl md:text-5xl font-bold text-orange-500">
                मुनि श्री 108 विलोक सागर जी महाराज
              </CardTitle>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full"></div>
            </CardHeader>

            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8">
                    व्यक्तिगत विवरण
                  </h3>

                  <div className="space-y-4">
                    {biographyData.map((item, index) => (
                      <div
                        key={index}
                        className={`flex flex-col sm:flex-row gap-2 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/30 hover:shadow-lg transition-all duration-300 ${
                          isVisible ? `animate-slide-in-left` : "opacity-0"
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="font-bold text-lg text-orange-800 min-w-fit">
                          {item.label}:
                        </span>
                        <span className="text-lg text-gray-700 font-medium">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative overflow-hidden rounded-3xl border-4 border-gradient-to-br from-orange-300 to-amber-300 shadow-2xl">
                    <img
                      src="/7.jpg"
                      alt="मुनि श्री विलोक सागर जी महाराज"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent"></div>

                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-pulse">
                      ॐ
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-orange-500 text-center">
                  आध्यात्मिक यात्रा
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200/50 hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-orange-800 mb-4">
                        प्रारंभिक जीवन
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        मुनि श्री विलोक सागर जी महाराज का जन्म 18 अप्रैल 1981 को
                        ग्राम मुढेरी, दमोह में हुआ था। बचपन से ही उनमें धार्मिक
                        संस्कार और आध्यात्मिकता के प्रति गहरी रुचि थी। शिक्षा के
                        क्षेत्र में उन्होंने <strong>शास्त्री</strong> की पढ़ाई
                        <strong> वर्णी गुरुकुल, जबलपुर मढिया जी</strong> से की।
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200/50 hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-amber-800 mb-4">
                        दीक्षा यात्रा
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        वर्ष 1998 में उन्होंने{" "}
                        <strong>आदिश्वर गिरी, नोटा ग्राम</strong> में ब्रह्मचर्य
                        व्रत लिया। तत्पश्चात परम पूज्य आचार्य श्री 108 आर्जव
                        सागर जी महाराज से प्रतिमा व्रत स्वीकार किया। उनके दीक्षा
                        गुरु परम पूज्य आचार्य श्री 108 आर्जव सागर जी महाराज हैं
                        और दादा गुरु परम पूज्य आचार्य श्री 108 विद्यासागर जी
                        महाराज हैं।
                        <br />
                        <br />
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200/50 hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-yellow-800 mb-4">
                        चातुर्मास
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                        <li>प्रथम चातुर्मास – ललितपुर (2020)</li>
                        <li>दूसरा चातुर्मास – केशली (2021)</li>
                        <li>तीसरा चातुर्मास – सिलवानी (2022)</li>
                        <li>चौथा चातुर्मास – छतरपुर (2023)</li>
                        <li>पाँचवाँ चातुर्मास – गुरसराय (2024)</li>
                        <li>छठवाँ चातुर्मास – मुरैना (2025)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
