import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {imageAlt, imageSrc, type ImageKey} from "@/lib/images";

type Feature = {
  title: string;
  description: string;
};

type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  location: string;
  tags: string[];
  image: ImageKey;
  overview: string;
  challenge: string;
  solution: string;
  features: Feature[];
  techStack: string[];
};

const caseStudies: Record<string, CaseStudy> = {
  coves: {
    slug: "coves",
    name: "Coves",
    category: "AI-Enabled Property Management Software",
    location: "Singapore",
    tags: ["Flutter", "Firebase", "Algolia", "Web & Mobile"],
    image: "galleryLargeMockup",
    overview:
      "Coves needed a robust coworking management platform capable of handling the full complexity of running multiple shared spaces in Singapore, covering everything from real-time desk bookings to automated financial reporting.",
    challenge:
      "Managing a modern coworking space means juggling dozens of simultaneous concerns: member onboarding, recurring billing, space utilization tracking, and compliance with accounting standards. Coves needed a single platform that unified all of these, integrated with their existing financial tools, and worked seamlessly across web browsers and mobile devices, without compromising on reliability or speed.",
    solution:
      "We built a full-featured property management platform using Flutter for true cross-platform delivery: one codebase, two platforms. Firebase powers real-time data synchronization so bookings, availability, and member data are always current. Algolia enables instant, typo-tolerant search across the platform. Custom-built integrations with QuickBooks and Xero automate invoice generation, payment tracking, and financial reconciliation.",
    features: [
      {
        title: "Smart Booking Engine",
        description:
          "Real-time space availability with conflict detection, automated confirmation workflows, and calendar synchronization.",
      },
      {
        title: "Membership & Billing",
        description:
          "Flexible membership tiers with automated recurring invoicing and seamless QuickBooks & Xero integration.",
      },
      {
        title: "Algolia-Powered Search",
        description:
          "Sub-second, typo-tolerant search across spaces, members, bookings, and transactions.",
      },
      {
        title: "Cross-Platform Delivery",
        description:
          "A single Flutter codebase powering both the web admin dashboard and the mobile member app.",
      },
    ],
    techStack: ["Flutter", "Firebase", "Algolia", "QuickBooks API", "Xero API"],
  },
  spacehero: {
    slug: "spacehero",
    name: "Spacehero",
    category: "Intelligent Warehouse Management System",
    location: "Athens, Greece",
    tags: ["Flutter", "Firebase", "Desktop & Mobile"],
    image: "gallerySpacehero",
    overview:
      "Spacehero is a storage business based in Athens that needed a comprehensive system to manage their operations across both desktop and mobile, covering everything from receiving items to tracking locations and managing customer orders.",
    challenge:
      "Running a physical storage business involves constant coordination between field teams, office staff, and customers. Pickup requests, return orders, space allocation, and customer communications all needed to be managed in a single system that worked reliably on both desktop workstations and mobile devices in the field, while staying synchronized with third-party services.",
    solution:
      "We designed and built a warehouse management system as a cross-platform Flutter application. Custom syncing mechanisms ensure data stays consistent across all access points and integrates with Spacehero's existing third-party services. The desktop experience handles complex administrative tasks while the mobile app empowers field teams in real time.",
    features: [
      {
        title: "Order Management",
        description:
          "Create, track, and update pickup and return orders with full status history and real-time notifications.",
      },
      {
        title: "Space Visualization",
        description:
          "Real-time occupancy mapping and precise location assignment for every stored item.",
      },
      {
        title: "Customer CRM",
        description:
          "Comprehensive customer profiles, complete order history, and integrated communication logs.",
      },
      {
        title: "Third-Party Sync",
        description:
          "Custom syncing layer that keeps warehouse data consistent with external services and platforms.",
      },
    ],
    techStack: ["Flutter", "Firebase", "Desktop", "Mobile", "REST APIs"],
  },
  ekva: {
    slug: "ekva",
    name: "EKVA",
    category: "Sustainability Rewards & Loyalty Platform",
    location: "Colombo, Sri Lanka",
    tags: ["Flutter", "AI", "Mobile"],
    image: "galleryTotal",
    overview:
      "EKVA was built to tackle Sri Lanka's growing waste management challenge by turning recycling into a rewarding habit through a gamified, AI-driven mobile experience.",
    challenge:
      "Changing behavior at scale requires more than good intentions. It requires the right incentives delivered at the right moment. EKVA needed a platform that could accurately track recycling activities, calculate points fairly, and deliver personalized rewards that kept users engaged over the long term.",
    solution:
      "We built a mobile-first Flutter app with a custom AI engine at its core. The AI analyzes individual recycling patterns and dynamically adjusts incentives to maximize long-term engagement. A sophisticated point-tracking system ensures accurate, tamper-resistant activity logging, while a gamification layer makes sustainability genuinely rewarding.",
    features: [
      {
        title: "AI-Powered Incentives",
        description:
          "Custom AI analyzes user behavior and dynamically tailors rewards to individual engagement patterns.",
      },
      {
        title: "Point Tracking",
        description:
          "Sophisticated, tamper-resistant tracking for recycling activities with instant point crediting.",
      },
      {
        title: "Gamification Layer",
        description:
          "Badges, streaks, leaderboards, and milestones that sustain long-term motivation and habit formation.",
      },
      {
        title: "Impact Dashboard",
        description:
          "Users see their cumulative environmental impact, including items recycled and CO₂ saved, updated in real time.",
      },
    ],
    techStack: ["Flutter", "Custom AI", "Firebase", "Mobile"],
  },
  slsywc: {
    slug: "slsywc",
    name: "SLSYWC '19",
    category: "Event Management Platform",
    location: "Colombo, Sri Lanka",
    tags: ["Flutter", "Events", "Mobile"],
    image: "galleryFinal",
    overview:
      "The Sri Lanka Youth Working Committee's 2019 conference needed a digital companion app that would make a large-scale event feel personalized and connected for every attendee.",
    challenge:
      "Large events often suffer from information overload, missed networking opportunities, and outdated schedules. SLSYWC needed an app that worked in a venue with inconsistent connectivity, enabled seamless networking between hundreds of attendees, and kept the schedule current the moment anything changed.",
    solution:
      "We built a focused Flutter mobile app purpose-built for the conference experience. QR-based contact scanning replaced business card exchanges. A points-based reward system drove attendee engagement throughout the event. Real-time timeline updates kept everyone aligned on schedule changes as they happened.",
    features: [
      {
        title: "QR Contact Scanning",
        description:
          "Instant contact exchange and automatic saving via QR codes, with no internet connection required.",
      },
      {
        title: "Reward Redemption",
        description:
          "Points-based system tied to participation, sessions attended, and connections made throughout the event.",
      },
      {
        title: "Real-Time Schedule",
        description:
          "Live event timeline with instant push updates for any schedule changes or announcements.",
      },
      {
        title: "Session Discovery",
        description:
          "Browse sessions, speakers, and event information in-app with an intuitive, offline-capable interface.",
      },
    ],
    techStack: ["Flutter", "Mobile", "QR Integration", "Push Notifications"],
  },
  fethr: {
    slug: "fethr",
    name: "Fethr",
    category: "Community-Centric Social Networking Platform",
    location: "London, England",
    tags: ["Flutter", "Firebase", "Mobile"],
    image: "galleryFethr",
    overview:
      "Fethr reimagines how people build meaningful networks, going beyond passive follower counts to create genuine, interest-driven connections through intuitive gesture-based interaction.",
    challenge:
      "Most social networking apps optimize for engagement metrics rather than meaningful relationships. Fethr wanted to build something different: a platform where connections feel intentional, communities feel vibrant, and the app itself adapts to how each person uses it.",
    solution:
      "We built Fethr on Flutter, delivering a polished cross-platform experience. The swipe-based connection mechanic borrows familiarity from modern apps but applies it to meaningful networking. A custom recommendation algorithm surfaces relevant people and communities. Group chats organized by interest create spaces where connections deepen over time.",
    features: [
      {
        title: "Swipe-Based Discovery",
        description:
          "Gesture-driven UX for finding and connecting with people in your field and interests, fast and intuitive.",
      },
      {
        title: "Community Chats",
        description:
          "Interest-organized group conversations that foster ongoing relationships beyond the initial connection.",
      },
      {
        title: "Smart Recommendations",
        description:
          "Proprietary algorithm surfaces the right connections and communities at the right moment.",
      },
      {
        title: "Adaptive Interface",
        description:
          "UI elements that learn and adapt to individual user behavior and preferences over time.",
      },
    ],
    techStack: ["Flutter", "Firebase", "Mobile", "Custom Algorithms"],
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({slug}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params;
  const study = caseStudies[slug];
  if (!study) return {};

  return {
    title: `${study.name}: ${study.category}`,
    description: study.overview,
    openGraph: {
      title: `${study.name}: ${study.category} | Flutter Genius`,
      description: study.overview,
      url: `https://www.fluttergenius.com/gallery/${slug}`,
      images: [
        {url: "/images/og-image.png", width: 1200, height: 630, alt: study.name},
      ],
    },
    alternates: {
      canonical: `https://www.fluttergenius.com/gallery/${slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  const allSlugs = Object.keys(caseStudies);
  const projectNumber = String(allSlugs.indexOf(slug) + 1).padStart(2, "0");

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="portfolio-hero relative overflow-hidden bg-navy text-lilac">
        <div className="portfolio-blob portfolio-blob--1" />
        <div className="portfolio-blob portfolio-blob--2" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-cream"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>All Case Studies</span>
          </Link>

          <p className="mt-10 text-sm uppercase tracking-[0.35em] text-cream/60">
            {study.name}, {study.location}
          </p>
          <h1 className="portfolio-fade-up portfolio-fade-up--d1 mt-4 font-display text-5xl leading-[0.92] tracking-tight md:text-[7rem]">
            {study.category.toUpperCase()}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cream/20 px-4 py-1.5 text-xs uppercase tracking-wider text-cream/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-navy/40">Overview</p>
              <p className="mt-6 font-display text-6xl leading-none text-navy/10 md:text-8xl">
                {projectNumber}
              </p>
            </div>
            <div className="md:col-span-9">
              <p className="font-display text-3xl leading-tight md:text-4xl">
                {study.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APP SCREENSHOT ─── */}
      <section className="bg-lilac">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <div className="portfolio-image-card relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={imageSrc(study.image)}
              alt={imageAlt(study.image)}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ─── CHALLENGE & SOLUTION ─── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-navy/40">
                The Challenge
              </p>
              <p className="mt-6 text-lg leading-relaxed text-navy/80">{study.challenge}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-navy/40">
                The Solution
              </p>
              <p className="mt-6 text-lg leading-relaxed text-navy/80">{study.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="bg-lilac">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <p className="text-xs uppercase tracking-[0.2em] text-navy/40">Key Features</p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {study.features.map((feature, i) => (
              <div key={feature.title} className="rounded-2xl bg-cream p-8">
                <p className="font-display text-3xl leading-none text-navy/10">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-navy/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="bg-cream">

        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <p className="text-xs uppercase tracking-[0.2em] text-navy/40">Tech Stack</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-navy/5 px-5 py-2.5 text-sm font-medium text-navy"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-navy">
        <div className="mx-auto max-w-[1500px] px-6 py-14 text-center md:px-12 md:py-32">
          <p className="text-sm uppercase tracking-[0.35em] text-cream/50">Ready to build?</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[0.95] text-lilac md:text-7xl">
            Let&rsquo;s create something like this for you.
          </h2>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/booking#free-consultation"
              className="booking-cta-btn inline-flex items-center gap-3"
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
            <Link
              href="/gallery"
              className="btn-outline-light inline-flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>View All Case Studies</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
