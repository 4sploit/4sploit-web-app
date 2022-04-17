import { Box } from "@mui/material";
import { FC } from "react";
import endlessConstellation from "\
./../../resources/images/endless-constellation.svg";

interface UnderConstructionPageProps {}

const UnderConstructionPage: FC<UnderConstructionPageProps> = () => {
  return (
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
  );
};

export default UnderConstructionPage;
