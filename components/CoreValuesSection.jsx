"use client";

import { FaGlobeAsia, FaHome, FaCogs } from "react-icons/fa";

export default function CoreValuesSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="flex justify-center mb-10">
        <h2 className="md:text-4xl text-3xl font-bold text-gray-900 border-b-2 border-primary inline-block pb-2">
          Our Core Values
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Vision Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-4 text-primary text-2xl">
            <FaGlobeAsia />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to become a pioneer in modern and sustainable real
            estate development, creating thriving communities that balance
            nature, innovation, and long-term value for generations to come.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-4 text-primary text-2xl">
            <FaHome />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to design and deliver future-proof residential spaces
            where people can live in comfort, security, and harmony. We focus on
            blending modern infrastructure with natural surroundings, ensuring
            affordability, sustainability, and a true sense of belonging.
          </p>
        </div>

        {/* Process Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-4 text-primary text-2xl">
            <FaCogs />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Process</h3>
          <p className="text-gray-600 leading-relaxed">
            We follow a reliable process that starts with careful planning and
            sustainable development. By combining modern technology with
            eco-friendly practices, we ensure timely delivery and lasting
            quality. Our aftercare support builds long-term trust and
            satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
