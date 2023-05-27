import './globals.css';
import { Inter } from 'next/font/google';
import Nav from './Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Abdelhadi A72',
  description: "It' a web site for A72",
  icons: {
    icon: '/app/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
