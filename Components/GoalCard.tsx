import { Target } from "lucide-react";

export default function GoalCard() {
  return (
    <div className="card-elite flex items-center gap-8 group">
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--c-black)] text-white group-hover:bg-[var(--c-accent)] transition-colors duration-300">
        <Target size={32} />
      </div>

      {/* Content */}
      <div>
        <div className="text-[10px] font-black text-[var(--c-accent)] uppercase tracking-[0.3em] mb-2">
          Mission.01
        </div>
        <h3 className="text-xl font-black text-[var(--c-black)] tracking-tight mb-1">
          Our goal is simple:
        </h3>
        <p className="text-[var(--c-muted)] font-medium leading-relaxed">
          Replace operational friction with clarity, automation, and control.
        </p>
      </div>
    </div>
  );
}
