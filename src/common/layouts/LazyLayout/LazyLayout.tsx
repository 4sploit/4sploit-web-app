import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { defaultProps, LazyLayoutProps } from "./LazyLayout.props";

const LazyLayout: FC<LazyLayoutProps> = ({ loadingComponent }) => {
  return (
    <Suspense fallback={loadingComponent}>
      <Outlet />
    </Suspense>
  );
};

LazyLayout.defaultProps = defaultProps;

export default LazyLayout;
