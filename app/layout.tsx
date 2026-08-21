import type { Metadata } from 'next';
import { Bricolage_Grotesque, Noto_Serif_TC, Noto_Sans_TC } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-bricolage',
});
const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-noto-serif-tc',
});
const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-tc',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aijoyzuo.github.io/joy-portfolio/'),
  title: 'JOY — Frontend Developer',
  description: 'Joy 的作品集：前端工程師，React / Next.js / TypeScript',
  openGraph: {
    title: 'JOY — Frontend Developer',
    description: 'Joy 的作品集：前端工程師，React / Next.js / TypeScript',
    url: 'https://aijoyzuo.github.io/joy-portfolio/',
    siteName: 'JOY — Frontend Developer',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JOY — Frontend Developer',
    description: 'Joy 的作品集：前端工程師，React / Next.js / TypeScript',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className={`${bricolage.variable} ${notoSerifTC.variable} ${notoSansTC.variable} font-sansTC text-ink bg-cream overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
