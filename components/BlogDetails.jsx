// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { AiOutlineTag } from "react-icons/ai";
// import { FaQuoteLeft, FaRegCheckCircle, FaReply } from "react-icons/fa";

// export default function NoticeDetails({ blogsData }) {
//   const { blogPost, socialIcons } = blogsData;

//   return (
//     <div className="max-w-6xl mx-auto md:px-0 px-6 space-y-8 py-20">
//       <div className="rounded-2xl overflow-hidden">
//         <Image
//           src={blogPost.image}
//           alt={blogPost.title}
//           width={1400}
//           height={1200}
//           priority
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
//         {blogPost.title}
//       </h1>
//       <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
//         {blogPost.description}
//       </p>
//       <p className="text-center text-sm text-gray-500">{blogPost.date}</p>
//       <hr className="border-gray-200" />
//       <div className="flex justify-center items-center gap-3">
//         {blogsData.socialIcons.map(({ icon: Icon, link }, index) => {
//           const currentUrl = `https://anondocityscapers.com/notice/${blogsData.slug}`;
//           return (
//             <a
//               key={index}
//               href={link(currentUrl, blogPost.title)}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:border-transparent hover:text-white transition-all transform duration-500"
//             >
//               <Icon className="w-4 h-4" />
//             </a>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import { FaCheckCircle } from "react-icons/fa";

// export default function BlogDetails({ blogsData }) {
//   const { blogPost, sections } = blogsData;

//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Image */}
//         <div className="rounded-3xl overflow-hidden shadow-lg mb-12">
//           <Image
//             src={blogPost.image}
//             alt={blogPost.title}
//             width={1400}
//             height={800}
//             className="w-full h-[400px] object-cover"
//           />
//         </div>

//         {/* Title */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             {blogPost.title}
//           </h1>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             {blogPost.description}
//           </p>
//           <p className="text-sm text-gray-400 mt-2">{blogPost.date}</p>
//         </div>

//         {/* Sections */}
//         <div className="space-y-10">
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
//             >
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                 {section.title}
//               </h2>

//               {/* Paragraph */}
//               {section.content && (
//                 <p className="text-gray-600 leading-relaxed">
//                   {section.content}
//                 </p>
//               )}

//               {/* List */}
//               {section.list && (
//                 <ul className="mt-4 space-y-2">
//                   {section.list.map((item, i) => (
//                     <li
//                       key={i}
//                       className="flex items-center gap-3 text-gray-600"
//                     >
//                       <FaCheckCircle className="text-primary" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Tags */}
//         <div className="mt-12 flex flex-wrap gap-3 justify-center">
//           {blogPost.postTags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//         {/* Social Share */}
//         <div className="flex justify-center items-center gap-3 mb-10">
//           {blogsData.socialIcons?.map(({ icon: Icon, link }, index) => {
//             const currentUrl = `https://anondocityscapers.com/notice/${blogsData.slug}`;

//             return (
//               <a
//                 key={index}
//                 href={link(currentUrl, blogPost.title)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300"
//               >
//                 <Icon />
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { AiOutlineTag } from "react-icons/ai";
// import { FaCheckCircle, FaQuoteLeft, FaRegCheckCircle } from "react-icons/fa";

// export default function BlogDetails({ blogsData, socialIcons }) {
//   const { blogPost } = blogsData;

//   const currentUrl = `https://anondocityscapers.com/blogs/${blogsData.slug}`;

//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* 🔥 Main Image */}
//         <div className="rounded-3xl overflow-hidden shadow-lg mb-10">
//           <Image
//             src={blogPost.image}
//             alt={blogPost.title}
//             width={1400}
//             height={800}
//             className="w-full h-[400px] object-cover"
//           />
//         </div>

//         {/* 🔥 Header */}
//         <div className="text-center mb-10">
//           <p className="text-sm text-gray-500 mb-2">
//             <span className="text-primary font-medium">Written by:</span>{" "}
//             {blogPost.author} • {blogPost.date}
//           </p>

//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             {blogPost.title}
//           </h1>

//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {blogPost.description}
//           </p>
//         </div>

