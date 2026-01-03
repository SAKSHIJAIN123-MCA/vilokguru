import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Zap } from "lucide-react"

export default function CatalogPage() {
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
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Full Product Catalog</h1>
          <p className="text-muted-foreground text-lg">
            Discover our complete range of Jakson diesel generators for all your power needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
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
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-2">
                    {product.kva} kVA
                  </Badge>
                  <h4 className="text-xl font-bold tracking-tight">{product.name}</h4>
                </div>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{product.description}</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={`/product/${product.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
