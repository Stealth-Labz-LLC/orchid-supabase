import type { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { ContactForm } from "@/components/contact/contact-form";
import { OfficeInfo } from "@/components/contact/office-info";
import { SocialLinks } from "@/components/contact/social-links";
import { MessageSquare, Headphones, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Our Team",
  description:
    "Have questions about our software engineering services? Contact Orchid today. We're here to help you build amazing SaaS products.",
  keywords: [
    "contact orchid",
    "get in touch",
    "support",
    "customer service",
    "sales inquiry",
  ],
  openGraph: {
    title: "Contact Orchid - Get in Touch",
    description: "Reach out to our team for questions, support, or to discuss your next project.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-amber-900/20">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />

        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-primary">We&apos;d Love to Hear From You</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s Build{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Something Amazing
              </span>{" "}
              Together
            </h1>

            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Whether you have a question about our services, pricing, or anything else, our team
              is ready to answer all your questions.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-xl border bg-background/50 p-6 backdrop-blur-sm text-center">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-1 font-semibold">Sales Inquiries</h3>
              <p className="text-sm text-muted-foreground">
                Learn about our services and get a custom quote
              </p>
            </div>

            <div className="rounded-xl border bg-background/50 p-6 backdrop-blur-sm text-center">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 shadow-lg">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-1 font-semibold">Technical Support</h3>
              <p className="text-sm text-muted-foreground">
                Get help with your existing projects
              </p>
            </div>

            <div className="rounded-xl border bg-background/50 p-6 backdrop-blur-sm text-center">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-1 font-semibold">24/7 Response</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Office Info - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <OfficeInfo />
          </div>
        </div>
      </section>

      {/* Social Links */}
      <SocialLinks />

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about getting in touch
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="mb-2 font-semibold">How quickly will I receive a response?</h3>
              <p className="text-sm text-muted-foreground">
                We aim to respond to all inquiries within 24 hours during business days. For
                urgent matters, please call us directly at +91 9079003238.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="mb-2 font-semibold">
                What information should I include in my message?
              </h3>
              <p className="text-sm text-muted-foreground">
                Please include details about your project, timeline, budget range, and any specific
                requirements. The more information you provide, the better we can assist you.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="mb-2 font-semibold">Do you offer free consultations?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! We offer complimentary 30-minute consultation calls to discuss your project
                and how we can help. Schedule one through our contact form or call us directly.
              </p>
            </div>

            {/* <div className="rounded-xl border bg-card p-6">
              <h3 className="mb-2 font-semibold">Can I visit your office?</h3>
              <p className="text-sm text-muted-foreground">
                Absolutely! We welcome visitors at our San Francisco office. Please schedule an
                appointment in advance to ensure someone from our team is available to meet with
                you.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
