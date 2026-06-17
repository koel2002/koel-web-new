
'use client';

import { DollarSign, Globe, Heart, Leaf, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartBar as RechartsBarChart } from "@/components/ui/chart";
import { YAxis, XAxis, Bar as RechartsBar } from "recharts";

const chartData = [
  { metric: "Waste Diversion", value: 500000, fill: "var(--color-waste)" },
  { metric: "Jobs Created", value: 2500, fill: "var(--color-jobs)" },
  { metric: "CO2 Reduced (Tons)", value: 75000, fill: "var(--color-co2)" },
  { metric: "Water Saved (m³)", value: 1000000, fill: "var(--color-water)" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  waste: {
    label: "Waste Diverted (Tons)",
    color: "hsl(var(--chart-1))",
  },
  jobs: {
    label: "Jobs Created",
    color: "hsl(var(--chart-2))",
  },
  co2: {
    label: "CO2 Reduced (Tons)",
    color: "hsl(var(--chart-3))",
  },
  water: {
    label: "Water Saved (m³)",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

const benefits = [
    { icon: DollarSign, title: "Economic Benefits", description: "Creates new revenue streams from waste, reduces operational costs for MSMEs, and boosts national exports, tapping into a $2 Billion+ circular textile market." },
    { icon: Leaf, title: "Environmental Benefits", description: "Diverts 500,000 tons of waste from landfills, enables up to 60% water reuse in dyeing processes, and significantly lowers the industry's carbon footprint." },
    { icon: Users, title: "Social Benefits", description: "Generates thousands of green jobs, promotes skill development in sustainable practices, and empowers local communities and small business owners." },
    { icon: Zap, title: "Industry-Wide Benefits", description: "Boosts the adoption of recycled fabrics across the sector, enhances the global competitiveness of Bangladesh's RMG industry, and sets a new standard for compliance." },
];

export function CsrImpactClientPage() {
    const csrImage = PlaceHolderImages.find(i => i.id === 'csr-impact');
  return (
    <div>
      <section className="bg-secondary">
        <div className="container max-w-[1200px] mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">Our Impact</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Creating a ripple effect of positive change for our economy, our environment, and our communities.
          </p>
        </div>
      </section>

      {/* CSR Activities */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            {csrImage &&
                <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image src={csrImage.imageUrl} alt={csrImage.description} fill className="object-cover" data-ai-hint={csrImage.imageHint} />
                </div>
            }
            <div>
                <h2 className="text-3xl font-bold font-headline mb-4">Corporate Social Responsibility</h2>
                <p className="text-muted-foreground mb-4">
                    Our commitment extends beyond business. Koel Group actively invests in the well-being of our communities through our diverse companies. By providing stable, green jobs, we empower local individuals and families. We are also engaged in various charitable works and community development projects, ensuring that our growth contributes to a stronger, healthier society for all.
                </p>
                <div className="flex items-center gap-4 text-primary font-semibold">
                    <Heart className="h-5 w-5" />
                    <span>Community Empowerment &amp; Charitable Works</span>
                </div>
            </div>
        </div>
      </section>
      
      {/* Sustainable Impact Metrics */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-[1200px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">Projected Sustainable Impact</h2>
                <p className="text-muted-foreground mt-2">Quantifying our commitment to a better future (annual projections).</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Annual Impact Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <RechartsBarChart accessibilityLayer data={chartData} layout="vertical" margin={{ left: 20 }}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                         <YAxis
                            dataKey="metric"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.length > 20 ? `${''}${value.substring(0, 20)}...` : value}
                        />
                        <XAxis dataKey="value" type="number" hide />
                        <RechartsBar dataKey="value" layout="vertical" radius={5} />
                    </RechartsBarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">A Multitude of Benefits</h2>
                <p className="text-muted-foreground mt-2">Our model creates shared value across the board.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {benefits.map(benefit => (
                    <div key={benefit.title} className="flex items-start gap-4">
                        <div className="text-primary mt-1"><benefit.icon className="h-8 w-8" /></div>
                        <div>
                            <h3 className="text-xl font-bold font-headline mb-1">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Global Mandate */}
       <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8 items-center">
            <Globe className="h-24 w-24 mx-auto md:mx-0" />
            <div className="md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl font-bold font-headline">The Global Mandate for Circularity</h2>
                <p className="mt-4">
                    Global shifts toward sustainability, coupled with regulatory pressure from the EU (DPP/ESPR), create a mandatory and highly profitable market gap that only traceable, circular solutions like ours can fill.
                </p>
            </div>
        </div>
      </section>

    </div>
  );
}
