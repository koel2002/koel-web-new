
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { COMPANIES_DATA, KEY_SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shirt, Globe, Briefcase, Users, Handshake, Factory } from 'lucide-react';
import { QysenErpSection } from '@/components/shared/QysenErpSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Koel Group, a pioneer in sustainable growth across textiles, agriculture, and healthcare in Bangladesh for over 10 years. Discover our mission, vision, and our family of companies.',
  openGraph: {
    title: 'About Koel Group',
    description: 'Learn about Koel Group, a pioneer in sustainable growth across textiles, agriculture, and healthcare in Bangladesh for over 10 years.',
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

const PageHeader = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-secondary">
    <div className="container max-w-[1200px] mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">{title}</h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </div>
  </div>
);

export default function AboutPage() {
  const jayqoFactoryImage = PlaceHolderImages.find(i => i.id === 'jayqo-factory');
  const storyImage = PlaceHolderImages.find(i => i.id === 'about-overview');
  
  const infographicData = [
    { icon: Shirt, value: "500k+", label: "Garments Exported" },
    { icon: Globe, value: "6", label: "Destination Countries" },
    { icon: Briefcase, value: "20+", label: "Buyers Served" },
    { icon: Users, value: "40k+", label: "Customers Served" },
    { icon: Handshake, value: "8", label: "Partner Factories" },
    { icon: Factory, value: "1", label: "Green Factory" },
  ];

  return (
    <div>
      <PageHeader
        title="About Koel Group"
        description="For over 10 years, we have been a pioneer in delivering excellence, innovation, and sustainable growth across multiple industries."
      />

      {/* Group Overview */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Weaving a Better, Greener Bangladesh</h2>
            <p className="text-muted-foreground mb-6">
              Koel Group is a diversified conglomerate driven by a singular vision: to build a more sustainable and prosperous future for Bangladesh. Through our ventures in the RMG, agriculture, and healthcare sectors, we are committed to innovative solutions that create value for our stakeholders and society. We champion sustainable practices, empower local communities, and aim to set new standards of excellence on the global stage.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src={PlaceHolderImages.find(i => i.id === 'about-overview')?.imageUrl || ''} 
              alt="Koel Group team members collaborating in a modern office space" 
              fill 
              className="object-cover" 
              data-ai-hint="team collaboration" 
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4 text-primary">Our Vision</h2>
              <p className="text-lg text-muted-foreground italic">
                "To revolutionize the RMG sector through circular economy principles, creating a resilient, compliant, and sustainable textile ecosystem."
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground italic">
                "To integrate MSMEs into a smart green factory network, transforming textile waste into sustainable products through digital traceability, empowering communities, and achieving global standards."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Our Core Services
            </h2>
            <p className="text-muted-foreground mt-2">
              A diverse portfolio of services driving innovation and sustainability across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {KEY_SERVICES.map(service => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                      <Link href={service.href} className="text-sm font-semibold text-primary hover:underline">
                        {service.company}
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Infographic Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Our Impact at a Glance
            </h2>
            <p className="text-muted-foreground mt-2">
              Quantifying our journey of growth, sustainability, and global reach over the last decade.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {infographicData.map(item => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full text-primary mb-3">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-extrabold font-headline text-primary">{item.value}</div>
                <p className="text-sm font-semibold text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Companies */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">Our Family of Companies</h2>
            <p className="text-muted-foreground mt-2">A diverse portfolio driven by innovation and impact.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANIES_DATA.map(company => (
              <Link key={company.slug} href={`/companies/${company.slug}`} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardContent className="p-6 text-center">
                    <company.Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-headline mb-2">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Jayqo Green Factory Pilot */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          {jayqoFactoryImage && (
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src={jayqoFactoryImage.imageUrl} 
                alt={jayqoFactoryImage.description}
                fill 
                className="object-cover"
                data-ai-hint={jayqoFactoryImage.imageHint}
              />
            </div>
          )}
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">The Jayqo Green Factory Pilot</h2>
            <p className="text-muted-foreground mb-4">
              Our pioneering pilot project, the Jayqo Green Factory, serves as a blueprint for the future of sustainable manufacturing. It demonstrates how integrating green technologies and circular economy principles not only enhances environmental responsibility but also boosts productivity and profitability.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> State-of-the-art recycling technology</li>
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Water reuse and energy efficiency systems</li>
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> A model for our MSME partner network</li>
            </ul>
          </div>
        </div>
      </section>

      {/* QYSEN ERP Section */}
      <QysenErpSection />

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold font-headline mb-4">Our Journey of Innovation</h2>
              <p className="text-muted-foreground mb-6">
                With a legacy of over a decade in the textile and garment industry, Koel Group has evolved from a traditional buying house to a diversified conglomerate focused on sustainable innovation. Our journey is marked by a relentless pursuit of excellence and a deep-seated commitment to creating a positive impact, driving us to venture into agro-tech and health-tech to build a better Bangladesh.
              </p>
            </div>
            {storyImage && (
                <div className="relative h-80 rounded-lg overflow-hidden shadow-xl md:order-1">
                <Image 
                    src={storyImage.imageUrl} 
                    alt="A timeline of company milestones"
                    fill 
                    className="object-cover"
                    data-ai-hint="business timeline"
                />
                </div>
            )}
        </div>
      </section>

    </div>
  );
}
