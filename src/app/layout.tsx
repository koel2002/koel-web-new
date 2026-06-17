
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { FirebaseClientProvider } from '@/firebase';
import { TooltipProvider } from '@/components/ui/tooltip';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

const defaultTitle = 'Koel Group - A reputed name in garment export industry in Bangladesh.';
const defaultDescription = 'Pioneering a circular textile economy, sustainable agriculture, and digital health in Bangladesh. Koel Modish Apparels | JAYQO Textiles & Accessories | Koel Shop.';

export const metadata: Metadata = {
  title: {
    template: '%s | Koel Group',
    default: defaultTitle,
  },
  description: defaultDescription,
  openGraph: {
    title: {
      template: '%s | Koel Group',
      default: defaultTitle,
    },
    description: defaultDescription,
    siteName: 'Koel Group',
    url: 'https://koel-group-app.web.app',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/d/1xhZ9HKGjalE3RoO682Rr9RKp66cKONOB', // Main Banner
        width: 1200,
        height: 630,
        alt: 'Koel Group - Transforming Textile Waste into Global Wealth',
      },
       {
        url: 'https://lh3.googleusercontent.com/d/155-bxgKG1cfePWWNoJr6E0UB5QYlWtDJ', // Logo
        width: 140,
        height: 40,
        alt: 'Koel Group Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['https://lh3.googleusercontent.com/d/1xhZ9HKGjalE3RoO682Rr9RKp66cKONOB'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Koel Group",
  "url": "https://koel-group-app.web.app",
  "logo": "https://lh3.googleusercontent.com/d/155-bxgKG1cfePWWNoJr6E0UB5QYlWtDJ",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": CONTACT_INFO.phone,
    "contactType": "Customer Service",
    "email": CONTACT_INFO.email
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "House 31, Road 17, Sector 13",
    "addressLocality": "Uttara",
    "addressRegion": "Dhaka",
    "addressCountry": "BD"
  },
  "sameAs": [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.twitter,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.youtube
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Koel Group",
  "url": "https://koel-group-app.web.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://koel-group-app.web.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://lh3.googleusercontent.com/d/1FVJ6Bb4JOQwiNF6c7S80x5sCNJmCSx_t" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <FirebaseClientProvider>
              {children}
            </FirebaseClientProvider>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
