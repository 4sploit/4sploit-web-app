import { Metadata, Robots } from "common/types";

export type PageMetadataProps = Metadata;

export const defaultProps: Partial<PageMetadataProps> = {
  robots: [Robots.Index, Robots.Follow],
};
