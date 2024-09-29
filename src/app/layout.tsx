import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Providers from '@/components/layout/dashboard/providers';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/next-auth-options';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SaaSQuickStart',
  description:
    'Start Strong with Next.js, TailwindCSS, Prisma, Stripe: Your SaaS Quickstart',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={cn('overflow-x-hidden', inter.className)}>
        <NextTopLoader showSpinner={false} />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
