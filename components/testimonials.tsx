'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rajesh Patil',
    location: 'Aurangabad, Maharashtra',
    rating: 5,
    review: 'Excellent quality products and very helpful staff. My cotton crop yield increased by 30% after using their recommended pesticides.',
    crop: 'Cotton Farmer'
  },
  {
    name: 'Sunita Jadhav',
    location: 'Jalna, Maharashtra',
    rating: 5,
    review: 'Best agricultural shop in the region. They provide genuine products and expert advice. Very satisfied with their service.',
    crop: 'Soybean Farmer'
  },
  {
    name: 'Mohan Kale',
    location: 'Paithan, Maharashtra',
    rating: 5,
    review: 'I have been buying from them for 5 years. Quality is consistent and prices are reasonable. Highly recommended!',
    crop: 'Sugarcane Farmer'
  },
  {
    name: 'Priya Sharma',
    location: 'Vaijapur, Maharashtra',
    rating: 5,
    review: 'Quick delivery and excellent customer support. They helped me choose the right fungicide for my grape vineyard.',
    crop: 'Grape Farmer'
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Our Farmers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our products and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <StarRating rating={testimonial.rating} />
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.crop}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    &quot;{testimonial.review}&quot;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-card rounded-lg p-4 border">
            <div className="flex items-center">
              <StarRating rating={5} />
              <span className="ml-2 font-semibold">4.9/5</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Based on 150+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}