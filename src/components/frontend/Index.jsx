import React from "react";
import { Box } from "@mui/material";
import HomePage from "./HomePage";
import WhatWeOffer from "./WhatWeOffer";
import OurTechStack from "./OurTechStack";

function Index() {
  return (
    <Box>
      <HomePage />
      <WhatWeOffer />
      <OurTechStack />
    </Box>
  );
}

export default Index;
