import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-cream">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-5 md:px-12">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-navy hover:opacity-80"
        >
          Flutter Genius
        </Link>

        <nav className="flex items-center gap-6 md:gap-10">
          <Link
            href="/gallery"
            className="text-sm uppercase tracking-widest text-navy hover:opacity-70"
          >
            GALLERY
          </Link>
          <Link
            href="/booking#free-consultation"
            className="hidden text-sm uppercase tracking-widest text-navy hover:opacity-70 sm:block"
          >
            Book a Consultation
          </Link>
          <Link href="/audit" className="nav-free-audit-btn">
            Free Flutter Audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
