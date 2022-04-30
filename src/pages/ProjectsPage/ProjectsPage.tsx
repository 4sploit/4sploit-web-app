import { FC } from "react";
import { withPageMetadata } from "src/common/hocs";
import { metadata } from "./ProjectsPage.metadata";
import { ProjectsPageProps, defaultProps } from "./ProjectsPage.props";
import { StyledProjectsPage } from "./ProjectsPage.style";

const ProjectsPage: FC<ProjectsPageProps> = (props: ProjectsPageProps) => {
  return <StyledProjectsPage {...props}>Projects Page</StyledProjectsPage>;
};

ProjectsPage.defaultProps = defaultProps;

export default withPageMetadata(ProjectsPage, metadata);
