// "use client";
// import Image from "next/image";
// import { FaBuilding, FaLeaf, FaBullseye, FaHome } from "react-icons/fa";

// export default function AboutSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* Image */}
//         <div>
//           <Image
//             src="/about3.jpg"
//             alt="about"
//             width={600}
//             height={400}
//             className="rounded-xl w-full h-auto object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             About Us
//           </h2>

//           <p className="mt-4 text-gray-600 leading-relaxed">
//             Transforming land into thriving communities —{" "}
//             <span className="font-semibold text-gray-900">
//               Anondo Cityscapers
//             </span>{" "}
//             creates sustainable spaces where people live, work, and grow
//             together.
//           </p>

//           {/* Cards */}
//           <div className="grid sm:grid-cols-2 gap-5 mt-8">
//             {/* ParkCity */}
//             <div className="p-5 rounded-xl border hover:shadow-md transition">
//               <FaBuilding className="text-2xl text-gray-800 mb-2" />
//               <h3 className="font-semibold text-lg text-gray-900 mb-2">
//                 Anondo ParkCity
//               </h3>
//               <p className="text-sm text-gray-600">
//                 A premium project by Anondo Police Family Welfare Multipurpose
//                 Co-operative Society.
//               </p>
//             </div>

//             {/* Bhuban */}
//             <div className="p-5 rounded-xl border hover:shadow-md transition">
//               <FaLeaf className="text-2xl text-gray-800 mb-2" />
//               <h3 className="font-semibold text-lg text-gray-900 mb-2">
//                 Anondo Bhuban
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Eco-friendly urban living near Purbachal with modern homes,
//                 green spaces & community amenities.
//               </p>
//             </div>

//             {/* Rosemont Estate - FULL WIDTH */}
//             <div className="p-5 rounded-xl border hover:shadow-md transition sm:col-span-2">
//               <FaHome className="text-2xl text-gray-800 mb-2" />
//               <h3 className="font-semibold text-lg text-gray-900 mb-2">
//                 Anondo Rosemont Estate
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Luxury villa community in Ulukhola near Purbachal, offering
//                 elegant living with nature, open spaces, and modern amenities.
//               </p>
//             </div>

//             {/* Vision - FULL WIDTH */}
//             <div className="p-5 rounded-xl border hover:shadow-md transition sm:col-span-2">
//               <FaBullseye className="text-2xl text-gray-800 mb-2" />
//               <h3 className="font-semibold text-lg text-gray-900 mb-2">
//                 Our Vision
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Building sustainable communities and shaping a better future —
//                 where modern living meets nature in harmony.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import {
//   FaBuilding,
//   FaLeaf,
//   FaBullseye,
//   FaHome,
//   FaArrowRight,
// } from "react-icons/fa";

// const projects = [
//   {
//     title: "Anondo ParkCity",
//     text: "A premium project by Anondo Police Family Welfare Multipurpose Co-operative Society.",
//     icon: FaBuilding,
//   },
//   {
//     title: "Anondo Bhuban",
//     text: "Eco-friendly urban living near Purbachal with modern homes, green spaces and community amenities.",
//     icon: FaLeaf,
//   },
//   {
//     title: "Anondo Rosemont Estate",
//     text: "Luxury villa community in Ulukhola near Purbachal, offering elegant living with nature, open spaces and modern amenities.",
//     icon: FaHome,
//     full: true,
//   },
//   {
//     title: "Our Vision",
//     text: "Building sustainable communities and shaping a better future — where modern living meets nature in harmony.",
//     icon: FaBullseye,
//     full: true,
//   },
// ];

// export default function AboutSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#eef7f1] py-20 md:py-28">
//       {/* Background Decoration */}
//       <div className="absolute left-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-green-100 blur-3xl" />
//       <div className="absolute bottom-[-140px] right-[-140px] h-[320px] w-[320px] rounded-full bg-blue-100 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl grid items-center gap-14 px-5 md:grid-cols-2 lg:px-8">
//         {/* Image Area */}
//         <div className="relative">
//           <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-green-200/70" />

//           <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-slate-200/80">
//             <Image
//               src="/about3.jpg"
//               alt="Anondo Cityscapers"
//               width={700}
//               height={520}
//               className="h-[420px] w-full rounded-[1.5rem] object-cover md:h-[560px]"
//               priority
//             />

