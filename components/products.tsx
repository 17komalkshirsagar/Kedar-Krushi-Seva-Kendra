'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const productCategories = [
  {
    title: 'Insecticides',
    description: 'Effective pest control solutions for all crop types',
    image: 'https://images.pexels.com/photos/4057659/pexels-photo-4057659.jpeg?auto=compress&cs=tinysrgb&w=400',
    products: ['Chlorpyrifos', 'Cypermethrin', 'Malathion', 'Imidacloprid'],
    badge: 'Popular'
  },
  {
    title: 'Herbicides',
    description: 'Selective weed control for healthier crops',
    image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=400',
    products: ['Glyphosate', '2,4-D', 'Atrazine', 'Paraquat'],
    badge: 'Eco-Safe'
  },
  {
    title: 'Fungicides',
    description: 'Advanced disease protection for your plants',
    image: 'https://images.pexels.com/photos/4022095/pexels-photo-4022095.jpeg?auto=compress&cs=tinysrgb&w=400',
    products: ['Mancozeb', 'Copper Sulfate', 'Bordeaux Mix', 'Carbendazim'],
    badge: 'Premium'
  },
  {
    title: 'Seeds & Fertilizers',
    description: 'High-quality seeds and nutrients for optimal growth',
    image: 'https://images.pexels.com/photos/4202481/pexels-photo-4202481.jpeg?auto=compress&cs=tinysrgb&w=400',
    products: ['Hybrid Seeds', 'NPK Fertilizers', 'Organic Compost', 'Micronutrients'],
    badge: 'Certified'
  }
];

export function Products() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Products
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Premium Agricultural Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of agricultural products designed to maximize your crop yield and protect your investment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <Badge variant="secondary">{category.badge}</Badge>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">Popular Products:</p>
                    <ul className="text-sm space-y-1">
                      {category.products.map((product) => (
                        <li key={product} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/products">
              View All Products
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}