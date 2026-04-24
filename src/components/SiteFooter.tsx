import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-cream py-10 text-navy">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <p className="text-xs tracking-wide">
          © 2025 Avinath Gunasekara, fluttergenius.com
        </p>
        <div className="flex items-center gap-5 text-xs uppercase tracking-widest">
          <Link
            href="https://www.linkedin.com/in/fluttergenius/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/avinathg?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            X
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/fluttergenius"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            Upwork
          </Link>
        </div>
      </div>
    </footer>
  );
}
