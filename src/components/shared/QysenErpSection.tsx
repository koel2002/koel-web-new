
import {
  Briefcase,
  Cpu,
  DatabaseZap,
  Factory,
  FileBarChart,
  Link as LinkIcon,
  Recycle,
  ShieldCheck,
  TrendingUp,
  XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const challenges = [
  {
    icon: XCircle,
    title: 'Inaccurate Planning',
    description:
      'Costly overstock or delayed shipments due to poor demand forecasting.',
  },
  {
    icon: XCircle,
    title: 'No Real-Time Visibility',
    description:
      'Management operates on outdated information, unable to spot production bottlenecks.',
  },
  {
    icon: XCircle,
    title: 'Poor Resource Use',
    description:
      'Inefficient use of machinery, labor, and materials based on guesswork.',
  },
  {
    icon: XCircle,
    title: 'Compliance & Quality Risks',
    description:
      'Manual tracking leads to errors, financial loss, and brand reputation damage.',
  },
];

const solutions = [
  {
    icon: ShieldCheck,
    title: 'Deep Industry Specificity',
    description:
      'Purpose-built for textile processes like knitting, dyeing, and garment production.',
  },
  {
    icon: LinkIcon,
    title: 'Seamless Process Integration',
    description:
      'Connects every step from inquiry to shipment, ensuring data flows automatically.',
  },
  {
    icon: Cpu,
    title: 'Actionable Intelligence',
    description:
      'Uses AI to analyze data, forecast delays, and optimize material utilization.',
  },
  {
    icon: TrendingUp,
    title: 'User-Centric Design',
    description:
      'Intuitive, role-based interface ensures high adoption from the shop floor to the CEO.',
  },
];

const coreModules = [
  { icon: Briefcase, title: 'Commercial Engine', description: 'Order Management, MRP, Procurement' },
  { icon: Factory, title: 'Production & Planning', description: 'T&A, IE, Sewing & Fabric Control' },
  { icon: Recycle, title: 'Inventory & Quality', description: 'Stores Management, End-to-End QA' },
  { icon: DatabaseZap, title: 'Finance & Human Capital', description: 'Accounting, Assets, HR & Payroll' },
];

export function QysenErpSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-headline">
            The Digital Backbone: QYSEN ERP
          </h2>
          <p className="text-muted-foreground mt-2">
            In partnership with{' '}
            <span className="font-semibold text-primary">Riviesoft</span>, JAYQO utilizes{' '}
            <span className="font-semibold text-primary">QYSEN ERP</span>—a smart, AI-driven solution that provides the digital traceability and operational efficiency required by global standards.
          </p>
        </div>

        {/* Core Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {coreModules.map((service) => (
                <Card key={service.title} className="text-center">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-primary/10 rounded-full text-primary">
                            <service.icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="mt-2 text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>


        {/* CTA */}
        <div className="py-12 bg-primary text-primary-foreground rounded-lg text-center">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold font-headline">
              Ready to Digitize Your Operations?
            </h2>
            <p className="mt-2 max-w-2xl mx-auto">
              Learn how QYSEN ERP can unlock operational excellence, financial control, and sustainable growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact">Download Brochure</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
