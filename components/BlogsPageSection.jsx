// "use client";
// import { blogsData } from "@/data/blogsData";
// import Image from "next/image";
// import Link from "next/link";
// import { FaUser } from "react-icons/fa";
// import { FiCalendar } from "react-icons/fi";

// export default function BlogsPageSection() {

//   return (
//     <div className="py-16 bg-orange-50">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
//         {blogsData.map((item) => (
//           <Link
//             key={item.id}
//             href={`/blogs/${item.slug}`}
//             className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-primary/20"
//           >
//             {/* Image */}
//             <div className="overflow-hidden relative">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={600}
//                 height={400}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               {/* Meta */}
//               <div className="flex items-center gap-6 text-gray-500 text-sm mb-3">
//                 <div className="flex items-center gap-2">
//                   <FaUser className="text-primary" />
//                   <span>{item.author}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FiCalendar className="text-secondary" />
//                   <span>{item.date}</span>
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 mt-2 mb-5">{item.description}</p>

//               {/* Button */}
//               <span className="inline-block px-5 py-2 bg-secondary text-white rounded-lg text-sm font-medium hover:bg-primary transition">
//                 READ MORE
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { blogsData } from "@/data/blogsData";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

export default function BlogsPageSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Latest Blogs</h2>
          <p className="text-gray-500 mt-3">
            Explore our latest insights, stories, and updates
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {blogsData.map((item) => (
            <Link
              key={item.id}
              href={`/blogs/${item.slug}`}
              className="group block rounded-2xl overflow-hidden border hover:shadow-2xl transition duration-500 bg-white"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>

                {/* Meta on Image */}
                <div className="absolute bottom-4 left-4 text-white text-sm flex gap-4">
                  <div className="flex items-center gap-1">
                    <FaUser />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCalendar />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 line-clamp-3">
                  {item.description}
                </p>

                {/* Read More */}
                <div className="mt-5 flex items-center gap-2 text-primary font-medium">
                  Read More
                  <span className="transition-all transform duration-500 group-hover:translate-x-2">
                    <FiArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
