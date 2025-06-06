import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-green-600" />
            Our Location
          </CardTitle>
          <CardDescription>
            Visit us at our store in Chhatrapati Sambhajinagar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <address className="not-italic text-muted-foreground">
            SKILLHUB, 3rd Floor, Veer Shanti Building,<br />
            Kranti Chowk, above Primia Hero Showroom,<br />
            beside Sumit Hall, Kotla Colony, Samta Nagar,<br />
            Chhatrapati Sambhajinagar, Maharashtra 431001
          </address>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">Phone</p>
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
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">contact@skillhubit.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium">Business Hours</p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}