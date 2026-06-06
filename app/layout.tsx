import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Islah Mohammad Musleh - CV',
  description: 'Senior Software Engineer with 6+ years of experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="h-full">
        {children}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(var(--foreground)_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
      </body>
    </html>
  );
}