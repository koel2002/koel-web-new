
'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart, Briefcase, CheckCircle, Factory, FileCheck2, FileDown, Handshake, HeartHandshake, Leaf, Recycle, Scale, Send, ShieldCheck, TrendingUp, Users, Zap, DollarSign, Globe, Lightbulb, MapPin, Cpu, Link as LinkIcon, DatabaseZap, XCircle, FileBarChart, Group, Info } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { COMPANIES_DATA, PARTNER_LOGOS, CONTACT_INFO } from "@/lib/constants";
import { WasteTransformationVisualizer } from "@/components/shared/WasteTransformationVisualizer";
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Bar as RechartsBar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { QysenErpSection } from "@/components/shared/QysenErpSection";
import { RoadmapTimeline } from "@/components/shared/RoadmapTimeline";


const company = COMPANIES_DATA.find((c) => c.slug === 'jayqo-textiles');

const problems = [
    { icon: Recycle, title: "Massive Waste Volume", description: "Bangladesh generates over 500,000 tons of textile waste annually, with less than 7% being recycled locally. Most ends up in landfills or low-value export." },
    { icon: Scale, title: "High Compliance Barriers", description: "MSMEs struggle to meet global regulations (like the EU's DPP/ESPR), locking them out of lucrative international markets due to complex documentation and certification." },
    { icon: Factory, title: "Inefficient Operations", description: "Widespread lack of technology in MSMEs leads to poor management, production errors, order cancellations, and a lack of transparency for buyers." },
    { icon: Users, title: "MSME Isolation", description: "Small and medium enterprises lack a unified platform for support, resources, and collaboration, hindering their growth and potential." },
];

const solutions = [
    { icon: Group, title: "MSME Recycling Cluster", description: "A smart-hub model that aggregates MSMEs, providing shared resources, technology, and collective bargaining power to turn waste into wealth." },
    { icon: Zap, title: "QYSEN Digital Platform", description: "Our state-of-the-art AI-driven ERP provides end-to-end digital traceability, optimizing workflows and ensuring compliance for global buyers." },
    { icon: Handshake, title: "One-Stop Support Hub", description: "A comprehensive consulting and support platform for RMG entrepreneurs, offering guidance on everything from documentation to logistics and finance." },
];

const supportServices = [
    { icon: FileCheck2, title: "Documentation & Certification", description: "Streamlined assistance for navigating complex paperwork and achieving global standards like GRS and RCS." },
    { icon: Briefcase, title: "Business Strategy", description: "Expert consulting on market entry, financial planning, and sustainable growth for new entrepreneurs." },
    { icon: Globe, title: "Logistics & Supply Chain", description: "End-to-end support for import/export, warehousing, and efficient material flow." },
    { icon: Info, title: "Market Intelligence", description: "Access to crucial market data, trend analysis, and buyer requirements to stay competitive." },
];


const recyclingData = [
  { name: "Current State", Recycled: 7, Wasted: 93, },
  { name: "JAYQO 2030 Goal", Recycled: 80, Wasted: 20, }
];

const techAdoptionData = [
  { name: "Current MSME Tech", value: 15, fill: "hsl(var(--destructive) / 0.5)" },
  { name: "JAYQO Cluster Target", value: 95, fill: "hsl(var(--primary))" }
];

const complianceCostData = [
    { name: "Individual MSME", value: 100, fill: "hsl(var(--destructive) / 0.5)" },
    { name: "JAYQO Cluster", value: 40, fill: "hsl(var(--primary))" }
];

const waterSavingsData = [
    { name: "Conventional Dyeing", value: 100, fill: "hsl(var(--destructive) / 0.5)" },
    { name: "JAYQO Green Process", value: 40, fill: "hsl(var(--primary))" }
];


const impactBenefits = [
    { icon: DollarSign, title: "Economic", description: "Creates new revenue from waste, boosts exports, and taps into a $2B+ circular textile market." },
    { icon: Leaf, title: "Environmental", description: "Diverts 500K tons of waste from landfills and enables up to 60% water reuse in dyeing." },
    { icon: Users, title: "Social", description: "Generates thousands of green jobs and empowers local communities and small business owners." },
    { icon: Globe, title: "Global Standing", description: "Enhances the global competitiveness and reputation of Bangladesh's RMG industry through sustainability and transparency." },
];

