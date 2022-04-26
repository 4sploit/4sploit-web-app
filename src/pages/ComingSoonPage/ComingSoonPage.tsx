import { FC } from "react";
import { ComingSoonPageProps, defaultProps } from "./ComingSoonPage.props";
import { StyledComingSoonPage } from "./ComingSoonPage.style";
import { PageMetadata } from "src/common/components";
import { metadata } from "./ComingSoonPage.metadata";
import { Box } from "@mui/material";
import endlessCon from "src/assets/images/endless-constellation.svg";

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
            backgroundImage: `url(${endlessCon})`,
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
