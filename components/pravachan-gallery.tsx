"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Pravachan {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail?: string;
}

const pravachans: Pravachan[] = [
   {
    id: '1',
    title: 'Pravachan Live',
    youtubeId: 'PHm3WoFuP0I',
    thumbnail: 'https://img.youtube.com/vi/PHm3WoFuP0I/hqdefault.jpg',
    
  },
  {
    id: '2',
    title: 'Divine Teachings',
    youtubeId: 'tIaw4-yr1hk',
    thumbnail: 'https://img.youtube.com/vi/tIaw4-yr1hk/hqdefault.jpg',
  
  },
  {
    id: '3',
    title: 'Spiritual Discourse',
    youtubeId: "ENlZWw0rYI8",
    thumbnail: "https://img.youtube.com/vi/ENlZWw0rYI8/hqdefault.jpg",
    
  },
  {
    id: '4',
    title: 'Sacred Knowledge',
    youtubeId: '8Qb-lCMdHFU',
    thumbnail: 'https://img.youtube.com/vi/8Qb-lCMdHFU/hqdefault.jpg',
  
  },
  {
    id: '5',
    title: 'Wisdom Session',
    youtubeId: 'rjiHc6ZmDJk',
    thumbnail: 'https://img.youtube.com/vi/rjiHc6ZmDJk/hqdefault.jpg',
   
  },
  {
    id: '6',
    title: 'Devotional Gathering',
    youtubeId: '-cnAqX-DPNQ',
    thumbnail: 'https://img.youtube.com/vi/-cnAqX-DPNQ/hqdefault.jpg',
   
  },
  {
    id: '7',
    title: 'Enlightenment Path',
    youtubeId: 'aQL5U87IueM',
    thumbnail: 'https://img.youtube.com/vi/aQL5U87IueM/hqdefault.jpg',
  
  },
  {
    id: '8',
    title: 'Sacred Discourse',
    youtubeId: 'NSGwunpR1uM',
    thumbnail: 'https://img.youtube.com/vi/NSGwunpR1uM/hqdefault.jpg',
   
  },
  {
    id: '9',
    title: 'Inner Peace Teaching',
    youtubeId: 'HjvOyAOfb0Y',
    thumbnail: 'https://img.youtube.com/vi/HjvOyAOfb0Y/hqdefault.jpg',
   
  },
  {
    id: '10',
    title: 'Spiritual Awakening',
    youtubeId: '375w9f0rCe8',
    thumbnail: 'https://img.youtube.com/vi/375w9f0rCe8/hqdefault.jpg',
    
  },
];

export default function PravachanGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with View All Button */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">
              Pravachan
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Listen to inspiring spiritual discourses
            </p>
          </div>
          <Link href="/pravachans">
            <Button variant="outline" className="gap-2 whitespace-nowrap">
              Listen All Pravachans
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {pravachans.map((pravachan) => (
              <SwiperSlide key={pravachan.id}>
                <div
                  className="relative group cursor-pointer h-full"
                  onClick={() => setSelectedVideo(pravachan.youtubeId)}
                >
                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden rounded-lg bg-muted aspect-video">
                    <img
                      src={pravachan.thumbnail || "/placeholder.svg"}
                      alt={pravachan.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 md:w-7 md:h-7 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video Title */}
                  <h3 className="mt-3 font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2">
                    {pravachan.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Pravachan Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
