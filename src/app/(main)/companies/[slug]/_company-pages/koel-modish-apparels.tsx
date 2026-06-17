
'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, BadgeCheck, Building, Download, Globe, Send, Shirt, Star, Users, Briefcase, MapPin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANIES_DATA } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { productsByCollection, type ProductCollection } from '@/lib/products';
import { ProductGallerySheet } from '@/components/shared/ProductGallerySheet';

const company = COMPANIES_DATA.find((c) => c.slug === 'koel-modish-apparels');

const brands = [
    { name: 'The North Face', logoUrl: 'https://lh3.googleusercontent.com/d/1hciRpR19JQIJ-T3TMpIrmwTKuUN0W41u' },
    { name: 'Tommy Hilfiger', logoUrl: 'https://lh3.googleusercontent.com/d/1UnTKfS9CCqWWLFL2w9_Nw_6tKjkbseGs' },
    { name: 'US Polo Assn', logoUrl: 'https://lh3.googleusercontent.com/d/1lFC6PPm6Et1-YefvGPcBCyvfFSFhqhyv' },
    { name: 'Colmar', logoUrl: 'https://lh3.googleusercontent.com/d/1rPmcnCFcE8vl7Px9Aw7eF0vCqgTd2p0d' },
];

const memberships = [
    { name: 'Ministry of Textiles & Jute', description: 'Official recognition and alignment with national textile policies.' },
    { name: 'Ministry of Commerce (Export)', description: 'Licensed and supported by the national body for export promotion.' },
    { name: 'BGMEA', description: 'Proud member of the Bangladesh Garment Manufacturers and Exporters Association.' },
];

const certifications = [
    { name: 'ISO 9001:2015', description: 'Certified for Quality Management Systems, ensuring consistent and high standards.' },
    { name: 'WRAP Certified', description: 'Committed to ethical production via the Worldwide Responsible Accredited Production program.' },
];

const awards = [
    { name: 'Top National Exporter Award', description: 'Recognized for outstanding export performance and contribution to the national economy.' },
    { name: 'Korea Seoul 2023 Innovation Award', description: 'Awarded for innovative design and manufacturing processes in the global market.' },
];

const sourcingOffices = [
    {
        name: 'China',
        description: 'Our China office is key for sourcing innovative materials and managing large-scale production runs with our trusted partners.',
        imageId: 'sourcing-china'
    },
    {
        name: 'India',
        description: 'We leverage India\'s rich textile heritage, sourcing unique fabrics and intricate craftsmanship for specialty apparel lines.',
        imageId: 'sourcing-india'
    },
    {
        name: 'Italy',
        description: 'Our Italian hub connects us with high-end design trends, premium materials, and luxury market insights.',
        imageId: 'sourcing-italy'
    }
]

