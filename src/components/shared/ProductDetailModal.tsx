
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/products';
import { cn } from '@/lib/utils';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const phoneNumber = '8801332530500';

const getWhatsAppUrl = (productName: string) => {
  const message = encodeURIComponent(`Hello, I'm interested in ordering the ${productName}.`);
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [mainImage, setMainImage] = useState(product.images[0].url);

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0">
        <div className="grid md:grid-cols-2">
          {/* Image Gallery */}
          <div className="p-6 flex flex-col">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden border">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-2 mt-4">
              {product.images.map((img) => (
                <button
                  key={img.url}
                  onClick={() => setMainImage(img.url)}
                  className={cn(
                    "relative aspect-square w-full rounded-md overflow-hidden border-2",
                    mainImage === img.url ? "border-primary" : "border-transparent"
                  )}
                >
                  <Image
                    src={img.url}
                    alt={product.name}
                    fill
                    className="object-cover"
                    data-ai-hint={img.hint}
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="p-6 bg-secondary flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold font-headline mb-2">{product.name}</DialogTitle>
              {product.regularPrice && product.currentPrice < product.regularPrice && (
                <Badge variant="destructive" className="w-fit">Sale</Badge>
              )}
            </DialogHeader>

            <div className="flex items-baseline gap-2 my-4">
                <span className="text-3xl font-bold text-primary">৳{product.currentPrice}</span>
                {product.regularPrice && product.currentPrice < product.regularPrice && (
                    <span className="text-lg text-muted-foreground line-through">৳{product.regularPrice}</span>
                )}
            </div>

            <DialogDescription className="text-base text-muted-foreground whitespace-pre-wrap flex-grow">
              {product.description}
            </DialogDescription>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-sm">Sizes:</span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <span key={size} className="border rounded-md px-3 py-1 text-xs">{size}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-sm">Colors:</span>
                <div className="flex items-center gap-2">
                  {product.colors.map(color => (
                    <div key={color.name} className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-full border" style={{ backgroundColor: color.hex }}></span>
                      <span className='text-xs'>{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {product.isBulkAvailable && <p className="text-sm text-muted-foreground/80 mt-6">{product.specialNote}</p>}

            <Button asChild size="lg" className="w-full mt-6">
                <Link href={getWhatsAppUrl(product.name)} target="_blank" rel="noopener noreferrer">
                <img 
                    src="https://lh3.googleusercontent.com/d/1EPKpm9gEimHcoN-Pa51zI2OcYUn4Zgvw"
                    alt="WhatsApp Icon"
                    className="h-5 w-5 mr-2"
                />
                Chat to Order
                </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
