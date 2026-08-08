import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ActivityList, EarningsChart, StatCard } from "../components/dashboard";

function Overview() {
  return (
    <div className="relative mx-auto max-w-[1600px]">
      <div className="pointer-events-none absolute -right-20 -top-24 -z-0 size-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative z-10"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-indigo-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                Overview
              </span>
            </div>

            <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              Good morning.
              <br />
              <span className="font-accent font-normal italic">
                Let&apos;s make progress.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
              Here&apos;s a quick look at your freelance business, projects, and
              earnings this month.
            </p>
          </div>

          <button
            type="button"
            className="w-fit rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 active:translate-y-0"
          >
            Export report
          </button>
        </div>
      </motion.section>

      <section className="relative z-10 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Projects"
          value="24"
          change="+12.4%"
          description="vs last month"
          delay={0.1}
        />

        <StatCard
          label="Total Earnings"
          value="$18,450"
          change="+8.2%"
          description="vs last month"
          delay={0.15}
        />

        <StatCard
          label="Tasks Due"
          value="12"
          change="4 today"
          description="need attention"
          delay={0.2}
        />

        <StatCard
          label="Completed"
          value="18"
          change="+14.1%"
          description="this month"
          delay={0.25}
        />
      </section>

      <section className="relative z-10 mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]">
        <EarningsChart />
        <ActivityList />
      </section>
    </div>
  );
}

export default Overview;