export function KoelModishApparelsPageContent() {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedCollection, setSelectedCollection] = useState<ProductCollection | null>(null);

    const handleCollectionClick = (collection: ProductCollection) => {
        setSelectedCollection(collection);
        setGalleryOpen(true);
    };

    if (!company) return null;

    const awardImage = PlaceHolderImages.find(i => i.id === 'kma-award');

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[50vh] w-full bg-secondary">
                <Image
                    src={company.image.imageUrl}
                    alt={company.name}
                    fill
                    className="object-cover"
                    data-ai-hint={company.image.imageHint}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <Shirt className="h-16 w-16 mb-4 text-primary bg-white/90 p-3 rounded-lg" />
                    <h1 className="text-4xl md:text-6xl font-extrabold font-headline">
                        {company.name}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl">{company.description}</p>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-headline text-primary mb-4">A Legacy of Excellence in Global Apparel</h2>
                            <p className="text-muted-foreground">
                                For over a decade, Koel Modish Apparels has been a cornerstone of the global garment industry, successfully exporting a diverse range of products including t-shirts, sweaters, jackets, and more. As a reputed buying house for world-renowned brands, we have been instrumental in bringing significant foreign currency to Bangladesh. Our commitment to quality, timely delivery, and ethical practices makes us a trusted partner for buyers worldwide.
                            </p>
                        </div>
                        <div className="flex justify-center">
                           <div className="p-8 bg-secondary rounded-lg text-center">
                               <div className="text-7xl font-extrabold font-headline text-primary">10+</div>
                               <div className="text-lg font-semibold text-muted-foreground mt-2">Years of Successful Operation</div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Catalog */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline">Our Product Catalog</h2>
                        <p className="text-muted-foreground mt-2">A wide range of high-quality garments for men and women.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                        {productsByCollection.map(collection => {
                            const image = PlaceHolderImages.find(i => i.id === collection.coverImageId);
                            return (
                                <Card key={collection.name} className="overflow-hidden group cursor-pointer" onClick={() => handleCollectionClick(collection)}>
                                    <div className="relative h-64 bg-background">
                                        {image && (
                                            <Image
                                                src={image.imageUrl}
                                                alt={collection.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                data-ai-hint={image.imageHint}
                                            />
                                        )}
                                    </div>
                                    <CardContent className="p-4 text-center">
                                        <h3 className="font-semibold text-base">{collection.name}</h3>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

             {/* Sourcing Offices */}
             <section className="py-20 md:py-32 relative bg-gray-800 text-white">
                <Image
                    src="https://images.pexels.com/photos/8828391/pexels-photo-8828391.jpeg"
                    alt="Global map showing sourcing locations"
                    fill
                    className="object-cover"
                    data-ai-hint="world map"
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="container relative max-w-6xl mx-auto px-4">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline">Our Sourcing Offices</h2>
                        <p className="text-primary-foreground/80 mt-2">Our global presence ensures we source the best materials and talent worldwide.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {sourcingOffices.map(office => (
                           <div key={office.name} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                                <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                                <h3 className="text-2xl font-bold font-headline">{office.name}</h3>
                                <p className="text-sm text-primary-foreground/80 mt-2">{office.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline">We make brand clothes of</h2>
                        <p className="text-muted-foreground mt-2">Proudly producing for some of the world's leading fashion brands.</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                        {brands.map(brand => (
                            <div key={brand.name} className="flex-shrink-0">
                                <Image
                                    src={brand.logoUrl}
                                    alt={`${brand.name} logo`}
                                    width={130}
                                    height={50}
                                    className="object-contain h-[50px] w-auto grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Reach Infographic */}
            <section className="py-16 md:py-24 bg-primary/5">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline">Our Global Reach</h2>
                        <p className="text-muted-foreground mt-2">Delivering quality garments to major markets across the globe.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Card>
                            <CardHeader>
                                <Globe className="h-10 w-10 text-primary mx-auto" />
                                <CardTitle className="mt-2">2 Continents</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Regular exports to North America and Europe.</p>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardHeader>
                                <Users className="h-10 w-10 text-primary mx-auto" />
                                <CardTitle className="mt-2">5M+ Units</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Exported annually, showcasing our production capacity.</p>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardHeader>
                                <Star className="h-10 w-10 text-primary mx-auto" />
                                <CardTitle className="mt-2">99% Satisfaction</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Rate from our international buyer partners.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto px-4 space-y-16">
                    {/* Memberships */}
                    <div>
                        <h2 className="text-3xl font-bold font-headline text-center mb-8">Memberships</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {memberships.map(item => (
                                <Card key={item.name} className="text-center">
                                    <CardHeader>
                                        <Building className="h-8 w-8 text-primary mx-auto" />
                                        <CardTitle className="mt-2 text-lg">{item.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-sm text-muted-foreground">{item.description}</p></CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h2 className="text-3xl font-bold font-headline text-center mb-8">Certifications</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                           {certifications.map(item => (
                                <div key={item.name} className="flex items-start gap-4 p-6 bg-secondary rounded-lg">
                                    <BadgeCheck className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg">{item.name}</h4>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards */}
                    <div>
                         <h2 className="text-3xl font-bold font-headline text-center mb-8">Awards & Recognition</h2>
                         <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {awards.map(item => (
                                <Card key={item.name} className="text-center">
                                    <CardHeader>
                                        <Award className="h-10 w-10 text-primary mx-auto" />
                                        <CardTitle className="mt-2 text-xl">{item.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             {/* Downloads & Inquiries */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="mx-auto max-w-2xl text-center mb-8">
                        <h2 className="text-3xl font-bold font-headline">Downloads & Inquiries</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Button asChild size="lg" variant="outline">
                            <Link href="#">
                                <Download className="mr-2 h-5 w-5" />
                                Download Profile
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                             <Link href="#">
                                <Download className="mr-2 h-5 w-5" />
                                Download Catalog
                            </Link>
                        </Button>
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Link href="/companies/koel-modish-apparels/corporate-order">
                                <Briefcase className="mr-2 h-5 w-5" />
                                Corporate Order
                            </Link>
                        </Button>
                        <Button asChild size="lg" className="bg-gray-800 text-white hover:bg-gray-900">
                            <Link href="/companies/koel-modish-apparels/corporate-order">
                                <Send className="mr-2 h-5 w-5" />
                                Bulk Inquiry
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

             <div className="py-16 text-center">
                <Separator className="mb-8" />
                 <Button asChild variant="outline">
                    <Link href="/companies">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Companies
                    </Link>
                </Button>
            </div>
            
            {selectedCollection && (
                <ProductGallerySheet
                    isOpen={galleryOpen}
                    onOpenChange={setGalleryOpen}
                    categoryName={selectedCollection.name}
                    products={selectedCollection.products}
                />
            )}
        </div>
    );
}
