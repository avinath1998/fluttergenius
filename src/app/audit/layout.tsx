import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Free Flutter Audit — Flutter Genius",
  description:
    "Answer a few quick questions and book your free 30-minute Flutter audit with Avinath Gunasekara. Get expert feedback on your app's architecture, performance and code quality.",
  openGraph: {
    title: "Free Flutter Audit — Flutter Genius",
    description:
      "Book your free 30-minute Flutter audit with Avinath Gunasekara. Expert feedback on architecture, performance and code quality.",
    url: "https://www.fluttergenius.com/audit",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Flutter Audit — Flutter Genius",
      },
    ],
  },
  twitter: {
    title: "Free Flutter Audit — Flutter Genius",
    description:
      "Book your free 30-minute Flutter audit. Expert feedback on architecture, performance and code quality.",
  },
  alternates: {
    canonical: "https://www.fluttergenius.com/audit",
  },
};

export default function AuditLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}
