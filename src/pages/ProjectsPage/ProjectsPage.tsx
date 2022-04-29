import { FC } from "react";
import { useAppDispatch } from "src/app/hooks";
import { setMetadata } from "src/features/PageMetadata/PageMetadata.slice";
import { metadata } from "./ProjectsPage.metadata";
import { ProjectsPageProps, defaultProps } from "./ProjectsPage.props";
import { StyledProjectsPage } from "./ProjectsPage.style";

const ProjectsPage: FC<ProjectsPageProps> = (props: ProjectsPageProps) => {
  const dispatch = useAppDispatch();
  dispatch(setMetadata(metadata));

  return <StyledProjectsPage {...props}>ProjectsPage</StyledProjectsPage>;
};

ProjectsPage.defaultProps = defaultProps;

export default ProjectsPage;
