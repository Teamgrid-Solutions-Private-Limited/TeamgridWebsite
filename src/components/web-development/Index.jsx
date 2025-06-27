import React from "react";
import WebDevelopment from "./WebDevelopment";
import WebDevelopmentMadeEasy from "./WebDevelopmentMadeEasy";
import { Box } from "@mui/material";
import DevelopmentTypes from "./DevelopmentTypes";
import WhyChooseTeamgrid from "./WhyChooseTeamgrid";

function Index() {
  return (
    <Box>
      <WebDevelopment />
      <WebDevelopmentMadeEasy />
      <DevelopmentTypes />
      <WhyChooseTeamgrid />
    </Box>
  );
}

export default Index;