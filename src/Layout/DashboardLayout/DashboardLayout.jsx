import { Outlet } from "react-router-dom";

import DashboardHeader from "../../Component/DashboardHeader";
import Sidebar from "../../Component/Sidebar";

function DashboardLayout() {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <DashboardHeader />

        <div className="p-6 bg-[#F3F1EC61]">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default DashboardLayout;