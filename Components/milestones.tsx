"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function MilestonesPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container rounded-4xl mx-auto py-10 px-6 sm:p-16  bg-white shadow-lg border border-gray-100 transition-all duration-300">
      <section
        ref={ref}
        className=" rounded-4xl  text-center space-y-8"
      >
        <h1 className="text-4xl font-bold text-gray-900">Our Milestones</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Every step we’ve taken has been guided by passion, persistence, and
          our commitment to building meaningful digital solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <div>
            <p className="text-7xl font-bold text-[#ED4716]">
              {inView ? <CountUp end={9} duration={2} /> : 0}+
            </p>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          <div>
            <p className="text-7xl font-bold text-[#ED4716]">
              {inView ? <CountUp end={5} duration={2} /> : 0}+
            </p>
            <p className="text-gray-600">Industries Served</p>
          </div>
          <div>
            <p className="text-7xl font-bold text-[#ED4716]">
              {inView ? <CountUp end={3} duration={2} /> : 0}+
            </p>
            <p className="text-gray-600">Years in Tech</p>
          </div>
        </div>
      </section>
    </div>
  );
}
