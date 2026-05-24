import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Flutter Consultation | Flutter Genius",
  description:
    "Book a free 30-minute Flutter consultation with Avinath Gunasekara. Discuss your project, get architecture advice and a clear path forward, no commitment required.",
  openGraph: {
    title: "Book a Flutter Consultation | Flutter Genius",
    description:
      "Book a free 30-minute Flutter consultation with Avinath Gunasekara. Get architecture advice and a clear path forward, no commitment required.",
    url: "https://www.fluttergenius.com/booking",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Book a Flutter Consultation | Flutter Genius",
      },
    ],
  },
  twitter: {
    title: "Book a Flutter Consultation | Flutter Genius",
    description:
      "Book a free 30-minute Flutter consultation. Get architecture advice and a clear path forward, no commitment required.",
  },
  alternates: {
    canonical: "https://www.fluttergenius.com/booking",
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
