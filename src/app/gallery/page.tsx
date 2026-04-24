import Image from "next/image";
import type { Metadata } from "next";
import Section from "@/components/Section";
import { imageAlt, imageSrc, type ImageKey } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio — fluttergenius.com",
};

type Project = {
  name: string;
  location: string;
  description: string;
  image: ImageKey;
};

const projects: Project[] = [
  {
    name: "Coves",
    location: "Singapore",
    description:
      "A complex coworking management software facilitating all bookings, invoices, memberships and invoices. A range of custom integrations was built including QuickBooks & Xero. Fully-responsive UI, built for web and mobile. A combination of Flutter, Firebase & Algolia.",
    image: "galleryLargeMockup",
  },
  {
    name: "EKVA",
    location: "Colombo, Sri Lanka",
    description:
      "EKVA was designed to promote recycling in Sri Lanka. The app utilizes a sophisticated point-tracking system and custom-built AI to inspire and incentivize individuals to engage in recycling.",
    image: "galleryTotal",
  },
  {
    name: "Spacehero",
    location: "Athens, Greece",
    description:
      "A comprehensive warehouse management system designed for a storage business. It encompasses creating and tracking pickup and return orders, space management, and customer management with custom syncing mechanisms to third party services.",
    image: "gallerySpacehero",
  },
  {
    name: "SLSYWC ’19",
    location: "Colombo, Sri Lanka",
    description:
      "An event management app offering event attendees a seamless experience — enabling reward redemption, contact scanning and saving, and real-time access to event timelines.",
    image: "galleryFinal",
  },
  {
    name: "Fethr",
    location: "London, England",
    description:
      "A connection-making application with a swiping gesture inspired by modern dating apps, vibrant community chats, personalized connection recommendations powered by custom algorithms, and a dynamic user interface that adapts to individual preferences.",
    image: "galleryFethr",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy text-lilac">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
          <h1 className="font-display text-6xl md:text-[8rem]">PORTFOLIO</h1>
        </div>
      </section>

      <Section tone="cream">
        <div className="flex flex-col gap-24">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:col-span-7 md:[direction:ltr]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-lilac/40">
                  <Image
                    src={imageSrc(p.image)}
                    alt={imageAlt(p.image)}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="md:col-span-5 md:[direction:ltr]">
                <h2 className="font-display text-4xl md:text-5xl">{p.name}</h2>
                <p className="mt-2 text-xs uppercase tracking-widest text-navy/70">
                  {p.location}
                </p>
                <p className="mt-6 leading-relaxed text-navy/90">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-24 text-center text-xs uppercase tracking-widest text-navy/70">
          Screenshots from fethr.app
        </p>
      </Section>
    </>
  );
}
