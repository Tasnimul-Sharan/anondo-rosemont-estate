import { navItems } from "@/data/rosemontSite";
import Link from "next/link";
// import { navItems } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#4a0a0a]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-[1180px] items-center justify-between gap-6 px-5">
        <Link href="/" className="grid gap-1">
          <span className="text-sm font-extrabold uppercase tracking-[0.12em]">
            Anondo Rosemont Estate
          </span>
          <span className="text-xs text-white/65">
            Where Elegance Becomes Heritage
          </span>
        </Link>

        <nav className="hidden items-center gap-4 text-[11px] font-bold uppercase tracking-[0.11em] xl:flex">
          {navItems.slice(0, 10).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="group hidden items-center gap-3 border border-white/25 bg-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] transition hover:bg-white hover:text-[#4a0a0a] sm:inline-flex"
        >
          Enquire
          <span className="h-px w-10 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
        </Link>
      </div>
    </header>
  );
}
