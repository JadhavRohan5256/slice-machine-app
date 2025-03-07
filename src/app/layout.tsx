import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient } from "@/prismicio";



const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-manrope",
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export async function generateMetadata(): Promise<Metadata> {
  let title = "TRJ Partner"
  let description = "At The Return Journey, we're pioneering personalized travel planning with our groundbreaking AI-ML platform, giving you the control to craft unique itineraries";
  let image = "https://static-prod.thereturnjourney.com/states/Himachal.webp";

  const client = createClient();
  const settingPage = await client.getSingle("settings");
  title = settingPage.data.meta_title ?? title;
  description = settingPage.data.meta_description ?? description;
  image = settingPage.data.meata_image.url ?? image;

  return {
    title: title,
    description: description,
    openGraph: {
      images: [image],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(manrope.variable, inter.variable)}>
        {children}
      </body>
    </html>
  );
}
