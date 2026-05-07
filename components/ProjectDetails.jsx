// import Image from "next/image";
// import EventMap from "@/components/EventMap";
// import { FaCheckCircle } from "react-icons/fa";
// import { BsStarFill } from "react-icons/bs";

// export default function ProjectDetails({ project }) {
//   const { banner, title, description, priceTable, notes, images } = project;

//   return (
//     <div className="w-full">
//       {/* Top Banner Image */}
//       <div className="max-w-6xl mx-auto py-6 px-6 md:px-0">
//         <Image
//           src={banner}
//           width={1600}
//           height={700}
//           alt="Project Banner"
//           className="w-full max-h-[500px] object-cover"
//         />
//       </div>

//       {/* MAIN WRAPPER */}
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Title */}
//         {/* <h1 className="text-center text-3xl font-bold my-8">{title}</h1> */}

//         {/* Description */}
//         {/* <div className="text-lg leading-relaxed whitespace-pre-line">
//           {description}
//         </div> */}

//         <div className="text-lg leading-relaxed space-y-3">
//           {description.map((item, idx) => (
//             <div key={idx} className="flex gap-3 items-start">
//               <FaCheckCircle className="text-primary text-xl mt-1" />
//               <span>{item}</span>
//             </div>
//           ))}
//         </div>

//         {/* Price Table */}
//         {priceTable && priceTable.length > 0 && (
//           <div className="my-12">
//             <h2 className="text-2xl font-bold mb-4">📋 মূল্য তালিকা</h2>

//             <div className="overflow-x-auto">
//               <table className="w-full border border-gray-300">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="border p-3">ক্রমিক</th>
//                     <th className="border p-3">প্লটের ধরন</th>
//                     <th className="border p-3">ইউনিট</th>
//                     <th className="border p-3">মূল্য (টাকা)</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {priceTable.map((row) => (
//                     <tr key={row.serial} className="text-center">
//                       <td className="border p-3">{row.serial}</td>
//                       <td className="border p-3">{row.type}</td>
//                       <td className="border p-3">{row.unit}</td>
//                       <td className="border p-3">{row.price}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             {project?.approvedAt && (
//               <div className="mt-6 flex justify-center md:justify-end">
//                 <p className="flex items-center gap-2 text-base font-medium text-primary">
//                   <BsStarFill className="text-primary" />
//                   মূল্য তালিকা {project.approvedAt} তারিখ হতে অনুমোদিত।
//                 </p>
//               </div>
//             )}
//           </div>
//         )}
//         {/* Notes Section */}
//         {notes && notes.length > 0 && (
//           <div className="bg-orange-50 border-l-4 border-primary p-6 rounded mb-12">
//             <h3 className="text-xl font-bold mb-3">📌 নোট / শর্তাবলী</h3>
//             <ul className="list-disc pl-6 space-y-2 text-lg">
//               {notes.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Application + Brochure Buttons */}
//         <div className="flex gap-4 justify-center mt-10">
//           <a
//             href="/form/Application Form-2.pdf"
//             target="_blank"
//             className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary/90 transition-all transform duration-500"
//           >
//             APPLICATION FORM
//           </a>

//           <a
//             href="/form/Brochure.pdf"
//             target="_blank"
//             className="bg-secondary text-white px-6 py-3 rounded font-semibold hover:bg-secondary/90 transition-all transform duration-500"
//           >
//             BROCHURE
//           </a>
//         </div>

//         {/* Phase Images */}
//         <div className="grid md:grid-cols-3 gap-6 my-12">
//           {images?.map((img, i) => (
//             <div key={i}>
//               <Image
//                 src={img}
//                 width={1200}
//                 height={1080}
//                 alt="Project Image"
//                 className="rounded w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Map (Wrapper আলাদা কারণ width বড়) */}
//       <div className="max-w-6xl mx-auto my-12 px-6">
//         <EventMap />
//       </div>

//       <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center mt-6 mb-16 px-6">
//         <a
//           href="/prokolpo/prokolpo-1"
//           className="bg-primary px-6 py-3 rounded hover:bg-secondary text-white transition-all transform duration-500"
//         >
//           ফেইজ ১ লেআউট
//         </a>

//         <a
//           href="/prokolpo/prokolpo-2"
//           className="bg-primary px-6 py-3 rounded hover:bg-secondary text-white transition-all transform duration-500"
//         >
//           ফেইজ ২ লেআউট
//         </a>

//         <a
//           href="/prokolpo/prokolpo-3"
//           className="bg-primary px-6 py-3 rounded hover:bg-secondary text-white transition-all transform duration-500"
//         >
//           ফেইজ ৩ লেআউট
//         </a>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import EventMap from "@/components/EventMap";
import { FaCheckCircle } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

export default function ProjectDetails({ project }) {
  const { banner, title, description, priceTable, notes, images } = project;

  // 👉 NEW BLOG STRUCTURE SUPPORT
  const projectData = project?.projectData;
  const sections = project?.sections;

  return (
    <div className="w-full">
      {/* 🔥 Banner */}
      <div className="max-w-6xl mx-auto py-6 px-6 md:px-0">
        <Image
          src={banner || projectData?.image}
          width={1600}
          height={700}
          alt="Project Banner"
          className="w-full max-h-[500px] object-cover rounded-2xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* 🔥 TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title || projectData?.title}
          </h1>

          {projectData?.description && (
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              {projectData.description}
            </p>
          )}
        </div>

        {/* 🔥 OLD DESCRIPTION (for prokolpo pages) */}
        {description && (
          <div className="text-lg space-y-3 mb-10">
            {description.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <FaCheckCircle className="text-primary mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* 🔥 NEW SECTIONS (MAIN UPGRADE) */}
        {sections && (
          <div className="space-y-10 mb-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
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
                      <li key={i} className="flex gap-3 items-center">
                        <FaCheckCircle className="text-primary" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 🔥 PRICE TABLE (ONLY FOR OLD DATA) */}
        {/* {priceTable && priceTable.length > 0 && (
          <div className="my-12">
            <h2 className="text-2xl font-bold mb-4">📋 মূল্য তালিকা</h2>

            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-3">ক্রমিক</th>
                    <th className="border p-3">প্লট</th>
                    <th className="border p-3">ইউনিট</th>
                    <th className="border p-3">মূল্য</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row) => (
                    <tr key={row.serial} className="text-center">
                      <td className="border p-3">{row.serial}</td>
                      <td className="border p-3">{row.type}</td>
                      <td className="border p-3">{row.unit}</td>
                      <td className="border p-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {project?.approvedAt && (
              <p className="mt-4 text-primary flex items-center gap-2">
                <BsStarFill />
                অনুমোদিত: {project.approvedAt}
              </p>
            )}
          </div>
        )} */}

        {/* 🔥 NOTES */}
        {notes && notes.length > 0 && (
          <div className="bg-orange-50 border-l-4 border-primary p-6 rounded mb-12">
            <h3 className="text-xl font-bold mb-3">📌 নোট</h3>
            <ul className="list-disc pl-6 space-y-2">
              {notes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 🔥 IMAGES */}
        {images && (
          <div className="grid md:grid-cols-3 gap-6 my-12">
            {images.map((img, i) => (
              <Image
                key={i}
                src={img}
                width={1200}
                height={800}
                alt="Project"
                className="rounded-xl object-cover"
              />
            ))}
          </div>
        )}
      </div>

      {/* 🔥 MAP */}
      <div className="max-w-6xl mx-auto my-12 px-6">
        <EventMap />
      </div>
    </div>
  );
}
