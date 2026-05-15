"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {imageSrc, imageAlt} from "@/lib/images";

const CONSULTATION_URL = "https://calendly.com/avinath/30min";

const FLUTTER_ISSUES = [
  "App performance & jank",
  "State management complexity",
  "Build size & bundle optimisation",
  "CI/CD & deployment pipelines",
  "Backend integration & APIs",
  "Test coverage & reliability",
  "Team scaling & code architecture",
  "Platform-specific bugs (iOS / Android)",
  "App Store / Play Store issues",
  "Something else",
];

type Step = "q1" | "no-app" | "q2" | "q3" | "q4";

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
  const [step, setStep] = useState<Step>("q1");
  const [hasApp, setHasApp] = useState<boolean | null>(null);
  const [inProduction, setInProduction] = useState<boolean | null>(null);
  const [usedNoCode, setUsedNoCode] = useState<boolean | null>(null);
  const [biggestIssue, setBiggestIssue] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [appDescription, setAppDescription] = useState("");

  function handleQ1(answer: boolean) {
    setHasApp(answer);
    setStep(answer ? "q2" : "no-app");
  }

  function handleQ2(answer: boolean) {
    setInProduction(answer);
    setStep("q3");
  }

  function handleQ3(answer: boolean) {
    setUsedNoCode(answer);
    setStep("q4");
  }

  function goBack() {
    if (step === "no-app") setStep("q1");
    else if (step === "q2") setStep("q1");
    else if (step === "q3") setStep("q2");
    else if (step === "q4") setStep("q3");
  }

  function buildCalendlyUrl(): string {
    const params = new URLSearchParams();
    const lines: string[] = [];

    if (!hasApp) {
      lines.push("Has existing app: No");
      const desc = appDescription.trim();
      if (desc) lines.push(`App idea: ${desc}`);
    } else {
      lines.push("Has existing app: Yes");
      lines.push(`In production: ${inProduction ? "Yes" : "No"}`);
      lines.push(`Used no-code / low-code / AI: ${usedNoCode ? "Yes" : "No"}`);
      if (biggestIssue === "Something else" && issueDescription.trim()) {
        lines.push(`Biggest challenge: ${issueDescription.trim()}`);
      } else if (biggestIssue) {
        lines.push(`Biggest challenge: ${biggestIssue}`);
      }
    }

    params.set("a1", lines.join(" | "));
    return `${CONSULTATION_URL}?${params.toString()}`;
  }

  const stepNumber =
    step === "q1" ? 1 : step === "no-app" ? 1 : step === "q2" ? 2 : step === "q3" ? 3 : 4;

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
            <span className="booking-fade-up booking-fade-up--d1 block">LET&rsquo;S</span>
            <span className="booking-fade-up booking-fade-up--d2 block">WORK TOGETHER</span>
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
      <section id="free-consultation" className="bg-navy text-lilac">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

            {/* Left — headline + perks */}
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cream/60">
                No strings attached
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-lilac md:text-6xl">
                Book a Free
                <br />
                Consultation
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-cream/70">
                Not sure where to start? Let&rsquo;s hop on a call. I&rsquo;ll
                help you figure out the right approach for your project — for
                free.
              </p>

              <div className="mt-10 flex flex-col gap-8">
                {consultationPerks.map((perk) => (
                  <div key={perk.num} className="flex items-start gap-5">
                    <span className="font-display text-2xl leading-none text-lilac/30">
                      {perk.num}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-lilac">{perk.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-cream/60">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-10 max-w-sm text-sm leading-relaxed text-cream/40">
                No sales pitch. No commitment. If the call&rsquo;s useful and you want to keep
                working together, we&rsquo;ll talk.
              </p>
            </div>

            {/* Right — questionnaire card */}
            <div className="rounded-3xl bg-cream px-8 py-10 lg:px-10 lg:py-12">

              {/* Q1 */}
              {step === "q1" && (
                <div key="q1" className="audit-step">
                  <p className="audit-step-label">Question 1 of 4</p>
                  <h2 className="audit-question">Have you already built an app?</h2>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button onClick={() => handleQ1(true)} className="audit-choice-btn">Yes</button>
                    <button onClick={() => handleQ1(false)} className="audit-choice-btn">No</button>
                  </div>
                </div>
              )}

              {/* No-app branch */}
              {step === "no-app" && (
                <div key="no-app" className="audit-step">
                  <button onClick={goBack} className="audit-back-btn">← Back</button>
                  <p className="audit-greenfield-label">Perfect answer.</p>
                  <h2 className="audit-greenfield-heading">We love green field projects.</h2>
                  <p className="mt-6 text-navy/60">
                    Describe your app idea so we can prepare (optional)
                  </p>
                  <textarea
                    value={appDescription}
                    onChange={(e) => setAppDescription(e.target.value)}
                    placeholder="Tell us about your app concept..."
                    className="audit-textarea mt-4"
                    rows={5}
                  />
                  <a
                    href={buildCalendlyUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="audit-submit-btn mt-10"
                  >
                    Book My Free Consultation →
                  </a>
                </div>
              )}

              {/* Q2 */}
              {step === "q2" && (
                <div key="q2" className="audit-step">
                  <button onClick={goBack} className="audit-back-btn">← Back</button>
                  <p className="audit-step-label">Question 2 of 4</p>
                  <h2 className="audit-question">Is the app in production?</h2>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button onClick={() => handleQ2(true)} className="audit-choice-btn">Yes</button>
                    <button onClick={() => handleQ2(false)} className="audit-choice-btn">No</button>
                  </div>
                </div>
              )}

              {/* Q3 */}
              {step === "q3" && (
                <div key="q3" className="audit-step">
                  <button onClick={goBack} className="audit-back-btn">← Back</button>
                  <p className="audit-step-label">Question 3 of 4</p>
                  <h2 className="audit-question">
                    Did you use any no-code, low-code or AI solutions for it?
                  </h2>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button onClick={() => handleQ3(true)} className="audit-choice-btn">Yes</button>
                    <button onClick={() => handleQ3(false)} className="audit-choice-btn">No</button>
                  </div>
                </div>
              )}

              {/* Q4 */}
              {step === "q4" && (
                <div key="q4" className="audit-step">
                  <button onClick={goBack} className="audit-back-btn">← Back</button>
                  <p className="audit-step-label">Question 4 of 4</p>
                  <h2 className="audit-question">What&rsquo;s your biggest challenge right now?</h2>
                  <select
                    value={biggestIssue}
                    onChange={(e) => setBiggestIssue(e.target.value)}
                    className="audit-select mt-8 w-full"
                  >
                    <option value="">Select a challenge...</option>
                    {FLUTTER_ISSUES.map((issue) => (
                      <option key={issue} value={issue}>{issue}</option>
                    ))}
                  </select>
                  {biggestIssue === "Something else" && (
                    <textarea
                      value={issueDescription}
                      onChange={(e) => setIssueDescription(e.target.value)}
                      placeholder="Describe the problem..."
                      className="audit-textarea mt-6"
                      rows={4}
                      autoFocus
                    />
                  )}
                  <a
                    href={buildCalendlyUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="audit-submit-btn mt-10"
                  >
                    Book My Free Consultation →
                  </a>
                </div>
              )}

              {/* Progress dots */}
              {step !== "no-app" && (
                <div className="mt-12 flex gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <span
                      key={n}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        n === stepNumber
                          ? "w-8 bg-navy"
                          : n < stepNumber
                          ? "w-4 bg-navy/40"
                          : "w-4 bg-navy/15"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] border-t border-navy/10 px-6 py-14 md:px-12 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] md:col-span-3">
              Sam A. &bull; London
            </p>
            <blockquote className="font-display text-xl leading-tight md:col-span-9 md:text-3xl">
              &ldquo;Working with Avinath was a pleasure. He took on a project that initially had many issues and significantly improved it. He collaborates, communicates, and contributes exceptionally well, and we look forward to working with him again on future projects. If you need someone who gets things done and adds real value with their experience, Avinath is the right choice.&rdquo;
            </blockquote>
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
                  {title: "Flutter Development", sub: "Mobile, Web & Desktop"},
                  {title: "Team Training", sub: "Workshops & Mentoring"},
                  {title: "Tech Consultation", sub: "Architecture & Strategy"},
                  {title: "Team Augmentation", sub: "Embedded Engineering"},
                ].map((s) => (
                  <li key={s.title} className="booking-service-item group">
                    <div>
                      <span className="font-display text-2xl md:text-3xl">{s.title}</span>
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
              href="#free-consultation"
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
