import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-display', subsets: ['latin'] });
const inter = Inter({ variable: '--font-body', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mark Ralphael Tive | Quantity Surveyor & Cost Estimator',
  description: 'Employment portfolio of Mark Ralphael Tive, a licensed civil engineer and quantity surveyor with 11+ years of construction and estimating experience.',
  keywords: ['quantity take-off', 'construction estimator', 'BOQ', 'cost estimation', 'civil engineer'],
  openGraph: { title: 'Mark Ralphael Tive | Quantity Surveyor & Cost Estimator', description: 'Licensed civil engineer open to Quantity Surveyor and Cost Estimator opportunities.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><script dangerouslySetInnerHTML={{__html:"if(!location.hash){history.scrollRestoration='manual';scrollTo(0,0)}"}}/></head><body className={`${manrope.variable} ${inter.variable}`}>{children}</body></html>;
}
