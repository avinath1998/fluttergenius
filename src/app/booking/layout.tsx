import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookings — fluttergenius.com",
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
