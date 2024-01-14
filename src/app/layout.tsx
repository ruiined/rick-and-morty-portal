import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ApolloWrapper } from '@/lib/apollo';
import { Header } from '@/components/molecules';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rick and Morty Portal',
  description: 'Rick and Morty Character List',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <Header />
          <div className="absolute top-20 md:top-24 w-full">
            <div className="flex flex-col justify-center items-center m-4 md:m-12">
              {children}
            </div>
          </div>
        </ApolloWrapper>
      </body>
    </html>
  );
}
