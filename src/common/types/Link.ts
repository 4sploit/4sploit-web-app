import { IconNames } from "common/globals";
import { Link } from "react-router-dom";

import Targets from "./Targets";

interface Link {
  id: string;
  title: string;
  url: string;
  icon?: IconNames;
  target?: Targets;
  isExternal?: boolean;
}

export default Link;
