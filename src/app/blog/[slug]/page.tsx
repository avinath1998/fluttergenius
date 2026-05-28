import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Flutter Genius`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.fluttergenius.com/blog/${slug}`,
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
    twitter: { title: post.title, description: post.description },
    alternates: { canonical: `https://www.fluttergenius.com/blog/${slug}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-[1500px] px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-32">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/40 hover:text-cream/70 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Blog
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/40">
              {post.category}
            </span>
            <span className="text-cream/20">·</span>
            <span className="text-xs text-cream/40">{post.readingTime}</span>
            <span className="text-cream/20">·</span>
            <span className="text-xs text-cream/40">{formatDate(post.date)}</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[2.5rem] leading-[1] md:text-[4.5rem]">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/60">
            {post.description}
          </p>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-6 pb-20 pt-14 md:px-12 md:pb-40 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-7 md:col-start-3">
              <div className="prose prose-navy max-w-none">
                <MDXRemote source={post.content} />
              </div>

              {/* Author note */}
              <div className="mt-16 border-t border-navy/10 pt-10">
                <p className="text-xs uppercase tracking-[0.2em] text-navy/40">Written by</p>
                <p className="mt-2 font-display text-lg">Avinath Gunasekara</p>
                <p className="mt-1 text-sm text-navy/50">
                  Flutter engineer with 7+ years of experience and 20+ apps published. Founder of Flutter Genius.
                </p>
                <Link
                  href="/booking#free-consultation"
                  className="btn-outline-dark mt-6 inline-flex"
                >
                  Book a Free Strategy Call &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
