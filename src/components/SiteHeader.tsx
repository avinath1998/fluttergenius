import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-cream">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="flex items-center justify-between py-2 md:grid md:grid-cols-3">

          <Link href="/" className="hover:opacity-70 transition-opacity">
            {/* Mobile: crop to F + rocket only */}
            <div className="overflow-hidden w-[38px] md:hidden">
              <Image
                src="/images/flutter_logo_long.png"
                alt="Flutter Genius"
                width={220}
                height={50}
                className="h-14 w-auto max-w-none"
                priority
              />
            </div>
            {/* Desktop: full logo */}
            <Image
              src="/images/flutter_logo_long.png"
              alt="Flutter Genius"
              width={220}
              height={50}
              className="hidden md:block h-14 w-auto"
              priority
            />
          </Link>

          {/* Nav — center, desktop only */}
          <nav className="hidden items-center justify-center gap-8 md:flex">
            <Link
              href="/gallery"
              className="text-xs uppercase tracking-[0.18em] text-navy/60 hover:text-navy transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-[0.18em] text-navy/60 hover:text-navy transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Right: Case Studies (mobile) + Free Strategy Call */}
          <div className="flex items-center justify-end gap-4 md:gap-6">
            <Link
              href="/gallery"
              className="md:hidden text-xs uppercase tracking-[0.18em] text-navy/60 hover:text-navy transition-colors shrink-0"
            >
              Case Studies
            </Link>
            <Link href="/booking#free-consultation" className="nav-free-audit-btn whitespace-nowrap shrink-0">
              Free Strategy Call &rarr;
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
