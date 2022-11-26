import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="flex">
        <Sidebar></Sidebar>

        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
