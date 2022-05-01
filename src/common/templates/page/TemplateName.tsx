import { FC } from "react";
import { TemplateNameProps, defaultProps } from "./TemplateName.props";
import { StyledTemplateName } from "./TemplateName.style";

const TemplateName: FC<TemplateNameProps> = (props: TemplateNameProps) => {
  return (
    <>
      <StyledTemplateName {...props}>TemplateName</StyledTemplateName>
    </>
  );
};

TemplateName.defaultProps = defaultProps;

export default TemplateName;
