import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] lg:flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-40 bg-neutral-950/30 backdrop-blur-[2px] lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed inset-y-0 left-0 z-50 w-[min(280px,85vw)] lg:hidden"
            >
              <Sidebar onNavigate={closeMobileMenu} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="min-w-0 flex-1">
        <Header
          mobileMenuOpen={mobileMenuOpen}
          onMenuClick={() => setMobileMenuOpen(true)}
        />

        <motion.main
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="p-5 lg:p-8"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}

export default DashboardLayout;
