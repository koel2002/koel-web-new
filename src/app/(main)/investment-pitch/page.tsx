
import { InvestmentPitchForm } from "@/components/InvestmentPitchForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Investment Pitch Generator',
  description: 'Craft the perfect pitch in seconds. Our AI tool leverages Koel Group\'s core strengths to create compelling, customized investment narratives.',
  openGraph: {
    title: 'AI Investment Pitch Generator',
    description: 'Tailor your investment pitch to attract the right partners. Select your criteria and let our AI craft a compelling narrative.',
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

export default function InvestmentPitchPage() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="container max-w-[1200px] mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">AI Investment Pitch Generator</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Craft the perfect pitch in seconds. Our AI tool leverages Koel Group's core strengths to create compelling, customized investment narratives.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <InvestmentPitchForm />
        </div>
      </section>
    </div>
  );
}
