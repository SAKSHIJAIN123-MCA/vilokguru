import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BiographySection } from "@/components/biography-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BiographySection />
      <PhotoGallery />
      <Footer />
    </main>
  )
}
