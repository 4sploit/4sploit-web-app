import { FC, useEffect } from "react";
import { useAppDispatch } from "store";
import { setMetadata } from "features/PageMetadata";
import { Metadata } from "common/types";

export const withPageMetadata = <P,>(
  WrappedComponent: React.ComponentType<P>,
  metadata: Metadata
) => {
  const WrapperComponent: FC<P> = (props: P) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(setMetadata(metadata));
    });

    return <WrappedComponent {...props} />;
  };

  return WrapperComponent;
};
