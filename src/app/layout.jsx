import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased bg-gray-900 text-white min-h-screen`}>
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
} 