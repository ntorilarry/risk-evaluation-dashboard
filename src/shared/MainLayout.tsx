import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className=" dark:bg-slate-900  h-screen bg-gray-100 ">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <div
        className={`transition-width duration-300 ${
          collapsed ? "lg:pl-0" : "lg:pl-[280px]"
        }`}
      >
        <Header
          setSidebarOpen={setSidebarOpen}
          collapsed={collapsed}
          setCollapsed={setSidebarCollapsed}
        />
        <main className="py-10 dark:bg-slate-900 bg-gray-100">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
