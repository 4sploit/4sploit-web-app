import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownProps, defaultProps } from "./Markdown.props";

const Markdown: FC<MarkdownProps> = ({ content }) => {
  // eslint-disable-next-line react/no-children-prop
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

Markdown.defaultProps = defaultProps;

export default Markdown;
