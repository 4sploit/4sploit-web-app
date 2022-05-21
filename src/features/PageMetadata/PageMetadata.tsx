import { FC } from "react";
// eslint-disable-next-line max-len
import { PageMetadata as PageMetadataComponent } from "common/components";
import { useAppSelector } from "store";

const PageMetadata: FC = () => {
  const metadata = useAppSelector((state) => state.pageMetadata.metadata);

  return <PageMetadataComponent {...metadata} />;
};

export default PageMetadata;
