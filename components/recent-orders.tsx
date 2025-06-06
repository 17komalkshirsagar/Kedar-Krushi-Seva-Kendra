import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'Rajesh Patil',
    product: 'Chlorpyrifos 20% EC',
    amount: '₹2,450',
    status: 'delivered',
    date: '2024-01-15'
  },
  {
    id: 'ORD-002',
    customer: 'Sunita Jadhav',
    product: 'NPK Fertilizer 19:19:19',
    amount: '₹1,200',
    status: 'shipped',
    date: '2024-01-14'
  },
  {
    id: 'ORD-003',
    customer: 'Mohan Kale',
    product: 'Glyphosate 41% SL',
    amount: '₹1,900',
    status: 'processing',
    date: '2024-01-14'
  },
  {
    id: 'ORD-004',
    customer: 'Priya Sharma',
    product: 'Mancozeb 75% WP',
    amount: '₹1,560',
    status: 'delivered',
    date: '2024-01-13'
  },
  {
    id: 'ORD-005',
    customer: 'Vikram Singh',
    product: 'Hybrid Cotton Seeds',
    amount: '₹3,400',
    status: 'pending',
    date: '2024-01-13'
  }
];

function getStatusBadge(status: string) {
  switch (status) {
    case 'delivered':
      return <Badge className="bg-green-100 text-green-800">Delivered</Badge>;
    case 'shipped':
      return <Badge className="bg-blue-100 text-blue-800">Shipped</Badge>;
    case 'processing':
      return <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>;
    case 'pending':
      return <Badge variant="secondary">Pending</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>
          Latest orders from your customers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}