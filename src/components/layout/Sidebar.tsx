import { CircleUserRound, FolderKanban, LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationItems = [
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
    icon: CircleUserRound,
  },
];

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-black/5 bg-white lg:flex">
      <div className="flex min-h-screen w-full flex-col p-5">
        <div className="mb-10">
          <span className="font-display text-xl font-bold tracking-tight">
            FreelanceFlow
          </span>
        </div>

        <nav className="space-y-1" aria-label="Main navigation">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    "group flex items-center gap-3 rounded-xl px-4 py-3",
                    "text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-black text-white shadow-sm"
                      : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />

                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-black/5 pt-5">
          <p className="px-4 text-xs font-medium uppercase tracking-wider text-neutral-400">
            FreelanceFlow
          </p>

          <p className="mt-2 px-4 text-xs leading-relaxed text-neutral-400">
            Manage your freelance work in one place.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
