import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Free Flutter Audit — Flutter Genius",
  description:
    "Answer a few quick questions and book your free 30-minute Flutter audit with Avinath Gunasekara.",
};

export default function AuditLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}
