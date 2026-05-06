"use client";

import Image from "next/image";
import Link from "next/link";
import {imageSrc, imageAlt} from "@/lib/images";

// Replace with your actual Calendly (or other scheduler) link
const CONSULTATION_URL = "https://calendly.com/avinath/30min";

const stats = [
  {value: "6+", label: "Years with Flutter"},
  {value: "20+", label: "Apps Published"},
  {value: "100%", label: "Job Success"},
  {value: "Top Rated", label: "On Upwork"},
];

const consultationPerks = [
  {
    num: "01",
    title: "30-Min Discovery Call",
    desc: "We talk through your idea, goals, and technical requirements — no jargon, no sales pitch.",
  },
  {
    num: "02",
    title: "Architecture Advice",
    desc: "Get honest guidance on the right tech stack and approach for your specific project.",
  },
  {
    num: "03",
    title: "Zero Commitment",
    desc: "Walk away with a clear picture of what's possible. No obligation to proceed.",
  },
];

export default function BookingPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="booking-hero relative overflow-hidden bg-navy text-lilac">
        <div className="booking-blob booking-blob--1" />
        <div className="booking-blob booking-blob--2" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <p className="booking-fade-up text-sm uppercase tracking-[0.35em] text-cream/80">
            Ready to build something great?
          </p>
          <h1 className="booking-fade-up booking-fade-up--d1 mt-6 font-display text-5xl leading-[0.92] tracking-tight md:text-[8.5rem]">
            LET&rsquo;S
          </h1>
          <h1 className="booking-fade-up booking-fade-up--d2 font-display text-5xl leading-[0.92] tracking-tight md:text-[8.5rem]">
            WORK TOGETHER
          </h1>
          <p className="booking-fade-up booking-fade-up--d3 mt-10 max-w-xl text-lg leading-relaxed text-cream/70 md:text-xl">
            From concept to launch, I partner with startups and established
            teams to build world-class Flutter applications.
          </p>

          <div className="booking-fade-up booking-fade-up--d4 mt-12">
            <Link href="#free-consultation" className="btn-outline-light">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATS BAND ─── */}
      <section className="booking-stats-band bg-lilac">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-10 px-6 py-14 md:grid-cols-4 md:px-12 md:py-32">
          {stats.map((s) => (
            <div key={s.label} className="booking-stat text-center">
              <p className="font-display text-5xl tracking-tight text-navy md:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-navy/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FREE CONSULTATION ─── */}
      <section id="free-consultation" className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">

            {/* Left — headline */}
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-widest text-navy/50">
                No strings attached
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                Book a Consultation
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-navy/60">
                Not sure where to start? Let&rsquo;s hop on a call. I&rsquo;ll
                help you figure out the right approach for your project — for
                free.
              </p>
              <Link
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="consultation-btn mt-10 inline-flex items-center gap-3"
              >
                <span>Pick a Time</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </Link>
            </div>

            {/* Right — perk cards */}
            <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
              {consultationPerks.map((perk) => (
                <div key={perk.num} className="consultation-perk-card">
                  <span className="consultation-perk-num">{perk.num}</span>
                  <div className="ml-5">
                    <h3 className="font-display text-xl md:text-2xl">
                      {perk.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-navy/60">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── UPWORK CTA ─── */}
      <section className="bg-navy">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-12 md:px-12 md:py-32">
          <div className="md:col-span-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cream/60">
              Find me on Upwork
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-lilac md:text-6xl">
              Hire with confidence on the world&rsquo;s leading freelance
              platform.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-cream/60">
              With a 100% Job Success Score, Top Rated badge, and dozens of
              five-star reviews, you can start your project knowing it&rsquo;s
              in expert hands.
            </p>
            <Link
              href="https://www.upwork.com/freelancers/fluttergenius"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light mt-10"
            >
              Open Upwork Profile
            </Link>
          </div>

          <div className="relative md:col-span-6">
            <div className="booking-upwork-glow" />
            <div className="booking-upwork-card relative overflow-hidden rounded-2xl">
              <Image
                src={imageSrc("booking")}
                alt={imageAlt("booking")}
                width={720}
                height={720}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES QUICK LIST ─── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-widest text-navy/50">
                What I offer
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Services tailored to your needs
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ul className="booking-service-list divide-y divide-navy/10 border-y border-navy/10">
                {[
                  {
                    title: "Flutter Development",
                    sub: "Mobile, Web & Desktop",
                  },
                  {title: "Team Training", sub: "Workshops & Mentoring"},
                  {
                    title: "Tech Consultation",
                    sub: "Architecture & Strategy",
                  },
                  {
                    title: "Team Augmentation",
                    sub: "Embedded Engineering",
                  },
                ].map((s) => (
                  <li key={s.title} className="booking-service-item group">
                    <div>
                      <span className="font-display text-2xl md:text-3xl">
                        {s.title}
                      </span>
                      <span className="ml-3 text-sm text-navy/50">{s.sub}</span>
                    </div>
                    <svg
                      className="h-5 w-5 text-navy/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-navy"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-navy">
        <div className="mx-auto max-w-[1500px] px-6 py-14 text-center md:px-12 md:py-32">
          <p className="text-sm uppercase tracking-[0.35em] text-cream/50">
            Let&rsquo;s create together
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[0.95] text-lilac md:text-7xl">
            Ready to bring your idea to life?
          </h2>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="booking-cta-btn booking-cta-btn--center inline-flex items-center gap-3"
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </Link>
            <Link
              href="https://www.upwork.com/freelancers/fluttergenius"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              Start on Upwork
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
