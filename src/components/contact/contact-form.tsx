"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("Failed to submit form. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border-2 border-green-500/20 bg-green-50 dark:bg-green-900/10">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg">
          <CheckCircle2 className="h-8 w-8 text-white" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-green-700 dark:text-green-400">
          Message Sent!
        </h3>
        <p className="text-green-600 dark:text-green-300">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border bg-card p-8 shadow-lg">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Send us a Message</h3>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Inc."
            value={formData.company}
            onChange={handleChange}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
            className="h-11"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium">
          What brings you here? <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select a service...</option>
          <option value="talent-hire">Hire Developer</option>
          <option value="partnership">Partnership With Orchid Software</option>
          <option value="web development">Web and App Development</option>
          <option value="tech-support">Startup Tech Support</option>
          <option value="e-comm">E-Commerce (Shopify &amp; WordPress) Customization</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your project and how we can help..."
          value={formData.message}
          onChange={handleChange}
          required
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="group relative overflow-hidden w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 hover:shadow-xl hover:scale-105"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="relative z-10 flex items-center">
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Sending...
          </span>
        ) : (
          <>
            <span className="relative z-10 flex items-center">
              <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Send Message
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
