import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Hyperhire Landing Page',
  description: 'A Next.js project built as a technical assignment for the Coin Siren project via Hyperhire.p',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
