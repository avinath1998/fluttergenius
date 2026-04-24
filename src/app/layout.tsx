import type {Metadata} from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "fluttergenius.com",
  metadataBase: new URL("https://www.fluttergenius.com"),
  openGraph: {
    title: "fluttergenius.com",
    siteName: "fluttergenius.com",
    url: "https://www.fluttergenius.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "fluttergenius.com",
  },
  icons: {
    icon: "https://images.squarespace-cdn.com/content/v1/6839a7dd64b2720d56fa5614/783a5711-5386-4a6f-884b-9f9bae453bd1/favicon.ico",
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
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Ovo&display=swap"
        />
      </head>
      <body className="font-sans bg-cream text-navy antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
