import Element from '@/assets/images/element/15.svg';
import { StaticImageData } from 'next/image';

export interface NavItem {
  title: string;
  type?: 'link' | 'mega' | 'image';
  href?: string;
  children?: {
    label: string;
    description?: string;
    icon?: string;
    href: string;
  }[];
  columns?: {
    title?: string;
    links: { label: string; href: string }[];
  }[];
  image?: StaticImageData;
}

// export const navMenuData: NavItem[] = [
//   {
//     title: 'SparkVerseAI',
//     type: 'link',
//     href: '/svai',
//   },
//   {
//     title: 'Home',
//     type: 'link',
//     children: [
//       { label: 'Home 1', href: '/home-1' },
//       { label: 'Home 2', href: '/home-2' },
//       { label: 'Home 3', href: '/home-3' },
//     ],
//   },
//   {
//     title: 'Product',
//     type: 'image',
//     image: Element,
//     children: [
//       {
//         label: 'Seamless onboarding',
//         href: '/product-1',
//         icon: 'tabler:carambola',
//         description: 'Quick, easy setup.',
//       },
//       {
//         label: 'Responsive design',
//         href: '/product-1',
//         icon: 'tabler:settings',
//         description: 'Perfect on any device.',
//       },
//       {
//         label: 'Integrated analytics',
//         href: '/product-2',
//         icon: 'tabler:file-text',
//         description: 'Real-time insights.',
//       },
//     ],
//   },
//   {
//     title: 'Pages',
//     type: 'mega',
//     columns: [
//       {
//         links: [
//           { label: 'Product 1', href: '/product-1' },
//           { label: 'Product 2', href: '/product-2' },
//           { label: 'Product 3', href: '/product-3' },
//           { label: 'Pricing 1', href: '/pricing-1' },
//           { label: 'Pricing 2 (Ecom)', href: '/pricing-2' },
//           { label: 'Pricing 3', href: '/pricing-3' },
//           { label: 'Integrations', href: '/integrations' },
//           { label: 'Request a Demo', href: '/request-a-demo' },
//         ],
//       },
//       {
//         links: [
//           { label: 'Reviews', href: '/reviews' },
//           { label: 'About', href: '/about' },
//           { label: 'Careers', href: '/careers' },
//           { label: 'Blog', href: '/blog' },
//           { label: 'FAQs', href: '/faqs' },
//           { label: 'Link in Bio', href: '/link-in-bio' },
//           { label: 'Coming soon', href: '/coming-soon' },
//           { label: 'Privacy Policy', href: '/privacy-policy' },
//         ],
//       },
//       {
//         links: [
//           { label: 'Hero', href: '/hero' },
//           { label: 'Features', href: '/features' },
//           { label: 'Statistics', href: '/statistics' },
//           { label: 'CTAs', href: '/ctas' },
//           { label: 'Cards', href: '/cards' },
//         ],
//       },
//     ],
//   },
//   {
//     title: 'Account',
//     type: 'link',
//     children: [
//       { label: 'Log In', href: '/log-in' },
//       { label: 'Sign Up', href: '/sign-up' },
//       { label: 'Reset Password', href: '/reset-password' },
//       { label: 'Update Password', href: '/update-password' },
//       { label: 'Email Confirmation', href: '/email-confirmation' },
//       { label: 'Error 404', href: '/error-404' },
//       { label: 'Password Protected', href: '/password-protected' },
//     ],
//   },
//   {
//     title: 'Contact us',
//     href: '/contact',
//   },
// ];

//  Home | Products | Solutions | Security | Resources | Demo		🔍 Search SparkVerse		         Start Free Trial
export const navMenuData: NavItem[] = [
  {
    title: 'Home',
    type: 'link',
    href: '/svai',
  },
  {
    title: 'Products',
    type: 'link',
    href: '/products',
  },
  {
    title: 'Blogs',
    type: 'link',
    href: '/blog',
  },

  {
    title: 'Research',
    type: 'link',
    href: '/research',
  },

];
