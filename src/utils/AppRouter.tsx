import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../shared/MainLayout";
import Dashboard from "../pages/main/dashboard/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
