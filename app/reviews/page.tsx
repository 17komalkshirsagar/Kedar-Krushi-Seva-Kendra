import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ReviewForm } from '@/components/review-form';
import { ReviewsList } from '@/components/reviews-list';
import { GoogleReviews } from '@/components/google-reviews';
import { Badge } from '@/components/ui/badge';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Customer Reviews
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read reviews from farmers who trust us with their agricultural needs, and share your own experience.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <GoogleReviews />
            <div className="mt-8">
              <ReviewsList />
            </div>
          </div>
          <div>
            <ReviewForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}