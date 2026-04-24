import {type ReactNode} from "react";
import {clsx} from "./clsx";

type Props = {
  children: ReactNode;
  tone?: "cream" | "navy" | "lilac";
  className?: string;
};

export default function Section({children, tone = "cream", className}: Props) {
  const toneClass =
    tone === "navy"
      ? "bg-navy text-lilac"
      : tone === "lilac"
        ? "bg-lilac text-navy"
        : "bg-cream text-navy";
  return (
    <section className={clsx(toneClass, "w-full", className)}>
      <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-12 md:py-32">
        {children}
      </div>
    </section>
  );
}
