'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight, Play } from 'lucide-react'

interface Video {
  id: string
  title: string
  videoPath: string
  thumbnail?: string
}

const videos: Video[] = [
  {
    id: '1',
    title: 'वीरशासनोदय व्याख्यान',
    videoPath: '/guruji image/veer1.mp4',
  },
  {
    id: '2',
    title: 'धर्मशास्त्र पाठ',
    videoPath: '/guruji image/veer2.mp4',
  },
  {
    id: '3',
    title: 'वेद विचार',
    videoPath: '/guruji image/veer3.mp4',
  },
  {
    id: '4',
    title: 'शास्त्र ज्ञान',
    videoPath: '/guruji image/veer4.mp4',
  },
  {
    id: '5',
    title: 'आध्यात्मिक विषय',
    videoPath: '/guruji image/veer5.mp4',
  },
  {
    id: '6',
    title: 'प्राचीन ज्ञान',
    videoPath: '/guruji image/veer6.mp4',
  },
]

export default function VeershashnodayaGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header with See All Videos Button */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">
              वीरशासनोदय
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              संपूर्ण ज्ञान और अध्ययन
            </p>
          </div>
          <Link href="/veer">
            <Button 
              variant="default" 
              className="gap-2 whitespace-nowrap"
            >
              See All Videos
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
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div 
                  className="relative group cursor-pointer h-full"
                  onClick={() => setSelectedVideo(video.videoPath)}
                >
                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden rounded-lg bg-muted aspect-video">
                    <video
                      src={video.videoPath}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      crossOrigin="anonymous"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-5 h-5 md:w-7 md:h-7 text-white ml-1 fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Video Title */}
                  <h3 className="mt-3 font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
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
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      )}
    </section>
  )
}
