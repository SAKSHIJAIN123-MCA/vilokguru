'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Play } from 'lucide-react'

interface Video {
  id: string
  title: string
  videoPath: string
}

const allVideos: Video[] = [
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
   {
    id: '7',
    title: 'संस्कृत भाषा',
    videoPath: '/guruji image/veer7.mp4',
  },
  {
    id: '8',
    title: 'योग विज्ञान',
    videoPath: '/guruji image/veer8.mp4',
  },
]

export default function VeershashnodayaPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <main className="w-full min-h-screen py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              वीरशासनोदय - सभी वीडियो
            </h1>
            <p className="text-muted-foreground text-sm md:text-base mt-2">
              कुल {allVideos.length} वीडियो
            </p>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {allVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.videoPath)}
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden rounded-lg bg-muted aspect-video mb-3">
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
              <h3 className="font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2">
                {video.title}
              </h3>
            </div>
          ))}
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
    </main>
  )
}
