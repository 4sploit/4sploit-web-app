/* eslint-disable max-len */
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownProps, defaultProps } from "./Markdown.props";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import {
  codeMapper,
  imageMapper,
} from "common/components/Markdown/mappers";

const MarkdownComponents: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  img: imageMapper,
  code: codeMapper,
};

const Markdown: FC<MarkdownProps> = ({ content }) => {
  return (
    <ReactMarkdown components={MarkdownComponents}>
      {content}
    </ReactMarkdown>
  );
};

Markdown.defaultProps = defaultProps;

export default Markdown;
