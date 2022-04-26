import { memo } from "react";
import { Helmet } from "react-helmet-async";
import { env } from "src/common/environment";
import { defaultProps, PageMetadataProps } from "./PageMetadata.props";

const PageMetadata = (props: PageMetadataProps) => {
  const { title, description, robots, withTitlePostfix } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Helmet>
      <title>
        {`${title}`} {withTitlePostfix ? `| ${env.title}` : ""}
      </title>
      {description && <meta name="description" content={description} />}
      {robots?.length && <meta name="robots" content={robots.join(",")} />}
    </Helmet>
  );
};

export default memo(PageMetadata);
