import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink } from 'lucide-react';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const googleRating = 4.8;
  const totalReviews = 127;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="h-6"
          />
          Google Reviews
        </CardTitle>
        <CardDescription>
          See what customers are saying about us on Google
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{googleRating}</div>
              <StarRating rating={googleRating} />
            </div>
            <div>
              <p className="font-medium">Excellent</p>
              <p className="text-sm text-muted-foreground">
                Based on {totalReviews} reviews
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Highly Rated
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>5 stars</span>
            <div className="flex-1 mx-3">
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <span className="text-muted-foreground">78%</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span>4 stars</span>
            <div className="flex-1 mx-3">
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            <span className="text-muted-foreground">15%</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span>3 stars</span>
            <div className="flex-1 mx-3">
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '5%' }}></div>
              </div>
            </div>
            <span className="text-muted-foreground">5%</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span>2 stars</span>
            <div className="flex-1 mx-3">
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '1%' }}></div>
              </div>
            </div>
            <span className="text-muted-foreground">1%</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span>1 star</span>
            <div className="flex-1 mx-3">
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '1%' }}></div>
              </div>
            </div>
            <span className="text-muted-foreground">1%</span>
          </div>
        </div>

        <Button asChild className="w-full">
          <a
            href="https://www.google.com/search?q=your+shop+name+aurangabad+reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}