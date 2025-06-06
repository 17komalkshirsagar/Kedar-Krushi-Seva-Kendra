'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Visit Our Store or Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or need farming advice? We&apos;re here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Visit Our Store
                </CardTitle>
                <CardDescription>
                  Come visit us at our location in Chhatrapati Sambhajinagar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SKILLHUB, 3rd Floor, Veer Shanti Building, Kranti Chowk,<br />
                  above Primia Hero Showroom, beside Sumit Hall,<br />
                  Kotla Colony, Samta Nagar, Chhatrapati Sambhajinagar,<br />
                  Maharashtra 431001
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-sm text-muted-foreground">+91 9284123374</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-sm text-muted-foreground">kedarkrushiseva@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Get instant help or schedule a consultation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  asChild
                  className="w-full justify-start"
                  size="lg"
                >
                  <a
                    href="https://wa.me/919423729975"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Chat
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                  size="lg"
                >
                  <a href="tel:+919423723375">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                  size="lg"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Google Maps Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Find Us on Map</CardTitle>
                <CardDescription>
                  Located in the heart of Chhatrapati Sambhajinagar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8476827935343!2d75.34108731494156!3d19.876054586595845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb98173cba8e7b%3A0x1c1b9b8b8b8b8b8b!2sSKILLHUB%2C%20Kranti%20Chowk%2C%20Aurangabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kedar Krushi Seva Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}