
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Group, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PARTNER_LOGOS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Us',
  description: 'Discover Koel Group\'s unique competitive advantages, including our MSME Cluster Model, compliance-driven technology, and commitment to 100% recycled materials.',
  openGraph: {
    title: 'Why Koel Group',
    description: 'We are building a future-proof, sustainable ecosystem that offers unparalleled advantages for partners and investors.',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/d/155-bxgKG1cfePWWNoJr6E0UB5QYlWtDJ',
        width: 140,
        height: 40,
        alt: 'Koel Group Logo',
      },
    ],
  },
};

const advantages = [
  {
    icon: Group,
    title: "Unique MSME Cluster Model",
    description: "Significantly reduces operational costs and provides essential resources (ETPs, certification) collectively to small businesses.",
  },
  {
    icon: Zap,
    title: "Compliance-Driven Technology",
    description: "Exclusively uses AI-driven ERP and blockchain traceability, addressing global demand for supply chain transparency (DPP).",
  },
  {
    icon: ShieldCheck,
    title: "100% Recycled Commitment",
    description: "Utilizes 100% recycled sources, minimizing environmental impact and positioning us as a leader in sustainable manufacturing.",
  },
];

export default function WhyUsPage() {
  const commitmentImage = PlaceHolderImages.find(i => i.id === 'why-us-commitment');

  return (
    <div>
      <section className="bg-secondary">
        <div className="container max-w-[1200px] mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">Why Partner with Koel Group?</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are not just another textile company. We are building a future-proof, sustainable ecosystem that offers unparalleled advantages for partners and investors.
          </p>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">Our Competitive Edge</h2>
            <p className="text-muted-foreground mt-2">The unique strengths that set us apart.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <Card key={adv.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <adv.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">{adv.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Validation & Partnerships */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">Market Validation &amp; Key Partnerships</h2>
            <p className="text-muted-foreground mt-2">Trusted by industry leaders and validated by active buyer interest.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-75">
            {PARTNER_LOGOS.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-2">
                <Image
                  src={partner.image.imageUrl}
                  alt={`${partner.name} - a partner of Koel Group`}
                  width={120}
                  height={60}
                  className="object-contain grayscale"
                  data-ai-hint={partner.image.imageHint}
                />
                <span className="text-xs font-semibold text-muted-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-foreground">Key Industry Partnerships Secured &amp; Active Buyer Interest from International Brands</p>
          </div>
        </div>
      </section>
      
      {/* MSME Partner Portal */}
       <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto text-center">
           <h2 className="text-3xl font-bold font-headline">Empowering MSMEs</h2>
           <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Micro, Small, and Medium Enterprises are the backbone of our economy. We provide them with the technology, resources, and market access needed to thrive in the global sustainable textile industry.
           </p>
           <Button asChild size="lg" className="mt-8">
             <Link href="/contact">Become an MSME Partner</Link>
           </Button>
        </div>
       </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Our Commitment: 100% Recycled</h2>
            <p className="text-muted-foreground mb-4">
              Sustainability is not an afterthought; it is our foundation. We are committed to using 100% recycled textile sources, drastically minimizing our environmental footprint. This approach reduces waste, conserves water, and lowers carbon emissions, positioning us and our partners as true leaders in sustainable manufacturing.
            </p>
            <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-primary" /> Minimizes environmental impact</li>
                <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-primary" /> Meets growing consumer demand for eco-friendly products</li>
                <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-primary" /> Aligns with global regulations like the EU's DPP</li>
            </ul>
            <Button asChild>
                <Link href="/csr-impact">See Our Impact</Link>
            </Button>
          </div>
          {commitmentImage && (
            <div className="relative h-80 w-80 mx-auto">
              <Image
                src={commitmentImage.imageUrl}
                alt={commitmentImage.description}
                fill
                className="object-contain"
                data-ai-hint={commitmentImage.imageHint}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
