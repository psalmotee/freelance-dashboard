import { UserRound } from "lucide-react";
import { motion } from "motion/react";

function ProfileForm() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-black/6 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <UserRound size={18} />
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold tracking-tight text-neutral-950">
            Personal information
          </h2>

          <p className="mt-1 text-sm text-neutral-500">
            Update the information associated with your freelance profile.
          </p>
        </div>
      </div>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-neutral-700">
              Full name
            </span>

            <input
              type="text"
              defaultValue="Samson Moradeyo"
              className="w-full rounded-xl border border-black/8 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-neutral-700">
              Email address
            </span>

            <input
              type="email"
              defaultValue="samson@example.com"
              className="w-full rounded-xl border border-black/8 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
            />
          </label>
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-neutral-700">
            Professional role
          </span>

          <input
            type="text"
            defaultValue="Freelance Designer"
            className="w-full rounded-xl border border-black/8 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
          />
        </label>

        <div className="flex justify-end border-t border-black/5 pt-5">
          <button
            type="submit"
            className="rounded-xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 active:translate-y-0"
          >
            Save changes
          </button>
        </div>
      </form>
    </motion.section>
  );
}

export default ProfileForm;
