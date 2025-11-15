"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { DemoRequestModal } from "@/components/modals/demo-request-modal";

interface InlineCTAProps {
  variant?: "default" | "compact" | "minimal";
}

export function InlineCTA({ variant = "default" }: InlineCTAProps) {
  const [showDemoModal, setShowDemoModal] = useState(false);

  if (variant === "compact") {
    return (
      <>
        <div className="my-12 rounded-2xl border-2 border-primary/20 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground">
                Join 500+ companies building better software with Orchid.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 hover:shadow-xl hover:scale-105"
                asChild
              >
                <a href="/contact">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-2 border-primary hover:border-transparent hover:text-white hover:scale-105"
                onClick={() => setShowDemoModal(true)}
              >
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  Book a Demo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </div>
        <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
      </>
    );
  }

  if (variant === "minimal") {
    return (
      <>
        <div className="my-8 flex flex-col items-center justify-center gap-4 rounded-xl border bg-muted/30 p-6 text-center sm:flex-row">
          <p className="text-sm font-medium">
            <Sparkles className="mr-2 inline-block h-4 w-4 text-primary" />
            Want to learn more about our platform?
          </p>
          <div className="flex gap-3">
            <Button
              variant="default"
              size="sm"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 hover:scale-105"
              asChild
            >
              <a href="/contact">
                <span className="relative z-10">Contact Sales</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="group relative overflow-hidden border-2 border-primary hover:border-transparent hover:text-white hover:scale-105"
              onClick={() => setShowDemoModal(true)}
            >
              <span className="relative z-10">Watch Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
        <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
      </>
    );
  }

  // Default variant
  return (
    <>
      <div className="my-16 rounded-3xl bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 p-8 text-center text-white shadow-xl md:p-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="mr-2 h-4 w-4" />
            <span>Transform Your Business Today</span>
          </div>

          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Experience the Power of Orchid
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            See how our platform can accelerate your development, enhance security, and
            scale your business to new heights.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="group relative overflow-hidden font-semibold hover:shadow-2xl hover:scale-105"
              asChild
            >
              <a href="/signup">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border-2 border-white bg-transparent font-semibold text-white hover:bg-white hover:text-primary hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowDemoModal(true)}
            >
              <span className="relative z-10 flex items-center">
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Schedule Demo
              </span>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm opacity-75">
            <span>✓ No credit card required</span>
            <span>✓ 14-day free trial</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
      <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </>
  );
}
