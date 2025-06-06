'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Rajesh Patil',
    location: 'Aurangabad, Maharashtra',
    rating: 5,
    date: '2 weeks ago',
    review: 'Excellent quality products and very helpful staff. My cotton crop yield increased by 30% after using their recommended pesticides. Highly recommend to all farmers!',
    crop: 'Cotton Farmer',
    verified: true
  },
  {
    id: 2,
    name: 'Sunita Jadhav',
    location: 'Jalna, Maharashtra',
    rating: 5,
    date: '1 month ago',
    review: 'Best agricultural shop in the region. They provide genuine products and expert advice. The owner is very knowledgeable and always ready to help.',
    crop: 'Soybean Farmer',
    verified: true
  },
  {
    id: 3,
    name: 'Mohan Kale',
    location: 'Paithan, Maharashtra',
    rating: 5,
    date: '1 month ago',
    review: 'I have been buying from them for 5 years. Quality is consistent and prices are reasonable. They also provide home delivery which is very convenient.',
    crop: 'Sugarcane Farmer',
    verified: true
  },
  {
    id: 4,
    name: 'Priya Sharma',
    location: 'Vaijapur, Maharashtra',
    rating: 4,
    date: '2 months ago',
    review: 'Good service and quality products. They helped me choose the right fungicide for my grape vineyard. Will continue to purchase from them.',
    crop: 'Grape Farmer',
    verified: true
  },
  {
    id: 5,
    name: 'Vikram Singh',
    location: 'Gangapur, Maharashtra',
    rating: 5,
    date: '2 months ago',
    review: 'Outstanding customer service! They explained how to use the products properly and even followed up to check the results. Very professional.',
    crop: 'Wheat Farmer',
    verified: true
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

export function ReviewsList() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
        <p className="text-muted-foreground">
          Read what our customers have to say about our products and services.
        </p>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base flex items-center gap-2">
                      {review.name}
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {review.location} • {review.crop}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <StarRating rating={review.rating} />
                    <p className="text-xs text-muted-foreground mt-1">
                      {review.date}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;{review.review}&quot;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}