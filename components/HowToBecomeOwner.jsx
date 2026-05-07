// "use client";
// import { FiPhoneCall } from "react-icons/fi";
// import { FaClipboardList, FaUserCheck, FaMoneyCheckAlt } from "react-icons/fa";

// export default function HowToBecomeOwner() {
//   const steps = [
//     {
//       icon: <FiPhoneCall size={28} />,
//       title: "Contact Us",
//       desc: "Get in touch with our marketing representative or visit our office directly.",
//     },
//     {
//       icon: <FaClipboardList size={28} />,
//       title: "Fill Out the Form",
//       desc: "Complete the required documents and wait for verification.",
//     },
//     {
//       icon: <FaUserCheck size={28} />,
//       title: "Membership",
//       desc: "After verification, you will be registered and receive project details.",
//     },
//     {
//       icon: <FaMoneyCheckAlt size={28} />,
//       title: "Complete Payment",
//       desc: "Finalize payment and become a proud plot owner.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-gray-50">
//       {/* Heading */}
//       <div className="text-center mb-20 px-4">
//         <h2 className="text-4xl font-bold text-gray-900">
//           Your Journey to Land Ownership
//         </h2>
//         <p className="text-gray-500 mt-3">
//           Simple steps to secure your dream property
//         </p>
//         <div className="w-24 h-[3px] bg-primary mx-auto mt-4 rounded-full" />
//       </div>

//       {/* Steps */}
//       <div className="max-w-7xl mx-auto px-4 relative">
//         <div className="grid md:grid-cols-4 gap-10 relative">
//           {/* Line */}
//           <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>

//           {steps.map((step, index) => (
//             <div key={index} className="relative group text-center">
//               {/* Step Number */}
//               <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-sm w-8 h-8 flex items-center justify-center rounded-full shadow-md z-20">
//                 {index + 1}
//               </div>

//               {/* Card */}
//               <div className="bg-white rounded-2xl shadow-lg p-6 pt-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
//                 {/* Icon */}
//                 <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
//                   {step.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {step.title}
//                 </h3>

//                 {/* Desc */}
//                 <p className="text-gray-500 text-sm leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { FiPhoneCall } from "react-icons/fi";
import { FaClipboardList, FaUserCheck, FaMoneyCheckAlt } from "react-icons/fa";

export default function HowToBecomeOwner() {
  const steps = [
    {
      icon: <FiPhoneCall />,
      title: "Contact Us",
      desc: "Get in touch with our marketing representative or visit our office directly.",
    },
    {
      icon: <FaClipboardList />,
      title: "Fill Out the Form",
      desc: "Complete the required documents and wait for verification.",
    },
    {
      icon: <FaUserCheck />,
      title: "Membership",
      desc: "After verification, you will be registered and receive project details.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Complete Payment",
      desc: "Finalize payment and become a proud plot owner.",
    },
    {
      icon: <FaUserCheck />,
      title: "Registration",
      desc: "Submit your documents and complete the official registration process.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* Heading */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl font-bold text-gray-900">
          Your Ownership Journey
        </h2>
        <p className="text-gray-500 mt-3">
          A simple and transparent process to secure your land
        </p>
        <div className="w-24 h-[3px] bg-primary mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-[45%] bg-primary/5 border border-primary/20 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                    isLeft ? "mr-auto text-right" : "ml-auto text-left"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!isLeft && (
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        {step.icon}
                      </div>
                    )}

                    <h3 className="text-lg font-semibold text-gray-800">
                      {step.title}
                    </h3>

                    {isLeft && (
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        {step.icon}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
