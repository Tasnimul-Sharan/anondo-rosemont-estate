"use client";

import {
  FaRegListAlt,
  FaUserFriends,
  FaHardHat,
  FaChartLine,
} from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaRegListAlt size={25} />,
      value: "2006",
      label: "Journey Started",
    },
    {
      icon: <FaUserFriends size={25} />,
      value: "1400+",
      label: "Active Members",
    },
    {
      icon: <FaHardHat size={25} />,
      value: "362+",
      label: "Plots Delivered",
    },
    {
      icon: <FaChartLine size={25} />,
      value: "200+",
      label: "Team Members",
    },
  ];

  return (
    <section className="bg-off_white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[1.7rem] border border-border_color bg-white p-8 text-center shadow-sm transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-xl transform-gpu"
            >
              {/* Soft Corner Shape */}
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-off_white transition-colors duration-500 ease-out group-hover:bg-secondary/10" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-[66px] w-[66px] items-center justify-center rounded-2xl border border-border_color bg-off_white text-primary transition-[background-color,color,border-color,transform] duration-500 ease-out group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:scale-[1.03] transform-gpu will-change-transform">
                  <span className="flex items-center justify-center leading-none transition-transform duration-500 ease-out group-hover:scale-100">
                    {item.icon}
                  </span>
                </div>

                {/* Value */}
                <h3 className="text-4xl font-black leading-none text-primary md:text-5xl">
                  {item.value}
                </h3>

                {/* Divider */}
                <div className="mx-auto my-4 h-[2px] w-10 rounded-full bg-secondary" />

                {/* Label */}
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary/65">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}