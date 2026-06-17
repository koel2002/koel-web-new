
import { notFound } from "next/navigation";
import { COMPANIES_DATA } from "@/lib/constants";
import type { Metadata, ResolvingMetadata } from 'next';
import { JayqoTextilesPageContent } from "./_company-pages/jayqo-textiles";
import { AnishaAgriculturalPageContent } from "./_company-pages/anisha-agricultural-industry";
import { ArhamDiagnosticCenterPageContent } from "./_company-pages/arham-diagnostic-center";
import { KoelModishApparelsPageContent } from "./_company-pages/koel-modish-apparels";
import { KoelShopPageContent } from "./_company-pages/koel-shop";

type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const company = COMPANIES_DATA.find((c) => c.slug === slug);
 
  if (!company) {
    return {
        title: 'Company Not Found',
        description: 'The requested company page does not exist.'
    }
  }

  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: company.name,
    description: company.longDescription,
    openGraph: {
        title: company.name,
        description: company.description,
        images: [
            {
                url: company.logo.imageUrl,
                width: 140,
                height: 40,
                alt: `${company.name} Logo`,
            },
            ...previousImages
        ],
    },
  }
}

// This function tells Next.js which slugs to pre-build at build time
export async function generateStaticParams() {
  return COMPANIES_DATA.map((company) => ({
    slug: company.slug,
  }));
}

export default function CompanyDetailPage({ params }: { params: { slug: string } }) {
  const company = COMPANIES_DATA.find((c) => c.slug === params.slug);

  if (!company) {
    notFound();
  }

  // Render the correct component based on the slug
  if (params.slug === 'koel-modish-apparels') {
    return <KoelModishApparelsPageContent />;
  }
  if (params.slug === 'jayqo-textiles') {
    return <JayqoTextilesPageContent />;
  }
  if (params.slug === 'koel-shop') {
    return <KoelShopPageContent />;
  }
  if (params.slug === 'anisha-agricultural-industry') {
    return <AnishaAgriculturalPageContent />;
  }
  if (params.slug === 'arham-diagnostic-center') {
    return <ArhamDiagnosticCenterPageContent />;
  }

  // Fallback for any other case (though generateStaticParams should prevent this)
  notFound();
}
