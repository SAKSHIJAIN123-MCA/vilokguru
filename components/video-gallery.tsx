"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, PlayCircle } from "lucide-react";

const videoGallery = [
  {
    src: "/guruji image/video.mp4",
    thumbnail: "/guruji image/g24.jpg",
    title: "निर्यापक पद की घोषणा",
  },
  {
    src: "/guruji image/2.mp4",
    thumbnail: "/guruji image/g22.jpg",
    title: "दीक्षा दिवस",
  },
    {
    src: "/guruji image/g16_video.mp4",
    thumbnail: "/guruji image/g28.jpg",
    title: "आहारचर्या",
  },
  {
    src: "/guruji image/3.mp4",
    thumbnail: "/guruji image/g46.jpg",
    title: "ध्यान व आराधना",
  },
  {
    src: "/guruji image/4.mp4",
    thumbnail: "/guruji image/g23.jpg",
    title: "मंगल विहार",
  },
  {
    src: "/guruji image/5.mp4",
    thumbnail: "/guruji image/g18.jpg",
    title: " पिच्छी प्राप्तकर्ता परिवार",
  },
  {
    src: "/guruji image/6.mp4",
    thumbnail: "/guruji image/g47.jpg",
    title: "पिच्छी परिवर्तन",
  },
  {
    src: "/guruji image/7.mp4",
    thumbnail: "/guruji image/g9.jpg",
    title: "केशलोंच",
  },
  {
    src: "/guruji image/g13_video.mp4",
    thumbnail: "/guruji image/g3.jpg",
    title: "विहार",
  },
    {
    src: "/guruji image/1.mp4",
    thumbnail: "/guruji image/g29.jpg",
    title: "आहारचर्या",
  },
];

export function VideoGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const section = document.getElementById("videos");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(videoGallery.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(videoGallery.length / 3)) %
        Math.ceil(videoGallery.length / 3)
    );
  };

  const openModal = (index: number) => setSelectedVideo(index);
  const closeModal = () => setSelectedVideo(null);

  return (
    <section
      id="videos"
      className="relative py-24 px-6 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 p-4 rounded-2xl shadow-2xl">
                <PlayCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-orange-600 mb-6 drop-shadow-sm">
              🎥 वीडियो गैलरी
            </h2>
            <p className="text-xl md:text-2xl text-amber-700 font-medium text-balance max-w-3xl mx-auto">
              मुनि श्री विलोक सागर जी महाराज के प्रेरणादायक क्षणों की झलकियाँ
            </p>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mb-8">
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

          {/* Video Grid */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({
                length: Math.ceil(videoGallery.length / 3),
              }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                  <div className="grid md:grid-cols-3 gap-8">
                    {videoGallery
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((video, index) => {
                        const actualIndex = slideIndex * 3 + index;
                        return (
                          <Card
                            key={actualIndex}
                            className="group cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-orange-200/50 hover:border-amber-400/80 transition-all duration-500 hover:shadow-2xl transform hover:scale-105"
                            onClick={() => openModal(actualIndex)}
                          >
                            <div className="relative overflow-hidden rounded-2xl">
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-72 object-cover group-hover:scale-125 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                <PlayCircle className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-center text-lg font-semibold">
                                {video.title}
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

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: Math.ceil(videoGallery.length / 3) }).map(
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

      {/* Modal (Video Player) */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <X size={28} />
            </button>

            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
              <video
                src={videoGallery[selectedVideo].src}
                controls
                autoPlay
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block">
                <p className="text-white text-lg font-semibold">
                  {videoGallery[selectedVideo].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
