import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import type {Metadata} from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


export const metadata: Metadata = {
  title: "Next Travel App",
  description: "NextJs Travel UI/UX App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
        <NavBar />
        <main className='relative overflow-hidden'>
            {children}
        </main>
      <Footer />
      <Analytics />
      </body>
    </html>
  );
}
