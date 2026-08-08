import { Settings2 } from "lucide-react";
import { motion } from "motion/react";
import { ProfileForm, SecurityForm } from "../components/profile";

function Profile() {
  return (
    <div className="relative mx-auto max-w-[1100px]">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-10 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-neutral-950 text-white">
            <Settings2 size={19} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
              Account
            </p>

            <h1 className="font-display text-3xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-4xl">
              Profile settings
            </h1>
          </div>
        </div>
      </motion.section>

      <div className="space-y-6">
        <ProfileForm />
        <SecurityForm />
      </div>
    </div>
  );
}

export default Profile;
