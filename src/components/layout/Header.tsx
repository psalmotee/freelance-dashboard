import { Bell, Menu, Search } from "lucide-react";
import { useState } from "react";
import NotificationDropdown from "./NotificationDropdown";

function Header() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-black/5 bg-white/80 px-5 backdrop-blur-xl lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-xl p-2.5 text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-950 lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>

        <div className="hidden items-center gap-2 rounded-xl border border-black/5 bg-neutral-50 px-3 py-2 md:flex">
          <Search size={16} className="text-neutral-400" />

          <input
            type="search"
            placeholder="Search..."
            className="w-40 bg-transparent text-sm outline-none placeholder:text-neutral-400"
            aria-label="Search dashboard"
          />

          <kbd className="rounded-md border border-black/5 bg-white px-1.5 py-0.5 text-[10px] text-neutral-400">
            /
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative">
          <button
            type="button"
            onClick={() => setNotificationsOpen((current) => !current)}
            className="relative rounded-xl p-2.5 text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-950"
            aria-label="Notifications"
            aria-expanded={notificationsOpen}
            aria-haspopup="true"
          >
            <Bell size={19} />

            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-indigo-500 ring-2 ring-white" />
          </button>

          <NotificationDropdown
            isOpen={notificationsOpen}
            onClose={() => setNotificationsOpen(false)}
          />
        </div>

        <div className="ml-1 h-8 w-px bg-black/5" />

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-neutral-900">
              Samson Moradeyo
            </p>

            <p className="text-xs text-neutral-500">Freelance Designer</p>
          </div>

          <div className="flex size-10 items-center justify-center rounded-full bg-black font-display text-sm font-semibold text-white">
            SM
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
