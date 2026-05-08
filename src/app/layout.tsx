import type {Metadata} from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Flutter Genius | App Development Experts",
    template: "%s | Flutter Genius",
  },
  description:
    "Flutter Genius is a boutique Flutter agency led by Avinath Gunasekara. We build production-grade mobile, web and desktop apps — from MVP to scale.",
  metadataBase: new URL("https://www.fluttergenius.com"),
  openGraph: {
    title: "Flutter Genius — Expert Flutter Development",
    description:
      "Flutter Genius is a boutique Flutter agency led by Avinath Gunasekara. We build production-grade mobile, web and desktop apps — from MVP to scale.",
    siteName: "Flutter Genius",
    url: "https://www.fluttergenius.com",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flutter Genius — Expert Flutter Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter Genius — Expert Flutter Development",
    description:
      "Flutter Genius is a boutique Flutter agency led by Avinath Gunasekara. We build production-grade mobile, web and desktop apps — from MVP to scale.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/small_rocket.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {index: true, follow: true},
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className="font-sans bg-cream text-navy antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Flutter Genius",
              url: "https://www.fluttergenius.com",
              logo: "https://www.fluttergenius.com/images/logo.png",
              description:
                "Expert Flutter engineers building production-grade mobile, web and desktop apps for startups and established teams.",
              founder: {
                "@type": "Person",
                name: "Avinath Gunasekara",
                jobTitle: "Flutter Engineer",
                url: "https://www.upwork.com/freelancers/fluttergenius",
              },
              sameAs: ["https://www.upwork.com/freelancers/fluttergenius"],
              areaServed: "Worldwide",
              serviceType: [
                "Flutter Development",
                "Mobile App Development",
                "Web App Development",
                "Desktop App Development",
                "Team Training",
                "Tech Consultation",
              ],
            }),
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
