'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, X } from 'lucide-react'

interface Pravachan {
  id: string
  title: string
  youtubeId: string
  thumbnail?: string
  description?: string
}

const allPravachans: Pravachan[] = [
  {
    id: '1',
    title: 'Pravachan Live',
    youtubeId: 'PHm3WoFuP0I',
    thumbnail: 'https://img.youtube.com/vi/PHm3WoFuP0I/hqdefault.jpg',
    description: 'Listen to inspiring spiritual discourses and teachings',
  },
  {
    id: '2',
    title: 'Divine Teachings',
    youtubeId: 'tIaw4-yr1hk',
    thumbnail: 'https://img.youtube.com/vi/tIaw4-yr1hk/hqdefault.jpg',
    description: 'Explore the wisdom of divine knowledge',
  },
  {
    id: '3',
    title: 'Spiritual Discourse',
    youtubeId: "ENlZWw0rYI8",
    thumbnail: "https://img.youtube.com/vi/ENlZWw0rYI8/hqdefault.jpg",
    description: 'Deep spiritual insights and guidance',
  },
  {
    id: '4',
    title: 'Sacred Knowledge',
    youtubeId: '8Qb-lCMdHFU',
    thumbnail: 'https://img.youtube.com/vi/8Qb-lCMdHFU/hqdefault.jpg',
    description: 'Understanding sacred teachings',
  },
  {
    id: '5',
    title: 'Wisdom Session',
    youtubeId: 'rjiHc6ZmDJk',
    thumbnail: 'https://img.youtube.com/vi/rjiHc6ZmDJk/hqdefault.jpg',
    description: 'Valuable wisdom for spiritual growth',
  },
  {
    id: '6',
    title: 'Devotional Gathering',
    youtubeId: '-cnAqX-DPNQ',
    thumbnail: 'https://img.youtube.com/vi/-cnAqX-DPNQ/hqdefault.jpg',
    description: 'Community devotion and learning',
  },
  {
    id: '7',
    title: 'Enlightenment Path',
    youtubeId: 'aQL5U87IueM',
    thumbnail: 'https://img.youtube.com/vi/aQL5U87IueM/hqdefault.jpg',
    description: 'Journey towards spiritual enlightenment',
  },
  {
    id: '8',
    title: 'Sacred Discourse',
    youtubeId: 'NSGwunpR1uM',
    thumbnail: 'https://img.youtube.com/vi/NSGwunpR1uM/hqdefault.jpg',
    description: 'In-depth sacred teachings',
  },
  {
    id: '9',
    title: 'Inner Peace Teaching',
    youtubeId: 'HjvOyAOfb0Y',
    thumbnail: 'https://img.youtube.com/vi/HjvOyAOfb0Y/hqdefault.jpg',
    description: 'Finding inner peace through knowledge',
  },
  {
    id: '10',
    title: 'Spiritual Awakening',
    youtubeId: '375w9f0rCe8',
    thumbnail: 'https://img.youtube.com/vi/375w9f0rCe8/hqdefault.jpg',
    description: 'Awaken your spiritual consciousness',
  },
   {
    id: '11',
    title: 'Spiritual Discourse',
    youtubeId: '58HDu14EbEs',
    thumbnail: 'https://img.youtube.com/vi/58HDu14EbEs/hqdefault.jpg',
    description: 'Awaken your spiritual consciousness',
  }, {
    id: '12',
    title: 'Sacred Knowledge',
    youtubeId: 'rH3-M6be8yo',
    thumbnail: 'https://img.youtube.com/vi/rH3-M6be8yo/hqdefault.jpg',
    description: 'Awaken your spiritual consciousness',
  },
]

export default function PravachansPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                All Pravachans
              </h1>
              <p className="text-muted-foreground text-sm">{allPravachans.length} videos available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {allPravachans.map((pravachan) => (
            <div
              key={pravachan.id}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(pravachan.youtubeId)}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-lg bg-muted aspect-video mb-3">
                <img
                  src={pravachan.thumbnail || "/placeholder.svg"}
                  alt={pravachan.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2 mb-1">
                {pravachan.title}
              </h3>
              {/* Description */}
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                {pravachan.description}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="w-full max-w-4xl">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div
              className="aspect-video"
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
        </div>
      )}
    </div>
  )
}
