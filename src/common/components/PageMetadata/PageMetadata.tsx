import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { env } from "src/config";
import { defaultProps, PageMetadataProps } from "./PageMetadata.props";

const PageMetadata: FC<PageMetadataProps> = (props: PageMetadataProps) => {
  const { title, description, robots, withAppTitle } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Helmet prioritizeSeoTags>
      <title>
        {`${title}`} {withAppTitle ? `| ${env.title}` : ""}
      </title>
      {description && <meta name="description" content={description} />}
      {robots?.length && <meta name="robots" content={robots.join(",")} />}
    </Helmet>
  );
};

export default PageMetadata;
