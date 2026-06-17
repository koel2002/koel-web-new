
'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Beaker, FileText, HeartPulse, Home, Stethoscope, Users, User, Video, BrainCircuit, Handshake, Shield, Building, ChevronLeft, ChevronRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANIES_DATA } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from 'react';


const company = COMPANIES_DATA.find((c) => c.slug === 'arham-diagnostic-center');

const services = [
    {
        icon: Home,
        title: "Home Sample Collection",
        description: "No need to travel. Our certified phlebotomists collect samples from your doorstep, ensuring comfort and convenience.",
    },
    {
        icon: FileText,
        title: "Digital Report Delivery",
        description: "Access your secure health reports anytime, anywhere through our web portal and mobile app.",
    },
    {
        icon: Video,
        title: "Virtual Follow-ups",
        description: "Consult with our doctors online to discuss your reports, eliminating unnecessary clinic visits.",
    },
    {
        icon: Beaker,
        title: "Advanced Lab Testing",
        description: "Our state-of-the-art facility in Uttara provides a comprehensive range of accurate diagnostic tests.",
    }
];

const medicalLeaders = [
    { name: "Dr. Rubina Yasmin", specialty: "Chief Medical Officer", image: "https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg", dataAiHint: "female doctor" },
    { name: "Dr. Ahmed Hossain", specialty: "Head of Diagnostics", image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg", dataAiHint: "male doctor" },
];

const advisoryBoard = [
    { name: "Dr. Farhana Islam", specialty: "Lead Pathologist", image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg", dataAiHint: "doctor portrait" },
    { name: "Dr. Kabir Chowdhury", specialty: "Digital Health Lead", image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg", dataAiHint: "smiling doctor" },
];

const techTeam = [
    { name: "Mr. Alex Doe", specialty: "Chief Technology Officer", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg", dataAiHint: "male professional" },
    { name: "Ms. Jane Smith", specialty: "Head of Operations", image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg", dataAiHint: "female professional" },
];

const impactMetrics = [
    { value: "100,000+", label: "Tests Performed", icon: Beaker },
    { value: "50,000+", label: "Patients Served", icon: Users },
    { value: "24/7", label: "Digital Access", icon: FileText },
];

const partnerships = [
    { name: "Ministry of Health", description: "Collaborating on national digital health initiatives." },
    { name: "BRAC", description: "Extending accessible diagnostics to rural communities through NGO partnership." },
    { name: "Local Hospitals", description: "Providing specialized testing support for partner hospitals." },
];

const corporateClients = [
    { name: 'Grameenphone', logoUrl: 'https://cdn.worldvectorlogo.com/logos/grameenphone-1.svg' },
    { name: 'bKash', logoUrl: 'https://cdn.worldvectorlogo.com/logos/bkash.svg' },
    { name: 'Square Pharmaceuticals', logoUrl: 'https://logowik.com/content/uploads/images/square-pharmaceuticals-ltd5719.logowik.com.webp' },
    { name: 'Robi', logoUrl: 'https://logowik.com/content/uploads/images/robi3234.logowik.com.webp' },
    { name: 'Unilever Bangladesh', logoUrl: 'https://logowik.com/content/uploads/images/unilever-new-20222124.logowik.com.webp' },
    { name: 'BRAC Bank', logoUrl: 'https://logowik.com/content/uploads/images/brac-bank-ltd5128.logowik.com.webp' },
    { name: 'Beximco', logoUrl: 'https://logowik.com/content/uploads/images/beximco-pharmaceuticals-ltd2876.logowik.com.webp' },
    { name: 'City Bank', logoUrl: 'https://logowik.com/content/uploads/images/the-city-bank-ltd5079.logowik.com.webp' },
    { name: 'Nestle Bangladesh', logoUrl: 'https://logowik.com/content/uploads/images/nestle-13.logowik.com.webp' },
    { name: 'Standard Chartered', logoUrl: 'https://logowik.com/content/uploads/images/standard-chartered-bank8681.logowik.com.webp' },
    { name: 'Apex Footwear', logoUrl: 'https://logowik.com/content/uploads/images/apex-footwear-limited8148.logowik.com.webp' },
    { name: 'HSBC Bangladesh', logoUrl: 'https://logowik.com/content/uploads/images/hsbc-holdings-plc2347.logowik.com.webp' },
    { name: 'Pran-RFL Group', logoUrl: 'https://logowik.com/content/uploads/images/pran-rfl-group5729.logowik.com.webp' },
    { name: 'Akij Group', logoUrl: 'https://logowik.com/content/uploads/images/akij-group3893.logowik.com.webp' },
    { name: 'EBL', logoUrl: 'https://logowik.com/content/uploads/images/eastern-bank-ltd-ebl4989.logowik.com.webp' },
];


export function ArhamDiagnosticCenterPageContent() {
    if (!company) return null;

    const hybridCareImage = PlaceHolderImages.find(i => i.id === 'arham-hybrid-care');
    const autoplayPlugin = React.useRef(Autoplay({delay: 2000, stopOnInteraction: true}));

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[50vh] w-full bg-secondary py-12 md:py-0">
                {company && 
                    <Image
                        src={company.image.imageUrl}
                        alt={company.name}
                        fill
                        className="object-cover"
                        data-ai-hint={company.image.imageHint}
                        priority
                    />
                }
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <HeartPulse className="h-16 w-16 mb-4 text-primary bg-white/90 p-3 rounded-lg" />
                    <h1 className="text-4xl md:text-6xl font-extrabold font-headline">
                        {company.name}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl">Accessible, Affordable, and World-Class Healthcare for Every Citizen of Bangladesh.</p>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex items-start gap-6">
                            <BrainCircuit className="h-16 w-16 text-primary flex-shrink-0 mt-1" />
                            <div className="md:order-first">
                                <h2 className="text-3xl font-bold font-headline text-primary mb-4">Our Vision: Hybrid Healthcare for All</h2>
                                <p className="text-muted-foreground mb-4">
                                    Arham Diagnostic Center is revolutionizing healthcare by blending a state-of-the-art physical facility in Dhaka with a powerful, user-friendly digital platform. We believe that quality healthcare is a right, not a privilege. Our mission is to make diagnostic services and expert medical advice accessible to everyone, from bustling city centers to the most remote rural areas, all through a seamless, tech-driven experience.
                                </p>
                            </div>
                        </div>
                        {hybridCareImage &&
                            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={hybridCareImage.imageUrl}
                                    alt={hybridCareImage.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={hybridCareImage.imageHint}
                                />
                            </div>
                        }
                    </div>
                </div>
            </section>
            
            {/* Core Services Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Healthcare at Your Fingertips</h2>
                        <p className="text-muted-foreground mt-2">A comprehensive suite of services designed for your convenience and well-being.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <Card key={service.title} className="text-center">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full text-primary">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="mt-2">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto px-4">
                     <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-headline">A Seamless Patient Journey</h2>
                        <p className="text-muted-foreground mt-2">Experience healthcare that revolves around you. Our 4-step process makes getting the care you need simpler than ever.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8 text-center relative">
                        {[{icon: Stethoscope, title: "Book Online"}, {icon: Home, title: "Home Collection"}, {icon: FileText, title: "Get Digital Report"}, {icon: Video, title: "Virtual Follow-up"}].map((step, index) => (
                             <div key={index} className="flex flex-col items-center z-10">
                                <div className="bg-secondary text-primary p-5 rounded-full mb-3 border-4 border-background">
                                    <step.icon className="h-10 w-10" />
                                </div>
                                <h4 className="font-semibold">{step.title}</h4>
                                {index < 3 && <div className="absolute top-1/2 left-1/2 w-1/4 h-0.5 bg-border -z-10 hidden md:block" style={{ transform: `translate(${index * 100}%, -50%)`, left: '12.5%' }} />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Impact Section */}
            <section className="py-16 md:py-24 bg-primary/5">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Our Impact at a Glance</h2>
                        <p className="text-muted-foreground mt-2">Delivering reliable and accessible healthcare services across the nation.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {impactMetrics.map(metric => (
                            <Card key={metric.label}>
                                <CardContent className="p-6">
                                    <metric.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                                    <div className="text-4xl font-extrabold font-headline text-primary">{metric.value}</div>
                                    <p className="text-muted-foreground mt-2 font-semibold">{metric.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patient Data Platform */}
             <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold font-headline">Your Personal Health Database</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        We are building a secure, centralized health database for every patient. This visionary platform will empower you to manage your health records, share them securely with specialists for second opinions, and contribute to a healthier future for Bangladesh.
                    </p>
                    <Button asChild className="mt-8">
                        <Link href="#">Learn About Data Privacy</Link>
                    </Button>
                </div>
            </section>


            {/* Meet Our Team Section */}
            <section className="py-16 md:py-24">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-headline">Our Expert Team</h2>
                        <p className="text-muted-foreground mt-2">A dedicated team of professionals committed to your health, blending clinical expertise with digital innovation.</p>
                    </div>
                    
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold font-headline text-center mb-8">Medical Leadership</h3>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto">
                                {medicalLeaders.map((member) => (
                                <Card key={member.name} className="text-center">
                                    <CardContent className="p-6">
                                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20">
                                        <AvatarImage src={member.image} alt={`${member.name} - ${member.specialty}`} data-ai-hint={member.dataAiHint} />
                                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <h4 className="font-bold text-lg">{member.name}</h4>
                                    <p className="text-primary text-sm font-medium">{member.specialty}</p>
                                    </CardContent>
                                </Card>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold font-headline text-center mb-8">Advisory Board</h3>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto">
                                {advisoryBoard.map((member) => (
                                <Card key={member.name} className="text-center">
                                    <CardContent className="p-6">
                                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20">
                                        <AvatarImage src={member.image} alt={`${member.name} - ${member.specialty}`} data-ai-hint={member.dataAiHint} />
                                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <h4 className="font-bold text-lg">{member.name}</h4>
                                    <p className="text-primary text-sm font-medium">{member.specialty}</p>
                                    </CardContent>
                                </Card>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold font-headline text-center mb-8">Technology & Operations</h3>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto">
                                {techTeam.map((member) => (
                                <Card key={member.name} className="text-center">
                                    <CardContent className="p-6">
                                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20">
                                        <AvatarImage src={member.image} alt={`${member.name} - ${member.specialty}`} data-ai-hint={member.dataAiHint} />
                                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <h4 className="font-bold text-lg">{member.name}</h4>
                                    <p className="text-primary text-sm font-medium">{member.specialty}</p>
                                    </CardContent>
                                </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Partnerships */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Partnerships & Associations</h2>
                        <p className="text-muted-foreground mt-2">Working together with leading organizations to build a healthier Bangladesh.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {partnerships.map(item => (
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
            </section>

            {/* Corporate Clients */}
            <section className="py-16 md:py-24">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Trusted by Leading Companies</h2>
                        <p className="text-muted-foreground mt-2">We provide corporate health and wellness solutions to major companies in Bangladesh.</p>
                    </div>
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        plugins={[autoplayPlugin.current]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {corporateClients.map((client) => (
                                <CarouselItem key={client.name} className="basis-1/2 sm:basis-1/3 md:basis-1/5">
                                    <div className="p-1">
                                        <div className="h-24 flex items-center justify-center p-4 bg-secondary rounded-lg">
                                            <Image
                                                src={client.logoUrl}
                                                alt={`${client.name} logo`}
                                                width={100}
                                                height={50}
                                                className="object-contain h-10 w-auto grayscale"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                         <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
                        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
                    </Carousel>
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
