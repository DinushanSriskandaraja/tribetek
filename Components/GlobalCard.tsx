import { ReactNode } from "react";

export function GlassGlowCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-8 rounded-2xl bg-[#161616]/70 backdrop-blur-xl border border-[#2b2b2b] overflow-hidden transition-all duration-700  flex flex-col">
      {/* Glow background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] bg-[#ED4716] blur-[100px] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 items-start">
        <div className="p-4 rounded-xl mb-4 transition-transform duration-700 ">
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {description}
        </p>
      </div>

      {/* Border shimmer */}
      <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
    </div>
  );
}
