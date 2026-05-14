import Image from "next/image";
import Link from "next/link";
import { rosemontBlogs } from "@/data/rosemontBlogs";

function BlogCard({ blog, index, compact = false }) {
  return (
    <Link
      href={"/blogs/" + blog.slug}
      className="group block overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4a0a0a]/15"
    >
      <div className="relative h-[300px] overflow-hidden bg-[#4a0a0a]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,10,10,0.04)_0%,rgba(74,10,10,0.82)_100%)]" />

        <div className="absolute left-6 top-6 border border-white/25 bg-white/14 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          {blog.category}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="mb-5 flex items-center justify-between gap-5 text-xs font-extrabold uppercase tracking-[0.18em] text-white/65">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{blog.readTime}</span>
          </div>
          <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
            {blog.title}
          </h3>
        </div>
      </div>

      <div className="p-7">
        <p className="leading-8 text-[#6b5d57]">{blog.excerpt}</p>

        {!compact && (
          <ul className="mt-7 grid gap-3 border-t border-[#4a0a0a]/15 pt-6 md:grid-cols-3">
            {blog.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-7 text-[#6b5d57]">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#4a0a0a]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-7 flex items-center justify-between gap-5 border-t border-[#4a0a0a]/15 pt-6">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#4a0a0a]/55">
            Read Full Article
          </span>
          <span className="h-px w-16 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 group-hover:scale-x-100" />
        </div>
      </div>
    </Link>
  );
}

export default function RosemontBlogsSection({ limit = 3, page = false }) {
  const blogs = page ? rosemontBlogs : rosemontBlogs.slice(0, limit);

  return (
    <section
      className={
        page
          ? "bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32"
          : "bg-white py-16 text-[#241818] md:py-24 lg:py-32"
      }
    >
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="grid gap-10 border-b border-[#4a0a0a]/15 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-current" />
              Rosemont Journal
            </p>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl lg:text-6xl">
              Estate insights for villa living, planning, and investment.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
              Stories from the Rosemont vision: master planning, duplex villa
              living, lifestyle amenities, NRB ownership, infrastructure, and
              long-term estate value.
            </p>

            {!page && (
              <Link
                href="/blogs"
                className="group mt-7 inline-flex items-center gap-4 bg-[#4a0a0a] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition duration-500 hover:bg-[#241818]"
              >
                View All Blogs
                <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
              </Link>
            )}
          </div>
        </div>

        <div className={page ? "mt-12 grid gap-8 lg:grid-cols-2" : "mt-12 grid gap-6 lg:grid-cols-3"}>
          {blogs.map((blog, index) => (
            <BlogCard key={blog.slug} blog={blog} index={index} compact={!page} />
          ))}
        </div>
      </div>
    </section>
  );
}
