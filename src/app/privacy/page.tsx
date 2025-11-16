import type { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Orchid Software",
  description: "Learn how Orchid Software collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-primary">Privacy & Security</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">1. Introduction</h2>
              <p className="mb-4 text-muted-foreground">
                At Orchid Software, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
              <p className="mb-4 text-muted-foreground">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">2. Information We Collect</h2>
              <h3 className="mb-3 text-xl font-semibold">Personal Information</h3>
              <p className="mb-4 text-muted-foreground">
                We may collect personal information that you provide to us such as:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Automatically Collected Information</h3>
              <p className="mb-4 text-muted-foreground">
                When you use our services, we may automatically collect:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log data and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">3. How We Use Your Information</h2>
              <p className="mb-4 text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Process your transactions and manage your account</li>
                <li>Communicate with you about updates, security alerts, and support</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns and optimize performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">4. Information Sharing and Disclosure</h2>
              <p className="mb-4 text-muted-foreground">
                We may share your information in the following situations:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">5. Data Security</h2>
              <p className="mb-4 text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your information, including:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">6. Data Retention</h2>
              <p className="mb-4 text-muted-foreground">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
              <p className="mb-4 text-muted-foreground">
                When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">7. Your Privacy Rights</h2>
              <p className="mb-4 text-muted-foreground">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="mb-4 ml-6 list-disc text-muted-foreground">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                To exercise these rights, please contact us at info@orchidsw.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">8. Cookies and Tracking</h2>
              <p className="mb-4 text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. For more information, see our Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">9. International Data Transfers</h2>
              <p className="mb-4 text-muted-foreground">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">10. Children&apos;s Privacy</h2>
              <p className="mb-4 text-muted-foreground">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">11. Changes to This Policy</h2>
              <p className="mb-4 text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">12. Contact Us</h2>
              <p className="mb-4 text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at:
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
