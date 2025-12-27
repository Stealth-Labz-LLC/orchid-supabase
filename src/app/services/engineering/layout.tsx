import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Full-Stack Engineering Services - Orchid Software",
  description:
    "Partner with Orchid Software for end-to-end engineering excellence. Custom software development, cloud infrastructure, DevOps, and scalable solutions that drive business growth.",
  keywords: [
    "full-stack development",
    "software engineering services",
    "custom software development",
    "cloud infrastructure",
    "DevOps services",
    "enterprise software",
    "web application development",
    "mobile app development",
    "API development",
    "scalable architecture",
    "software consulting",
    "Orchid Software",
  ],
  url: "/services/engineering",
  type: "website",
  image: "/images/services/1.webp",
});

export default function EngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
