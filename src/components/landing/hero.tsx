"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { unsplashImages } from "@/lib/images";
import { DemoRequestModal } from "@/components/modals/demo-request-modal";

export function Hero() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-amber-900/20" />
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />

      <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary">Trusted by 500+ companies</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Expert{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Software Engineering
              </span>{" "}
              Services
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground sm:text-xl lg:text-2xl">
              Build powerful SaaS solutions with our world-class engineering team. From concept to
              deployment, we deliver scalable, secure, and innovative software.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg h-16 px-10"
                asChild
              >
                <Link href="/pricing">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-2 border-primary font-bold hover:border-transparent hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg h-16 px-10"
                onClick={() => setShowDemoModal(true)}
              >
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Schedule Demo
                </span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
                <span className="text-muted-foreground">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
                <span className="text-muted-foreground">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
                <span className="text-muted-foreground">Cancel anytime</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Active Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image Placeholder */}
          <div className="relative">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              {/* Gradient Orbs Background */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -top-1/2 -right-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 opacity-20 blur-3xl" />
              </div>

              {/* Hero Image */}
              <div className="relative h-full w-full rounded-2xl border-2 border-primary/20 shadow-2xl overflow-hidden">
                <Image
                  src={unsplashImages.hero.src}
                  alt={unsplashImages.hero.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Decorative Elements Overlay */}
                <div className="absolute top-8 right-8 h-16 w-16 rounded-lg bg-primary/10 backdrop-blur-sm" />
                <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full bg-amber-500/10 backdrop-blur-sm" />
                <div className="absolute top-1/2 right-12 h-12 w-12 rounded-lg bg-orange-500/10 backdrop-blur-sm rotate-45" />
              </div>
            </div>

            {/* Floating Card Effect */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-xl border hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Project Delivered</div>
                  <div className="text-xs text-muted-foreground">2 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </section>
  );
}
