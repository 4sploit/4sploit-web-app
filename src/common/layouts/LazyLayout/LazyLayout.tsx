import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { defaultProps, LazyLayoutProps } from "./LazyLayout.props";

const LazyLayout: FC<LazyLayoutProps> = (props: LazyLayoutProps) => {
  const { loadingComponent } = { ...defaultProps, ...props };

  return (
    <Suspense fallback={loadingComponent}>
      <Outlet />
    </Suspense>
  );
};

export default LazyLayout;
