"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { DemoRequestModal } from "@/components/modals/demo-request-modal";

export function CTA() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 px-8 py-16 text-center text-white shadow-2xl md:px-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

        {/* Floating Orbs */}
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="mr-2">Limited Time Offer</span>
            <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-primary">
              50% OFF
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90 sm:text-xl">
            Join hundreds of companies transforming their ideas into powerful SaaS products.
            Start your free trial today or schedule a demo with our team.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="group relative overflow-hidden text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/pricing">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border-2 border-white bg-transparent text-base font-semibold text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setShowDemoModal(true)}
            >
              <span className="relative z-10 flex items-center">
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Schedule Demo
              </span>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="group text-base font-semibold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="https://calendly.com/softwareorchid/tech-call">
                <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Talk to Sales
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
      <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </section>
  );
}
