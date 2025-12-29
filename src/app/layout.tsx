import type { Metadata } from "next";
import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Orchid Software - Expert Software Engineering Services | SaaS Solutions",
    template: "%s | Orchid Software",
  },
  description: "Transform your business with cutting-edge SaaS solutions and expert software engineering services. Build powerful, scalable applications with our world-class development team.",
  keywords: [
    "software engineering",
    "SaaS solutions",
    "custom software development",
    "enterprise software",
    "cloud solutions",
    "software development company",
    "web application development",
    "mobile app development",
    "API development",
    "cloud architecture",
  ],
  authors: [{ name: "Orchid Software" }],
  creator: "Orchid Software",
  publisher: "Orchid Software",
  icons: {
    icon: '/images/logo/favicon.png',
    apple: '/images/logo/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Orchid Software',
    title: 'Orchid Software - Expert Software Engineering Services',
    description: 'Transform your business with cutting-edge SaaS solutions and expert software engineering services.',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Orchid Software - Expert Software Engineering Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orchid Software - Expert Software Engineering Services',
    description: 'Transform your business with cutting-edge SaaS solutions and expert software engineering services.',
    images: [`${siteUrl}/images/og-image.png`],
    creator: '@OrchidSoftware',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Note: Google verification not needed - already verified via DNS
  // verification: {
  //   google: 'verification-code-here', // Only needed for HTML meta tag verification
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema({
    name: "Orchid Software",
    description: "Expert software engineering services and SaaS solutions",
    url: siteUrl,
    logo: `${siteUrl}/images/logo/favicon.png`,
    contactPoint: {
      telephone: "9079003238",
      contactType: "Customer Service",
      email: "info@orchidsw.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/orchid-software",
      "https://www.facebook.com/orchidsw",
    ],
  });

  const websiteSchema = generateWebsiteSchema(siteUrl, "Orchid Software");

  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* TrackMate Pixel with List */}
        <Script
          id="trackmate-pixel"
          src="https://track-mate-server.vercel.app/tm.js"
          data-company="TM-PZ7ZK"
          data-list="LST-6XDKNB"
          strategy="afterInteractive"
        />
      </head>

      <body className={inter.className}>
        {children}

        {/* Traffic AI Pixel - Orchid */}
        <Script
          id="traffic-ai-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.TrafficAI = window.TrafficAI || [];
              window.TrafficAI.push({
                'pixelId': 'px_gxp29eh2arv90k3i',
                'endpoint': 'https://app.trafficai.io/api/pixel/track'
              });
            `,
          }}
        />
        <Script
          id="traffic-ai-pixel"
          strategy="afterInteractive"
          src="https://app.trafficai.io/pixel.js?v=1.0.1"
        />
      </body>
    </html>
  );
}
