import type { Metadata } from "next";
import { Montserrat, Open_Sans } from 'next/font/google';

import "./global.css";
import Navbar from "@/components/common/Navbar";
import Topbar from "@/components/common/Topbar";
import Footer from "@/components/common/Footer";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
    title: "Trip Tonic Safaris",
    description: "Your Gateway to Wild Uganda",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${montserrat.className} ${openSans.className} antiliased`}>
                <Topbar />
                <Navbar />
                {children}

                <Footer />
            </body>
        </html>
    );
}
