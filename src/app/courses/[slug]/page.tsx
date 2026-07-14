import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COURSES } from "@/data/courses";
import MgmtTemplate from "@/components/course-templates/MgmtTemplate";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.title} — eduden`,
    description: course.blurb,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();

  return <MgmtTemplate course={course} />;
}
