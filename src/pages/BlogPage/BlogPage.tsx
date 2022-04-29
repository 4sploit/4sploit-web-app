import { FC } from "react";
import { useAppDispatch } from "src/app/hooks";
import { setMetadata } from "src/features/PageMetadata/PageMetadata.slice";
import { metadata } from "./BlogPage.metadata";
import { BlogPageProps, defaultProps } from "./BlogPage.props";
import { StyledBlogPage } from "./BlogPage.style";

const BlogPage: FC<BlogPageProps> = (props: BlogPageProps) => {
  const dispatch = useAppDispatch();
  dispatch(setMetadata(metadata));

  return <StyledBlogPage {...props}>BlogPage</StyledBlogPage>;
};

BlogPage.defaultProps = defaultProps;

export default BlogPage;
