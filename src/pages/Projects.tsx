import { FolderKanban, Plus, Search, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";
import { ProjectTable } from "../components/projects";

function Projects() {
  return (
    <div className="relative mx-auto max-w-[1600px]">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <FolderKanban size={16} className="text-indigo-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                Workspace
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              Projects
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
              Keep track of your active work, deadlines, and project budgets.
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 active:translate-y-0"
          >
            <Plus size={17} />
            New project
          </button>
        </div>
      </motion.section>

      <section className="mt-10">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            <span className="font-semibold text-neutral-900">4</span> projects
          </p>

          <div className="flex gap-2">
            <div className="flex flex-1 items-center gap-2 rounded-xl border border-black/6 bg-white px-3 py-2.5 sm:w-56 sm:flex-none">
              <Search size={16} className="text-neutral-400" />

              <input
                type="search"
                placeholder="Search projects"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400"
                aria-label="Search projects"
              />
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-black/6 bg-white px-3 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
            >
              <SlidersHorizontal size={16} />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>

        <ProjectTable />
      </section>
    </div>
  );
}

export default Projects;
