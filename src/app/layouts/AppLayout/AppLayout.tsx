import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <>
      <div>header</div>
      <Outlet />
      <div>footer</div>
    </>
  );
};

export default AppLayout;
