import type { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Cookie } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy - Orchid Software",
  description: "Learn about how Orchid Software uses cookies and similar technologies to enhance your experience.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium">
              <Cookie className="h-4 w-4 text-primary" />
              <span className="text-primary">Cookies & Tracking</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">1. What Are Cookies?</h2>
              <p className="mb-4 text-muted-foreground">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
              </p>
              <p className="mb-4 text-muted-foreground">
                We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period or until you delete them).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">2. Types of Cookies We Use</h2>

              <h3 className="mb-3 text-xl font-semibold">Essential Cookies</h3>
              <p className="mb-4 text-muted-foreground">
                These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Authentication cookies</li>
                <li>Security cookies</li>
                <li>Session management</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Performance Cookies</h3>
              <p className="mb-4 text-muted-foreground">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Google Analytics</li>
                <li>Page load performance</li>
                <li>Error tracking</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Functionality Cookies</h3>
              <p className="mb-4 text-muted-foreground">
                These cookies allow our website to remember choices you make and provide enhanced, more personalized features.
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Language preferences</li>
                <li>Theme settings (dark/light mode)</li>
                <li>Region settings</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Marketing Cookies</h3>
              <p className="mb-4 text-muted-foreground">
                These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Advertising networks</li>
                <li>Conversion tracking</li>
                <li>Retargeting campaigns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">3. Third-Party Cookies</h2>
              <p className="mb-4 text-muted-foreground">
                We use services from third-party companies that may set cookies on your device. These include:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li><strong>Google Analytics:</strong> To analyze website traffic and usage</li>
                <li><strong>Stripe:</strong> For payment processing</li>
                <li><strong>Intercom:</strong> For customer support and chat</li>
                <li><strong>Social Media Platforms:</strong> For social sharing features</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                These third parties have their own privacy policies governing their use of cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">4. Cookie Duration</h2>
              <div className="mb-4 overflow-x-auto">
                <table className="min-w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border px-4 py-2 text-left">Cookie Type</th>
                      <th className="border border-border px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-2">Session Cookies</td>
                      <td className="border border-border px-4 py-2">Until browser is closed</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">Persistent Cookies</td>
                      <td className="border border-border px-4 py-2">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">Analytics Cookies</td>
                      <td className="border border-border px-4 py-2">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">Marketing Cookies</td>
                      <td className="border border-border px-4 py-2">Up to 1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">5. Managing Cookies</h2>
              <p className="mb-4 text-muted-foreground">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
              </p>

              <h3 className="mb-3 text-xl font-semibold">Browser Settings</h3>
              <p className="mb-4 text-muted-foreground">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Clear cookies when you close your browser</li>
                <li>Delete existing cookies</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Our Cookie Consent Tool</h3>
              <p className="mb-4 text-muted-foreground">
                When you first visit our website, you&apos;ll see a cookie consent banner where you can choose which types of cookies to accept.
              </p>

              <h3 className="mb-3 text-xl font-semibold">Opt-Out Tools</h3>
              <p className="mb-4 text-muted-foreground">
                You can opt out of specific tracking technologies:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                <li>Network Advertising Initiative: <a href="http://optout.networkadvertising.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">NAI Opt-out</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">6. Impact of Disabling Cookies</h2>
              <p className="mb-4 text-muted-foreground">
                If you choose to disable cookies, some features of our website may not function properly. This includes:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Staying logged into your account</li>
                <li>Remembering your preferences</li>
                <li>Personalized content recommendations</li>
                <li>Analytics and performance tracking</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">7. Do Not Track Signals</h2>
              <p className="mb-4 text-muted-foreground">
                Some browsers offer a &quot;Do Not Track&quot; (DNT) signal. Currently, there is no industry standard for how to respond to DNT signals. We do not respond to DNT signals at this time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">8. Updates to This Policy</h2>
              <p className="mb-4 text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any significant changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">9. Contact Us</h2>
              <p className="mb-4 text-muted-foreground">
                If you have questions about our use of cookies, please contact us at:
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
