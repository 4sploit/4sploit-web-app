import { IconNames } from "common/globals";
import Link from "common/models/Link";

interface HeaderData {
  logo: IconNames;
  links?: Link[];
}

export default HeaderData;
