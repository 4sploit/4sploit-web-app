import { LoadingPage } from "pages";

export interface LazyLayoutProps {
  loadingComponent?: JSX.Element;
}

export const defaultProps: Partial<LazyLayoutProps> = {
  loadingComponent: <LoadingPage />,
};
