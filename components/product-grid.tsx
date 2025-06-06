'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Chlorpyrifos 20% EC',
    category: 'Insecticides',
    price: '₹450/L',
    image: 'https://images.pexels.com/photos/4057659/pexels-photo-4057659.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.8,
    reviews: 45,
    description: 'Effective broad-spectrum insecticide for crop protection',
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Glyphosate 41% SL Herbicide',
    category: 'Herbicides',
    price: '₹380/L',
    image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.6,
    reviews: 32,
    description: 'Non-selective herbicide for effective weed control',
    inStock: true,
    badge: 'Eco-Safe'
  },
  {
    id: 3,
    name: 'Mancozeb 75% WP Fungicide',
    category: 'Fungicides',
    price: '₹520/kg',
    image: 'https://images.pexels.com/photos/4022095/pexels-photo-4022095.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.9,
    reviews: 67,
    description: 'Protective fungicide for disease prevention',
    inStock: true,
    badge: 'Premium'
  },
  {
    id: 4,
    name: 'Hybrid Cotton Seeds BT-1',
    category: 'Seeds',
    price: '₹850/packet',
    image: 'https://images.pexels.com/photos/4202481/pexels-photo-4202481.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.7,
    reviews: 28,
    description: 'High-yield disease-resistant cotton seeds',
    inStock: true,
    badge: 'New Arrival'
  },
  {
    id: 5,
    name: 'Cypermethrin 10% EC',
    category: 'Insecticides',
    price: '₹320/L',
    image: 'https://images.pexels.com/photos/4057659/pexels-photo-4057659.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.5,
    reviews: 39,
    description: 'Synthetic pyrethroid insecticide for pest control',
    inStock: false,
    badge: 'Out of Stock'
  },
  {
    id: 6,
    name: 'NPK 19:19:19 Fertilizer',
    category: 'Fertilizers',
    price: '₹1,200/50kg',
    image: 'https://images.pexels.com/photos/4022095/pexels-photo-4022095.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.8,
    reviews: 52,
    description: 'Balanced nutrition for optimal plant growth',
    inStock: true,
    badge: 'Popular'
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${
            i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
          }`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">({rating})</span>
    </div>
  );
}

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Insecticides', 'Herbicides', 'Fungicides', 'Seeds', 'Fertilizers'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <Badge 
                  variant={product.inStock ? "default" : "destructive"}
                  className="text-xs whitespace-nowrap"
                >
                  {product.badge}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <StarRating rating={product.rating} />
                <span className="text-xs text-muted-foreground">
                  {product.reviews} reviews
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {product.description}
              </CardDescription>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-green-600">
                  {product.price}
                </span>
                <Button 
                  size="sm" 
                  disabled={!product.inStock}
                  asChild={product.inStock}
                >
                  {product.inStock ? (
                    <a
                      href={`https://wa.me/919284123374?text=Hi! I'm interested in ${product.name}. Price: ${product.price}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Inquire
                    </a>
                  ) : (
                    <>Out of Stock</>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}