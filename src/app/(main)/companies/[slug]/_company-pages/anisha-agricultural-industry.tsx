
'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BrainCircuit, Check, Cloud, BarChart, FlaskConical, Leaf, LineChart, Package, Sprout, Tractor, Truck, Building, Users, User, HeartPulse } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANIES_DATA } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


const company = COMPANIES_DATA.find((c) => c.slug === 'anisha-agricultural-industry');

const solutions = [
    {
        icon: FlaskConical,
        title: "Crop R&D",
        description: "Developing high-yield, climate-resilient seed varieties tailored for Bangladesh's diverse ecosystems.",
        image: null
    },
    {
        icon: BrainCircuit,
        title: "Smart Farming",
        description: "AI-powered analytics for precision fertilization, pest control, and irrigation, delivered via our mobile platform.",
        image: PlaceHolderImages.find(i => i.id === 'agro-smart-farming')
    },
    {
        icon: Truck,
        title: "Supply Chain",
        description: "An integrated logistics network that reduces post-harvest loss and ensures produce reaches markets efficiently.",
        image: PlaceHolderImages.find(i => i.id === 'agro-supply-chain')
    }
];

const impactMetrics = [
    { value: "30%", label: "Increase in Crop Yield", icon: LineChart },
    { value: "25%", label: "Reduction in Water Usage", icon: Cloud },
    { value: "40%", label: "Decrease in Post-Harvest Loss", icon: Package },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Pilot Program Launch",
    description: "Deploy our platform with 1,000 farmers in key regions, focusing on data collection and model refinement.",
  },
  {
    phase: "Phase 2",
    title: "Platform Expansion",
    description: "Scale to 10,000 users, integrating weather APIs, satellite imagery, and market price data.",
  },
  {
    phase: "Phase 3",
    title: "Supply Chain Integration",
    description: "Build out logistics and processing infrastructure, establishing direct-to-market channels for farmers.",
  },
  {
    phase: "Phase 4",
    title: "Nationwide Scaling",
    description: "Expand the model across Bangladesh, forging partnerships with government and financial institutions.",
  },
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

const partnerships = [
    { name: "Ministry of Health", description: "Collaborating on national digital health initiatives." },
    { name: "BRAC", description: "Extending accessible diagnostics to rural communities through NGO partnership." },
    { name: "Local Hospitals", description: "Providing specialized testing support for partner hospitals." },
];


export function AnishaAgriculturalPageContent() {
    if (!company) return null;

    const visionImage = PlaceHolderImages.find(i => i.id === 'agro-tech-vision');

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[50vh] w-full bg-secondary py-12 md:py-0">
                <Image
                    src={company.image.imageUrl}
                    alt={company.name}
                    fill
                    className="object-cover"
                    data-ai-hint={company.image.imageHint}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <Tractor className="h-16 w-16 mb-4 text-primary bg-white/90 p-3 rounded-lg" />
                    <h1 className="text-4xl md:text-6xl font-extrabold font-headline">
                        {company.name}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl">Sowing the seeds of a digital agricultural revolution in Bangladesh.</p>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {visionImage && (
                             <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={visionImage.imageUrl}
                                    alt={visionImage.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={visionImage.imageHint}
                                />
                            </div>
                        )}
                        <div className="flex items-start gap-6">
                            <BrainCircuit className="h-16 w-16 text-primary flex-shrink-0 mt-1" />
                            <div className="md:order-first">
                                <h2 className="text-3xl font-bold font-headline text-primary mb-4">Our Vision: A Smart & Sustainable Harvest</h2>
                                <p className="text-muted-foreground mb-4">
                                    We envision a future where every farmer in Bangladesh is empowered by technology. Anisha Agricultural Industry is building a full-stack "Farm-to-Fork" digital ecosystem. We provide farmers with high-quality seeds from our R&D, guide them with data-driven insights for cultivation, and connect them directly to a fair market, eliminating inefficiencies and boosting their income.
                                </p>
                                <div className="flex items-center gap-4 text-primary font-semibold">
                                    <Check className="h-5 w-5" />
                                    <span>Empowering Farmers, Nourishing the Nation.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Key Solutions Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">A Complete Agro-Tech Ecosystem</h2>
                        <p className="text-muted-foreground mt-2">From advanced research to market linkage, we provide end-to-end solutions for the modern farmer.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.map((solution) => (
                            <Card key={solution.title} className="overflow-hidden text-center flex flex-col">
                                {solution.image &&
                                    <div className="relative h-48">
                                        <Image src={solution.image.imageUrl} alt={solution.title} fill className="object-cover" data-ai-hint={solution.image.imageHint} />
                                    </div>
                                }
                                <CardHeader className="items-center">
                                     <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <solution.icon className="h-8 w-8" />
                                     </div>
                                    <CardTitle className="mt-2">{solution.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{solution.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             {/* How it Works Section */}
            <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto px-4">
                     <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-headline">The Cycle of Growth</h2>
                        <p className="text-muted-foreground mt-2">Our integrated platform connects every stage of the agricultural value chain.</p>
                    </div>
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 hidden md:block"></div>
                        {[{icon: FlaskConical, title: "R&D"}, {icon: Sprout, title: "Smart Cultivation"}, {icon: BarChart, title: "Data Analytics"}, {icon: Truck, title: "Market Linkage"}].map((step, index) => (
                             <div key={index} className="flex flex-col items-center text-center max-w-[150px] z-10 bg-background px-4">
                                <div className="bg-secondary text-primary p-5 rounded-full mb-3 border-4 border-background">
                                    <step.icon className="h-10 w-10" />
                                </div>
                                <h4 className="font-semibold">{step.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-16 md:py-24 bg-primary/5">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Projected National Impact</h2>
                        <p className="text-muted-foreground mt-2">By empowering farmers, we are driving significant economic and environmental benefits for Bangladesh.</p>
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

            {/* Implementation Roadmap */}
            <section className="py-16 md:py-24">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold font-headline text-center mb-12">Our Strategic Roadmap</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>
                        {roadmapPhases.map((item, index) => (
                        <div
                            key={item.title}
                            className="flex items-center w-full mb-8 md:[&:nth-child(even)]:flex-row-reverse"
                        >
                            <div className="hidden md:block w-1/2"></div>
                            <div className="w-full md:w-1/2 md:[&:nth-child(odd)]:pr-8 md:[&:nth-child(even)]:pl-8">
                                <div className="p-5 rounded-lg bg-secondary shadow-md">
                                    <p className="text-primary font-semibold text-sm mb-1">{item.phase}</p>
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-headline">Our Expert Team</h2>
                        <p className="text-muted-foreground mt-2">A dedicated team of professionals committed to your health, blending clinical expertise with digital innovation.</p>
                    </div>
                    
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold font-headline text-center mb-8">Advisors</h3>
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
                            <h3 className="text-2xl font-bold font-headline text-center mb-8">Technology Experts</h3>
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
            <section className="py-16 md:py-24">
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
