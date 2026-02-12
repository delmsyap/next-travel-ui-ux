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
      <body className='relative overflow-hidden'>
        <NavBar />
        <main>
            {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
