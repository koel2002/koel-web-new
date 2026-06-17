
import type { Metadata } from 'next';
import { HomePageClient } from '@/components/shared/HomePageClient';

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: 'https://lh3.googleusercontent.com/d/1xhZ9HKGjalE3RoO682Rr9RKp66cKONOB', // Banner Image
        width: 1200,
        height: 630,
        alt: 'Transforming Textile Waste into Global Wealth',
      },
      {
        url: 'https://lh3.googleusercontent.com/d/155-bxgKG1cfePWWNoJr6E0UB5QYlWtDJ', // Logo
        width: 140,
        height: 40,
        alt: 'Koel Group Logo',
      },
    ],
  },
};


export default function Home() {
  return <HomePageClient />;
}
