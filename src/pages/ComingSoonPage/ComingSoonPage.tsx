import { FC } from "react";
import { ComingSoonPageProps, defaultProps } from "./ComingSoonPage.props";
import { StyledComingSoonPage } from "./ComingSoonPage.style";
import { PageMetadata } from "src/components";
import { metadata } from "./ComingSoonPage.metadata";
import { Box } from "@mui/material";
import endlessConstellation from "\
./../../resources/images/endless-constellation.svg";

const ComingSoonPage: FC<ComingSoonPageProps> = (
  props: ComingSoonPageProps
) => {
  return (
    <>
      <PageMetadata {...metadata} withTitlePostfix={false} />
      <StyledComingSoonPage {...props}>
        <Box
          display={"flex"}
          sx={{
            backgroundImage: `url(${endlessConstellation})`,
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}>
          <Box
            sx={{
              fontSize: "5vh",
              color: "white",
              fontWeight: "bold",
            }}>
            Coming Soon
          </Box>
        </Box>
      </StyledComingSoonPage>
    </>
  );
};

ComingSoonPage.defaultProps = defaultProps;

export default ComingSoonPage;
