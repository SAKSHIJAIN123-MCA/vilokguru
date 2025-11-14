"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { galleryImages } from "@/components/photo-gallery";

export default function ImagesPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
              सभी फोटो
            </h1>
            <p className="text-amber-700 mt-1">
              {galleryImages.length} इमेज
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

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-orange-200/50 hover:border-amber-400/80 transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-rotate-1"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={
                    image.src ||
                    "/placeholder.svg?height=300&width=300&query=spiritual jain monk meditation"
                   || "/placeholder.svg"}
                  alt={image.alt || `Photo ${index + 1}`}
                  className="w-full h-64 sm:h-72 md:h-64 lg:h-72 object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover overlay icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <Camera className="w-5 h-5 text-amber-600" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full w-full">
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
                 || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt || `Photo ${selectedImage + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl mx-auto"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block">
                <p className="text-white text-lg font-semibold">
                  फोटो {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
