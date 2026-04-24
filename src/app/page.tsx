import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Marquee from "@/components/Marquee";
import { imageAlt, imageSrc } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      {/* HERO — navy */}
      <section className="relative w-full overflow-hidden bg-navy text-lilac">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:px-12 md:py-32">
          <div>
            <h1 className="font-display text-7xl leading-[0.95] tracking-tight md:text-[9rem]">
              AVINATH
            </h1>
            <h1 className="mt-2 font-display text-5xl leading-[0.95] tracking-tight md:text-[6rem]">
              GUNASEKARA &amp; Co.
            </h1>
            <p className="mt-10 text-xl uppercase tracking-[0.3em] text-cream md:text-2xl">
              Flutter Engineer
              <br />
              &amp; Experts
            </p>
          </div>
          <div className="relative h-80 w-full md:h-[520px]">
            <Image
              src={imageSrc("hero")}
              alt={imageAlt("hero")}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL 1 — cream */}
      <Section tone="cream">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <p className="col-span-12 text-sm uppercase tracking-widest md:col-span-3">
            fethr.app • London
          </p>
          <blockquote className="col-span-12 font-display text-3xl leading-snug md:col-span-9 md:text-5xl">
            “I could not emphasise enough what a game-changing impact Avinath has
            made for our startup. He has proved himself to be a world-class
            flutter and firebase developer, consistently delivering complex
            features on time and to a high standard for our mobile app.”
          </blockquote>
        </div>
      </Section>

      {/* HERO IMAGE BAND */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
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

      {/* ABOUT + SERVICES — navy */}
      <Section tone="navy">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-widest text-cream">
              A bit about me
            </p>
            <p className="mt-6 font-display text-2xl leading-snug text-lilac md:text-3xl">
              An engineer with a proven track record of reliability and clear
              communication, backed by 6+ years of experience using Flutter and
              numerous published applications for mobile, web and desktop.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-sm uppercase tracking-widest text-cream">
              Services
            </p>
            <p className="mt-2 text-lilac/90">
              Ready to start? Simply reach out to begin collaborating together.
            </p>
            <ul className="mt-10 divide-y divide-lilac/20 border-y border-lilac/20 font-display text-2xl md:text-3xl">
              {[
                "Flutter Development for Mobile, Web & Desktop",
                "Team Training",
                "Flutter & Tech Consultation",
                "Development Team Augmentation",
              ].map((item) => (
                <li key={item} className="py-5 text-lilac">
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/booking" className="btn-outline-light mt-10">
              Hire Me
            </Link>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS — cream */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-widest text-navy/50">
                How it works
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                A simple, transparent process
              </h2>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
              <div key={step.num} className="booking-step-card group">
                <span className="booking-step-num">{step.num}</span>
                <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-navy/70">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW — cream */}
      <Section tone="cream">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md">
            <Image
              src={imageSrc("homeSpacehero")}
              alt={imageAlt("homeSpacehero")}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md">
            <Image
              src={imageSrc("homeTotal")}
              alt={imageAlt("homeTotal")}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/gallery" className="btn-outline-dark">
            See Portfolio
          </Link>
        </div>
      </Section>

      {/* TESTIMONIAL 2 — cream */}
      <Section tone="cream">
        <div className="mx-auto max-w-5xl">
          <blockquote className="font-display text-3xl leading-snug md:text-5xl">
            “Avinath has been an excellent developer for our project. He’s been
            able to consistently deliver features and overcome hurdles and
            issues we’ve faced. His in-depth knowledge of Flutter has helped us
            overcome the trickiest of issues, he’s been very resourceful for our
            team. He prioritises clear communication with the team to ensure
            accountability and this has proven to be key in delivering and
            continuing to maintain our app.”
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-widest">
            YellowQ • Netherlands
          </p>
        </div>
      </Section>

      {/* FLUTTER COLOMBO — lilac */}
      <Section tone="lilac">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-display text-2xl leading-snug md:text-3xl">
              We’re proud organisers and supporters of Flutter Colombo. 💙
            </p>
            <p className="mt-6 max-w-xl">
              Flutter Colombo is Sri Lanka’s premier Flutter community with
              4000+ followers. An official member of the Flutter Meetup Network
              by Google, Flutter Colombo hosts meetups, hackathons, and seminars
              all year long.
            </p>
            <Link
              href="https://fluttercolombo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark mt-8"
            >
              Check it out
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md md:col-span-5">
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

      {/* MARQUEE CTA — cream */}
      <section className="bg-cream py-14 md:py-32">
        <Marquee text="Let's create together" />
        <div className="mt-10 flex justify-center">
          <Link href="/booking" className="btn-outline-dark">
            Hire Me
          </Link>
        </div>
      </section>
    </>
  );
}
