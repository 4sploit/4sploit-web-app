import { Metadata, Robots } from "src/common/types";

export type PageMetadataProps = Metadata & AdditionalProps;

export interface AdditionalProps {
  withAppTitle?: boolean;
}

export const defaultProps: Partial<PageMetadataProps> = {
  robots: [Robots.Index, Robots.Follow],
  withAppTitle: true,
};
