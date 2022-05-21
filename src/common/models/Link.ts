import { IconNames } from "common/globals";
import { Targets } from "common/constants";

interface Link {
  id: string;
  title: string;
  url: string;
  icon?: IconNames;
  target?: Targets;
  isExternal?: boolean;
}

export default Link;
