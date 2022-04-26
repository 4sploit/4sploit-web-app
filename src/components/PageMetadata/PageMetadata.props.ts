import { Robots } from "src/types";
import { Metadata } from "src/types/Metadata";

export type PageMetadataProps = Metadata & AdditionalProps;

export interface AdditionalProps {
  withTitlePostfix?: boolean;
}

export const defaultProps: Partial<PageMetadataProps> = {
  robots: [Robots.Index, Robots.Follow],
  withTitlePostfix: true,
};
