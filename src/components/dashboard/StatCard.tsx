import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  description: string;
  delay?: number;
}

function StatCard({
  label,
  value,
  change,
  description,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ y: -4 }}
      className="group rounded-3xl border border-black/6 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-medium text-neutral-500">{label}</p>

        <ArrowUpRight
          size={18}
          className="text-neutral-300 transition-colors duration-300 group-hover:text-indigo-500"
        />
      </div>

      <div className="mt-6">
        <p className="font-display text-3xl font-semibold tracking-tight text-neutral-950">
          {value}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
            {change}
          </span>

          <span className="text-xs text-neutral-400">{description}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default StatCard;
