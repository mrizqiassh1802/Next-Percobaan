import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
