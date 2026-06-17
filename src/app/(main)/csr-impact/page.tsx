
import { CsrImpactClientPage } from './CsrImpactClientPage';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CSR & Impact',
  description: 'Discover Koel Group\'s commitment to Corporate Social Responsibility and the sustainable impact we create for our economy, environment, and communities.',
  openGraph: {
    title: 'CSR & Impact',
    description: 'Creating a ripple effect of positive change for our economy, our environment, and our communities through sustainable practices.',
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

export default function CsrImpactPage() {
    return <CsrImpactClientPage />;
}
