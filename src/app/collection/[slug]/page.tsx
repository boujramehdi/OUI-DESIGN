import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { collectionItems } from "@/lib/site";
import { productData, getProductBySlug } from "@/lib/products";
import { ProductDetail } from "@/components/ProductDetail";
import { CTASection } from "@/components/CTASection";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pd = getProductBySlug(slug);
  const ci = collectionItems.find((c) => c.slug === slug);
  if (!pd || !ci) return {};
  return {
    title: `${ci.title} — Collection Ouidesign`,
    description: ci.description,
    alternates: { canonical: `/collection/${slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const pd = getProductBySlug(slug);
  const ci = collectionItems.find((c) => c.slug === slug);
  if (!pd || !ci) notFound();

  const currentIndex = productData.findIndex((p) => p.slug === slug);
  const related = productData
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3)
    .map((rPd) => {
      const rCi = collectionItems.find((c) => c.slug === rPd.slug)!;
      return {
        ...rPd,
        title: rCi.title,
        description: rCi.description,
        price: rCi.price,
        priceNote: rCi.priceNote,
      };
    });

  return (
    <>
      <ProductDetail
        slug={pd.slug}
        title={ci.title}
        tagline={pd.tagline}
        description={ci.description}
        price={ci.price}
        priceNote={ci.priceNote}
        images={pd.images}
        imageAlt={pd.imageAlt}
        fit={pd.fit}
        details={pd.details}
        reviews={pd.reviews}
        related={related}
      />
      <CTASection title="Créons une pièce qui disparaît et se révèle au bon moment." />
    </>
  );
}
