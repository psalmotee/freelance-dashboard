import { motion } from "motion/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] lg:flex">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <Header />

        <motion.main
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="p-5 lg:p-8"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}

export default DashboardLayout;
