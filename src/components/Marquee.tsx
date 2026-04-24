export default function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 14 });
  return (
    <div className="marquee font-display text-6xl md:text-8xl text-navy/90">
      <div className="marquee-track">
        {items.map((_, i) => (
          <span key={i} className="px-6">
            {text} <span className="opacity-40">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
