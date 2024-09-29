'use client';
import React from 'react';
import ThemeProvider from '../ThemeToggle/theme-provider';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import TRPCProvider from '@/trpc/TRPCProvider';
export default function Providers({
  session,
  children,
}: {
  session: SessionProviderProps['session'];
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TRPCProvider>
          <SessionProvider session={session}>{children}</SessionProvider>
        </TRPCProvider>
      </ThemeProvider>
    </>
  );
}
