import { Icons } from "common/globals";
import { FC } from "react";
import { IconProps, defaultProps } from "./Icon.props";

const Icon: FC<IconProps> = ({ icon }) => {
  const IconComponent = Icons[icon];
  return <IconComponent className="icon" />;
};

Icon.defaultProps = defaultProps;

export default Icon;
