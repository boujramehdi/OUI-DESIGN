"use client";

import React, { useEffect, useRef, useState } from "react";

const stats = [
  { end: 50, suffix: "+",  label: "Projets réalisés",       isStar: false },
  { end: 8,  suffix: "",   label: "Expertises maîtrisées",  isStar: false },
  { end: 100,suffix: "%",  label: "Coordination totale",    isStar: false },
  { end: 5,  suffix: "",   label: "Niveau de finition",     isStar: true  },
];

function StarIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function RealisationsStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [triggered, setTriggered] = useState(false);
  const [starVisible, setStarVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Trigger once on intersect */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Count-up animation */
  useEffect(() => {
    if (!triggered) return;
    const duration = 1600;
    const start = performance.now();

    const raf = requestAnimationFrame(function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setCounts(stats.map((s) => Math.round(eased * s.end)));
      if (t < 1) requestAnimationFrame(tick);
      else setStarVisible(true); // spin-in star at the end
    });

    return () => cancelAnimationFrame(raf);
  }, [triggered]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 divide-x divide-y divide-ivory/[0.07] sm:grid-cols-4 sm:divide-y-0 sm:divide-ivory/[0.08]"
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="group relative cursor-default overflow-hidden px-1 pt-6 pb-7 transition-all duration-300 hover:bg-bronze/[0.07] sm:pt-7 sm:pb-8"
        >
          {/* Bottom sweep line on hover */}
          <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-bronze/70 transition-all duration-700 ease-out group-hover:w-full" />

          {/* Value */}
          <p
            className="relative font-serif font-medium leading-none text-bronze transition-all duration-300 group-hover:scale-105"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}
          >
            <span className="tabular-nums">{counts[i]}</span>
            {s.isStar ? (
              <StarIcon
                className={`
                  ml-1 inline-block align-[-0.18em] text-bronze
                  transition-all duration-700
                  ${starVisible
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-50"}
                `}
                style={{ width: "clamp(1rem, 2vw, 1.6rem)", height: "clamp(1rem, 2vw, 1.6rem)" }}
              />
            ) : (
              <span>{s.suffix}</span>
            )}
          </p>

          {/* Label */}
          <p className="relative mt-2 text-[0.41rem] uppercase tracking-[0.28em] text-ivory/50 transition-colors duration-300 group-hover:text-ivory/80">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
