"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";

const galleryImages = [
  {
    src: "/guruji image/g41.jpg",
  },
  {
    src: "/guruji image/g42.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g47.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g46.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g45.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g44.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g43.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g15.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g25.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g39.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g38.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g37.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g36.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g35.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g34.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g33.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g32.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g31.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g30.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g29.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g28.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g22.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g26.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g25.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g24.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/images/guruji-main.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/4.jpg",
    alt: "गुरुजी शिष्यों को उपदेश देते हुए",
  },
  {
    src: "/7.jpg",
    alt: "मंदिर में गुरुजी",
  },
  {
    src: "/9.jpg",
    alt: "भक्तों के साथ गुरुजी",
  },
  {
    src: "/guruji image/g1.jpg",
    alt: "शास्त्र अध्ययन करते गुरुजी",
  },
  {
    src: "/guruji image/g2.jpg",
    alt: "आशीर्वाद देते गुरुजी",
  },
  {
    src: "/guruji image/g3.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g4.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g5.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g6.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g7.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g8.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g9.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g1.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g11.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g12.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g14.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g15.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g17.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g18.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g19.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g20.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g21.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g22.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g23.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
  {
    src: "/guruji image/g50.jpg",
    alt: "मुनि श्री विलोक सागर जी महाराज ध्यान मुद्रा में",
  },
];


export function PhotoGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("gallery");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(galleryImages.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(galleryImages.length / 3)) %
        Math.ceil(galleryImages.length / 3)
    );
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : 0
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : 0
    );
  };

  return (
    <section
      id="gallery"
      className="relative py-15 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center mb-20">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 p-4 rounded-2xl shadow-2xl">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold  text-orange-600 mb-6 drop-shadow-sm">
              फोटो गैलरी
            </h2>
            <p className="text-xl md:text-2xl text-amber-700 font-medium text-balance max-w-3xl mx-auto">
              मुनि श्री विलोक सागर जी महाराज के जीवन की पावन झलकियां
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevSlide}
                className="group p-4 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-400 text-amber-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110"
              >
                <ChevronLeft size={28} className="group-hover:animate-pulse" />
              </button>
              <button
                onClick={nextSlide}
                className="group p-4 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-400 text-amber-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110"
              >
                <ChevronRight size={28} className="group-hover:animate-pulse" />
              </button>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({
                  length: Math.ceil(galleryImages.length / 3),
                }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                    <div className="grid md:grid-cols-3 gap-8">
                      {galleryImages
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((image, index) => {
                          const actualIndex = slideIndex * 3 + index;
                          return (
                            <Card
                              key={actualIndex}
                              className="group cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-orange-200/50 hover:border-amber-400/80 transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-rotate-1"
                              onClick={() => openModal(actualIndex)}
                            >
                              <div className="relative overflow-hidden rounded-2xl">
                                <img
                                  src={
                                    image.src ||
                                    "/placeholder.svg?height=300&width=400&query=spiritual jain monk meditation"
                                  }
                                  alt={image.alt}
                                  className="w-full h-72 object-cover group-hover:scale-125 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                
                                </div>

                                {/* Hover overlay icon */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                                  <Camera className="w-5 h-5 text-amber-600" />
                                </div>
                              </div>
                            </Card>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                      currentSlide === index
                        ? "bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg"
                        : "bg-amber-200 hover:bg-amber-300"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <X size={28} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight size={28} />
            </button>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl">
              <img
                src={
                  galleryImages[selectedImage].src ||
                  "/placeholder.svg?height=600&width=800&query=spiritual jain monk meditation"
                }
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block">
                <p className="text-white text-lg font-semibold">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
