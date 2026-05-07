// import { useState } from "react";

// export default function ContactSection() {
//   const [result, setResult] = useState("");
//   const [success, setSuccess] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("");
//     setSuccess(false);

//     const formData = new FormData(event.target);
//     formData.append("access_key", "bddcb629-55c2-476e-b590-2d44e089d506");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const res = await response.json();

//     if (res.success) {
//       setSuccess(true);
//       setResult(
//         "✅ আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা খুব শিগগিরই যোগাযোগ করবো!"
//       );
//       event.target.reset();
//     } else {
//       setSuccess(false);
//       setResult("❌ দুঃখিত! কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
//     }

//     // Auto hide message after 5 seconds
//     setTimeout(() => {
//       setResult("");
//     }, 5000);
//   };

//   return (
//     <>
//       <section className="py-16 bg-white text-center">
//         <h2 className="text-4xl font-bold text-gray-800">যোগাযোগ করুন</h2>
//         <div className="w-20 h-[3px] bg-primary mt-4 mb-4 mx-auto"></div>
//         <p className="mt-2 text-gray-600">আমাদের সাথে যোগাযোগ করুন</p>
//       </section>
//       <section className="py-20 bg-[#f7f7f7]">
//         <form onSubmit={onSubmit} className="max-w-4xl mx-auto px-4 space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name *"
//               className="w-full bg-[#e9e9e9] p-4 outline-none"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email *"
//               className="w-full bg-[#e9e9e9] p-4 outline-none"
//               required
//             />
//           </div>

//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject *"
//             className="w-full bg-[#e9e9e9] p-4 outline-none"
//             required
//           />

//           <textarea
//             name="message"
//             placeholder="Message"
//             className="w-full bg-[#e9e9e9] p-4 h-40 resize-none outline-none"
//             required
//           />

//           <button
//             type="submit"
//             className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 transition"
//           >
//             SEND MESSAGE
//           </button>
//           {result && (
//             <div
//               className={`mt-6 p-4 rounded text-center font-medium ${
//                 success
//                   ? "bg-green-100 text-green-700 border border-green-300"
//                   : "bg-red-100 text-red-700 border border-red-300"
//               }`}
//             >
//               {result}
//             </div>
//           )}
//         </form>
//       </section>
//     </>
//   );
// }

// import { useState } from "react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaHome,
//   FaDollarSign,
// } from "react-icons/fa";

// export default function ContactSection() {
//   const [result, setResult] = useState("");
//   const [success, setSuccess] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("");
//     setSuccess(false);

//     const formData = new FormData(event.target);
//     formData.append("access_key", "bddcb629-55c2-476e-b590-2d44e089d506");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const res = await response.json();

//     if (res.success) {
//       setSuccess(true);
//       setResult("✅ Request submitted! Our agent will contact you shortly.");
//       event.target.reset();
//     } else {
//       setSuccess(false);
//       setResult("❌ Failed to send. Please try again.");
//     }

//     setTimeout(() => setResult(""), 5000);
//   };

//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
//         {/* LEFT CONTENT */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//             Find Your Dream Home
//           </h2>
//           <p className="mt-4 text-gray-300">
//             Buy, sell, or rent premium properties with trusted agents. আমরা
//             আপনার জন্য সেরা ডিল খুঁজে দিবো।
//           </p>

//           {/* CONTACT INFO */}
//           <div className="mt-8 space-y-4">
//             <div className="flex items-center gap-4">
//               <FaMapMarkerAlt className="text-orange-400 text-xl" />
//               <span>Dhaka, Bangladesh</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <FaPhoneAlt className="text-orange-400 text-xl" />
//               <span>+880 1234-567890</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <FaEnvelope className="text-orange-400 text-xl" />
//               <span>info@realestate.com</span>
//             </div>
//           </div>
//         </div>

//         {/* FORM CARD */}
//         <form
//           onSubmit={onSubmit}
//           className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl space-y-5"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name *"
//             className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number *"
//             className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
//           />

