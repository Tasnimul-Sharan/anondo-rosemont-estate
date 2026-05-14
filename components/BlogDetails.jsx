"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineTag } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

export default function BlogDetails({ blogsData }) {
  const { blogPost, sections, socialIcons } = blogsData;
  const currentUrl = "https://anondorosemontestate.com/blogs/" + blogsData.slug;

  return (
    <section className="overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[420px] bg-[#4a0a0a] lg:min-h-[620px]">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,10,10,0.08)_0%,rgba(74,10,10,0.88)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
              <p className="mb-5 inline-flex border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">
                {blogPost.category || "Rosemont Journal"}
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                {blogPost.title}
              </h2>
            </div>
          </div>

          <div className="p-7 md:p-10 lg:p-12">
            <p className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/55">
              <span className="h-px w-10 bg-current" />
              Rosemont Insight
            </p>
            <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
              {blogPost.title}
            </h1>
            <p className="mt-5 leading-8 text-[#6b5d57]">
              {blogPost.description}
            </p>

            <div className="mt-8 grid gap-4 border-y border-[#4a0a0a]/15 py-6 sm:grid-cols-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#4a0a0a]/45">
                  Author
                </p>
                <p className="mt-2 font-semibold text-[#4a0a0a]">{blogPost.author}</p>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#4a0a0a]/45">
                  Published
                </p>
                <p className="mt-2 font-semibold text-[#4a0a0a]">{blogPost.date}</p>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#4a0a0a]/45">
                  Read Time
                </p>
                <p className="mt-2 font-semibold text-[#4a0a0a]">
                  {blogPost.readTime || "4 min read"}
                </p>
              </div>
            </div>

            <Link
              href="/blogs"
              className="group mt-8 inline-flex items-center gap-4 bg-[#4a0a0a] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition duration-500 hover:bg-[#241818]"
            >
              Back to Journal
              <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-7">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="group border border-[#4a0a0a]/15 bg-white p-7 shadow-xl shadow-[#4a0a0a]/10 md:p-10"
            >
              <div className="mb-7 flex items-center justify-between gap-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="h-px w-24 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 group-hover:scale-x-100" />
              </div>

              <h2 className="text-2xl font-semibold leading-tight text-[#4a0a0a] md:text-4xl">
                {section.title}
              </h2>

              {section.content && (
                <p className="mt-5 max-w-4xl leading-8 text-[#6b5d57]">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="mt-7 grid gap-3 md:grid-cols-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-[#6b5d57]">
                      <FaCheckCircle className="mt-1 shrink-0 text-[#4a0a0a]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-[#4a0a0a]/15 pt-7 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <AiOutlineTag className="text-xl text-[#4a0a0a]" />
            {blogPost.postTags.map((tag) => (
              <span
                key={tag}
                className="border border-[#4a0a0a]/15 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#4a0a0a]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-[#6b5d57]">Share</span>
            {socialIcons?.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link(currentUrl, blogPost.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-[#4a0a0a]/15 bg-white text-[#4a0a0a] transition duration-300 hover:bg-[#4a0a0a] hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
