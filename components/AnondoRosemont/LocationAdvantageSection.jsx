import { estateImage } from "@/data/rosemontSite";
import Image from "next/image";
import {
  FiDroplet,
  FiHeart,
  FiHome,
  FiMap,
  FiMapPin,
  FiNavigation,
} from "react-icons/fi";

const locationHighlights = [
  {
    icon: FiMapPin,
    title: "Ulukhola Address",
    text: "A calmer estate setting near the rapidly expanding Purbachal New Town corridor.",
  },
  {
    icon: FiDroplet,
    title: "Turag River Setting",
    text: "Natural river surroundings help create a quieter residential atmosphere with scenic value.",
  },
  {
    icon: FiNavigation,
    title: "Purbachal Connectivity",
    text: "Proximity to one of Bangladesh's important growth corridors supports long-term accessibility and investment appeal.",
  },
  {
    icon: FiHeart,
    title: "Wellness Adjacency",
    text: "The estate benefits from adjacency to Anondo Baari Senior Citizens Wellness Center.",
  },
  {
    icon: FiMap,
    title: "River Island Block",
    text: "One block is uniquely positioned on a river island, adding rare waterfront character.",
  },
  {
    icon: FiHome,
    title: "Low-Density Calm",
    text: "The location supports open villa living while staying connected to future urban infrastructure.",
  },
];

export default function LocationAdvantageSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      {/* <div className="absolute left-0 top-0 hidden h-full w-[30%] bg-secondary lg:block" /> */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-secondary">
              <span className="h-px w-10 bg-current" />
              Strategic Location
            </p>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-secondary md:text-5xl">
              Peaceful estate living beside a future growth corridor.
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
            Anondo Rosemont Estate is positioned in Ulukhola near Purbachal New
            Town, south of the Turag River. The address balances natural calm,
            family living, and long-term connectivity.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden border border-secondary/15 bg-white shadow-2xl shadow-secondary/10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[520px] overflow-hidden bg-secondary lg:min-h-[680px]">
            <Image
              src={estateImage}
              alt="Anondo Rosemont Estate strategic location"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-right transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.05)_0%,rgba(56,10,10,0.84)_100%)]" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
              <span className="mb-7 block h-px w-24 bg-white" />
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
                Location Identity
              </p>
              <h3 className="mt-4 max-w-lg text-3xl font-semibold leading-tight md:text-5xl">
                Ulukhola, south of Turag River, near Purbachal New Town.
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            {locationHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group min-h-[230px] border-b border-secondary/15 p-7 transition duration-500 hover:bg-[#f8f3ec] md:border-r md:even:border-r-0 lg:p-9"
                >
                  <div className="mb-8 flex items-center justify-between gap-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary/15 bg-secondary/5 text-secondary transition duration-300 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="h-px w-16 origin-left scale-x-[0.35] bg-secondary transition-transform duration-700 ease-out group-hover:scale-x-100" />
                  </div>

                  <h3 className="text-2xl font-semibold leading-tight text-secondary">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#6b5d57]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
