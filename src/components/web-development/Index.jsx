import React from "react";
import WebDevelopment from "./WebDevelopment";
import WebDevelopmentMadeEasy from "./WebDevelopmentMadeEasy";
import { Box } from "@mui/material";
import DevelopmentTypes from "./DevelopmentTypes";

function Index() {
  return (
    <Box>
      <WebDevelopment />
      <WebDevelopmentMadeEasy />
      <DevelopmentTypes />
    </Box>
  );
}

export default Index;