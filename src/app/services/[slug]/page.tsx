// src/app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  SERVICES,
} from "@/components/Service/ServiceDetail/Data";
import { ServiceDetailPage } from "@/components/Service/ServiceDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params; // ← await ở đây
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | WrapStyle Vietnam`,
    description: service.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params; // ← await ở đây
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
