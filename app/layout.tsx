import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Revisely - Visual Feedback & AI Prompts | Chrome Extension",
  description:
    "Collect visual feedback, edit CSS, and annotate any site. Export pixel-perfect revision cards or AI-ready prompts. The ultimate tool for designers and developers.",
  keywords: [
    "visual feedback",
    "UI feedback",
    "CSS editor",
    "Chrome extension",
    "AI prompts",
    "design feedback",
    "developer tools",
    "web development",
    "UI/UX",
    "revision cards",
  ],
  authors: [{ name: "Berke Sasa", url: "https://berkesasa.com" }],
  creator: "Berke Sasa",
  openGraph: {
    title: "Revisely - Visual Feedback & AI Prompts",
    description:
      "Collect visual feedback, edit CSS, and annotate any site. Export pixel-perfect revision cards or AI-ready prompts.",
    type: "website",
    locale: "en_US",
    siteName: "Revisely",
    images: [
      {
        url: "/images/feature-4.png",
        width: 1200,
        height: 630,
        alt: "Revisely Chrome Extension",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revisely - Visual Feedback & AI Prompts",
    description:
      "Collect visual feedback, edit CSS, and annotate any site. Export pixel-perfect revision cards or AI-ready prompts.",
    images: ["/images/feature-4.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
