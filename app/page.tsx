import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Zap,
  ShieldCheck,
  Clock,
  ArrowRight,
  Menu,
} from "lucide-react";
import { products } from "@/lib/products";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-accent/30">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Zap className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight uppercase">
              Naresh Generator Service
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/catalog" className="transition-colors">
              Products
            </a>
            <a href="/catalog" className="transition-colors">
              Services
            </a>
            <a href="/catalog" className="transition-colors">
              Rental
            </a>
            <a href="catalog" className="transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Request Quote
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-linear-to-b from-secondary/50 to-background" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* LEFT CONTENT */}
              <div className="max-w-xl">
                <Badge
                  variant="outline"
                  className="mb-4 border-purple-500 text-amber-800 bg-yellow px-3 py-1 text-xs uppercase tracking-widest font-bold"
                >
                  Premium Power Solutions
                </Badge>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
                  Reliable Diesel Generators for{" "}
                  <span className="text-purple-900 italic font-serif">
                    Every Industry.
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Naresh Generator Service provides high-performance Jakson
                  diesel generators with 24/7 maintenance and support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 text-lg group"
                  >
                    View Inventory
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-lg"
                  >
                    Our Services
                  </Button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-[520px] md:h-[620px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/5492.jpg"
                  alt="Industrial Diesel Generator"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>
        {/* Abstract Image Placeholder */}
        <div className="mt-16 container mx-auto px-4">
          <div className="relative h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/7.5-58.5-kVA-RLHP-Genset-Jakson-Genset-DE-4.png"
              alt="Industrial Diesel Generator"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-12 text-white">
              <div>
                <div className="text-3xl font-bold">15-500+</div>
                <div className="text-sm opacity-80 uppercase tracking-wider">
                  kVA Range
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80 uppercase tracking-wider">
                  Load Testing
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-80 uppercase tracking-wider">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Value Props */}
        <section className="py-24 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-amber-900 rounded-xl flex items-center justify-center text-accent">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Genuine Jakson Parts
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use only certified Jakson components and lubricants to
                  ensure maximum engine life and fuel efficiency.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-amber-900 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Fast Emergency Response
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Power outage? Our mobile service units are on standby 24/7 to
                  restore your operations in record time.
                </p>
              </div>
              <div className="space-y-4">
                <div className=" bg-amber-900 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Custom Installations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From residential setups to massive industrial grids, we design
                  power solutions tailored to your load requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 border-t">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold tracking-tighter mb-4">
                  Industrial Grade Inventory
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Explore our range of heavy-duty Jakson diesel generators,
                  known for low noise levels and high durability.
                </p>
              </div>
              <Button
                asChild
                variant="link"
                className="text-amber-900 p-0 font-bold group"
              >
                <Link href="/catalog">
                  Browse Full Catalog{" "}
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={`${product.image}?height=600&width=600&query=${product.name}`}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold tracking-tight">
                        {product.name}
                      </h4>
                      <Badge variant="secondary">{product.kva} kVA</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full bg-transparent"
                    >
                      <Link href={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 max-w-3xl mx-auto">
              Ready to Secure Your Power? Let's Talk Today.
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-mono text-lg font-medium">
                  +91 9926813624
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-mono text-lg font-medium">
                  nareshjainmorenamp@gmail.com
                </span>
              </div>
            </div>
            <Button
              size="xl"
              className="bg-accent text-accent-foreground px-12 py-8 text-xl rounded-full transition-transform"
            >
              Contact Us Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-200 py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary text-primary-foreground p-1 rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg tracking-tight uppercase">
                  Naresh Generator Service
                </span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
                Premium distributor and service provider for Jakson Diesel
                Generators. We specialize in sales, rental, and maintenance for
                industrial and commercial sectors.
              </p>
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Mill Area Road, Near Bank Of Baroda, Morena, India
                </span>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase tracking-wider text-xs">
                Quick Links
              </h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/catalog"
                    className="hover:text-foreground transition-colors"
                  >
                    Generator Sales
                  </a>
                </li>
                <li>
                  <a
                    href="/catalog"
                    className="hover:text-foreground transition-colors"
                  >
                    Rental Services
                  </a>
                </li>
                <li>
                  <a
                    href="/catalog"
                    className="hover:text-foreground transition-colors"
                  >
                    AMC Services
                  </a>
                </li>
                <li>
                  <a
                    href="/catalog"
                    className="hover:text-foreground transition-colors"
                  >
                    Spare Parts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase tracking-wider text-xs">
                Legal
              </h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/catalog"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/catalog"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/catalog"
                    className="hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground font-medium">
            <p>© 2026 Naresh Generator Service. All rights reserved.</p>
            <p>Authorized Jakson Sales & Service Partner.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
