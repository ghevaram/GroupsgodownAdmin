import React from "react";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <AdminSidebar />
    </div>
  );
}

export default Layout;
