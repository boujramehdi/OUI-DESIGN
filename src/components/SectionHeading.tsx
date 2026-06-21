type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p className="text-xs uppercase text-bronze">{eyebrow}</p>
      <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal sm:text-6xl">{title}</h2>
      {text ? <p className="mt-6 text-base leading-8 text-charcoal/70 sm:text-lg">{text}</p> : null}
    </div>
  );
}
