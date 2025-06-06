'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export function ProductFilters() {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="font-medium mb-3">Categories</h4>
          <div className="space-y-2">
            {[
              { name: 'Insecticides', count: 15 },
              { name: 'Herbicides', count: 12 },
              { name: 'Fungicides', count: 10 },
              { name: 'Seeds', count: 8 },
              { name: 'Fertilizers', count: 6 },
            ].map((category) => (
              <div key={category.name} className="flex items-center space-x-2">
                <Checkbox id={category.name} />
                <label
                  htmlFor={category.name}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1"
                >
                  {category.name}
                </label>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Brand */}
        <div>
          <h4 className="font-medium mb-3">Brands</h4>
          <div className="space-y-2">
            {['Bayer', 'Syngenta', 'UPL', 'Tata Rallis', 'Dhanuka'].map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox id={brand} />
                <label
                  htmlFor={brand}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Availability */}
        <div>
          <h4 className="font-medium mb-3">Availability</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="in-stock" />
              <label
                htmlFor="in-stock"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                In Stock
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="out-of-stock" />
              <label
                htmlFor="out-of-stock"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Out of Stock
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}