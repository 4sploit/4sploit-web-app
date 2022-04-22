import { FC } from "react";
import { Props, defaultProps } from "./TemplateName.props";

const TemplateName: FC<Props> = (props: Props) => {
  return (
    <StyledTemplateName {...props}>
      TemplateName Component
    </StyledTemplateName>
  );
};

TemplateName.defaultProps = defaultProps;

export default TemplateName;
