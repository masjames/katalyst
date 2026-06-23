import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Katalyst PRD Viewer',
  description: 'Local-first viewer for generated product requirements documents.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
