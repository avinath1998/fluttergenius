import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-cream">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        {/* Top row — logo + CTA */}
        <div className="grid grid-cols-[1fr_auto] items-center py-2 md:grid-cols-3">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <Image
              src="/images/flutter_logo_long.png"
              alt="Flutter Genius"
              width={220}
              height={50}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Nav — center, desktop only */}
          <nav className="hidden items-center justify-center gap-8 md:flex">
            <Link
              href="/gallery"
              className="text-xs uppercase tracking-[0.18em] text-navy/60 hover:text-navy transition-colors"
            >
              See Work
            </Link>
          </nav>

          <div className="flex justify-end">
            <Link href="/booking#free-consultation" className="nav-free-audit-btn">
              <span className="md:hidden">Book &rarr;</span>
              <span className="hidden md:inline">Book a Consultation &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Mobile nav row */}
        <div className="flex items-center justify-end pb-3 md:hidden">
          <div className="flex items-center gap-6">
            <Link
              href="/gallery"
              className="text-xs uppercase tracking-[0.18em] text-navy/60 hover:text-navy transition-colors"
            >
              Work
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
