"use client";

import Image from "next/image";
import Link from "next/link";
import {imageSrc, imageAlt} from "@/lib/images";

const stats = [
  {value: "6+", label: "Years with Flutter"},
  {value: "20+", label: "Apps Published"},
  {value: "100%", label: "Job Success"},
  {value: "Top Rated", label: "On Upwork"},
];

export default function BookingPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="booking-hero relative overflow-hidden bg-navy text-lilac">
        {/* Decorative blobs */}
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
          <Link
            href="https://www.upwork.com/freelancers/fluttergenius"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-fade-up booking-fade-up--d4 booking-cta-btn mt-12 inline-flex items-center gap-3"
          >
            <span>Start a Project</span>
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
            <p className="mt-6 max-w-lg text-cream/60 leading-relaxed">
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
          <Link
            href="https://www.upwork.com/freelancers/fluttergenius"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-cta-btn booking-cta-btn--center mt-14 inline-flex items-center gap-3"
          >
            <span>Get Started</span>
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