//         {/* 🔥 Social Share (TOP like premium sites) */}
//         <div className="flex justify-center items-center gap-3 mb-12">
//           {socialIcons?.map(({ icon: Icon, link }, index) => (
//             <a
//               key={index}
//               href={link(currentUrl, blogPost.title)}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300"
//             >
//               <Icon />
//             </a>
//           ))}
//         </div>

//         {/* 🔥 Checklist */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm mb-10">
//           <div className="space-y-3 text-gray-700">
//             {blogPost.checklist.map((item, idx) => (
//               <div key={idx} className="flex items-center gap-3">
//                 <FaRegCheckCircle className="text-primary" />
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 🔥 Sub Images */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//           {blogPost.subImages.map((img, i) => (
//             <div
//               key={i}
//               className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
//             >
//               <Image
//                 src={img}
//                 alt={`sub-img-${i}`}
//                 width={1200}
//                 height={1200}
//                 className="w-full h-full object-cover hover:scale-105 transition duration-500"
//               />
//             </div>
//           ))}
//         </div>

//         {/* 🔥 Sub Content */}
//         {blogPost.subContent && (
//           <div className="bg-white rounded-2xl p-8 shadow-sm mb-10 space-y-4">
//             {Array.isArray(blogPost.subContent) ? (
//               blogPost.subContent.map((para, idx) => (
//                 <div key={idx} className="flex items-start gap-3">
//                   <FaCheckCircle className="text-primary mt-1" />
//                   <p className="text-gray-700">{para}</p>
//                 </div>
//               ))
//             ) : (
//               <div className="flex items-start gap-3">
//                 <FaCheckCircle className="text-primary mt-1" />
//                 <p className="text-gray-700">{blogPost.subContent}</p>
//               </div>
//             )}
//           </div>
//         )}

//         {/* 🔥 Quote */}
//         <blockquote className="bg-primary/10 text-gray-800 p-8 rounded-2xl relative border-l-4 border-primary mb-10">
//           <FaQuoteLeft className="text-primary text-2xl absolute -top-4 left-4" />
//           <p className="italic text-lg">{blogPost.quote}</p>
//         </blockquote>

//         {/* 🔥 Tags + Bottom Share */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t pt-6">
//           {/* Tags */}
//           <div className="flex flex-wrap items-center gap-2">
//             <AiOutlineTag className="text-primary text-xl" />
//             {blogPost.postTags.map((tag, i) => (
//               <span
//                 key={i}
//                 className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Bottom Share */}
//           <div className="flex items-center gap-2">
//             <span className="text-gray-600">Share:</span>
//             {socialIcons?.map(({ icon: Icon, link }, index) => (
//               <a
//                 key={index}
//                 href={link(currentUrl, blogPost.title)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:text-white transition"
//               >
//                 <Icon className="w-4 h-4" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { AiOutlineTag } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

export default function BlogDetails({ blogsData }) {
  const { blogPost, sections, socialIcons } = blogsData;

  const currentUrl = `https://anondocityscapers.com/blogs/${blogsData.slug}`;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔥 Main Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-10">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            width={1400}
            height={800}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* 🔥 Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2">
            <span className="text-primary font-medium">Written by:</span>{" "}
            {blogPost.author} • {blogPost.date}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {blogPost.title}
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            {blogPost.description}
          </p>
        </div>

        {/* 🔥 Social Share TOP */}
        {/* <div className="flex justify-center items-center gap-3 mb-12">
          {socialIcons?.map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link(currentUrl, blogPost.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300"
            >
              <Icon />
            </a>
          ))}
        </div> */}

        {/* 🔥 Sections (MAIN MERGE PART) */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>

              {/* Paragraph */}
              {section.content && (
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              )}

              {/* List */}
              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <FaCheckCircle className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* 🔥 Tags + Bottom Share */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t pt-6">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <AiOutlineTag className="text-primary text-xl" />
            {blogPost.postTags.map((tag, i) => (
              <span
                key={i}
                className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Share */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Share:</span>
            {socialIcons?.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link(currentUrl, blogPost.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:text-white transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
