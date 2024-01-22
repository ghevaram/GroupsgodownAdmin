import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import AllGroupsTable from "./components/Dashboard/Tables/AllGroupsTable.jsx";
import ReportedGroupsTable from "./components/Dashboard/Tables/ReportedGroupsTable.jsx";
import UnReportedTable from "./components/Dashboard/Tables/UnReportedTable.jsx";
import ActiveGroupsTable from "./components/Dashboard/Tables/ActiveGroupsTable.jsx";
import ReportedGroups from "./components/ReportedGroups/ReportedGroups.jsx";
import AddModifyApplication from "./components/AdminSettings/AddModifyApplication.jsx";
import AddModifyCategory from "./components/AdminSettings/AddModifyCategory.jsx";
import AddRemoveGroup from "./components/AdminSettings/AddRemoveGroup.jsx";
import GroupReporting from "./components/AdminSettings/GroupReporting.jsx";
import MakeAdmin from "./components/AdminSettings/MakeAdmin.jsx";
import PinGroup from "./components/AdminSettings/PinGroup.jsx";
import Reports from "./components/Reports/Reports.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<Login />} />
      <Route path="" element={<Layout />}>
        <Route path="" element={<Dashboard />}>
          <Route path="" element={<AllGroupsTable />} />
          <Route path="reportedgroupstable" element={<ReportedGroupsTable />} />
          <Route path="unreportedtable" element={<UnReportedTable />} />
          <Route path="activegroupstable" element={<ActiveGroupsTable />} />
        </Route>
        <Route path="reported" element={<ReportedGroups />} />
        <Route path="addremovegroups" element={<AddRemoveGroup />} />
        <Route path="addmodifycategory" element={<AddModifyCategory />} />
        <Route path="addmodifyapptype" element={<AddModifyApplication />} />
        <Route path="pingroup" element={<PinGroup />} />
        <Route path="groupreporting" element={<GroupReporting />} />
        <Route path="makeadmin" element={<MakeAdmin />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
