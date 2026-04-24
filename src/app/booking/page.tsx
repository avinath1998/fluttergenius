import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { imageAlt, imageSrc } from "@/lib/images";

export const metadata: Metadata = {
  title: "Bookings — fluttergenius.com",
};

export default function BookingPage() {
  return (
    <>
      <section className="bg-navy text-lilac">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
          <h2 className="font-display text-6xl md:text-[7rem]">HIRE&nbsp; ME</h2>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-6">
            <p className="text-sm uppercase tracking-widest text-navy/70">
              Find me on Upwork
            </p>
            <h3 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Visit my Upwork profile to hire an experienced Flutter developer
              with a strong track record and long-term client success.
            </h3>
            <Link
              href="https://www.upwork.com/freelancers/fluttergenius"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark mt-10"
            >
              Open Upwork
            </Link>
          </div>

          <div className="relative aspect-square w-full overflow-hidden rounded-md md:col-span-6">
            <Image
              src={imageSrc("booking")}
              alt={imageAlt("booking")}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
