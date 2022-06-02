import { FC } from "react";
import { CodeBlockProps, defaultProps } from "./CodeBlock.props";
import { StyledCodeBlock } from "./CodeBlock.style";

const CodeBlock: FC<CodeBlockProps> = ({ children }) => {
  return <StyledCodeBlock>{children}</StyledCodeBlock>;
};

CodeBlock.defaultProps = defaultProps;

export default CodeBlock;
