import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-cream">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-5 md:px-12">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-navy hover:opacity-80"
        >
          fluttergenius.com
        </Link>

        <nav className="flex items-center gap-6 md:gap-10">
          <Link
            href="/gallery"
            className="text-sm uppercase tracking-widest text-navy hover:opacity-70"
          >
            GALLERY
          </Link>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-navy px-5 py-1.5 text-xs uppercase tracking-widest text-navy transition hover:bg-navy hover:text-cream"
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
