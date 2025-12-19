import { Target } from "lucide-react";

export default function GoalCard() {
  return (
    <div className="flex items-center gap-5 rounded-2xl border bg-[#161616]/70 border-[#2b2b2b] px-6 py-5 backdrop-blur-md">
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl  text-[#ED4716]">
        <Target size={52} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          Our goal is simple:
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Replace operational friction with clarity, automation, and control.
        </p>
      </div>
    </div>
  );
}
