import { CodeBlock } from "common/components/CodeBlock";
import { CodeProps } from "react-markdown/lib/ast-to-react";

const codeMapper = (codeProps: CodeProps) => {
  const { children } = codeProps;

  return <CodeBlock>{children}</CodeBlock>;
};

export default codeMapper;
