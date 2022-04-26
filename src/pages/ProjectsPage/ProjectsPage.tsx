import { FC } from "react";
import { ProjectsPageProps, defaultProps } from "./ProjectsPage.props";
import { StyledProjectsPage } from "./ProjectsPage.style";
import { PageMetadata } from "src/common/components";
import { metadata } from "./ProjectsPage.metadata";

const ProjectsPage: FC<ProjectsPageProps> = (props: ProjectsPageProps) => {
  return (
    <>
      <PageMetadata {...metadata} />
      <StyledProjectsPage {...props}>ProjectsPage</StyledProjectsPage>
    </>
  );
};

ProjectsPage.defaultProps = defaultProps;

export default ProjectsPage;
