import type { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Orchid Software",
  description: "Read our terms of service to understand the rules and regulations governing the use of Orchid Software's services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium">
              <FileText className="h-4 w-4 text-primary" />
              <span className="text-primary">Legal</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">1. Acceptance of Terms</h2>
              <p className="mb-4 text-muted-foreground">
                By accessing and using Orchid Software&apos;s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">2. Use License</h2>
              <p className="mb-4 text-muted-foreground">
                Permission is granted to temporarily use Orchid Software&apos;s services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained in Orchid Software&apos;s services</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">3. Service Description</h2>
              <p className="mb-4 text-muted-foreground">
                Orchid Software provides software development and SaaS services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">4. User Accounts</h2>
              <p className="mb-4 text-muted-foreground">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p className="mb-4 text-muted-foreground">
                You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">5. Intellectual Property</h2>
              <p className="mb-4 text-muted-foreground">
                The service and its original content, features, and functionality are and will remain the exclusive property of Orchid Software and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">6. Payment Terms</h2>
              <p className="mb-4 text-muted-foreground">
                Some parts of the service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis. Billing cycles are set on a monthly or annual basis, depending on the type of subscription plan you select.
              </p>
              <p className="mb-4 text-muted-foreground">
                A valid payment method is required to process the payment for your subscription. You shall provide accurate and complete billing information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">7. Cancellation and Refunds</h2>
              <p className="mb-4 text-muted-foreground">
                You may cancel your subscription at any time through your account settings. Upon cancellation, you will continue to have access to the service until the end of your current billing period.
              </p>
              <p className="mb-4 text-muted-foreground">
                We offer a 30-day money-back guarantee for new subscriptions. If you are not satisfied with our service, you may request a full refund within 30 days of your initial purchase.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">8. Limitation of Liability</h2>
              <p className="mb-4 text-muted-foreground">
                In no event shall Orchid Software, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">9. Changes to Terms</h2>
              <p className="mb-4 text-muted-foreground">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">10. Contact Us</h2>
              <p className="mb-4 text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="ml-6 list-none text-muted-foreground">
                <li>Email: info@orchidsw.com</li>
                <li>Phone: +91 9079 00 3238</li>
                <li>Address: 13 Laxmichak Parsa Bazar Patna</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
