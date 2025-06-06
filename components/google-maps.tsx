import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function GoogleMaps() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Find Us on Google Maps</CardTitle>
        <CardDescription>
          Located in the heart of  40 Gaon Road, Kannad Chhatrapati Sambhajinagar, easily accessible from all parts of the city
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8476827935343!2d75.34108731494156!3d19.876054586595845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb98173cba8e7b%3A0x1c1b9b8b8b8b8b8b!2sSKILLHUB%2C%20Kranti%20Chowk%2C%20Aurangabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kedar Krushi Seva - Google Maps Location"
            className="w-full h-full"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}