"use client";

import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Layers, Cpu, Zap } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: Layers,
    gradient: "from-blue-500 to-cyan-500",
    tech: [
      { name: "React", color: "text-blue-600 dark:text-blue-400" },
      { name: "Next.js", color: "text-slate-700 dark:text-slate-300" },
      { name: "TypeScript", color: "text-blue-500 dark:text-blue-300" },
      { name: "Tailwind CSS", color: "text-cyan-600 dark:text-cyan-400" },
    ],
  },
  {
    category: "Backend",
    icon: Code2,
    gradient: "from-green-500 to-emerald-500",
    tech: [
      { name: "Node.js", color: "text-green-600 dark:text-green-400" },
      { name: "Python", color: "text-yellow-600 dark:text-yellow-400" },
      { name: "Go", color: "text-cyan-600 dark:text-cyan-400" },
      { name: "Rust", color: "text-orange-600 dark:text-orange-400" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    gradient: "from-purple-500 to-pink-500",
    tech: [
      { name: "PostgreSQL", color: "text-blue-600 dark:text-blue-400" },
      { name: "MongoDB", color: "text-green-600 dark:text-green-400" },
      { name: "Redis", color: "text-red-600 dark:text-red-400" },
      { name: "Supabase", color: "text-emerald-600 dark:text-emerald-400" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    gradient: "from-orange-500 to-amber-500",
    tech: [
      { name: "AWS", color: "text-orange-600 dark:text-orange-400" },
      { name: "Azure", color: "text-blue-600 dark:text-blue-400" },
      { name: "GCP", color: "text-blue-500 dark:text-blue-300" },
      { name: "Docker", color: "text-blue-700 dark:text-blue-400" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: Cpu,
    gradient: "from-pink-500 to-rose-500",
    tech: [
      { name: "TensorFlow", color: "text-orange-600 dark:text-orange-400" },
      { name: "PyTorch", color: "text-red-600 dark:text-red-400" },
      { name: "OpenAI", color: "text-green-600 dark:text-green-400" },
      { name: "LangChain", color: "text-teal-600 dark:text-teal-400" },
    ],
  },
  {
    category: "DevOps",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
    tech: [
      { name: "GitHub Actions", color: "text-slate-700 dark:text-slate-300" },
      { name: "Jenkins", color: "text-red-600 dark:text-red-400" },
      { name: "Kubernetes", color: "text-blue-600 dark:text-blue-400" },
      { name: "Terraform", color: "text-purple-600 dark:text-purple-400" },
    ],
  },
];

export function TechStack() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] dark:bg-grid-slate-700/25" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <div className="mb-4 inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm shadow-sm">
            <Code2 className="mr-2 h-4 w-4 text-primary" />
            <span className="font-medium">Technology Stack</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built With{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Cutting-Edge
            </span>{" "}
            Technologies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We leverage the most powerful and modern tech stack to deliver scalable, performant, and
            maintainable solutions.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 bg-background p-6 transition-all hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}
              >
                <category.icon className="h-7 w-7 text-white" />
              </div>

              {/* Category Title */}
              <h3 className="mb-4 text-xl font-bold">{category.category}</h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {category.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`inline-flex items-center rounded-full bg-muted px-3 py-1.5 text-sm font-medium transition-all hover:scale-105 ${tech.color}`}
                    style={{
                      animationDelay: `${(index * 100) + (techIndex * 50)}ms`,
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Hover Effect Gradient */}
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${category.gradient} opacity-0 transition-opacity group-hover:opacity-5`}
              />

              {/* Animated Border Effect */}
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            And many more technologies tailored to your specific needs
          </p>
        </div>
      </div>
    </section>
  );
}
