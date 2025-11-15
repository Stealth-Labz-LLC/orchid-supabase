"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, CheckCircle2 } from "lucide-react";

interface DemoRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoRequestModal({ open, onOpenChange }: DemoRequestModalProps) {
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

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onOpenChange(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-2 shadow-2xl">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            <DialogTitle className="text-3xl font-bold text-center mb-3">
              Demo Request Received!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Our team will contact you within 24 hours to schedule your personalized demo.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-2 text-sm font-bold text-white shadow-lg">
                <Calendar className="h-5 w-5" />
                <span>Schedule a Demo</span>
              </div>
              <DialogTitle className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent leading-tight">
                See Orchid in Action
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                Book a personalized platform walkthrough today.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
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
                      <Calendar className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
