"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px -48px 0px",
      }
    );

    // Observe all reveal variants — including any added by route change
    const elements = document.querySelectorAll(
      ".reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-scale:not(.is-visible)"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]); // re-run on route change

  return null;
}
