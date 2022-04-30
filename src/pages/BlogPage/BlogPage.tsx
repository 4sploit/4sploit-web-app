import { FC } from "react";
import { withPageMetadata } from "src/common/hocs";
import { metadata } from "./BlogPage.metadata";
import { BlogPageProps, defaultProps } from "./BlogPage.props";
import { StyledBlogPage } from "./BlogPage.style";

const BlogPage: FC<BlogPageProps> = (props: BlogPageProps) => {
  return <StyledBlogPage {...props}>BlogPage</StyledBlogPage>;
};

BlogPage.defaultProps = defaultProps;

export default withPageMetadata(BlogPage, metadata);
