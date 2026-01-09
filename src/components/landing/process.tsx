"use client";

import { Card } from "@/components/ui/card";
import {
  Lightbulb,
  Palette,
  Code2,
  TestTube,
  Rocket,
  BarChart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    icon: Lightbulb,
    description:
      "We dive deep into your business goals, analyze requirements, and create a comprehensive project roadmap.",
    features: ["Requirements analysis", "Technical feasibility", "Timeline & milestones"],
    gradient: "from-yellow-500 to-orange-500",
    delay: "0ms",
  },
  {
    number: "02",
    title: "Design & Architecture",
    icon: Palette,
    description:
      "Our designers and architects craft intuitive UX/UI designs and scalable system architecture.",
    features: ["UI/UX design", "System architecture", "Database design"],
    gradient: "from-pink-500 to-rose-500",
    delay: "100ms",
  },
  {
    number: "03",
    title: "Development",
    icon: Code2,
    description:
      "Expert engineers build your solution using modern frameworks, best practices, and clean code principles.",
    features: ["Agile sprints", "Code reviews", "Version control"],
    gradient: "from-blue-500 to-cyan-500",
    delay: "200ms",
  },
  {
    number: "04",
    title: "Testing & QA",
    icon: TestTube,
    description:
      "Rigorous testing ensures your software is bug-free, secure, and performs flawlessly under load.",
    features: ["Automated testing", "Security audits", "Performance testing"],
    gradient: "from-green-500 to-emerald-500",
    delay: "300ms",
  },
  {
    number: "05",
    title: "Deployment",
    icon: Rocket,
    description:
      "Smooth deployment to production with CI/CD pipelines, monitoring, and zero-downtime strategies.",
    features: ["CI/CD pipeline", "Cloud deployment", "Monitoring setup"],
    gradient: "from-orange-500 to-red-500",
    delay: "400ms",
  },
  {
    number: "06",
    title: "Support & Optimization",
    icon: BarChart,
    description:
      "Ongoing support, performance monitoring, and continuous improvements to keep your software at peak performance.",
    features: ["24/7 support", "Performance tuning", "Feature updates"],
    gradient: "from-purple-500 to-pink-500",
    delay: "500ms",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-12 md:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <div className="mb-4 inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm shadow-sm">
            <Rocket className="mr-2 h-4 w-4 text-primary" />
            <span className="font-medium">Our Process</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            From Concept to{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Launch
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our proven development process ensures your project is delivered on time, within budget, and
            exceeds expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden lg:block" />

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{
                  animationDelay: step.delay,
                }}
              >
                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden">
                  <Card className="group relative overflow-hidden border-2 bg-background p-6 transition-all hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 duration-300">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}
                      >
                        <step.icon className="h-7 w-7 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Number */}
                        <div className="text-5xl font-bold text-primary/10 absolute top-2 right-4">
                          {step.number}
                        </div>

                        {/* Content */}
                        <div className="relative">
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground mb-4">{step.description}</p>

                          {/* Features */}
                          <div className="space-y-2">
                            {step.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div
                      className={`absolute inset-0 -z-10 bg-gradient-to-br ${step.gradient} opacity-0 transition-opacity group-hover:opacity-5`}
                    />
                  </Card>

                  {/* Arrow between steps - except last */}
                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center py-4">
                      <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                    </div>
                  )}
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className="flex items-center gap-8">
                    {/* Left side - Icon with number */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg transition-transform hover:scale-110 hover:rotate-3 duration-300 relative z-10`}
                      >
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary text-xs font-bold text-primary">
                        {step.number}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />

                    {/* Right side - Content Card */}
                    <Card className="group relative overflow-hidden border-2 bg-background p-6 transition-all hover:border-primary/50 hover:shadow-2xl flex-1">
                      {/* Large number background */}
                      <div className="text-8xl font-bold text-primary/5 absolute top-0 right-4 pointer-events-none">
                        {step.number}
                      </div>

                      <div className="relative">
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {step.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2 text-sm bg-muted/50 rounded-lg px-3 py-2"
                            >
                              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500 flex-shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div
                        className={`absolute inset-0 -z-10 bg-gradient-to-br ${step.gradient} opacity-0 transition-opacity group-hover:opacity-5`}
                      />
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid gap-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-orange-500/5 p-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2-4 weeks</div>
            <div className="text-sm text-muted-foreground">Average MVP Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">On-Time Delivery Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2 weeks</div>
            <div className="text-sm text-muted-foreground">Average Sprint Duration</div>
          </div>
        </div>
      </div>
    </section>
  );
}
