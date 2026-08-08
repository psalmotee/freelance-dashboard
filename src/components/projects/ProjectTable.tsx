import { ArrowUpRight, CalendarDays } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../../data";
import ProjectStatusBadge from "./ProjectStatusBadge";

function ProjectTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-black/[0.05]">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Project
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Client
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Status
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Deadline
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Budget
              </th>

              <th className="px-6 py-4" />
            </tr>
          </thead>

          <tbody>
            {projects.map((project, index) => (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.06,
                }}
                className="group border-b border-black/[0.05] last:border-b-0"
              >
                <td className="px-6 py-5">
                  <p className="font-display text-sm font-semibold text-neutral-900">
                    {project.name}
                  </p>
                </td>

                <td className="px-6 py-5 text-sm text-neutral-500">
                  {project.client}
                </td>

                <td className="px-6 py-5">
                  <ProjectStatusBadge status={project.status} />
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <CalendarDays size={15} />
                    {project.deadline}
                  </div>
                </td>

                <td className="px-6 py-5 font-display text-sm font-semibold text-neutral-900">
                  ${project.budget.toLocaleString()}
                </td>

                <td className="px-6 py-5 text-right">
                  <button
                    type="button"
                    className="rounded-xl p-2 text-neutral-300 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-900"
                    aria-label={`View ${project.name}`}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-black/[0.05] md:hidden">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.06,
            }}
            className="p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-base font-semibold text-neutral-900">
                  {project.name}
                </h3>

                <p className="mt-1 text-sm text-neutral-500">
                  {project.client}
                </p>
              </div>

              <button
                type="button"
                className="rounded-xl p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900"
                aria-label={`View ${project.name}`}
              >
                <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <ProjectStatusBadge status={project.status} />

              <span className="font-display text-sm font-semibold text-neutral-900">
                ${project.budget.toLocaleString()}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
              <CalendarDays size={14} />
              Deadline: {project.deadline}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default ProjectTable;
