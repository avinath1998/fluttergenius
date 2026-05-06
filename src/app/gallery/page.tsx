import Image from "next/image";
import Link from "next/link";
import type {Metadata} from "next";
import {imageAlt, imageSrc, type ImageKey} from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio — fluttergenius.com",
};

type Project = {
  name: string;
  location: string;
  description: string;
  image: ImageKey;
  tags: string[];
};

const projects: Project[] = [
  {
    name: "Coves",
    location: "Singapore",
    description:
      "A complex coworking management software facilitating all bookings, invoices, memberships and invoices. A range of custom integrations was built including QuickBooks & Xero. Fully-responsive UI, built for web and mobile. A combination of Flutter, Firebase & Algolia.",
    image: "galleryLargeMockup",
    tags: ["Flutter", "Firebase", "Algolia", "Web & Mobile"],
  },
  {
    name: "EKVA",
    location: "Colombo, Sri Lanka",
    description:
      "EKVA was designed to promote recycling in Sri Lanka. The app utilizes a sophisticated point-tracking system and custom-built AI to inspire and incentivize individuals to engage in recycling.",
    image: "galleryTotal",
    tags: ["Flutter", "AI", "Mobile"],
  },
  {
    name: "Spacehero",
    location: "Athens, Greece",
    description:
      "A comprehensive warehouse management system designed for a storage business. It encompasses creating and tracking pickup and return orders, space management, and customer management with custom syncing mechanisms to third party services.",
    image: "gallerySpacehero",
    tags: ["Flutter", "Firebase", "Desktop & Mobile"],
  },
  {
    name: "SLSYWC '19",
    location: "Colombo, Sri Lanka",
    description:
      "An event management app offering event attendees a seamless experience — enabling reward redemption, contact scanning and saving, and real-time access to event timelines.",
    image: "galleryFinal",
    tags: ["Flutter", "Events", "Mobile"],
  },
  {
    name: "Fethr",
    location: "London, England",
    description:
      "A connection-making application with a swiping gesture inspired by modern dating apps, vibrant community chats, personalized connection recommendations powered by custom algorithms, and a dynamic user interface that adapts to individual preferences.",
    image: "galleryFethr",
    tags: ["Flutter", "Firebase", "Mobile"],
  },
];

export default function GalleryPage() {
  const [featured, ...rest] = projects;

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
            GALLERY
          </h1>
          <p className="portfolio-fade-up portfolio-fade-up--d2 mt-10 max-w-xl text-lg leading-relaxed text-cream/70 md:text-xl">
            A curated collection of Flutter applications built for startups and
            established teams across the globe.
          </p>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">

          {/* Featured project */}
          <article className="grid grid-cols-1 items-center gap-10 border-b border-navy/10 pb-20 md:grid-cols-12 md:pb-32">
            <div className="md:col-span-7">
              <div className="portfolio-image-card group relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <div className="portfolio-image-glow" />
                <Image
                  src={imageSrc(featured.image)}
                  alt={imageAlt(featured.image)}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="font-display text-7xl leading-none text-navy/10 md:text-8xl">01</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <h2 className="font-display text-4xl md:text-5xl">{featured.name}</h2>
                <span className="portfolio-location-badge">{featured.location}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="portfolio-tag">{tag}</span>
                ))}
              </div>
              <p className="mt-6 leading-relaxed text-navy/70">{featured.description}</p>
            </div>
          </article>

          {/* 2×2 grid */}
          <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 md:mt-32 md:gap-x-12 md:gap-y-24">
            {rest.map((p, i) => (
              <article key={p.name} className="flex flex-col">
                <div className="portfolio-image-card group relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <div className="portfolio-image-glow" />
                  <Image
                    src={imageSrc(p.image)}
                    alt={imageAlt(p.image)}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <p className="font-display text-4xl leading-none text-navy/10">
                    0{i + 2}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-3xl md:text-4xl">{p.name}</h2>
                    <span className="portfolio-location-badge">{p.location}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="portfolio-tag">{tag}</span>
                    ))}
                  </div>
                  <p className="mt-4 leading-relaxed text-navy/70">{p.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-20 text-center text-xs uppercase tracking-widest text-navy/30 md:mt-32">
            Screenshots from fethr.app
          </p>
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
