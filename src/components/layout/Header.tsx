

"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, Linkedin, FileDown, AppWindow } from 'lucide-react';
import Image from 'next/image';

import { Logo } from '@/components/layout/Logo';
import { NAV_LINKS } from '@/lib/nav-links';
import { SOCIAL_LINKS, COMPANIES_DATA } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { ThemeToggleButton } from './ThemeToggleButton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const renderNavLink = (link: { href: string; label: string }, isMobile = false) => {
    const isActive = pathname === link.href;
    return (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "transition-colors hover:text-primary",
          isActive ? "text-primary font-semibold" : "text-foreground/80",
          isMobile && "block py-1 text-lg"
        )}
        onClick={isMobile ? handleMobileLinkClick : undefined}
      >
        {link.label}
      </Link>
    );
  };
  
  const renderMegaMenu = () => {
    const companiesLink = NAV_LINKS.find(l => l.label === 'Companies');
    if (!companiesLink || !companiesLink.sublinks) return null;

    const [allCompanies, ...otherCompaniesSublinks] = companiesLink.sublinks;
    
    const otherCompanies = otherCompaniesSublinks.map(sublink => {
      const companyData = COMPANIES_DATA.find(c => c.slug === sublink.href.split('/').pop());
      return { ...sublink, ...companyData };
    });

    return (
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-1 text-foreground/80 hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0">
            {companiesLink.label}
            <ChevronDown className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={0} className="w-screen max-w-none left-0 top-full mt-0 rounded-none border-x-0 border-t-0 border-b p-0">
          <div className="container max-w-[1200px] mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4 py-8">
               <DropdownMenuItem asChild>
                  <Link href={allCompanies.href} className="flex flex-col h-full items-start justify-center p-6 rounded-lg bg-secondary hover:bg-primary/10 transition-colors">
                      <AppWindow className="h-10 w-10 text-primary mb-3" />
                      <span className="text-lg font-bold text-foreground mb-1">{allCompanies.label}</span>
                      <span className="text-sm text-muted-foreground">View all our ventures and discover our mission.</span>
                  </Link>
              </DropdownMenuItem>
            </div>
            <div className="col-span-12 md:col-span-8 flex flex-col py-6">
              {otherCompanies.map((sublink, index) => {
                const Icon = sublink.Icon;
                return (
                  <React.Fragment key={sublink.href}>
                    <DropdownMenuItem asChild>
                      <Link href={sublink.href} className={cn("flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors", pathname === sublink.href && "bg-secondary")}>
                        {sublink.logo && <Image src={sublink.logo.imageUrl} alt={`${sublink.name} logo`} width={48} height={48} className="h-12 w-12 text-primary flex-shrink-0 rounded-md object-contain" />}
                        <div className='flex-grow'>
                          <span className="font-semibold text-base text-foreground">{sublink.label}</span>
                          <p className='text-sm text-muted-foreground/80 line-clamp-2'>{sublink.description}</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    {index < otherCompanies.length - 1 && <Separator className="my-1 bg-border/50" />}
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  const renderDropdown = (link: { label: string, sublinks: { href: string; label: string }[] }, isMobile = false) => {
    if (isMobile) {
      return (
        <div key={link.label}>
          <h3 className="py-1 text-lg font-semibold text-primary">{link.label}</h3>
          <div className="flex flex-col gap-1 pl-4">
            {link.sublinks.map(sublink => (
              <Link
                key={sublink.href}
                href={sublink.href}
                className={cn("block py-1 text-lg", pathname === sublink.href ? "text-primary font-semibold" : "text-foreground/80")}
                onClick={handleMobileLinkClick}
              >
                {sublink.label}
              </Link>
            ))}
          </div>
        </div>
      )
    }
    
    if (link.label === 'Companies') {
      return <div key={link.label}>{renderMegaMenu()}</div>;
    }

    return (
      <DropdownMenu key={link.label}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-1 text-foreground/80 hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0">
            {link.label}
            <ChevronDown className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={0} className="mt-0 rounded-t-none border-t-0">
          {link.sublinks.map(sublink => (
            <DropdownMenuItem key={sublink.href} asChild>
              <Link href={sublink.href} className={cn(pathname === sublink.href && "font-semibold")}>
                {sublink.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-[1200px] mx-auto items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_LINKS.map(link => 
            link.sublinks ? renderDropdown(link) : renderNavLink(link)
          )}
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-3/4 flex flex-col p-0">
              <SheetHeader className="p-6 pb-4 border-b">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <Logo />
              </SheetHeader>
              <ScrollArea className="flex-grow">
                <nav className="p-6 flex flex-col gap-1">
                  {NAV_LINKS.map(link => 
                    link.sublinks ? renderDropdown(link, true) : renderNavLink(link, true)
                  )}
                </nav>
              </ScrollArea>
              <div className="p-6 mt-auto border-t flex justify-center items-center gap-2">
                  <Button asChild variant="ghost" size="icon">
                      <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                      </Link>
                  </Button>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button asChild variant="ghost" size="icon">
                          <Link href="#" aria-label="Download Group Profile">
                              <FileDown className="h-5 w-5" />
                              <span className="sr-only">Download Group Profile</span>
                          </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download Group Profile</p>
                    </TooltipContent>
                  </Tooltip>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex items-center gap-2">
            <ThemeToggleButton />
            <Button asChild variant="ghost" size="icon">
                <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon">
                    <Link href="#" aria-label="Download Group Profile">
                        <FileDown className="h-5 w-5" />
                        <span className="sr-only">Download Group Profile</span>
                    </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download Group Profile</p>
              </TooltipContent>
            </Tooltip>
        </div>
      </div>
    </header>
  );
}
