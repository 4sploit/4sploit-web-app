import { Robots } from "./Robots";

export interface Metadata {
  title: string;
  description?: string;
  robots?: Robots[];
  withAppTitle?: boolean;
}
