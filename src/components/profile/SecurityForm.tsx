import { LockKeyhole } from "lucide-react";
import { motion } from "motion/react";

function SecurityForm() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="rounded-3xl border border-black/6 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
          <LockKeyhole size={18} />
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold tracking-tight text-neutral-950">
            Security
          </h2>

          <p className="mt-1 text-sm text-neutral-500">
            Manage your account password.
          </p>
        </div>
      </div>

      <form className="mt-8 space-y-5">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-neutral-700">
            Current password
          </span>

          <input
            type="password"
            placeholder="Enter current password"
            className="w-full rounded-xl border border-black/8 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-neutral-700">
              New password
            </span>

            <input
              type="password"
              placeholder="Enter new password"
              className="w-full rounded-xl border border-black/8 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-neutral-700">
              Confirm password
            </span>

            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full rounded-xl border border-black/8 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
            />
          </label>
        </div>

        <div className="flex justify-end border-t border-black/5 pt-5">
          <button
            type="submit"
            className="rounded-xl border border-black/8 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-50 active:translate-y-0"
          >
            Update password
          </button>
        </div>
      </form>
    </motion.section>
  );
}

export default SecurityForm;
