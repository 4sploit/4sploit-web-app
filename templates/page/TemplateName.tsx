import { FC } from "react";
import { TemplateNameProps, defaultProps } from "./TemplateName.props";
import { StyledTemplateName } from "./TemplateName.style";
import { PageMetadata } from "src/common/components";
import { metadata } from "./TemplateName.metadata";

const TemplateName: FC<TemplateNameProps> = (props: TemplateNameProps) => {
  return (
    <>
      <PageMetadata {...metadata} />
      <StyledTemplateName {...props}>TemplateName</StyledTemplateName>
    </>
  );
};

TemplateName.defaultProps = defaultProps;

export default TemplateName;
