import { FolderKanban, LayoutDashboard, Settings2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    label: "Overview",
    href: "/overview",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: Settings2,
  },
];

interface SidebarProps {
  onNavigate?: () => void;
}

function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-black/5 bg-white">
      <div className="flex h-20 items-center border-b border-black/5 px-6">
        <div>
          <span className="font-display text-xl font-bold tracking-tight text-neutral-950">
            FreelanceFlow
          </span>

          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Workspace
          </p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
          Menu
        </p>

        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onNavigate}
                className={({ isActive }) =>
                  [
                    "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-neutral-950 text-white shadow-sm"
                      : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={18} strokeWidth={isActive ? 2 : 1.8} />

                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-black/5 p-4">
        <div className="rounded-2xl bg-neutral-50 p-4">
          <p className="text-xs font-semibold text-neutral-900">
            Pro workspace
          </p>

          <p className="mt-1 text-xs leading-5 text-neutral-500">
            You&apos;re making great progress this month.
          </p>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-200">
            <div className="h-full w-[78%] rounded-full bg-neutral-950" />
          </div>

          <p className="mt-2 text-[10px] font-medium text-neutral-400">
            78% of monthly goal
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
