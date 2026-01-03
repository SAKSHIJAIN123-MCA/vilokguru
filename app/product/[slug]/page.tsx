import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Zap, CheckCircle2, Phone, Mail } from "lucide-react"

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.id === slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Zap className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight uppercase">Naresh Generator</span>
          </Link>
          <Button asChild variant="ghost" size="sm">
            <Link href="/catalog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Catalog
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={`${product.image}?height=800&width=800&query=${product.name}`}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-1 text-sm">
                {product.kva} kVA Output
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 bg-secondary/20 p-6 rounded-xl border">
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Engine Type</div>
                <div className="font-semibold">{product.specs.engine}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Alternator</div>
                <div className="font-semibold">{product.specs.alternator}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Fuel Tank</div>
                <div className="font-semibold">{product.specs.fuelTank}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Dimensions</div>
                <div className="font-semibold">{product.specs.dimensions}</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Key Features</h3>
              <ul className="grid gap-2">
                {[
                  "Low noise and vibration levels",
                  "Excellent fuel efficiency",
                  "Compact and aesthetically pleasing",
                  "Compliance with latest emission norms",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="xl" className=" px-8 py-4 flex-1">
                Get Price Quote
              </Button>
              <Button size="xl" variant="outline" className="rounded-full px-8 py-4 flex-1 bg-transparent">
                Download Brochure
              </Button>
            </div>

            <div className="pt-8 border-t">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Contact for Immediate Support
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="font-semibold">+91 9926813624</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="font-semibold">nareshjainmorenamp@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
