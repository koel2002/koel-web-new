
import { Handshake, FileCheck2, Recycle, BarChart, Briefcase, ShoppingCart, Boxes, Warehouse, Shirt } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WasteTransformationVisualizer } from "@/components/shared/WasteTransformationVisualizer";
import { RoadmapTimeline } from "@/components/shared/RoadmapTimeline";
import { KEY_SERVICES } from "@/lib/constants";
import Link from "next/link";
import { QysenErpSection } from "@/components/shared/QysenErpSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Strategic Plan',
  description: 'A detailed look at our innovative services and the phased roadmap for building a sustainable textile ecosystem in Bangladesh.',
  openGraph: {
    title: 'Services & Strategic Plan',
    description: 'Explore our strategic services like digital traceability, centralized certification, and our implementation roadmap.',
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

const detailedServices = [
  {
    icon: Recycle,
    title: "Joint Fabric Collection",
    description: "We establish a collaborative network for the efficient and transparent collection of pre-consumer textile waste, ensuring a steady supply of raw materials for our recycling hub.",
  },
  {
    icon: FileCheck2,
    title: "Centralized Certification",
    description: "Our model provides MSMEs with access to crucial global certifications like GRS and RCS, breaking down compliance barriers and opening doors to international markets.",
  },
  {
    icon: Handshake,
    title: "Partnerships with Large Mills",
    description: "We foster strategic partnerships between our MSME network and large-scale mills, creating a robust, integrated supply chain for sustainable textiles.",
  },
  {
    icon: BarChart,
    title: "Digital Traceability Platforms",
    description: "Leveraging our AI-driven QYSEN ERP, we offer end-to-end digital traceability, providing the supply chain transparency demanded by global regulations and conscious consumers.",
  },
];

export default function ServicesPlanPage() {
  return (
    <div>
      <section className="bg-primary/5">
        <div className="container max-w-[1200px] mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">Our Services &amp; Strategic Plan</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A detailed look at our innovative services and the phased roadmap for building a sustainable textile ecosystem in Bangladesh.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">Detailed Strategic Services</h2>
            <p className="text-muted-foreground mt-2">The pillars of our Recycled Fabric Cluster Model.</p>          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {detailedServices.map((service) => (
              <Card key={service.title} className="flex flex-col sm:flex-row items-start gap-6 p-6">
                <div className="bg-primary/10 text-primary p-4 rounded-lg">
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

      {/* How the Cluster Model Works */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">How the Cluster Model Works</h2>
            <p className="text-muted-foreground mt-2">Our model promotes collaborative efforts to build a sustainable ecosystem, involving joint processing, centralized systems, and digital tools.</p>
          </div>
          <WasteTransformationVisualizer />
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <RoadmapTimeline />
        </div>
      </section>

      {/* Our Core Services */}
      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">
              A Look at Our Broader Services
            </h2>
            <p className="text-muted-foreground mt-2">
              Beyond our strategic textile initiatives, Koel Group operates a diverse portfolio of services driving innovation across multiple industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {KEY_SERVICES.map(service => (
               <div key={service.title} className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline mb-1">{service.title}</h3>
                  <Link href={service.href} className="text-sm font-semibold text-primary hover:underline">
                    {service.company}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QYSEN ERP Section */}
      <QysenErpSection />
    </div>
  );
}
