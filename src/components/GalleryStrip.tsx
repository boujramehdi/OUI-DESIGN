"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

const images = [
  { src: "/images/riad-courtyard.png",         label: "Riad · Marrakech",  pos: "object-center" },
  { src: "/images/Home-smart.png",             label: "Smart Home",        pos: "object-top"    },
  { src: "/images/piscine-sunset.png",         label: "Piscine",           pos: "object-bottom" },
  { src: "/images/menuiserie-dressing.png",    label: "Menuiserie",        pos: "object-center" },
  { src: "/images/solaire-infrastruction.jpg", label: "Solaire",           pos: "object-center" },
  { src: "/images/climatisation.jpg",          label: "Climatisation",     pos: "object-center" },
  { src: "/images/villa-sunset.png",           label: "Villa · Sunset",    pos: "object-center" },
  { src: "/images/Hero-villa.jpg",             label: "Architecture",      pos: "object-center" },
];

// ~45 s per cycle at 60 fps — matches the original CSS ticker feel
const SPEED = 1.6;

export function GalleryStrip() {
  const outerRef     = useRef<HTMLDivElement>(null);
  const innerRef     = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number | undefined>(undefined);
  const posRef       = useRef(0);
  const halfW        = useRef(0);
  const isPaused     = useRef(false);
  const isDragging   = useRef(false);
  const dragStartX   = useRef(0);
  const dragStartPos = useRef(0);
  const resumeId     = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [hovered, setHovered]   = useState<number | null>(null);
  const [grabbing, setGrabbing] = useState(false);

  /* ── apply GPU-composited transform (no paint) ── */
  const applyPos = useCallback((x: number) => {
    if (innerRef.current) innerRef.current.style.transform = `translateX(${x}px)`;
  }, []);

  /* ── pause / auto-resume helper ── */
  const pause = useCallback((delay = 1200) => {
    isPaused.current = true;
    clearTimeout(resumeId.current);
    resumeId.current = setTimeout(() => { isPaused.current = false; }, delay);
  }, []);

  /* ── wrap position into valid cycle range ── */
  const wrapPos = useCallback((x: number): number => {
    const hw = halfW.current;
    if (!hw) return x;
    let n = x;
    while (n > 0)    n -= hw;
    while (n < -hw)  n += hw;
    return n;
  }, []);

  /* ── RAF auto-scroll loop ── */
  const tick = useCallback(() => {
    if (!halfW.current && innerRef.current) {
      halfW.current = innerRef.current.offsetWidth / 2;
    }
    if (!isPaused.current && halfW.current) {
      posRef.current -= SPEED;
      if (posRef.current <= -halfW.current) posRef.current += halfW.current;
      applyPos(posRef.current);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [applyPos]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [tick]);

  /* ── Mouse wheel → horizontal ── */
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      posRef.current = wrapPos(posRef.current - delta * 1.5);
      applyPos(posRef.current);
      pause(1400);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [pause, applyPos, wrapPos]);

  /* ── Mouse drag — document-level so it survives fast moves ── */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const dx  = e.pageX - dragStartX.current;
      const next = wrapPos(dragStartPos.current + dx);
      posRef.current = next;
      applyPos(next);
    };
    const onUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      setGrabbing(false);
      pause(1100);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup",   onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup",   onUp);
    };
  }, [pause, applyPos, wrapPos]);

  /* ── Touch drag — passive:false so we can preventDefault on horizontal ── */
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    let tStartX = 0, tStartY = 0, tStartPos = 0;
    let isHoriz: boolean | null = null; // direction lock

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      tStartX   = t.pageX;
      tStartY   = t.pageY;
      tStartPos = posRef.current;
      isHoriz   = null;
      isPaused.current = true;
      clearTimeout(resumeId.current);
    };

    const onTouchMove = (e: TouchEvent) => {
      const t  = e.touches[0];
      const dx = t.pageX - tStartX;
      const dy = t.pageY - tStartY;

      // Lock direction on first move of ≥4 px
      if (isHoriz === null && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
        isHoriz = Math.abs(dx) >= Math.abs(dy);
      }

      if (isHoriz) {
        e.preventDefault(); // stop page scroll during horizontal swipe
        const next = wrapPos(tStartPos + dx);
        posRef.current = next;
        applyPos(next);
      }
      // vertical → let browser handle naturally (isHoriz stays false, no preventDefault)
    };

    const onTouchEnd = () => {
      isHoriz = null;
      pause(1100);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove",  onTouchMove,  { passive: false });
    el.addEventListener("touchend",   onTouchEnd,   { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove",  onTouchMove);
      el.removeEventListener("touchend",   onTouchEnd);
    };
  }, [pause, applyPos, wrapPos]);

  /* ── Mouse down (desktop drag start) ── */
  function onMouseDown(e: React.MouseEvent) {
    isDragging.current   = true;
    isPaused.current     = true;
    clearTimeout(resumeId.current);
    dragStartX.current   = e.pageX;
    dragStartPos.current = posRef.current;
    setGrabbing(true);
  }

  /* ── Image hover (desktop) ── */
  function onEnter(idx: number) { setHovered(idx); isPaused.current = true; clearTimeout(resumeId.current); }
  function onLeave()             { setHovered(null); pause(800); }

  return (
    <div
      ref={outerRef}
      className="overflow-hidden select-none"
      style={{ cursor: grabbing ? "grabbing" : "grab" }}
      onMouseDown={onMouseDown}
    >
      <div
        ref={innerRef}
        className="flex"
        style={{ gap: "3px", willChange: "transform" }}
      >
        {[...images, ...images].map((img, idx) => {
          const isHovered = hovered === idx;
          const isDimmed  = hovered !== null && !isHovered;

          return (
            <div
              key={idx}
              className="group relative shrink-0 overflow-hidden"
              /* Mobile: taller for easier swiping; desktop: 36 vh as before */
              style={{ width: "clamp(160px, 52vw, 440px)", height: "clamp(180px, 36vh, 340px)" }}
              onMouseEnter={() => onEnter(idx)}
              onMouseLeave={onLeave}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                sizes="(max-width:768px) 52vw, 28vw"
                draggable={false}
                priority={idx < 5}
                loading={idx < 5 ? undefined : "eager"}
                className={`${img.pos} object-cover transition-all duration-700 ${
                  isDimmed
                    ? "opacity-[0.35] saturate-[0.4]"
                    : "opacity-[0.78] group-hover:opacity-100 group-hover:scale-[1.06]"
                }`}
                style={isHovered ? { filter: "brightness(1.09) saturate(1.12)" } : {}}
              />

              {/* Base vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

              {/* Shimmer sweep — desktop only */}
              <div className="pointer-events-none absolute inset-0 z-10 hidden -translate-x-full bg-gradient-to-r from-transparent via-ivory/[0.13] to-transparent transition-transform duration-[800ms] ease-in-out group-hover:translate-x-full md:block" />

              {/* Bronze bottom glow */}
              <div
                className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse 85% 55% at 50% 100%, rgba(188,143,85,0.22) 0%, transparent 70%)" }}
              />

              {/* Label — always visible on touch devices, slides up on desktop hover */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 transition-transform duration-500 ease-out
                  translate-y-0 md:translate-y-full md:group-hover:translate-y-0"
                style={{ background: "linear-gradient(to top, rgba(14,13,11,0.90) 0%, transparent 100%)" }}
              >
                <div className="flex items-end justify-between px-4 pb-4 pt-10 sm:px-5 sm:pb-5">
                  <p className="text-[0.44rem] uppercase tracking-[0.44em] text-ivory/80">{img.label}</p>
                  <div className="h-px w-7 bg-bronze/55 transition-all duration-300 group-hover:w-12 group-hover:bg-bronze" />
                </div>
              </div>

              {/* Bronze bottom border */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[2px] origin-left scale-x-0 bg-bronze/70 transition-transform duration-[550ms] ease-out group-hover:scale-x-100" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
