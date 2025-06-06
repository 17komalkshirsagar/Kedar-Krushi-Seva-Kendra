'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sprout, Bug, Wheat, Leaf, Clock, MapPin, Phone, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Bug,
    title: 'Insecticides',
    description: 'Effective pest control solutions to protect your crops from harmful insects',
    badge: 'Best Sellers'
  },
  {
    icon: Leaf,
    title: 'Herbicides',
    description: 'Selective weed control products that eliminate weeds without harming crops',
    badge: 'Eco-Friendly'
  },
  {
    icon: Sprout,
    title: 'Fungicides',
    description: 'Advanced fungal disease protection to keep your plants healthy',
    badge: 'Premium'
  },
  {
    icon: Wheat,
    title: 'Quality Seeds',
    description: 'High-yield, disease-resistant seeds for various crop types',
    badge: 'Certified'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick delivery across Maharashtra with same-day service in Aurangabad',
    badge: 'Same Day'
  },
  {
    icon: Award,
    title: 'Expert Advice',
    description: 'Professional consultation from experienced agricultural specialists',
    badge: '13+ Years'
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Round-the-clock customer support via phone and WhatsApp',
    badge: 'Always Available'
  },
  {
    icon: MapPin,
    title: 'Local Presence',
    description: 'Conveniently located in Chhatrapati Sambhajinagar for easy access',
    badge: 'Established'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Your Shop Name?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive agricultural solutions with unmatched quality and service excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <feature.icon className="h-8 w-8 text-green-600" />
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}