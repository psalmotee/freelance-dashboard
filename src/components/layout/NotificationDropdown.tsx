import { CheckCircle2, CircleDollarSign, FolderPlus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { activities } from "../../data";

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const activityIcons = {
  project: FolderPlus,
  payment: CircleDollarSign,
  task: CheckCircle2,
};

function NotificationDropdown({ isOpen, onClose }: NotificationDropdownProps) {
  const recentActivities = activities.slice(0, 3);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed left-4 right-4 top-20 z-50 overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:absolute sm:left-auto sm:right-0 sm:top-14 sm:w-90"
          >
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
              <div>
                <h2 className="font-display text-sm font-semibold text-neutral-950">
                  Notifications
                </h2>

                <p className="mt-0.5 text-xs text-neutral-400">
                  Your latest activity
                </p>
              </div>

              <span className="rounded-full bg-indigo-50 px-2 py-1 text-[10px] font-semibold text-indigo-600">
                3 new
              </span>
            </div>

            <div>
              {recentActivities.map((activity) => {
                const Icon = activityIcons[activity.type];

                return (
                  <button
                    key={activity.id}
                    type="button"
                    className="flex w-full gap-3 border-b border-black/5 px-5 py-4 text-left transition-colors hover:bg-neutral-50"
                    onClick={onClose}
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600">
                      <Icon size={16} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm leading-5 text-neutral-700">
                        {activity.message}
                      </p>

                      <p className="mt-1 text-xs text-neutral-400">
                        {activity.time}
                      </p>
                    </div>

                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-indigo-500" />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full px-5 py-3.5 text-center text-xs font-semibold text-indigo-600 transition-colors hover:bg-indigo-50/50"
            >
              View all activity
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default NotificationDropdown;
