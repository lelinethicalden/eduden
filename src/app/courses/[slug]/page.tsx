import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COURSES } from "@/data/courses";
import DetTemplate from "@/components/course-templates/DetTemplate";
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

  return course.template === "mgmt"
    ? {
        title: "Business Analytics and MIS Reporting — EduDen",
        description:
          "Learn Excel, SQL and Power BI in a practical classroom environment and build dashboards you can show in interviews. No coding background required.",
      }
    : {
        title: "Ethical Hacking for Beginners — EduDen",
        description:
          "Learn to legally break into systems, find security flaws, and help companies fix them — while building a career in cybersecurity.",
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

  return course.template === "mgmt" ? <MgmtTemplate /> : <DetTemplate />;
}
