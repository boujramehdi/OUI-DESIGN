"use client";

import { useEffect, useRef, useState } from "react";

type CustomSelectProps = {
  name: string;
  id?: string;
  required?: boolean;
  placeholder?: string;
  options: string[];
  defaultValue?: string;
  /** Extra class names for the trigger button */
  className?: string;
};

export function CustomSelect({
  name,
  id,
  required,
  placeholder = "Sélectionner…",
  options,
  defaultValue = "",
  className = "",
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const ref = useRef<HTMLDivElement>(null);

  /* Close on outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Close on Escape */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const label = selected || placeholder;
  const isPlaceholder = !selected;

  return (
    <div ref={ref} className="relative">
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected} required={required} />

      {/* Trigger */}
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between border px-4 py-3 text-sm transition-colors duration-200 focus:outline-none ${
          open
            ? "border-bronze bg-ivory"
            : "border-bronze/25 bg-ivory hover:border-bronze/50"
        } ${className}`}
      >
        <span className={isPlaceholder ? "text-charcoal/35" : "text-charcoal"}>
          {label}
        </span>
        {/* Chevron */}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 text-bronze/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="2,4 6,8 10,4" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-0.5 border border-bronze/30 bg-charcoal py-1 shadow-xl"
        >
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={selected === option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className={`flex cursor-pointer items-center justify-between px-4 py-3 text-sm transition-colors duration-150 ${
                selected === option
                  ? "bg-bronze/15 text-bronze"
                  : "text-ivory/75 hover:bg-bronze/10 hover:text-ivory"
              }`}
            >
              <span>{option}</span>
              {selected === option && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bronze">
                  <polyline points="1,6 4,9 11,2" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
