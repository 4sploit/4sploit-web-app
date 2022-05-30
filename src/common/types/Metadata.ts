import { Robots } from "common/constants";

interface Metadata {
  title: string;
  description?: string;
  robots?: Robots[];
}

export default Metadata;
