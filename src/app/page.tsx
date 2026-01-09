import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { TrustedBy } from "@/components/landing/trusted-by";
import { TechStack } from "@/components/landing/tech-stack";
import { Process } from "@/components/landing/process";
import { Features } from "@/components/landing/features";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import "../../public/css/pages/home.css";

export const metadata: Metadata = genMeta({
  title: "Orchid Software - Expert Software Engineering Services | SaaS Solutions",
  description:
    "Build powerful SaaS solutions with our world-class engineering team. From concept to deployment, we deliver scalable, secure, and innovative software. Start your free trial today.",
  keywords: [
    "software engineering",
    "SaaS solutions",
    "custom software development",
    "enterprise software",
    "cloud solutions",
    "software development company",
    "web application development",
    "mobile app development",
  ],
  url: "/",
  type: "website",
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBy />
      <TechStack />
      <Process />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
