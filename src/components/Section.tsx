import { type ReactNode } from "react";
import { clsx } from "./clsx";

type Props = {
  children: ReactNode;
  tone?: "cream" | "navy";
  className?: string;
};

export default function Section({ children, tone = "cream", className }: Props) {
  const toneClass =
    tone === "navy" ? "bg-navy text-lilac" : "bg-cream text-navy";
  return (
    <section className={clsx(toneClass, "w-full", className)}>
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-28">
        {children}
      </div>
    </section>
  );
}
