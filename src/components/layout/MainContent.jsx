import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Dashboard from "../dashboards/Dashboard";
import { Outlet } from "react-router-dom";

const MainContent = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen scroll-auto">
      <Header
        onLogout={onLogout}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      <div className="flex flex-1">
        <SideBar isSidebarOpen={isSidebarOpen} />

        <div
          className={`flex-1 p-4 bg-neutral-100 transition-all duration-300 `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
