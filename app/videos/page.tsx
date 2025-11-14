"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import Link from "next/link";
import { Card } from "@/components/ui/card";

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
    title: "पिच्छी प्राप्तकर्ता परिवार",
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
   {
    src: "/guruji image/morena.mp4",
    thumbnail: "/guruji image/g21.jpg",
    title: "भव्य आगवानी",
  },
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const nextVideo = () => {
    setSelectedVideo((prev) =>
      prev !== null ? (prev + 1) % videoGallery.length : 0
    );
  };

  const prevVideo = () => {
    setSelectedVideo((prev) =>
      prev !== null
        ? (prev - 1 + videoGallery.length) % videoGallery.length
        : 0
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
              सभी वीडियो
            </h1>
            <p className="text-amber-700 mt-1">
              {videoGallery.length} वीडियो
            </p>
          </div>
          <Link
            href="/"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            वापस जाएं
          </Link>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videoGallery.map((video, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-orange-200/50 hover:border-amber-400/80 transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-rotate-1"
              onClick={() => setSelectedVideo(index)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Video title overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-center text-lg font-semibold">
                  {video.title}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full w-full">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <X size={28} />
            </button>

            <button
              onClick={prevVideo}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextVideo}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight size={28} />
            </button>

            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
              <video
                src={videoGallery[selectedVideo].src}
                controls
                autoPlay
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block">
                <p className="text-white text-lg font-semibold">
                  वीडियो {selectedVideo + 1} / {videoGallery.length}
                </p>
                <p className="text-white/80 text-sm mt-2">
                  {videoGallery[selectedVideo].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
