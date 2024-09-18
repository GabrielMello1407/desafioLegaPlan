import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'FocalPoint',
  description: 'Desafio técnico para a empresa LegaPlan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
