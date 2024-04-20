import { FC } from "react";
// eslint-disable-next-line max-len
import { PageMetadata as PageMetadataComponent } from "common/components";
import { useTypedSelector } from "store";

const PageMetadata: FC = () => {
  const metadata = useTypedSelector(
    (state) => state.pageMetadata.metadata,
  );

  return <PageMetadataComponent {...metadata} />;
};

export default PageMetadata;
