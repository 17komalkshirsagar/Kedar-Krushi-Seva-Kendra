'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/dashboard-layout';
import { DashboardStats } from '@/components/dashboard-stats';
import { RecentOrders } from '@/components/recent-orders';
import { ProductManagement } from '@/components/product-management';
import { ReviewManagement } from '@/components/review-management';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    const role = localStorage.getItem('userRole');
    
    if (!auth || role !== 'admin') {
      router.push('/auth/login');
      return;
    }
    
    setIsAuthenticated(true);
    setUserRole(role);
  }, [router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s what&apos;s happening with your shop.
          </p>
        </div>

        <DashboardStats />

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <RecentOrders />
          </TabsContent>
          
          <TabsContent value="products" className="space-y-4">
            <ProductManagement />
          </TabsContent>
          
          <TabsContent value="reviews" className="space-y-4">
            <ReviewManagement />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}