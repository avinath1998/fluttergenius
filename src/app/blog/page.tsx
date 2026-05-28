import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Flutter Genius",
  description:
    "Practical articles on Flutter app development, hiring Flutter engineers, and building production-grade cross-platform products.",
  openGraph: {
    title: "Blog | Flutter Genius",
    description:
      "Practical articles on Flutter app development, hiring Flutter engineers, and building production-grade cross-platform products.",
    url: "https://www.fluttergenius.com/blog",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flutter Genius Blog",
      },
    ],
  },
  twitter: {
    title: "Blog | Flutter Genius",
    description:
      "Practical articles on Flutter app development, hiring engineers, and building production-grade cross-platform products.",
  },
  alternates: {
    canonical: "https://www.fluttergenius.com/blog",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-[1500px] px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-32">
          <p className="text-xs uppercase tracking-[0.35em] text-cream/40">
            Flutter Genius
          </p>
          <h1 className="mt-6 font-display text-[3.5rem] leading-[0.9] md:text-[7.5vw]">
            BLOG
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/60">
            Practical writing on Flutter development, building cross-platform products, and working with specialist engineering teams.
          </p>
        </div>
      </section>

      {/* POST LIST */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 pb-20 pt-2 md:px-12 md:pb-40">
          <div>
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="group relative border-b border-navy/10 transition-colors duration-300 hover:bg-navy/[0.02]"
              >
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                  <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-12 md:gap-12 md:py-14">
                    <div className="flex items-start gap-6 md:col-span-8">
                      <span className="hidden w-14 shrink-0 font-display text-4xl leading-none text-navy/10 transition-colors duration-300 group-hover:text-navy/20 md:block">
                        0{i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs uppercase tracking-[0.2em] text-navy/40">
                            {post.category}
                          </span>
                          <span className="text-navy/20">·</span>
                          <span className="text-xs text-navy/40">{post.readingTime}</span>
                        </div>
                        <h2 className="mt-3 font-display text-xl leading-snug text-navy md:text-2xl">
                          {post.title}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-navy/50">
                          {post.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start justify-start md:col-span-4 md:justify-end md:pt-1">
                      <div className="text-right">
                        <p className="text-xs text-navy/30">{formatDate(post.date)}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-navy/30 transition-all duration-300 group-hover:gap-3 group-hover:text-navy">
                          <span>Read Article</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-40">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Ready to build?
          </p>
          <h2 className="mt-8 max-w-4xl font-display text-[3.5rem] leading-[0.9] text-white md:text-[7rem]">
            Let&rsquo;s talk about your project.
          </h2>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href="/booking#free-consultation" className="btn-outline-light">
              Book a Free Consultation
            </Link>
            <Link
              href="/gallery"
              className="text-xs uppercase tracking-[0.18em] text-white/40 hover:text-white/70 transition-colors"
            >
              See Our Work First &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
