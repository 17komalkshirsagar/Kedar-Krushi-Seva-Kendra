import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Clock, Users, Award, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Est. 2010
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              About Kedar Krushi Seva Kendra
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving farmers in Maharashtra with premium agricultural solutions for over a decade.
              Your trusted partner in sustainable farming.
            </p>
          </div>

          {/* Story Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-600" />
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Founded by <strong>Chandrakant Kshirsagar</strong> in 2010, Kedar Krushi Seva Kendra began as a small agricultural
                supply store with a big vision: to empower farmers with the highest quality products and
                expert guidance they need to succeed.
              </p>
              <p className="text-muted-foreground">
                Over the years, we&apos;ve grown from a local shop to a trusted partner for thousands of
                farmers across Maharashtra. Our commitment to quality, innovation, and customer service
                has made us a leading name in agricultural solutions.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to serve our community with the same dedication and passion that
                started it all - helping farmers grow better crops and build sustainable livelihoods.
              </p>
            </CardContent>
          </Card>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold">5000+</p>
                    <p className="text-sm text-muted-foreground">Happy Farmers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Award className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold">13+</p>
                    <p className="text-sm text-muted-foreground">Years of Service</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-sm text-muted-foreground">Products</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Visit Our Store</CardTitle>
              <CardDescription>
                Come visit us at our location in Chhatrapati Sambhajinagar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">
                    Kedar Krushi Seva Kendra, at 40 Gaon Road, Kannad,<br />
                    Chhatrapati Sambhajinagar,<br />
                    Maharashtra 431103
                  </p>
                </div>
              </div>

              <Separator />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 9423781257</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">kedarkrushisevakendra@gmail.com</p>
                  </div>
                </div>
              </div>

              <Separator />

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
      </main>
      <Footer />
    </div>
  );
}