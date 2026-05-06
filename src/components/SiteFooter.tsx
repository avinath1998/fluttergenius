import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-cream py-10 text-navy">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <p className="text-xs tracking-[0.15em] text-navy/40">
            &copy; 2025 Avinath Gunasekara &mdash; fluttergenius.com
          </p>
          <p className="text-xs tracking-[0.15em] text-navy/30">
            Level 12, One Galle Face Tower, 1A Centre Road, Colombo 00200
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.18em]">
          <Link
            href="https://www.linkedin.com/in/fluttergenius/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/50 hover:text-navy transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/avinathg?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/50 hover:text-navy transition-colors"
          >
            X
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/fluttergenius"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/50 hover:text-navy transition-colors"
          >
            Upwork
          </Link>
        </div>
      </div>
    </footer>
  );
}
