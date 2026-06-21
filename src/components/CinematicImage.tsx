import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

type CinematicImageProps = {
  src: string;
  alt?: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
  preload?: boolean;
};

function publicImageExists(src: string) {
  if (!src.startsWith("/")) {
    return false;
  }

  return existsSync(join(process.cwd(), "public", src.slice(1)));
}

function fileNameFromSrc(src: string) {
  return src.split("/").filter(Boolean).at(-1) ?? src;
}

export function CinematicImage({
  src,
  alt = "",
  sizes,
  className = "absolute inset-0",
  imageClassName = "object-cover",
  loading = "lazy",
  preload = false,
}: CinematicImageProps) {
  if (!publicImageExists(src)) {
    return (
      <div
        aria-label={`${fileNameFromSrc(src)} placeholder`}
        className={`${className} overflow-hidden bg-ivory`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F4EFE7_0%,#D8C6AD_34%,#1C1C1A_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(184,146,95,0.42),transparent_32%)]" />
        <div className="absolute inset-x-8 top-8 h-px bg-bronze/65" />
        <div className="absolute inset-x-8 bottom-8 h-px bg-bronze/45" />
        <div className="absolute bottom-10 left-8 right-8 text-xs uppercase tracking-[0.24em] text-ivory/72">
          {fileNameFromSrc(src)}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      loading={loading}
      preload={preload}
      className={imageClassName}
    />
  );
}
