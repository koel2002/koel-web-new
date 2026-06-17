
'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Box, Boxes, CalendarDays, CheckCircle, Package, Palette, Rocket, Shirt, ShoppingCart, Star, Users, BrainCircuit, Bot, Paintbrush, Truck, Facebook, Linkedin, Instagram, Building, Briefcase, Heart, Globe2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANIES_DATA } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ShopSection } from "@/components/shared/ShopSection";

const company = COMPANIES_DATA.find((c) => c.slug === 'koel-shop');

const categories = [
    { name: "T-Shirts", imageId: "product-tshirt" },
    { name: "Polo Shirts", imageId: "koel-shop-polo" },
    { name: "Hoodies", imageId: "product-hoodie" },
    { name: "Sweatshirts", imageId: "koel-shop-sweatshirt" },
    { name: "Winter Jackets", imageId: "product-jacket" },
    { name: "Trousers", imageId: "product-trousers" },
];

const whyShopWithUs = [
    { icon: Star, title: "Export Quality", description: "Get access to premium, international-standard apparel previously available only to European markets." },
    { icon: Box, title: "Nationwide Delivery", description: "We deliver to every corner of Bangladesh, right to your doorstep." },
    { icon: CheckCircle, title: "Cash on Delivery", description: "Shop with confidence and pay only when you receive your products. No upfront risk." },
];

const impactMetrics = [
    { value: "50,000+", label: "Products Sold", icon: Shirt },
    { value: "500+", label: "Unique Products", icon: Boxes },
    { value: "64", label: "Districts Covered", icon: CalendarDays },
    { value: "10,000+", label: "Happy Customers", icon: Users },
];

const teamData = [
  {
    icon: BrainCircuit,
    title: 'Sales & Marketing',
    description: 'The driving force behind our growth, connecting our products with customers nationwide.',
    memberCount: 6,
  },
  {
    icon: Bot,
    title: 'Technology',
    description: 'The architects of our seamless online experience, building and maintaining our digital storefront.',
    memberCount: 4,
  },
  {
    icon: Paintbrush,
    title: 'Creative',
    description: 'The visual storytellers who curate our collections and shape our brand identity.',
    memberCount: 3,
  },
  {
    icon: Truck,
    title: 'Delivery & Support',
    description: 'The dedicated team ensuring your orders arrive safely and your questions are always answered.',
    memberCount: 12,
  },
];


const brands = [
    { name: 'The North Face', logoUrl: 'https://lh3.googleusercontent.com/d/1hciRpR19JQIJ-T3TMpIrmwTKuUN0W41u' },
    { name: 'Tommy Hilfiger', logoUrl: 'https://lh3.googleusercontent.com/d/1UnTKfS9CCqWWLFL2w9_Nw_6tKjkbseGs' },
    { name: 'US Polo Assn', logoUrl: 'https://lh3.googleusercontent.com/d/1lFC6PPm6Et1-YefvGPcBCyvfFSFhqhyv' },
    { name: 'Colmar', logoUrl: 'https://lh3.googleusercontent.com/d/1rPmcnCFcE8vl7Px9Aw7eF0vCqgTd2p0d' },
];

const customOrderData = [
  {
    icon: CalendarDays,
    title: "Event Organizers",
    description: "Perfect for social gatherings, concerts, or festivals. Get custom-designed t-shirts, polos, or jackets to make your event memorable.",
    link: "/contact",
    imageId: "custom-order-event"
  },
  {
    icon: Globe2,
    title: "Tour Operators",
    description: "Organize group tours with matching apparel. We provide high-quality, custom-printed shirts, jackets, or polos for your travel groups.",
    link: "/contact",
    imageId: "custom-order-tour"
  },
  {
    icon: Briefcase,
    title: "Corporate Offices",
    description: "Outfit your team for corporate events, celebrations, or daily wear. We offer everything from custom polos and blazers to premium suits.",
    link: "/companies/koel-modish-apparels/corporate-order",
    imageId: "custom-order-corporate"
  },
  {
    icon: Heart,
    title: "Family Celebrations",
    description: "Create matching outfits for family events like Eid, weddings, or birthdays. We can customize Panjabis, sarees, salwar kameez, and more.",
    link: "/contact",
    imageId: "custom-order-family"
  }
];


