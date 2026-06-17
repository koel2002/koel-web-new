
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { Logo } from '@/components/layout/Logo';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { NAV_LINKS } from '@/lib/nav-links';

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function Footer() {
  const companyLinks = NAV_LINKS.find(l => l.label === 'Companies')?.sublinks || [];
  const quickLinks = NAV_LINKS.filter(l => !l.sublinks);
  const allCompaniesLink = NAV_LINKS.find(l => l.label === 'Companies')?.sublinks?.find(sl => sl.label === 'All Companies');
  if (allCompaniesLink) {
    quickLinks.push(allCompaniesLink);
  }


  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container max-w-[1200px] mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          <div className="space-y-4 md:col-span-3">
            <Logo />
            <p className="text-sm max-w-md">
              Pioneering excellence and sustainable growth in the global textile, agriculture, and health industries for over a decade.
            </p>
            <div className="flex items-center gap-4 pt-2">
                {Object.entries(SOCIAL_LINKS).map(([name, href]) => {
                  const Icon = socialIcons[name as keyof typeof socialIcons];
                  return (
                    <Link key={name} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{name}</span>
                    </Link>
                  );
                })}
              </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 font-headline">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4 font-headline">Our Companies</h4>
            <ul className="space-y-2">
              {companyLinks.filter(l => l.label !== 'All Companies').map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-4 font-headline">Contact Us</h4>
            <address className="not-italic text-sm space-y-3">
              <p><strong>Corporate Address:</strong> {CONTACT_INFO.corporateAddress}</p>
              <p><strong>Factory Address:</strong> {CONTACT_INFO.factoryAddress}</p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary break-all">{CONTACT_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary">{CONTACT_INFO.phone}</a>
              </div>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Koel Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
