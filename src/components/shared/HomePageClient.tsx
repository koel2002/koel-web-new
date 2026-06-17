
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Factory,
  HeartHandshake,
  Leaf,
  Recycle,
  ShoppingCart,
  Tractor,
  Users,
  Eye,
  Rocket,
  Shirt,
  Globe,
  Handshake,
  Warehouse,
  Boxes,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { COMPANIES_DATA, KEY_SERVICES } from '@/lib/constants';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export function HomePageClient() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isMobile = useIsMobile();

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const heroSlides = [
    {
      id: 'koel-group',
      title: 'Transforming Textile Waste into Global Wealth',
      description: 'Pioneer in the textile & garment industry with over 10 years of experience. Join Jayqo Textile & Accessories Ltd in pioneering a circular textile economy in Bangladesh.',
      image: PlaceHolderImages.find(i => i.id === 'hero-1'),
      href: '/about',
      buttonText: 'Learn More',
    },
    ...COMPANIES_DATA.map(company => ({
      id: company.slug,
      title: company.name,
      description: company.description,
      image: company.image,
      href: `/companies/${company.slug}`,
      buttonText: 'Learn More',
    }))
  ];

  const infographicData = [
    { icon: Shirt, value: "500k+", label: "Garments Exported" },
    { icon: Globe, value: "6", label: "Destination Countries" },
    { icon: Briefcase, value: "20+", label: "Buyers Served" },
    { icon: Users, value: "40k+", label: "Customers Served" },
    { icon: Handshake, value: "8", label: "Partner Factories" },
    { icon: Factory, value: "1", label: "Green Factory" },
  ];

  const fullText = "Koel Group is a diversified Bangladeshi business operating for over 10 years across garments, sustainability, e-commerce, agri-tech, and digital health. Its flagship, Koel Modish Apparels, exports a wide range of apparel to 10+ countries across 3 continents. The group also runs JAYQO Textiles & Accessories (BD) Ltd, a green-certified factory with a recycled fabric hub promoting eco-friendly production. Locally, Koel Shop offers fast and affordable e-commerce services, while Anisha Agricultural Industry advances smart farming and Arham Digital Health Center delivers accessible digital healthcare solutions.";
  const splitIndex = fullText.indexOf("The group also runs JAYQO");
  const visibleText = fullText.substring(0, splitIndex);
  const hiddenText = fullText.substring(splitIndex);

  const ctaImage = PlaceHolderImages.find(p => p.id === 'home-cta');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          opts={{ loop: true }}
          plugins={[autoplayPlugin.current]}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={slide.id}>
                <div className="relative w-full h-[100vh]">
                  {slide.image && (
                    <Image
                      src={slide.image.imageUrl}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      data-ai-hint={slide.image.imageHint}
                      priority={index === 0}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <div className="max-w-[1200px] mx-auto">
                      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-headline leading-tight drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto drop-shadow-md">
                        {slide.description}
                      </p>
                      <Button asChild size="lg" className="mt-8">
                        <Link href={slide.href}>
                          {slide.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                        "h-2 w-2 rounded-full transition-all",
                        current === index ? "p-1.5 bg-white" : "bg-white/50"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </section>

      {/* Group Overview */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-[1200px] mx-auto px-4">
            <p className="max-w-4xl mx-auto text-muted-foreground text-justify">
              {isExpanded ? fullText : (
                <>
                  {visibleText}
                  <button onClick={() => setIsExpanded(true)} className="text-primary font-semibold ml-1">
                    read more...
                  </button>
                </>
              )}
            </p>
            <div className="mt-12">
              {isMobile ? (
                  <Carousel
                    opts={{ align: "start", loop: true }}
                    plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {COMPANIES_DATA.map(company => (
                        <CarouselItem key={company.slug} className="basis-1/2 pl-4">
                          <Link href={`/companies/${company.slug}`} className="block group">
                            <div className="flex flex-col items-center gap-3">
                              <div className="relative h-16 w-32">
                                <Image
                                  src={company.logo.imageUrl}
                                  alt={`${company.name} logo`}
                                  fill
                                  className="object-contain"
                                  data-ai-hint={`${company.slug} logo`}
                                />
                              </div>
                              <span className="text-xs font-semibold text-center text-muted-foreground">{company.name}</span>
                            </div>
                          </Link>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
              ) : (
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {COMPANIES_DATA.map(company => (
                        <Link href={`/companies/${company.slug}`} key={company.slug} className="block group">
                          <div className="flex flex-col items-center gap-3">
                            <div className="relative h-16 w-32">
                              <Image
                                  src={company.logo.imageUrl}
                                  alt={`${company.name} logo`}
                                  fill
                                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                  data-ai-hint={`${company.slug} logo`}
                              />
                            </div>
                            <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">{company.name}</span>
                          </div>
                        </Link>
                    ))}
                </div>
              )}
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

      {/* Full-width CTA Section */}
      <section className="relative py-16 md:py-20 bg-gray-800 text-white">
        {ctaImage && (
            <Image
                src={ctaImage.imageUrl}
                alt={ctaImage.description}
                fill
                className="object-cover"
                data-ai-hint={ctaImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline">Are you a buyer or Corporate or Fashion Entrepreneur?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
                You are welcome to contact for Ready Made Garments to import/export, Bulk Ordering, Customized designed sample and minimum order
            </p>
        </div>
      </section>
      
      {/* Infographic Section */}
      <section className="py-16 md:py-24 bg-background">
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

      {/* Our Mission & Vision */}
      <section id="vision" className="py-16 md:py-24 bg-secondary relative">
        <Image
          src="https://picsum.photos/seed/mission-vision/1200/600"
          alt="Abstract image representing sustainable textile production"
          fill
          className="object-cover opacity-10"
          data-ai-hint="sustainable factory"
        />
        <div className="container max-w-[1200px] mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">Our Mission & Vision</h2>
            <p className="text-muted-foreground mt-2">Our guiding principles for a sustainable and prosperous future.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-background/80 backdrop-blur-sm">
                <CardHeader className="items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <Rocket className="h-8 w-8"/>
                    </div>
                    <CardTitle className="text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground italic">"To integrate MSMEs into a smart green factory network, transforming textile waste into sustainable products through digital traceability, empowering communities, and achieving global standards."</p>
                </CardContent>
            </Card>
            <Card className="bg-background/80 backdrop-blur-sm">
                <CardHeader className="items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <Eye className="h-8 w-8"/>
                    </div>
                    <CardTitle className="text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground italic">"To revolutionize the RMG sector through circular economy principles, creating a resilient, compliant, and sustainable textile ecosystem."</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Family of Companies */}
      <section id="companies" className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Our Family of Companies
            </h2>
            <p className="text-muted-foreground mt-2">
              A diverse group united by a commitment to innovation and positive
              impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANIES_DATA.slice(0, 3).map(company => (
              <Card key={company.slug} className="overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={company.image.imageUrl}
                    alt={company.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={company.image.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <company.Icon className="h-5 w-5 text-primary" />{' '}
                    {company.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {company.description}
                  </p>
                  <Button variant="link" asChild className="p-0">
                    <Link href={`/companies/${company.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/companies">Explore All Companies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Invest CTA */}
      <section
        id="invest"
        className="py-16 md:py-24 bg-primary text-primary-foreground"
      >
        <div className="container max-w-[1200px] mx-auto text-center px-4">
          <h2 className="text-3xl font-bold font-headline">
            Invest in a Greener Future, Secure Sustainable Returns
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Partner with Koel Group and be part of a profitable revolution in
            the textile industry. We offer a unique, technology-driven model
            that promises significant financial returns and positive
            environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/investment-pitch">
                Explore Partnership Opportunities
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Download Company Profile</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
