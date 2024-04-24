import { FC } from "react";
import { withPageMetadata } from "common/hocs";
import { metadata } from "./BlogPage.metadata";
import { BlogPageProps, defaultProps } from "./BlogPage.props";
import { StyledBlogPage } from "./BlogPage.style";
import { Post } from "features/Post";

const BlogPage: FC<BlogPageProps> = (props: BlogPageProps) => {
  return (
    <StyledBlogPage {...props}>
      <Post name="test"></Post>
    </StyledBlogPage>
  );
};

BlogPage.defaultProps = defaultProps;

export default withPageMetadata(BlogPage, metadata);
