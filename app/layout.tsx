import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Victor Boniface | From Pain to Purpose',
  description:
    'A cinematic tribute experience exploring the pain, purpose, resilience, and rise of Victor Boniface.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