export function JayqoTextilesPageContent() {
    if (!company) return null;

    const heroImage = PlaceHolderImages.find(i => i.id === 'hero-1');

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
          return (
            <div className="rounded-lg border bg-background p-2 shadow-sm">
              <p className="font-bold text-primary">{`${label}: ${payload[0].value}%`}</p>
            </div>
          );
        }
        return null;
      };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full bg-secondary">
                {heroImage && 
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                }
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
                <div className="container relative h-full flex flex-col justify-center items-center text-center px-4 text-white">
                    <Leaf className="h-16 w-16 mb-4 text-primary bg-white/90 p-3 rounded-lg" />
                    <h1 className="text-4xl md:text-6xl font-extrabold font-headline">
                       JAYQO Textiles & Accessories (BD) Ltd
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl">Pioneering a Circular Textile Economy for a Sustainable Bangladesh.</p>
                </div>
            </section>
            
            {/* The Opportunity Section */}
            <section className="py-16 md:py-24">
                <div className="container max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold font-headline text-primary">The $25B Problem & The $2.2B+ Opportunity</h2>
                    <p className="text-muted-foreground mt-4 max-w-4xl mx-auto">Bangladesh's Ready-Made Garment (RMG) sector is a global powerhouse, but it generates over 500,000 tons of textile waste annually. This isn't just waste—it's a multi-billion dollar opportunity waiting to be unlocked. JAYQO is positioned to capture this market by transforming waste into a valuable resource.</p>
                </div>
            </section>


            {/* Problem vs Solution Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold font-headline text-destructive/90 text-center">The Challenge for MSMEs</h3>
                            {problems.map(item => (
                                <div key={item.title} className="flex items-start gap-4">
                                    <div className="p-2 bg-destructive/10 rounded-full text-destructive mt-1">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                         <div className="space-y-8 p-8 rounded-lg bg-background shadow-lg">
                            <h3 className="text-2xl font-bold font-headline text-primary text-center">The JAYQO Solution</h3>
                            {solutions.map(item => (
                                <div key={item.title} className="flex items-start gap-4">
                                     <div className="p-2 bg-primary/10 rounded-full text-primary mt-1">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* How the Cluster Model Works */}
            <section className="py-16 md:py-24">
                <div className="container max-w-6xl mx-auto px-4">
                  <WasteTransformationVisualizer />
                </div>
            </section>
            
            <QysenErpSection />

            {/* One-Stop Support Hub */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">One-Stop Support Hub for RMG Entrepreneurs</h2>
                        <p className="text-muted-foreground mt-2">We empower new and existing MSMEs by removing barriers to growth, providing a comprehensive support platform under one roof.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {supportServices.map((service) => (
                            <Card key={service.title} className="flex items-start p-6 gap-6">
                                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                                  <service.icon className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{service.title}</h3>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             {/* Implementation Roadmap */}
            <section className="py-16 md:py-24">
                <div className="container max-w-4xl mx-auto px-4">
                    <RoadmapTimeline />
                </div>
            </section>
            
            {/* 2030 Vision Charts */}
            <section className="py-16 md:py-24 bg-secondary">
              <div className="container max-w-6xl mx-auto px-4">
                  <div className="text-center max-w-3xl mx-auto mb-12">
                      <h2 className="text-3xl font-bold font-headline">Our 2030 Vision: A Paradigm Shift in Key Metrics</h2>
                      <p className="text-muted-foreground mt-2">JAYQO's model is designed to dramatically improve key industry metrics, creating a more sustainable, efficient, and profitable RMG sector.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <Card>
                          <CardHeader>
                              <CardTitle className="text-base font-semibold">Textile Recycling Rate</CardTitle>
                              <CardDescription>From 7% to 80%</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <ResponsiveContainer width="100%" height={150}>
                                  <RechartsBarChart data={recyclingData} layout="vertical" barSize={20} margin={{ left: 2, right: 2, top: 5, bottom: 5 }}>
                                      <XAxis type="number" hide />
                                      <YAxis type="category" dataKey="name" stroke="hsl(var(--foreground))" axisLine={false} tickLine={false} width={120} fontSize={12} />
                                      <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                <p className="text-sm font-bold text-primary">{`${payload[0].payload.name}: ${payload[0].value}% Recycled`}</p>
                                            </div>
                                            )
                                        }
                                        return null
                                        }} />
                                      <RechartsBar dataKey="Recycled" stackId="a" fill="hsl(var(--primary))" radius={[4, 0, 0, 4]} />
                                      <RechartsBar dataKey="Wasted" stackId="a" fill="hsl(var(--destructive) / 0.5)" radius={[0, 4, 4, 0]} />
                                  </RechartsBarChart>
                              </ResponsiveContainer>
                          </CardContent>
                      </Card>
                      <Card>
                          <CardHeader>
                              <CardTitle className="text-base font-semibold">Tech Adoption in MSMEs</CardTitle>
                              <CardDescription>From ~15% to 95%+</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <ResponsiveContainer width="100%" height={150}>
                                <RechartsBarChart data={techAdoptionData} layout="vertical" barSize={20} margin={{ left: 2, right: 2, top: 5, bottom: 5 }}>
                                      <XAxis type="number" hide domain={[0, 100]} />
                                      <YAxis type="category" dataKey="name" stroke="hsl(var(--foreground))" axisLine={false} tickLine={false} width={120} fontSize={12} />
                                      <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<CustomTooltip />} />
                                      <RechartsBar dataKey="value" radius={[4, 4, 4, 4]} />
                                  </RechartsBarChart>
                              </ResponsiveContainer>
                          </CardContent>
                      </Card>
                       <Card>
                          <CardHeader>
                              <CardTitle className="text-base font-semibold">Compliance Cost Reduction</CardTitle>
                              <CardDescription>Projected 60% Lower Costs</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <ResponsiveContainer width="100%" height={150}>
                                  <RechartsBarChart data={complianceCostData} layout="vertical" barSize={20} margin={{ left: 2, right: 2, top: 5, bottom: 5 }}>
                                      <XAxis type="number" hide domain={[0, 100]} />
                                      <YAxis type="category" dataKey="name" stroke="hsl(var(--foreground))" axisLine={false} tickLine={false} width={120} fontSize={12} />
                                      <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<CustomTooltip />} />
                                      <RechartsBar dataKey="value" radius={[4, 4, 4, 4]} />
                                  </RechartsBarChart>
                              </ResponsiveContainer>
                          </CardContent>
                      </Card>
                      <Card>
                          <CardHeader>
                              <CardTitle className="text-base font-semibold">Water Usage in Dyeing</CardTitle>
                              <CardDescription>Up to 60% Savings</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <ResponsiveContainer width="100%" height={150}>
                                  <RechartsBarChart data={waterSavingsData} layout="vertical" barSize={20} margin={{ left: 2, right: 2, top: 5, bottom: 5 }}>
                                      <XAxis type="number" hide domain={[0, 100]} />
                                      <YAxis type="category" dataKey="name" stroke="hsl(var(--foreground))" axisLine={false} tickLine={false} width={120} fontSize={12} />
                                      <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<CustomTooltip />} />
                                      <RechartsBar dataKey="value" radius={[4, 4, 4, 4]} />
                                  </RechartsBarChart>
                              </ResponsiveContainer>
                          </CardContent>
                      </Card>
                  </div>
              </div>
            </section>

             {/* Projected Impact */}
            <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Projected Impact & Benefits</h2>
                        <p className="text-muted-foreground mt-2">Our model creates shared value across the economic, environmental, social, and industrial spheres.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {impactBenefits.map(benefit => (
                            <Card key={benefit.title} className="text-center">
                                <CardHeader className="items-center">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                      <benefit.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="mt-2 text-lg">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Market Validation */}
            <section className="py-16 md:py-24 bg-secondary">
                 <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-headline">Market Validation</h2>
                        <p className="text-muted-foreground mt-2">Our vision is backed by strong industry partnerships and active interest from major international buyers seeking sustainable and transparent supply chains.</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-75">
                        {PARTNER_LOGOS.map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center gap-2">
                            <Image
                            src={partner.image.imageUrl}
                            alt={partner.name}
                            width={100}
                            height={50}
                            className="object-contain grayscale"
                            data-ai-hint={partner.image.imageHint}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Investment CTA */}
            <section className="py-20 md:py-24 bg-primary text-primary-foreground">
                <div className="container max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold font-headline">Invest in a Greener Future, Secure Sustainable Returns.</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        Partner with JAYQO and be part of a profitable revolution in the textile industry. Our 2030 vision is to establish a total circular economy hub that sets a new global standard for the entire Bangladesh RMG sector.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Button asChild size="lg" variant="secondary">
                            <Link href="/investment-pitch">
                                <Briefcase className="mr-2"/> Explore Partnership Opportunities
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            <Link href="/contact">
                               <FileDown className="mr-2"/> Download Investor Deck
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
