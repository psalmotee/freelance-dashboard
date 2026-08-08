import { CheckCircle2, CircleDollarSign, FolderPlus } from "lucide-react";
import { motion } from "motion/react";
import { activities } from "../../data";

const activityIcons = {
  project: FolderPlus,
  payment: CircleDollarSign,
  task: CheckCircle2,
};

function ActivityList() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.4 }}
      className="rounded-3xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-500">Activity</p>

          <h2 className="mt-1 font-display text-xl font-semibold tracking-tight text-neutral-950">
            Recent updates
          </h2>
        </div>

        <button
          type="button"
          className="text-xs font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
        >
          View all
        </button>
      </div>

      <div className="mt-6 divide-y divide-black/[0.05]">
        {activities.map((activity) => {
          const Icon = activityIcons[activity.type];

          return (
            <div
              key={activity.id}
              className="flex gap-3 py-4 first:pt-0 last:pb-0"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600">
                <Icon size={17} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <p className="text-sm leading-5 text-neutral-700">
                  {activity.message}
                </p>

                <p className="mt-1 text-xs text-neutral-400">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default ActivityList;
