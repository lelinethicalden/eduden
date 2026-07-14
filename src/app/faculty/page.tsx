import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { unsplash } from "@/lib/unsplash";
import fardeenImg from "../../../public/images/faculty/Fardeen.webp";
import praveenImg from "../../../public/images/faculty/praveen.jpeg";
import nazmulImg from "../../../public/images/faculty/nazmul.jpeg";
import yathishImg from "../../../public/images/faculty/Yathish.webp";
import khokonImg from "../../../public/images/faculty/khokon.webp";
import shakilImg from "../../../public/images/faculty/Shakil.png";
import ayoushiImg from "../../../public/images/faculty/Ayushi.webp";
import JoyImg from "../../../public/images/faculty/Joy.png";

export const metadata: Metadata = {
  title: "Faculty — eduden",
  description:
    "Our faculty members are accomplished educators and industry professionals, passionate about sharing their expertise and inspiring the next generation of learners.",
};

const FACULTY = [
  {
    name: "Fardeen Ahmed",
    role: "Cyber Security Expert",
    bio: "Fardeen Ahmed is a seasoned cybersecurity and technology professional with over nine years of teaching experience and deep technical expertise across multiple domains. As Co-Founder and CEO of eduden, he plays a pivotal role in designing and delivering practical, industry-aligned training programs in cybersecurity, ethical hacking, and advanced technology stacks.",
    img: fardeenImg,
  },
  {
    name: "Praveen Rathan N",
    role: "UI/UX Expert",
    bio: "Praveen Rathan N is a talented UI/UX designer with a strong background in creating intuitive and engaging user experiences. With over seven years of experience in the field, he brings a user-centered approach to his work, ensuring that every design decision is made with the end-user in mind.",
    img: praveenImg,
  },
  {
    name: "Nazmul Islam",
    role: "Graphics Designer Expert",
    bio: "Nazmul Islam is the Director and Country Head of Ethical Den Bangladesh, and a senior design leader with over a decade of experience in the graphic and digital design industry. As the Senior Graphic Designer and Head of the Graphics Department, he plays a central role in shaping the creative direction of Ethical Den’s projects across education, technology, and brand development.",
    img: nazmulImg,
  },
  {
    name: "Yathish",
    role: "AI / ML Expert",
    bio: "Yathish is a skilled AI/ML professional and Senior Instructor at eduden, bringing practical industry experience and academic research expertise to the classroom. His work spans machine learning, deep learning, automation systems, and applied data science, with a focus on real-world problem solving and intelligent system design.",
    img: yathishImg,
  },
  {
    name: "Khokon Halder",
    role: "Cyber Security Expert",
    bio: "Khokon Halder is an experienced Networking and Cybersecurity Instructor at eduden, with over seven years of hands-on experience in IT infrastructure, system support, and information security.",
    img: khokonImg,
  },
  {
    name: "Md. Shakil",
    role: "Back-End Developer",
    bio: "Shakil is a backend developer and IT instructor with a strong background in software development, technical training, and practical implementation of computer science principles. As a key team member at Ethical Den, he works on backend systems and development workflows, contributing to scalable, secure, and maintainable software infrastructure.",
    img: shakilImg,
  },
  {
    name: "Ayoushi Gupta",
    role: "Digital Marketing Expert",
    bio: "Ayoushi Gupta is a business development and content strategy professional with over a decade of experience in education, writing, and academic communication. As a Business Developer and Content Executive at Ethical Den, she plays a key role in crafting compelling narratives, overseeing editorial quality, and supporting the organization’s strategic growth through impactful content initiatives.",
    img: ayoushiImg,
  },
  {
    name: "Joy Sutradhor",
    role: "Front-End Developer",
    bio: "Joy Sutradhor is a senior frontend developer and full-time team member at Ethical Den, specializing in modern web technologies and scalable user interface architecture. With deep expertise in React.js, Next.js, HTML, CSS, and JavaScript, he plays a critical role in delivering responsive, accessible, and high-performance web applications across client and internal projects.",
    img: JoyImg,
  },
];

export default function Faculty() {
  return (
    <>
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pt-9 md:pt-24 pb-8 md:pb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted">
              Faculty Members
            </span>
          </div>
          <h1 className="m-0 text-[clamp(40px,6.4vw,88px)] font-black tracking-[-0.04em] uppercase leading-[0.95] max-w-[1000px]">
            Our dedicated faculty members
          </h1>
          <p className="mt-8 text-[15.5px] leading-relaxed text-muted max-w-lg">
            Our faculty members are accomplished educators and industry
            professionals, passionate about sharing their expertise and
            inspiring the next generation of learners. With diverse
            backgrounds and real-world experience, they bring knowledge,
            innovation, and mentorship to every class they teach.
          </p>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 pb-10 md:pb-24">
          <h2 className="mt-0 mb-7 text-[clamp(26px,3.4vw,44px)] font-black tracking-[-0.035em] uppercase leading-none">
            Meet the team
          </h2>
          <div className="border-t border-border-strong">
            {FACULTY.map((f) => (
              <div
                key={f.name}
                className="grid grid-cols-[72px_1fr] sm:grid-cols-[72px_minmax(200px,1fr)_2fr] gap-x-6 gap-y-4 sm:gap-y-0 items-start border-b border-border-strong py-7.5"
              >
                <div className="relative w-18 h-18 rounded-full overflow-hidden">
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-[clamp(19px,2vw,24px)] font-extrabold tracking-[-0.02em]">
                    {f.name}
                  </div>
                  <div className="text-[13px] font-semibold text-muted mt-1.25">
                    {f.role}
                  </div>
                </div>
                <p className="m-0 col-span-2 sm:col-span-1 text-sm leading-relaxed text-muted max-w-[620px]">
                  {f.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="max-w-[900px] mx-auto px-4 sm:px-7 py-10 md:py-24 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-muted-dark">
              Support
            </span>
          </div>
          <h2 className="m-0 text-[clamp(28px,4vw,52px)] font-black tracking-[-0.035em] uppercase leading-none">
            Need help?
          </h2>
          <p className="mt-6 mx-auto text-[15.5px] leading-relaxed text-muted-dark max-w-[520px]">
            Need help getting started or want to learn more about our
            services? Our experts are here to guide you. Reach out today
            and let&apos;s take the next step together!
          </p>
          <Link
            href="/contact"
            className="inline-block mt-9 bg-[#FFD300] text-fg font-bold text-[14.5px] px-8 py-3.75 rounded-full hover:bg-accent"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
