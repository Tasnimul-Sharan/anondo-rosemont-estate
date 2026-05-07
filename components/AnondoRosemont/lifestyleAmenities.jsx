// import Image from "next/image";

// const lifestyleAmenities = [
//   {
//     title: "Grand Sports Complex",
//     text: "Indoor sports courts, badminton and table tennis facilities, gymnasium, multi-purpose courts, outdoor training areas, and seating for community tournaments.",
//     image: "/10 katha villa/MAHI Final.jpeg",
//   },
//   {
//     title: "12 Bigha Estate Lake",
//     text: "Scenic walking promenades, sitting areas, viewing decks, waterfront gardens, sunset viewpoints, and refreshing natural atmosphere.",
//     image: "/10 katha villa/MAHI Final.jpeg",
//   },
//   {
//     title: "Three Community Playgrounds",
//     text: "Dedicated open spaces where children can play freely, participate in outdoor sports, and build healthy neighborhood friendships.",
//     image: "/10 katha villa/MAHI Final.jpeg",
//   },
//   {
//     title: "Clubhouse and Social Center",
//     text: "A planned community hub with banquet hall, lounges, cafe space, fitness and wellness facilities, meeting rooms, and event areas.",
//     image: "/10 katha villa/MAHI Final.jpeg",
//   },
//   {
//     title: "Community Farming Space",
//     text: "A dedicated zone for vegetables, fruits, flowers, and herbal plants that reconnects residents with the agricultural heritage of Bangladesh.",
//     image: "/10 katha villa/MAHI Final.jpeg",
//   },
// ];

