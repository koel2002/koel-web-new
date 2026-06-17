
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Briefcase, HeartHandshake, Leaf, Microscope, BarChart, Shirt, ShoppingCart, Tractor, Package, Users, Recycle, Boxes, Warehouse } from 'lucide-react';

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    // Return a default or throw an error
    return { id: 'default', description: 'Default Image', imageUrl: 'https://picsum.photos/seed/default/500/300', imageHint: 'placeholder' };
  }
  return image;
};

export const COMPANIES_DATA = [
  {
    slug: 'koel-modish-apparels',
    name: 'Koel Modish Apparels',
    description: 'A comprehensive buying house delivering excellence and innovation in the global textile market.',
    longDescription: 'Koel Modish Apparels is a leader in sourcing and manufacturing high-quality garments. We connect international brands with the best production facilities in Bangladesh, ensuring ethical practices, timely delivery, and unparalleled quality. Our expertise spans the entire supply chain, from design to export.',
    mission: 'To be the most trusted apparel sourcing partner by consistently delivering value, quality, and sustainable solutions to our global clients.',
    image: findImage('company-koel-modish'),
    Icon: Shirt,
    logo: findImage('koel-modish-logo'),
  },
  {
    slug: 'jayqo-textiles',
    name: 'Jayqo Textiles & Accessories (BD) Ltd',
    description: 'A green textile hub teaming up with MSMEs to deliver sustainable textile waste solutions.',
    longDescription: 'Jayqo is at the forefront of the circular economy in Bangladesh. We operate a smart & green textile waste recycling hub, integrating MSMEs to transform post-production waste into high-value, sustainable recycled fabrics. Our digital traceability platform ensures transparency for global markets in the USA and EU.',
    mission: 'To revolutionize the RMG sector through circular economy principles, creating a resilient, compliant, and sustainable textile ecosystem.',
    image: findImage('company-jayqo'),
    Icon: Leaf,
    logo: findImage('jayqo-textiles-logo'),
  },
  {
    slug: 'koel-shop',
    name: 'Koel Shop',
    description: 'An e-commerce portal delivering quality and affordability directly to consumers.',
    longDescription: 'Koel Shop brings the quality and innovation of Koel Group directly to your doorstep. Our e-commerce platform offers a curated selection of affordable, high-quality apparel and lifestyle products, making sustainable fashion accessible to everyone.',
    mission: 'To provide consumers with high-quality, affordable, and sustainably-minded products through a seamless online shopping experience.',
    image: findImage('company-koel-shop'),
    Icon: ShoppingCart,
    logo: findImage('koel-shop-logo'),
  },
    {
    slug: 'anisha-agricultural-industry',
    name: 'Anisha Agricultural Industry',
    description: 'An agro-tech solution for a better Bangladesh with sustainable food solutions.',
    longDescription: 'Anisha Agricultural Industry is dedicated to modernizing Bangladesh\'s agricultural sector. We leverage technology to improve crop yields, reduce waste, and promote sustainable farming practices, contributing to national food security and economic growth for farmers.',
    mission: 'To build a prosperous and sustainable agricultural future for Bangladesh by empowering farmers with technology and innovation.',
    image: findImage('company-anisha-agro'),
    Icon: Tractor,
    logo: findImage('anisha-agriculture-logo'),
  },
  {
    slug: 'arham-diagnostic-center',
    name: 'Arham Diagnostic Center',
    description: 'A health-tech solution providing affordable and accessible diagnostics for all in Bangladesh.',
    longDescription: 'Arham Diagnostic Center is committed to improving healthcare outcomes by providing state-of-the-art diagnostic services. We focus on affordability and accessibility, bringing advanced health-tech solutions to communities across Bangladesh to ensure timely and accurate medical testing.',
    mission: 'To make high-quality diagnostic healthcare affordable and accessible to every person in Bangladesh, powered by technology and compassion.',
    image: findImage('company-arham-diagnostic'),
    Icon: Microscope,
    logo: findImage('arham-diagnostic-logo'),
  },
];

export const CONTACT_INFO = {
  name: 'Koel Group',
  presenter: 'Shaharier Alam Koel',
  email: 'md@koelgroupbd.com',
  phone: '+8801790493357',
  website: 'koelgroupbd.com',
  corporateAddress: 'House 31, Road 17, Sector 13, Uttara, Dhaka, Bangladesh',
  factoryAddress: 'JL - 75, West Dogri, Bhawal, Mirzapur, Gazipur Sadar, Bangladesh',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/koelgroup',
  facebook: 'https://www.facebook.com',
  twitter: 'https://www.twitter.com',
  instagram: 'https://www.instagram.com',
  youtube: 'https://www.youtube.com',
};

export const KEY_SERVICES = [
    {
        icon: Briefcase,
        title: "Export Ready Garment",
        company: "Koel Modish Apparels",
        href: "/companies/koel-modish-apparels",
        description: "Based on buyers requirements, exporting ready made garment and Earn foreign currency for Bangladesh and upholding the country's name on the global stage."
    },
    {
        icon: ShoppingCart,
        title: "Ecommerce Portal",
        company: "Koel Shop",
        href: "/companies/koel-shop",
        description: "A full featured ecommerce business with a vision to deliver export quality & fashionable clothes in affordable price to all over Bangladesh."
    },
    {
        icon: Boxes,
        title: "Bulk Cloth Order",
        company: "Koel Shop",
        href: "/companies/koel-shop",
        description: "We deliver to any local of foreign reseller or distributor for any amount of bulk order with exact specification, higher quality and time frame."
    },
    {
        icon: Warehouse,
        title: "Corporate Order",
        company: "Koel Shop",
        href: "/companies/koel-shop",
        description: "We accept corporate orders based on their needs for their employees or some events or activities with as much customization as needed."
    },
    {
        icon: Shirt,
        title: "Customized Clothes Ordering",
        company: "Koel Shop",
        href: "/companies/koel-shop",
        description: "We offer a new service that delivers customized designed garments for entrepreneurs who are willing to do business in Fashion & ecommerce, but dont have the capacity to create a huge amount."
    },
    {
        icon: Recycle,
        title: "Fabric Recycle",
        company: "JAYQO Textiles & Accessories (BD) Ltd",
        href: "/companies/jayqo-textiles",
        description: "We are working with local MSME RMG industries and collecting fabric waste for recycling purpose and make a green textile recycling hub for local production and export."
    }
];

export const PARTNER_LOGOS = [
    { name: "BGMEA", image: findImage('partner-logo') },
    { name: "GIZ", image: findImage('partner-logo') },
    { name: "VF Asia", image: findImage('partner-logo') },
    { name: "Eastpak Park BD", image: findImage('partner-logo') },
];
