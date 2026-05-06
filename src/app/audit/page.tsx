"use client";

import {useState} from "react";

const CALENDLY_BASE = "https://calendly.com/avinath/30min";

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

export default function AuditPage() {
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
    return `${CALENDLY_BASE}?${params.toString()}`;
  }

  const stepNumber =
    step === "q1" ? 1 : step === "no-app" ? 1 : step === "q2" ? 2 : step === "q3" ? 3 : 4;

  return (
    <section className="bg-navy text-lilac">
      <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">

        {/* ─── LEFT: hero text ─── */}
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cream/60">Free service</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            YOUR FREE
            <br />
            FLUTTER AUDIT
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
            A free, no-strings review of your Flutter project.
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-cream/40">What you get</p>
          <ul className="mt-4 max-w-lg space-y-3">
            {[
              "A 30-minute call to understand your goals and walk through your code",
              "A 1-page written report covering architecture, performance, scalability, and the top 3 things I’d prioritise",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-cream/60">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lilac/70" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-sm text-sm leading-relaxed text-cream/40">
            No sales pitch. No commitment. If the report&rsquo;s useful and you want to keep working together, we&rsquo;ll talk.
          </p>
        </div>

        {/* ─── RIGHT: questionnaire card ─── */}
        <div className="mt-14 rounded-3xl bg-cream px-8 py-10 lg:mt-0 lg:px-10 lg:py-12">

          {/* Q1 — Have you already built an app? */}
          {step === "q1" && (
            <div key="q1" className="audit-step">
              <p className="audit-step-label">Question 1 of 4</p>
              <h2 className="audit-question">Have you already built an app?</h2>
              <div className="mt-10 flex flex-wrap gap-4">
                <button onClick={() => handleQ1(true)} className="audit-choice-btn">
                  Yes
                </button>
                <button onClick={() => handleQ1(false)} className="audit-choice-btn">
                  No
                </button>
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
                Reserve Your Free Audit →
              </a>
            </div>
          )}

          {/* Q2 — Is the app in production? */}
          {step === "q2" && (
            <div key="q2" className="audit-step">
              <button onClick={goBack} className="audit-back-btn">← Back</button>
              <p className="audit-step-label">Question 2 of 4</p>
              <h2 className="audit-question">Is the app in production?</h2>
              <div className="mt-10 flex flex-wrap gap-4">
                <button onClick={() => handleQ2(true)} className="audit-choice-btn">
                  Yes
                </button>
                <button onClick={() => handleQ2(false)} className="audit-choice-btn">
                  No
                </button>
              </div>
            </div>
          )}

          {/* Q3 — Used no-code / low-code / AI? */}
          {step === "q3" && (
            <div key="q3" className="audit-step">
              <button onClick={goBack} className="audit-back-btn">← Back</button>
              <p className="audit-step-label">Question 3 of 4</p>
              <h2 className="audit-question">
                Did you use any no-code, low-code or AI solutions for it?
              </h2>
              <div className="mt-10 flex flex-wrap gap-4">
                <button onClick={() => handleQ3(true)} className="audit-choice-btn">
                  Yes
                </button>
                <button onClick={() => handleQ3(false)} className="audit-choice-btn">
                  No
                </button>
              </div>
            </div>
          )}

          {/* Q4 — Biggest issue */}
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
                  <option key={issue} value={issue}>
                    {issue}
                  </option>
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
                Reserve Your Free Audit →
              </a>
            </div>
          )}

          {/* Progress dots */}
          {step !== "no-app" && (
            <div className="mt-12 flex gap-2">
              {[1, 2, 3, 4].map((n) => (
                <span
                  key={n}
                  className={`h-1.5 rounded-full transition-all duration-300 ${n === stepNumber
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
    </section>
  );
}
