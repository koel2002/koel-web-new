
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/products';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


interface ProductGallerySheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  categoryName: string;
  products: Product[];
}

const phoneNumber = '8801332530500';

const getWhatsAppUrl = (productName: string) => {
  const message = encodeURIComponent(
    `Hello, I'm interested in ordering the ${productName}.`
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

export function ProductGallerySheet({
  isOpen,
  onOpenChange,
  categoryName,
  products,
}: ProductGallerySheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full 2xl:max-w-[1200px] 2xl:mx-auto bg-black text-primary-foreground p-0 flex flex-col">
        <SheetHeader className="p-6 pb-4 border-b border-gray-700">
          <SheetTitle className="text-2xl font-headline text-white">
            {categoryName}
          </SheetTitle>
          <SheetDescription className="text-gray-400">
            Browse our collection of {categoryName.toLowerCase()}.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-grow">
          <TooltipProvider>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="space-y-3">
                  <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-gray-800">
                    {product.images && product.images[0] && (
                      <Image
                        src={product.images[0].url}
                        alt={product.name}
                        fill
                        className="object-cover"
                        data-ai-hint={product.images[0].hint}
                      />
                    )}
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="font-semibold text-white text-sm truncate flex-1">{product.name}</h3>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button asChild size="sm" variant="secondary" className="bg-gray-800 hover:bg-gray-700 text-white">
                                <Link
                                    href={getWhatsAppUrl(product.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                    src="https://lh3.googleusercontent.com/d/1EPKpm9gEimHcoN-Pa51zI2OcYUn4Zgvw"
                                    alt="WhatsApp Icon"
                                    className="h-4 w-4 mr-2"
                                    />
                                    Chat to Order
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Chat Now about this product</p>
                        </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </div>
          </TooltipProvider>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
