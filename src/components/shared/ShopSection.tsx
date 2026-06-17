
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { products, allProductTags } from '@/lib/products';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { ProductDetailModal } from './ProductDetailModal';
import type { Product } from '@/lib/products';

const PRODUCTS_PER_PAGE = 8;
const phoneNumber = '8801332530500';

export function ShopSection() {
  const [activeTag, setActiveTag] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeTag === 'All') {
      return products;
    }
    return products.filter(p => p.tags.includes(activeTag));
  }, [activeTag]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTagChange = (tag: string) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };
  
  const getWhatsAppUrl = (productName: string) => {
    const message = encodeURIComponent(`Hello, I'm interested in ordering the ${productName}.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };


  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline">Shop Our Collection</h2>
        <p className="text-muted-foreground mt-2">Browse our exclusive collection of export-quality apparel.</p>
      </div>
      
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {['All', ...allProductTags].map(tag => (
          <Button
            key={tag}
            variant={activeTag === tag ? 'default' : 'outline'}
            onClick={() => handleTagChange(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map(product => (
          <Card key={product.id} className="overflow-hidden group flex flex-col">
            <button onClick={() => handleProductClick(product)} className="w-full text-left">
              <div className="relative h-80 bg-secondary">
                {product.images[0] && 
                  <Image
                      src={product.images[0].url}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={product.images[0].hint}
                  />
                }
                {product.regularPrice && product.currentPrice < product.regularPrice && (
                    <Badge variant="destructive" className="absolute top-2 left-2">Sale</Badge>
                )}
              </div>
              <CardContent className="p-4 flex flex-col flex-grow">
                <h3 className="font-headline text-lg mb-2 truncate">{product.name}</h3>
              </CardContent>
            </button>
            <div className="p-4 pt-0">
                <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">৳{product.currentPrice}</span>
                    {product.regularPrice && product.currentPrice < product.regularPrice && (
                        <span className="text-md text-muted-foreground line-through">৳{product.regularPrice}</span>
                    )}
                </div>

                <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Sizes:</span>
                        <span className="text-muted-foreground">{product.sizes.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Colors:</span>
                        <div className="flex items-center gap-1.5">
                            {product.colors.map(color => (
                                <span key={color.name} className="h-4 w-4 rounded-full border" style={{ backgroundColor: color.hex }} title={color.name}></span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <Separator className="my-3" />
                    {product.isBulkAvailable && <p className="text-xs text-muted-foreground/80 text-center mb-3">{product.specialNote}</p>}
                    <Button asChild size="sm" className="w-full">
                        <Link href={getWhatsAppUrl(product.name)} target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://lh3.googleusercontent.com/d/1EPKpm9gEimHcoN-Pa51zI2OcYUn4Zgvw"
                            alt="WhatsApp Icon"
                            className="h-4 w-4 mr-2"
                        />
                        Chat to Order
                        </Link>
                    </Button>
                </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'ghost'}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