// export function LifestyleAmenities() {
//   return (
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {lifestyleAmenities.map((item, index) => (
//         <article
//           key={`${item.title}-${index}`}
//           className="group overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4a0a0a]/20"
//         >
//           <div className="relative h-[280px] overflow-hidden bg-[#4a0a0a]">
//             <Image
//               src={item.image}
//               alt={item.title}
//               fill
//               sizes="(max-width: 1024px) 100vw, 33vw"
//               className="object-cover transition duration-700 group-hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.04)_0%,rgba(56,10,10,0.78)_100%)]" />

//             <div className="absolute left-6 top-6 z-10 flex h-12 w-12 items-center justify-center border border-white/25 bg-white/15 text-sm font-bold text-white backdrop-blur-md">
//               {String(index + 1).padStart(2, "0")}
//             </div>

//             <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
//               <span className="mb-5 block h-px w-20 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />

//               <h3 className="text-2xl font-semibold leading-tight">
//                 {item.title}
//               </h3>
//             </div>
//           </div>

//           <div className="p-7">
//             <p className="leading-8 text-[#6b5d57]">{item.text}</p>

//             <button className="group/btn mt-7 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.14em] text-[#4a0a0a]">
//               Explore
//               <span className="h-px w-10 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover/btn:scale-x-100" />
//             </button>
//           </div>
//         </article>
//       ))}
//     </div>
//   );
// }

// import Image from "next/image";

// const lifestyleAmenities = [
//   {
//     title: "Grand Sports Complex",
//     text: "Indoor sports courts, badminton and table tennis facilities, gymnasium, multi-purpose courts, outdoor training areas, and seating for community tournaments.",
//     image: "/10 katha villa/MAHI Final.jpeg",
//   },
//   {
//     title: "12 Bigha Estate Lake",
//     text: "Scenic walking promenades, sitting areas, viewing decks, waterfront gardens, sunset viewpoints, and refreshing natural atmosphere.",
//     image: "/10 katha villa/MAHI Final.jpeg",
//   },
//   {
//     title: "Three Community Playgrounds",
//     text: "Dedicated open spaces where children can play freely, participate in outdoor sports, and build healthy neighborhood friendships.",
//     image: "/10 katha villa/MAHI Final.jpeg",
//   },
//   {
//     title: "Clubhouse and Social Center",
//     text: "A planned community hub with banquet hall, lounges, cafe space, fitness and wellness facilities, meeting rooms, and event areas.",
//     image: "/10 katha villa/MAHI Final.jpeg",
//   },
//   {
//     title: "Community Farming Space",
//     text: "A dedicated zone for vegetables, fruits, flowers, and herbal plants that reconnects residents with the agricultural heritage of Bangladesh.",
//     image: "/10 katha villa/MAHI Final.jpeg",
//   },
// ];

// export function LifestyleAmenities() {
//   return (
//     <section className="bg-[#f8f3ec] py-16 md:py-24 lg:py-32">
//       <div className="mx-auto max-w-[1180px] px-5">
//         <div className="mb-12 max-w-3xl">
//           <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
//             <span className="h-px w-10 bg-[#4a0a0a]" />
//             Lifestyle Amenities
//           </p>

//           <h2 className="text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
//             A Lifestyle Beyond Ordinary
//           </h2>

//           <p className="mt-5 text-base leading-8 text-[#6b5d57] md:text-lg">
//             Thoughtfully planned spaces for wellness, recreation, connection,
//             and everyday estate living.
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {lifestyleAmenities.map((item, index) => (
//             <article
//               key={`${item.title}-${index}`}
//               className="group relative overflow-hidden border border-[#4a0a0a]/12 bg-white shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4a0a0a]/20"
//             >
//               <span className="absolute left-0 top-0 z-20 h-px w-full origin-left scale-x-[0.18] bg-[#4a0a0a] transition-transform duration-1000 ease-out group-hover:scale-x-100" />
//               <span className="absolute right-0 top-0 z-20 h-full w-px origin-top scale-y-[0.18] bg-[#4a0a0a] transition-transform delay-100 duration-1000 ease-out group-hover:scale-y-100" />
//               <span className="absolute bottom-0 right-0 z-20 h-px w-full origin-right scale-x-[0.18] bg-[#4a0a0a] transition-transform delay-200 duration-1000 ease-out group-hover:scale-x-100" />
//               <span className="absolute bottom-0 left-0 z-20 h-full w-px origin-bottom scale-y-[0.18] bg-[#4a0a0a] transition-transform delay-300 duration-1000 ease-out group-hover:scale-y-100" />

//               <div className="relative h-[300px] overflow-hidden bg-[#4a0a0a]">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 33vw"
//                   className="object-cover transition duration-700 group-hover:scale-105"
//                 />

//                 <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.05)_0%,rgba(56,10,10,0.72)_100%)] transition duration-700 group-hover:bg-[linear-gradient(180deg,rgba(56,10,10,0.12)_0%,rgba(56,10,10,0.84)_100%)]" />

//                 <div className="absolute left-6 top-6 z-10 flex h-12 w-12 items-center justify-center border border-white/25 bg-white/15 text-sm font-bold text-white backdrop-blur-md transition duration-500 group-hover:border-white/55 group-hover:bg-white/25">
//                   {String(index + 1).padStart(2, "0")}
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
//                   <span className="mb-5 block h-px w-20 origin-left scale-x-[0.35] bg-white transition-transform duration-1000 ease-out group-hover:scale-x-100" />

//                   <h3 className="max-w-[18rem] text-2xl font-semibold leading-tight">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>

//               <div className="relative p-7">
//                 <p className="leading-8 text-[#6b5d57]">{item.text}</p>

//                 <button className="group/btn mt-7 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.14em] text-[#4a0a0a]">
//                   Explore
//                   <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-1000 ease-out group-hover:scale-x-100 group-hover/btn:scale-x-100" />
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const lifestyleAmenities = [
  {
    title: "Grand Sports Complex",
    text: "Indoor sports courts, badminton and table tennis facilities, gymnasium, multi-purpose courts, outdoor training areas, and seating for community tournaments.",
    image: "/10 katha villa/MAHI Final.jpeg",
  },
  {
    title: "12 Bigha Estate Lake",
    text: "Scenic walking promenades, sitting areas, viewing decks, waterfront gardens, sunset viewpoints, and refreshing natural atmosphere.",
    image: "/10 katha villa/MAHI Final.jpeg",
  },
  {
    title: "Three Community Playgrounds",
    text: "Dedicated open spaces where children can play freely, participate in outdoor sports, and build healthy neighborhood friendships.",
    image: "/10 katha villa/MAHI Final.jpeg",
  },
  {
    title: "Clubhouse and Social Center",
    text: "A planned community hub with banquet hall, lounges, cafe space, fitness and wellness facilities, meeting rooms, and event areas.",
    image: "/10 katha villa/MAHI Final.jpeg",
  },
  {
    title: "Community Farming Space",
    text: "A dedicated zone for vegetables, fruits, flowers, and herbal plants that reconnects residents with the agricultural heritage of Bangladesh.",
    image: "/10 katha villa/MAHI Final.jpeg",
  },
];

export function LifestyleAmenities() {
  return (
    <section className="bg-[#f8f3ec] py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
            <span className="h-px w-10 bg-[#4a0a0a]" />
            Lifestyle Amenities
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
            A Lifestyle Beyond Ordinary
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6b5d57] md:text-lg">
            Thoughtfully planned spaces for wellness, recreation, connection,
            and everyday estate living.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lifestyleAmenities.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4a0a0a]/20"
            >
              <div className="relative h-[280px] overflow-hidden bg-[#4a0a0a]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.04)_0%,rgba(56,10,10,0.78)_100%)]" />

                <div className="absolute left-6 top-6 z-10 flex h-12 w-12 items-center justify-center border border-white/25 bg-white/15 text-sm font-bold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
                  <span className="mb-5 block h-px w-20 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />

                  <h3 className="text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <p className="leading-8 text-[#6b5d57]">{item.text}</p>

                <button className="group/btn mt-7 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.14em] text-[#4a0a0a]">
                  Explore
                  <span className="h-px w-10 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover/btn:scale-x-100" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