//           {/* PROPERTY TYPE */}
//           <div className="flex items-center bg-white/20 rounded-md px-3">
//             <FaHome className="text-orange-400" />
//             <select
//               name="property_type"
//               className="w-full p-3 bg-transparent focus:outline-none"
//               required
//             >
//               <option value="" className="text-black">
//                 Property Type
//               </option>
//               <option className="text-black">Apartment</option>
//               <option className="text-black">House</option>
//               <option className="text-black">Commercial</option>
//               <option className="text-black">Land</option>
//             </select>
//           </div>

//           {/* BUDGET */}
//           <div className="flex items-center bg-white/20 rounded-md px-3">
//             <FaDollarSign className="text-orange-400" />
//             <select
//               name="budget"
//               className="w-full p-3 bg-transparent focus:outline-none"
//             >
//               <option value="" className="text-black">
//                 Budget Range
//               </option>
//               <option className="text-black">Below 50 Lakh</option>
//               <option className="text-black">50 Lakh - 1 Crore</option>
//               <option className="text-black">1 - 3 Crore</option>
//               <option className="text-black">Above 3 Crore</option>
//             </select>
//           </div>

//           <textarea
//             name="message"
//             placeholder="Additional Details..."
//             className="w-full p-3 h-28 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-md font-semibold transition transform hover:scale-105"
//           >
//             Request Consultation
//           </button>

//           {result && (
//             <div
//               className={`text-center p-3 rounded-md ${
//                 success
//                   ? "bg-green-500/20 text-green-300"
//                   : "bg-red-500/20 text-red-300"
//               }`}
//             >
//               {result}
//             </div>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaDollarSign,
} from "react-icons/fa";

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setSuccess(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "bddcb629-55c2-476e-b590-2d44e089d506");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const res = await response.json();

    if (res.success) {
      setSuccess(true);
      setResult("Request submitted! Our agent will contact you shortly.");
      event.target.reset();
    } else {
      setSuccess(false);
      setResult("Failed to send. Please try again.");
    }

    setTimeout(() => setResult(""), 5000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE - CONTACT CARD */}
        <div className="bg-primary/5 p-8 rounded-2xl shadow-sm border">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-500 mt-2">
            Contact us for buying, selling or renting properties.
          </p>

          <div className="mt-8 space-y-6">
            {/* LOCATION */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/20 hover:shadow-md transition">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-700 font-medium">
                  Printers Building, 12-13th Floor, 5 Rajuk Avenue, Motijheel,
                  1000 Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/20 hover:shadow-md transition">
              <div className="bg-primary/10  p-3 rounded-full">
                <FaPhoneAlt className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-gray-700 font-medium">+880 1331-115500</p>
              </div>
            </div>
            {/* EMAIL */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/20 hover:shadow-md transition">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaEnvelope className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-gray-700 font-medium">
                  info@anondocityscapers.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={onSubmit}
          className="bg-white p-8 rounded-2xl shadow-sm border space-y-5"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Request a Property
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            className="w-full p-3 border rounded-lg outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            className="w-full p-3 border rounded-lg outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg outline-none"
          />

          {/* PROPERTY TYPE */}
          <div className="flex items-center border rounded-lg px-3">
            <FaHome className="text-primary" />
            <select
              name="property_type"
              className="w-full p-3 focus:outline-none"
              required
            >
              <option value="">Property Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>

          {/* BUDGET */}
          <div className="flex items-center border rounded-lg px-3">
            <FaDollarSign className="text-primary" />
            <select name="budget" className="w-full p-3 focus:outline-none">
              <option value="">Budget Range</option>
              <option>Below 50 Lakh</option>
              <option>50 Lakh - 1 Crore</option>
              <option>1 - 3 Crore</option>
              <option>Above 3 Crore</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Additional Details..."
            className="w-full p-3 h-28 border rounded-lg outline-none"
          />

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Request
          </button>

          {result && (
            <div
              className={`text-center p-3 rounded-lg ${
                success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {result}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
