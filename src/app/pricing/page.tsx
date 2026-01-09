"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { PricingToggle } from "@/components/pricing/pricing-toggle";
import { PricingCard } from "@/components/pricing/pricing-card";
import { FeatureComparison } from "@/components/pricing/feature-comparison";
import { FAQ } from "@/components/pricing/faq";
import { InlineCTA } from "@/components/cta/inline-cta";
import { Sparkles } from "lucide-react";
import "../../../public/css/pages/pricing.css";

const pricingPlans = [
  {
    name: "Startup",
    description: "Perfect for startups and small projects",
    monthlyPrice: 1000,
    annualPrice: 800,
    features: [
      "Up to 1 developers",
      "Part-time engagement (20 hrs/week)",
      "Web or mobile app development",
      "Basic cloud deployment",
      "Email & chat support",
      "Bi-weekly sprint cycles",
      "Code repository access",
      "Monthly progress reports",
    ],
    ctaText: "Get Started",
    ctaLink: "/contact",
    isPopular: false,
  },
  {
    name: "Growth",
    description: "For growing businesses that need dedicated teams",
    monthlyPrice: 4000,
    annualPrice: 3200,
    features: [
      "Up to 2 developers",
      "Full-time engagement (160 hrs/month)",
      "Custom software development",
      "Cloud architecture & DevOps",
      "Database design & optimization",
      "Priority support (24/5)",
      "Weekly sprint cycles",
      "API development & integration",
      "Security best practices",
      "Performance optimization",
      "Technical documentation",
      "Agile project management",
    ],
    ctaText: "Get Started",
    ctaLink: "/contact",
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale projects with custom requirements",
    monthlyPrice: 15000,
    annualPrice: 12000,
    features: [
      "Dedicated team (6+ developers)",
      "Full-stack development",
      "AI & Machine Learning integration",
      "Advanced cloud infrastructure",
      "24/7 priority support",
      "Security audits & compliance",
      "Microservices architecture",
      "Custom integrations",
      "Dedicated account manager",
      "On-site collaboration available",
      "SLA guarantees",
      "Scalability planning",
      "Technical consulting",
      "Legacy system migration",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact",
    isPopular: false,
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pricing-hero-section">
        <div className="pricing-hero-grid-bg" />

        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="pricing-badge">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary">Simple, Transparent Pricing</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Flexible{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Engagement Models
              </span>{" "}
              for Your Project
            </h1>

            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Choose from our flexible monthly retainer plans or contact us for custom project-based pricing.
            </p>

            <div className="mt-10">
              <PricingToggle onToggle={setIsAnnual} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              description={plan.description}
              monthlyPrice={plan.monthlyPrice}
              annualPrice={plan.annualPrice}
              isAnnual={isAnnual}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
            />
          ))}
        </div>

        <div className="pricing-trial-notice">
          <p>
            Flexible monthly retainers •{" "}
            <span className="pricing-trial-notice-highlight">Save 10% with annual commitment</span> •{" "}
            Custom pricing available
          </p>
        </div>
      </section>

      {/* Feature Comparison */}
      <FeatureComparison />

      {/* FAQ */}
      <FAQ />

      {/* Inline CTA after FAQ */}
      <div className="container mx-auto px-4">
        <InlineCTA variant="compact" />
      </div>

      <Footer />
    </main>
  );
}
