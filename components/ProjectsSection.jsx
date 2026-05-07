"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronCircleRight } from "react-icons/fa";

const projects = [
  {
    img: "/slider/slider1.jpg",
    title: "Anondo Rosemont Estate",
    desc: "A premium 807-bigha duplex villa township redefining structured luxury living in Bangladesh.",
    slug: "anondo-rosemont-estate",
    tag: "Luxury Villa Township",
  },
  {
    img: "/slider/slider2.jpg",
    title: "Anondo Park City",
    desc: "Smart and sustainable gated community in Purbachal with modern amenities and eco-friendly design.",
    slug: "anondo-parkcity",
    tag: "Smart Gated Community",
  },
  {
    img: "/slider/slider3.jpg",
    title: "Anondo Bhubon",
    desc: "Eco-conscious township blending nature, wellness, and modern urban living.",
    slug: "anondo-bhubon",
    tag: "Eco Lifestyle Township",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 px-6 md:px-16">
      {/* Premium Background Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Signature Developments
          </span>

          <h2 className="text-4xl font-bold leading-tight text-secondary md:text-6xl">
            Our Premium Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Discover thoughtfully planned developments crafted with vision,
            elegance, comfort, and long-term investment value.
          </p>

          <div className="mx-auto mt-7 h-[3px] w-24 rounded-full bg-primary" />
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <motion.article
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group relative h-full overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_30px_90px_rgba(15,23,42,0.16)]"
                >
                  {/* Image */}
                  <div className="relative h-[310px] overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Badge */}
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                        {project.tag}
                      </span>
                    </div>

                    {/* Image Bottom Title */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-2xl font-bold leading-snug text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-7">
                    <p className="min-h-[72px] text-sm leading-relaxed text-gray-600">
                      {project.desc}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                      <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                        Explore Project
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110">
                        <FaChevronCircleRight className="text-base" />
                      </span>
                    </div>
                  </div>

                  {/* Decorative Border Glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-primary/0 transition duration-500 group-hover:ring-primary/30" />
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
