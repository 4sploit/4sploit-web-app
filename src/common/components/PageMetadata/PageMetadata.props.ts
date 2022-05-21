import { Robots } from "common/constants";
import { Metadata } from "common/types";

export type PageMetadataProps = Metadata;

export const defaultProps: Partial<PageMetadataProps> = {
  robots: [Robots.Index, Robots.Follow],
};
