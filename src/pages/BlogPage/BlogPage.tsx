import { FC } from "react";
import { BlogPageProps, defaultProps } from "./BlogPage.props";
import { StyledBlogPage } from "./BlogPage.style";
import { PageMetadata } from "src/components";
import { metadata } from "./BlogPage.metadata";

const BlogPage: FC<BlogPageProps> = (props: BlogPageProps) => {
  return (
    <>
      <PageMetadata {...metadata} />
      <StyledBlogPage {...props}>BlogPage</StyledBlogPage>
    </>
  );
};

BlogPage.defaultProps = defaultProps;

export default BlogPage;
