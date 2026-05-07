// "use client";

// import {
//   FaPhoneAlt,
//   FaMapMarkedAlt,
//   FaFileAlt,
//   FaLaptop,
//   FaStamp,
//   FaCheckCircle,
// } from "react-icons/fa";

// const steps = [
//   {
//     title: "Consultation",
//     desc: "WhatsApp / Zoom discussion from anywhere in the world",
//     icon: <FaPhoneAlt />,
//   },
//   {
//     title: "Choose Plot",
//     desc: "Select your preferred land with full guidance",
//     icon: <FaMapMarkedAlt />,
//   },
//   {
//     title: "Verify Documents",
//     desc: "Complete legal verification and transparency",
//     icon: <FaFileAlt />,
//   },
//   {
//     title: "Online Booking",
//     desc: "Secure your plot remotely without hassle",
//     icon: <FaLaptop />,
//   },
//   {
//     title: "Registration",
//     desc: "Official legal registration in Bangladesh",
//     icon: <FaStamp />,
//   },
//   {
//     title: "Ownership",
//     desc: "You become the verified legal owner",
//     icon: <FaCheckCircle />,
//   },
// ];

// export default function BuyingProcessSection() {
//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Title */}
//         <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
//           Simple 6-Step Buying Process
//         </h2>

//         {/* Vertical Line */}
//         <div className="absolute left-1/2 top-40 bottom-0 w-[2px] bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>

//         <div className="space-y-16">
//           {steps.map((step, index) => {
//             const isLeft = index % 2 === 0;

//             return (
//               <div
//                 key={index}
//                 className={`relative flex items-center ${
//                   isLeft ? "justify-start" : "justify-end"
//                 }`}
//               >
//                 {/* Card */}
//                 <div
//                   className={`w-full md:w-[45%] p-6 rounded-2xl border bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 ${
//                     isLeft ? "mr-auto text-right" : "ml-auto text-left"
//                   }`}
//                 >
//                   {/* Step + Icon */}
//                   <div
//                     className={`flex items-center gap-3 mb-3 ${
//                       isLeft ? "justify-end" : "justify-start"
//                     }`}
//                   >
//                     {!isLeft && (
//                       <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
//                         {step.icon}
//                       </div>
//                     )}

//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {step.title}
//                     </h3>

//                     {isLeft && (
//                       <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
//                         {step.icon}
//                       </div>
//                     )}
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-500 text-sm leading-relaxed">
//                     {step.desc}
//                   </p>
//                 </div>

//                 {/* Center Circle */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-bold shadow-lg z-10">
//                   {index + 1}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaFileAlt,
  FaLaptop,
  FaStamp,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    title: "Consultation",
    desc: "WhatsApp / Zoom discussion from anywhere in the world",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Choose Plot",
    desc: "Select your preferred land with full guidance",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Verify Documents",
    desc: "Complete legal verification and transparency",
    icon: <FaFileAlt />,
  },
  {
    title: "Online Booking",
    desc: "Secure your plot remotely without hassle",
    icon: <FaLaptop />,
  },
  {
    title: "Registration",
    desc: "Official legal registration in Bangladesh",
    icon: <FaStamp />,
  },
  {
    title: "Ownership",
    desc: "You become the verified legal owner",
    icon: <FaCheckCircle />,
  },
];

export default function BuyingProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
          Simple 6-Step Buying Process
        </h2>

        {/* Center Line */}
        <div className="absolute left-1/2 top-40 bottom-0 w-[2px] bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0; // ✅ FIX HERE

            return (
              <div
                key={index}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className={`relative w-full md:w-[47%] p-7 rounded-2xl border bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 ${
                    isLeft ? "mr-auto text-right" : "ml-auto text-left"
                  }`}
                >
                  {/* Connector Line */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-primary/30 ${
                      isLeft
                        ? "right-[-40px] w-[40px]"
                        : "left-[-40px] w-[40px]"
                    }`}
                  ></div>

                  {/* Header */}
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!isLeft && (
                      <div className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        {step.icon}
                      </div>   
                    )}

                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>

                    {isLeft && (
                      <div className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        {step.icon}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Center Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-semibold shadow-lg z-10">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}