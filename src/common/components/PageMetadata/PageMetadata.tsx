import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { env } from "src/common/environment";
import { defaultProps, PageMetadataProps } from "./PageMetadata.props";

const PageMetadata: FC<PageMetadataProps> = (props: PageMetadataProps) => {
  const { title, description, robots, withTitlePostfix } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Helmet prioritizeSeoTags>
      <title>
        {`${title}`} {withTitlePostfix ? `| ${env.title}` : ""}
      </title>
      {description && <meta name="description" content={description} />}
      {robots?.length && <meta name="robots" content={robots.join(",")} />}
    </Helmet>
  );
};

export default PageMetadata;
