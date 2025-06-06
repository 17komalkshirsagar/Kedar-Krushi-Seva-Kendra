import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Package, Star, ShoppingCart } from 'lucide-react';

const stats = [
  {
    title: 'Total Products',
    value: '487',
    change: '+12',
    changeType: 'increase' as const,
    icon: Package,
    description: 'Active products in inventory'
  },
  {
    title: 'Total Customers',
    value: '5,234',
    change: '+89',
    changeType: 'increase' as const,
    icon: Users,
    description: 'Registered customers'
  },
  {
    title: 'Monthly Orders',
    value: '1,423',
    change: '+156',
    changeType: 'increase' as const,
    icon: ShoppingCart,
    description: 'Orders this month'
  },
  {
    title: 'Average Rating',
    value: '4.8',
    change: '+0.2',
    changeType: 'increase' as const,
    icon: Star,
    description: 'Customer satisfaction rating'
  }
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge
                variant={stat.changeType === 'increase' ? 'default' : 'destructive'}
                className="text-xs"
              >
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change}
              </Badge>
              <span>from last month</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}