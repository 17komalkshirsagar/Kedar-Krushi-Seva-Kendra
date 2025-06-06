'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, MoreHorizontal, Eye, Check, X, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';

const reviews = [
  {
    id: 1,
    customer: 'Rajesh Patil',
    product: 'Chlorpyrifos 20% EC',
    rating: 5,
    review: 'Excellent quality product. My cotton crop yield increased significantly.',
    date: '2024-01-15',
    status: 'pending'
  },
  {
    id: 2,
    customer: 'Sunita Jadhav',
    product: 'NPK Fertilizer',
    rating: 5,
    review: 'Best agricultural shop in the region. Highly recommended!',
    date: '2024-01-14',
    status: 'approved'
  },
  {
    id: 3,
    customer: 'Mohan Kale',
    product: 'Glyphosate 41% SL',
    rating: 4,
    review: 'Good product but delivery was a bit delayed.',
    date: '2024-01-13',
    status: 'approved'
  },
  {
    id: 4,
    customer: 'Priya Sharma',
    product: 'Mancozeb 75% WP',
    rating: 5,
    review: 'Perfect fungicide for my grape vineyard. Very effective.',
    date: '2024-01-12',
    status: 'pending'
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

export function ReviewManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReview, setSelectedReview] = useState<any>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const filteredReviews = reviews.filter(review =>
    review.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApprove = (reviewId: number) => {
    toast.success('Review approved successfully!');
  };

  const handleReject = (reviewId: number) => {
    toast.success('Review rejected successfully!');
  };

  const handleViewReview = (review: any) => {
    setSelectedReview(review);
    setIsViewDialogOpen(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Review Management</CardTitle>
          <CardDescription>
            Manage customer reviews and ratings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell className="font-medium">{review.customer}</TableCell>
                  <TableCell>{review.product}</TableCell>
                  <TableCell>
                    <StarRating rating={review.rating} />
                  </TableCell>
                  <TableCell>{review.date}</TableCell>
                  <TableCell>{getStatusBadge(review.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewReview(review)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {review.status === 'pending' && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleApprove(review.id)}
                            className="text-green-600 hover:text-green-700"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleReject(review.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Review Details</DialogTitle>
            <DialogDescription>
              Full review from {selectedReview?.customer}
            </DialogDescription>
          </DialogHeader>
          {selectedReview && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Customer</h4>
                <p className="text-sm text-muted-foreground">{selectedReview.customer}</p>
              </div>
              <div>
                <h4 className="font-medium">Product</h4>
                <p className="text-sm text-muted-foreground">{selectedReview.product}</p>
              </div>
              <div>
                <h4 className="font-medium">Rating</h4>
                <StarRating rating={selectedReview.rating} />
              </div>
              <div>
                <h4 className="font-medium">Review</h4>
                <p className="text-sm text-muted-foreground">{selectedReview.review}</p>
              </div>
              <div>
                <h4 className="font-medium">Date</h4>
                <p className="text-sm text-muted-foreground">{selectedReview.date}</p>
              </div>
              <div>
                <h4 className="font-medium">Status</h4>
                {getStatusBadge(selectedReview.status)}
              </div>
              {selectedReview.status === 'pending' && (
                <div className="flex space-x-2 pt-4">
                  <Button
                    onClick={() => {
                      handleApprove(selectedReview.id);
                      setIsViewDialogOpen(false);
                    }}
                    className="flex-1"
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      handleReject(selectedReview.id);
                      setIsViewDialogOpen(false);
                    }}
                    className="flex-1"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}