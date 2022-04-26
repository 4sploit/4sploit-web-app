import { Metadata, Robots } from "src/common/types";

export type PageMetadataProps = Metadata & AdditionalProps;

export interface AdditionalProps {
  withTitlePostfix?: boolean;
}

export const defaultProps: Partial<PageMetadataProps> = {
  robots: [Robots.Index, Robots.Follow],
  withTitlePostfix: true,
};
