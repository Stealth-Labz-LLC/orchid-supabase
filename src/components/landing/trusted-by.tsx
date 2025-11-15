"use client";

import Link from "next/link";
import Image from "next/image";
export function TrustedBy() {
  const companies = [
    { name: "TrafficAi", image: "/images/client-company/trafficai.webp" },
    { name: "StealthLabz", image: "/images/client-company/stealth-black.png" },
    { name: "TrafficAi", image: "/images/client-company/trafficai.webp" },
    { name: "StealthLabz", image: "/images/client-company/stealth-black.png" },
    { name: "TrafficAi", image: "/images/client-company/trafficai.webp" },
    { name: "StealthLabz", image: "/images/client-company/stealth-black.png" },
  ];

  return (
    <section className="border-y bg-muted/30 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by leading companies worldwide
        </p>
        <div className="relative">
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center opacity-90 transition-opacity hover:opacity-100 mx-8 flex-shrink-0"
              >
                <Link href="/">
                  <Image
                    src={company.image}
                    alt={company.name}
                    width={160}
                    height={60}
                    className=""
                  />
                </Link>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center opacity-90 transition-opacity hover:opacity-100 mx-8 flex-shrink-0"
              >
                <Link href="/">
                  <Image
                    src={company.image}
                    alt={company.name}
                    width={160}
                    height={60}
                    className=""
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
