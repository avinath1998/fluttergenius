import Image from "next/image";
import Link from "next/link";
import type {Metadata} from "next";
import {imageAlt, imageSrc, type ImageKey} from "@/lib/images";

export const metadata: Metadata = {
  title: "Case Studies | Flutter Genius",
  description:
    "Explore Flutter Genius case studies: AI-enabled property management, warehouse systems, sustainability platforms, event tools, and social networking apps built for global clients.",
  openGraph: {
    title: "Case Studies | Flutter Genius",
    description:
      "Explore Flutter Genius case studies: AI-enabled property management, warehouse systems, sustainability platforms, event tools, and social networking apps built for global clients.",
    url: "https://www.fluttergenius.com/gallery",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flutter Genius Case Studies",
      },
    ],
  },
  twitter: {
    title: "Case Studies | Flutter Genius",
    description:
      "Explore Flutter Genius case studies: production Flutter apps built for global clients.",
  },
  alternates: {
    canonical: "https://www.fluttergenius.com/gallery",
  },
};

type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  description: string;
  image: ImageKey;
  tags: string[];
};

const projects: Project[] = [
  {
    slug: "coves",
    name: "Coves",
    category: "AI-Enabled Property Management Software",
    location: "Singapore",
    description:
      "A full-featured coworking management platform handling bookings, memberships, and invoicing, with custom integrations for QuickBooks and Xero, built for web and mobile.",
    image: "galleryLargeMockup",
    tags: ["Flutter", "Firebase", "Algolia", "Web & Mobile"],
  },
  {
    slug: "ekva",
    name: "EKVA",
    category: "Sustainability Rewards & Loyalty Platform",
    location: "Colombo, Sri Lanka",
    description:
      "A recycling incentive platform with AI-powered point tracking, designed to inspire and reward individuals who adopt sustainable behaviors.",
    image: "galleryTotal",
    tags: ["Flutter", "AI", "Mobile"],
  },
  {
    slug: "spacehero",
    name: "Spacehero",
    category: "Intelligent Warehouse Management System",
    location: "Athens, Greece",
    description:
      "A comprehensive cross-platform warehouse management system covering pickup/return orders, space allocation, and customer management.",
    image: "gallerySpacehero",
    tags: ["Flutter", "Firebase", "Desktop & Mobile"],
  },
  {
    slug: "slsywc",
    name: "SLSYWC '19",
    category: "Event Management Platform",
    location: "Colombo, Sri Lanka",
    description:
      "A conference companion app enabling QR contact scanning, reward redemption, and real-time event timeline access for attendees.",
    image: "galleryFinal",
    tags: ["Flutter", "Events", "Mobile"],
  },
  {
    slug: "fethr",
    name: "Fethr",
    category: "Community-Centric Social Networking Platform",
    location: "London, England",
    description:
      "A swipe-based connection platform with community chats, algorithm-powered recommendations, and a dynamic UI that adapts to each user.",
    image: "galleryFethr",
    tags: ["Flutter", "Firebase", "Mobile"],
  },
];

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function GalleryPage() {

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="portfolio-hero relative overflow-hidden bg-navy text-lilac">
        <div className="portfolio-blob portfolio-blob--1" />
        <div className="portfolio-blob portfolio-blob--2" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <p className="portfolio-fade-up text-sm uppercase tracking-[0.35em] text-cream/80">
            Selected work
          </p>
          <h1 className="portfolio-fade-up portfolio-fade-up--d1 mt-6 font-display text-6xl leading-[0.92] tracking-tight md:text-[8.5rem]">
            CASE STUDIES
          </h1>
          <p className="portfolio-fade-up portfolio-fade-up--d2 mt-10 max-w-xl text-lg leading-relaxed text-cream/70 md:text-xl">
            Real problems. Real solutions. A curated look at how we build Flutter
            applications that drive measurable results for our clients.
          </p>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] border-b border-navy/10 px-6 py-14 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] md:col-span-3">
              Dimitris H., Athens
            </p>
            <blockquote className="font-display text-2xl leading-tight md:col-span-9 md:text-5xl">
              &ldquo;We count ourselves very fortunate to have Avinath as part of our
              team, and would highly recommend him to any team looking to ramp up their
              tech development.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES LIST ─── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 pb-14 md:px-12 md:pb-32">
          <div>
            {projects.map((p, i) => (
              <article
                key={p.slug}
                className="group relative transition-colors duration-300 hover:bg-navy/[0.02]"
              >
                <div className="grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-12 md:gap-12 md:py-16">

                  {/* Text + meta */}
                  <div className="flex items-start gap-6 md:col-span-7">
                    <span className="hidden w-14 shrink-0 font-display text-4xl leading-none text-navy/10 transition-colors duration-300 group-hover:text-navy/20 md:block">
                      0{i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-navy/40">Case Study</p>
                      <h2 className="mt-2 font-display text-2xl leading-snug md:text-3xl">
                        <Link
                          href={`/gallery/${p.slug}`}
                          className="text-navy after:absolute after:inset-0"
                        >
                          {p.category}
                        </Link>
                      </h2>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="text-sm font-medium text-navy/60">{p.name}</span>
                        <span className="portfolio-location-badge">{p.location}</span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-navy/50">{p.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span key={tag} className="portfolio-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-navy/30 transition-all duration-300 group-hover:gap-3 group-hover:text-navy"
                        aria-hidden="true"
                      >
                        <span>View Case Study</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-lilac transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]">
                      <Image
                        src={imageSrc(p.image)}
                        alt={imageAlt(p.image)}
                        fill
                        sizes="(max-width: 768px) 100vw, 42vw"
                        className="object-contain"
                      />
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-navy">
        <div className="mx-auto max-w-[1500px] px-6 py-14 text-center md:px-12 md:py-32">
          <p className="text-sm uppercase tracking-[0.35em] text-cream/50">
            Like what you see?
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[0.95] text-lilac md:text-7xl">
            Let&rsquo;s build something amazing together.
          </h2>
          <Link
            href="/booking#free-consultation"
            className="booking-cta-btn mt-14 inline-flex items-center gap-3"
          >
            <span>Book a Consultation</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
