import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type React from "react";
import "./globals.css";
import Image from "next/image";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Debat-osis",
    description: "Debat-osis smk al amanah ",
    generator: "debat-osis",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geist.className} antialiased h-screen relative overflow-x-hidden`}
            >
                <Image
                    src="/assets/red-2.png"
                    alt=""
                    width={300}
                    height={300}
                    className="absolute top-0 left-0 -translate-x-1/3 z-0"
                />
                <Image
                    src="/assets/blue-2.png"
                    alt=""
                    width={250}
                    height={250}
                    className="absolute bottom-0 left-0 -translate-x-1/3 z-0"
                />
                <Image
                    src="/assets/red-1.png"
                    alt=""
                    width={250}
                    height={250}
                    className="absolute top-0 right-0 translate-x-1/3 z-0"
                />
                <Image
                    src="/assets/blue-1.png"
                    alt=""
                    width={250}
                    height={250}
                    className="absolute bottom-0 right-0 translate-x-1/3 z-0"
                />

                {children}
                <Analytics />
            </body>
        </html>
    );
}
