import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import type {Metadata} from "next";
import "./globals.css";


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
      </body>
    </html>
  );
}
