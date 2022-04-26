import { FC } from "react";
import { Outlet } from "react-router-dom";

const AppLayout: FC = () => {
  return (
    <>
      <div>header</div>
      <Outlet />
      <div>footer</div>
    </>
  );
};

export default AppLayout;
