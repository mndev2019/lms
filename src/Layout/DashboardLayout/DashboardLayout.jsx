import { Outlet } from "react-router-dom";
import DashboardHeader from "../../Component/DashboardHeader";
import Sidebar from "../../Component/Sidebar";

function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar (Fixed) */}
      <div className="w-64 fixed left-0 top-0 h-full bg-white shadow">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">

        {/* Header (Fixed Top) */}
        <div className="fixed top-0 left-64 right-0 z-50 bg-white shadow">
          <DashboardHeader />
        </div>

        {/* Page Content (Scrollable) */}
        <div className="mt-16 p-6 bg-[#F3F1EC61] overflow-y-auto h-screen">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default DashboardLayout;