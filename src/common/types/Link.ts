import { Link } from "react-router-dom";
import { IconNames } from "../styles";
import Targets from "./Targets";

interface Link {
  id: string;
  title: string;
  url: string;
  icon?: IconNames;
  target?: Targets;
}

export default Link;