export function KoelShopPageContent() {
    if (!company) return null;
    
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[50vh] w-full bg-secondary">
                {company && (
                    <Image
                        src={company.image.imageUrl}
                        alt={company.name}
                        fill
                        className="object-cover"
                        data-ai-hint={company.image.imageHint}
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <Image
                        src="https://lh3.googleusercontent.com/d/1sU2t221TYKyUhh-FfeDvsj0ll7pqF2rP"
                        alt="Koel Shop Logo"
                        width={96}
                        height={96}
                        className="h-24 w-24 object-contain mb-4"
                    />
                    <h1 className="text-4xl md:text-6xl font-extrabold font-headline">
                        {company.name}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl">Export Quality Fashion, Delivered to Your Doorstep.</p>
                     <div className="mt-8 flex items-center gap-4">
                        <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                            <Link href="https://www.facebook.com/koelshoponline" target="_blank" rel="noopener noreferrer">
                                <Facebook className="h-6 w-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                            <Link href="https://www.linkedin.com/company/koelshop" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                            <Link href="https://www.instagram.com/koelcouture" target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-6 w-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Shop With Us Section */}
            <section className="py-16 md:py-24">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Why Shop With Us?</h2>
                        <p className="text-muted-foreground mt-2">The best of Bangladesh's export apparel, now available for you.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyShopWithUs.map((item) => (
                            <Card key={item.title} className="text-center">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full text-primary">
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="mt-2">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Product Categories */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Our Product Categories</h2>
                        <p className="text-muted-foreground mt-2">Discover a wide range of premium apparel for every occasion.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                        {categories.map(cat => {
                            const image = PlaceHolderImages.find(i => i.id === cat.imageId);
                            return (
                                <Link href="#" key={cat.name} className="group text-center">
                                    <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden border-4 border-background shadow-lg group-hover:border-primary transition-colors">
                                        {image && (
                                            <Image
                                                src={image.imageUrl}
                                                alt={cat.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                data-ai-hint={image.imageHint}
                                            />
                                        )}
                                    </div>
                                    <h3 className="font-semibold text-base mt-4">{cat.name}</h3>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Shop Section */}
            <section id="shop-section" className="py-16 md:py-24">
              <div className="container max-w-6xl mx-auto px-4">
                <ShopSection />
              </div>
            </section>

            {/* Impact Section */}
            <section className="py-16 md:py-24 bg-primary/5">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Our Impact by the Numbers</h2>
                        <p className="text-muted-foreground mt-2">Bringing quality fashion to every corner of Bangladesh.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {impactMetrics.map(metric => (
                            <div key={metric.label} className="p-6 bg-background rounded-lg shadow-sm">
                                <metric.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                                <div className="text-3xl font-extrabold font-headline text-primary">{metric.value}</div>
                                <p className="text-muted-foreground mt-1 text-sm font-semibold">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Orders Section */}
            <section className="py-16 md:py-24">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-headline">Custom Orders for Every Occasion</h2>
                        <p className="text-muted-foreground mt-2">Your vision, our fabric. We create custom apparel for events, tours, corporate needs, and family celebrations.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {customOrderData.map((item) => {
                            const image = PlaceHolderImages.find(i => i.id === item.imageId);
                            return (
                                <Card key={item.title} className="text-center flex flex-col overflow-hidden group">
                                    {image && (
                                        <div className="relative h-48">
                                            <Image
                                                src={image.imageUrl}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                                    </CardContent>
                                    <div className="p-6 pt-0">
                                        <Button asChild variant="outline">
                                            <Link href={item.link}>Contact Us</Link>
                                        </Button>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-headline">Meet the Team Behind Koel Shop</h2>
                        <p className="text-muted-foreground mt-2">A passionate group of experts dedicated to bringing you the best online shopping experience.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamData.map((team) => (
                        <Card key={team.title} className="text-center">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <team.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="mt-2">{team.title}</CardTitle>
                                <CardDescription>{team.memberCount} Members</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">{team.description}</p>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands Section */}
             <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Brands You Love</h2>
                        <p className="text-muted-foreground mt-2">Proudly offering products from world-renowned brands.</p>
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
            
            <div className="py-16 text-center">
                <Separator className="mb-8" />
                <Button asChild variant="outline">
                    <Link href="/companies">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Companies
                    </Link>
                </Button>
            </div>
        </div>
    );
}


    
