import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Shield,
  Rocket,
  Users,
  Cloud,
  Sparkles,
  GitBranch,
  Database,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Tailored software solutions built with modern frameworks and best practices for your unique business needs.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption, compliance with industry standards, and robust security protocols to protect your data.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description:
      "From MVP to production in weeks, not months. Agile methodology for faster time-to-market.",
    gradient: "from-orange-600 to-red-500",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Scalable infrastructure on AWS, Azure, or GCP. Auto-scaling, high availability, and global CDN.",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline",
    description:
      "Automated testing, deployment, and monitoring. Continuous integration for reliable releases.",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Optimized data architecture with PostgreSQL, MongoDB, or your preferred database solution.",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Experienced engineers, designers, and project managers working exclusively on your project.",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Leverage machine learning and AI capabilities to automate processes and gain insights.",
    gradient: "from-orange-400 to-amber-500",
  },
  {
    icon: Globe,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs with comprehensive documentation and seamless third-party integrations.",
    gradient: "from-yellow-500 to-orange-500",
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-muted/30 py-12 md:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="font-medium">Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need to Build{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              World-Class Software
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From initial concept to ongoing maintenance, we provide end-to-end software engineering
            services tailored to your business goals.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl"
            >
              <CardHeader>
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-orange-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid gap-8 rounded-2xl border bg-background p-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="mt-2 text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="mt-2 text-sm text-muted-foreground">Expert Engineers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="mt-2 text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">10+</div>
            <div className="mt-2 text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
