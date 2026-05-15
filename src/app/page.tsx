import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import {imageAlt, imageSrc} from "@/lib/images";

export const metadata: Metadata = {
  title: "Flutter Genius | App Development Experts",
  description:
    "Flutter Genius builds production-grade Flutter apps for mobile, web and desktop. 7+ years experience, 20+ apps published, Top Rated on Upwork. Book a free consultation.",
  openGraph: {
    title: "Flutter Genius — Expert Flutter App Development",
    description:
      "Flutter Genius builds production-grade Flutter apps for mobile, web and desktop. 7+ years experience, 20+ apps published, Top Rated on Upwork.",
    url: "https://www.fluttergenius.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flutter Genius — Expert Flutter App Development",
      },
    ],
  },
  twitter: {
    title: "Flutter Genius — Expert Flutter App Development",
    description:
      "Flutter Genius builds production-grade Flutter apps for mobile, web and desktop. 7+ years experience, 20+ apps published, Top Rated on Upwork.",
  },
  alternates: {
    canonical: "https://www.fluttergenius.com",
  },
};

const heroStats = [
  {value: "7+", label: "Years Scaling with Flutter"},
  {value: "20+", label: "Apps Published"},
  {value: "100%", label: "Job Success"},
  {value: "Top Rated", label: "On Upwork"},
];

export default function HomePage() {
  return (
    <>
      {/* HERO — dark */}
      <section className="relative w-full overflow-hidden bg-navy text-cream">
        <div className="mx-auto max-w-[1500px] px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-32">
          {/* Full-width headline */}
          <h1 className="font-display text-[4rem] leading-[0.88] md:text-[7.5vw]">
            <span className="block">YOUR FLUTTER APP</span>
            <span className="block">DESERVES AN EXPERT TEAM.</span>
          </h1>

          {/* Divider + meta row */}
          <div className="mt-10 grid grid-cols-1 items-end gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cream/40">
                Avinath Gunasekara &amp; Co.
              </p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-cream/60">
                Expert Flutter engineers. From MVP to production-grade apps, we partner with startups and teams to build fast, reliable, beautiful Flutter products.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-cream/40">
                Let&rsquo;s talk
              </p>
              <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-6">
                <Link href="/booking#free-consultation" className="audit-hero-btn">
                  Free Strategy Call
                </Link>
                <Link href="/gallery" className="btn-outline-light">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl md:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL 1 — white */}
      <Section tone="cream">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] md:col-span-3">
            fethr.app &bull; London
          </p>
          <blockquote className="font-display text-2xl leading-tight md:col-span-9 md:text-5xl">
            &ldquo;I could not emphasise enough what a game-changing impact Avinath has
            made for our startup. He has proved himself to be a world-class
            Flutter and Firebase developer, consistently delivering complex
            features on time and to a high standard for our mobile app.&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* HERO IMAGE BAND */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 pb-14 md:px-12 md:pb-32">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={imageSrc("homeCoves")}
              alt={imageAlt("homeCoves")}
              fill
              sizes="(max-width: 768px) 100vw, 1500px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT + SERVICES — dark */}
      <Section tone="navy">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              A bit about me
            </p>
            <p className="mt-6 text-xl leading-relaxed text-white/80 md:text-2xl">
              An engineer with a proven track record of reliability and clear
              communication, backed by 7+ years of experience using Flutter and
              numerous published applications for mobile, web and desktop.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Services
            </p>
            <p className="mt-2 text-sm text-white/50">
              Ready to start? Simply reach out to begin collaborating together.
            </p>
            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10 font-display text-2xl md:text-3xl">
              {[
                "Flutter Development for Mobile, Web & Desktop",
                "Team Training",
                "Flutter & Tech Consultation",
                "Development Team Augmentation",
              ].map((item) => (
                <li key={item} className="py-5 text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS — white */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="text-xs uppercase tracking-[0.2em] text-navy/40">
                How it works
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                A simple, transparent process
              </h2>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px border border-navy/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Discovery Call",
                desc: "We discuss your project goals, timeline and tech requirements in a free consultation.",
              },
              {
                num: "02",
                title: "Proposal & Scope",
                desc: "You receive a detailed proposal with milestones, deliverables and transparent pricing.",
              },
              {
                num: "03",
                title: "Build & Iterate",
                desc: "Development begins with weekly check-ins, live previews and agile sprints.",
              },
              {
                num: "04",
                title: "Launch & Support",
                desc: "We ship your product, handle deployment and provide ongoing maintenance.",
              },
            ].map((step) => (
              <div key={step.num} className="booking-step-card border-0">
                <span className="booking-step-num">{step.num}</span>
                <h3 className="mt-6 font-display text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PORTFOLIO PREVIEW — white */}
      <Section tone="cream">
        <p className="mb-10 text-xs uppercase tracking-[0.2em] text-navy/40">Selected work</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={imageSrc("homeSpacehero")}
              alt={imageAlt("homeSpacehero")}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={imageSrc("homeTotal")}
              alt={imageAlt("homeTotal")}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain bg-lilac transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>
        <div className="mt-10 flex justify-start">
          <Link href="/gallery" className="btn-outline-dark">
            View All Work &rarr;
          </Link>
        </div>
      </Section>

      {/* TESTIMONIAL 2 — light gray */}
      <Section tone="lilac">
        <div className="mx-auto max-w-5xl">
          <blockquote className="font-display text-2xl leading-tight md:text-5xl">
            &ldquo;Avinath has been an excellent developer for our project. He&rsquo;s been
            able to consistently deliver features and overcome hurdles and
            issues we&rsquo;ve faced. His in-depth knowledge of Flutter has helped us
            overcome the trickiest of issues, he&rsquo;s been very resourceful for our
            team.&rdquo;
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
            YellowQ &bull; Netherlands
          </p>
        </div>
      </Section>

      {/* FLUTTER COLOMBO — white */}
      <Section tone="cream">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-navy/40">Community</p>
            <p className="mt-4 font-display text-2xl leading-tight md:text-4xl">
              Proud organisers and supporters of Flutter Colombo.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-navy/60">
              Flutter Colombo is Sri Lanka&rsquo;s premier Flutter community with
              4000+ followers. An official member of the Flutter Meetup Network
              by Google, Flutter Colombo hosts meetups, hackathons, and seminars
              all year long.
            </p>
            <Link
              href="https://fluttercolombo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark mt-8 inline-flex"
            >
              fluttercolombo.com &rarr;
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden md:col-span-5">
            <Image
              src={imageSrc("flutterColombo")}
              alt={imageAlt("flutterColombo")}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* BOTTOM CTA — dark */}
      <section className="bg-navy">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-40">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            It starts with one conversation
          </p>
          <h2 className="mt-8 max-w-4xl font-display text-[3.5rem] leading-[0.9] text-white md:text-[7rem]">
            Production apps built to scale.
          </h2>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-white/50">
            Book a free 30-minute call. We&rsquo;ll talk through your idea, answer your questions, and map out a clear path forward.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href="/booking#free-consultation" className="btn-outline-light">
              Book a Consultation
            </Link>
            <Link href="/gallery" className="text-xs uppercase tracking-[0.18em] text-white/40 hover:text-white/70 transition-colors">
              See Our Work First &rarr;
            </Link>
          </div>
          <p className="mt-8 text-xs text-white/25">
            Free. 30 minutes. No obligation.
          </p>
        </div>
      </section>
    </>
  );
}