//             {/* Floating Card */}
//             <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/40 bg-white/90 p-5 shadow-xl backdrop-blur-md">
//               <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-700">
//                 Premium Living
//               </p>
//               <h3 className="mt-2 text-xl font-bold text-slate-900">
//                 Sustainable Urban Communities
//               </h3>
//               <p className="mt-2 text-sm leading-relaxed text-slate-600">
//                 Creating future-ready spaces with nature, comfort and modern
//                 lifestyle facilities.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div>
//           <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
//             About Anondo Cityscapers
//           </span>

//           <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
//             Shaping Modern Living Through{" "}
//             <span className="bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
//               Sustainable Communities
//             </span>
//           </h2>

//           <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
//             Transforming land into thriving communities —{" "}
//             <span className="font-bold text-slate-900">Anondo Cityscapers</span>{" "}
//             creates premium, sustainable and future-focused spaces where people
//             live, work and grow together.
//           </p>

//           {/* Cards */}
//           <div className="mt-10 grid gap-5 sm:grid-cols-2">
//             {projects.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={index}
//                   className={`group rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-slate-200/80 ${
//                     item.full ? "sm:col-span-2" : ""
//                   }`}
//                 >
//                   <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-blue-700 text-white shadow-lg shadow-green-100 transition-transform duration-300 group-hover:scale-110">
//                     <Icon className="text-xl" />
//                   </div>

//                   <h3 className="text-xl font-bold text-slate-950">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-600">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* CTA */}
//           <div className="mt-10 flex flex-wrap items-center gap-5">
//             <button className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-300 transition hover:bg-green-700">
//               Explore Our Projects
//               <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//             </button>

//             <p className="text-sm font-medium text-slate-500">
//               Premium residential planning for future generations.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import {
  FaBuilding,
  FaLeaf,
  FaBullseye,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

const cards = [
  {
    title: "Anondo ParkCity",
    text: "A premium project by Anondo Police Family Welfare Multipurpose Co-operative Society.",
    icon: FaBuilding,
    type: "small",
    color: "bg-secondary",
  },
  {
    title: "Anondo Bhuban",
    text: "Eco-friendly urban living near Purbachal with modern homes, green spaces & community amenities.",
    icon: FaLeaf,
    type: "small",
    color: "bg-secondary",
  },
  {
    title: "Anondo Rosemont Estate",
    text: "Luxury villa community in Ulukhola near Purbachal, offering elegant living with nature, open spaces, and modern amenities.",
    icon: FaHome,
    type: "wide",
    color: "bg-primary",
  },
  {
    title: "Our Vision",
    text: "Building sustainable communities and shaping a better future — where modern living meets nature in harmony.",
    icon: FaBullseye,
    type: "wide",
    color: "bg-secondary",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-off_white py-16 md:py-20">
      <div className="relative mx-auto max-w-[1380px] px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -left-5 -top-6 h-44 w-44 rounded-[2rem] bg-secondary/80" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-[1.5rem] bg-primary/90" />

            <div className="relative rounded-[2.2rem] bg-white p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/about.jpg"
                  alt="Anondo Cityscapers"
                  width={700}
                  height={900}
                  className="h-[560px] w-full object-cover md:h-[700px]"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 rounded-2xl border border-border_color bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
                    Premium Living
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-primary">
                    Sustainable Communities
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[3px] w-12 rounded-full bg-secondary" />
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
                About Us
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-[1.08] md:text-5xl lg:text-6xl">
              Building Communities, <br />
              Shaping Futures
            </h2>

            <div className="mt-6 h-[3px] w-12 rounded-full bg-secondary" />

            <p className="mt-6 max-w-2xl text-lg leading-8">
              Transforming land into thriving communities —{" "}
              <span className="font-extrabold text-secondary">
                Anondo Cityscapers
              </span>{" "}
              creates sustainable spaces where people live, work, and grow
              together.
            </p>

            {/* Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {cards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`group rounded-[1.6rem] border border-border_color bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                      item.type === "wide" ? "sm:col-span-2" : "min-h-[210px]"
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`mt-1 flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full ${item.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon className="text-[28px]" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-[20px] font-extrabold leading-tight">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-base leading-7 text-gray-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:bg-secondary hover:shadow-2xl">
                Explore More
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-sm font-medium text-primary/60">
                Premium township planning with modern lifestyle vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}