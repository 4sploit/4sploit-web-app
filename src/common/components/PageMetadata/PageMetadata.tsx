import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { env } from "config";
import { defaultProps, PageMetadataProps } from "./PageMetadata.props";

const PageMetadata: FC<PageMetadataProps> = ({
  title,
  description,
  robots,
  withAppTitle,
}) => {
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

PageMetadata.defaultProps = defaultProps;

export default PageMetadata;
