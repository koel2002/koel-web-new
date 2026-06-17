
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANIES_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Companies',
  description: 'Explore the synergistic ecosystem of Koel Group companies, united by a commitment to innovation, sustainability, and positive impact in Bangladesh and beyond.',
  openGraph: {
    title: 'Our Companies',
    description: 'Explore the synergistic ecosystem of Koel Group companies, from textiles and e-commerce to agro-tech and digital health.',
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

export default function AllCompaniesPage() {
  return (
    <div>
      <section className="bg-primary/5">
        <div className="container max-w-[1200px] mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">Our Companies</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A synergistic ecosystem of businesses united by a commitment to innovation, sustainability, and positive impact in Bangladesh and beyond.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container max-w-[1200px] mx-auto py-16 md:py-24 px-4 space-y-24">
          {COMPANIES_DATA.map((company, index) => (
            <div key={company.slug} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={cn("relative h-80 rounded-lg overflow-hidden shadow-xl", index % 2 !== 0 && 'md:order-2')}>
                <Image
                  src={company.image.imageUrl}
                  alt={company.name}
                  fill
                  className="object-cover"
                  data-ai-hint={company.image.imageHint}
                />
              </div>
              <div className={cn(index % 2 !== 0 && 'md:order-1')}>
                <company.Icon className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-3xl font-bold font-headline mb-3">{company.name}</h2>
                <p className="text-lg font-semibold text-muted-foreground mb-4">{company.description}</p>
                <p className="text-muted-foreground mb-6">{company.longDescription}</p>
                <Button asChild>
                  <Link href={`/companies/${company.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
