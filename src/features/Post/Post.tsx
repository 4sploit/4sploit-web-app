import { FC, useEffect, useState } from "react";
import { PostProps, defaultProps } from "./Post.props";
import { StyledPost } from "./Post.style";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { ioContainer } from "config";
import PostApi from "./Post.api";
import { Types } from "config/ioc";
import { marked } from "marked";

const Post: FC<PostProps> = (props: PostProps) => {
  const [markdown, setMarkdown] = useState<string>();
  const postApi = ioContainer.get<PostApi>(Types.PostApi);

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await postApi.getPostData(props.name);

      if (response.isSuccess) {
        const result = await marked(response.data!);
        setMarkdown(result);
      }
    };

    fetchMarkdown();
  }, [postApi, props.name]);

  return (
    <StyledPost {...props}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
    </StyledPost>
  );
};

Post.defaultProps = defaultProps;

export default Post;
