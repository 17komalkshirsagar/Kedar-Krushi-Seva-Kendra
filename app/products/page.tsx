import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductGrid } from '@/components/product-grid';
import { ProductFilters } from '@/components/product-filters';
import { Badge } from '@/components/ui/badge';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Our Products
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Premium Agricultural Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality agricultural products designed to help your crops thrive.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64">
            <ProductFilters />
          </aside>
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}