import React from "react";
import { Box } from "@mui/material";
import HomePage from "./HomePage";
import WhatWeOffer from "./WhatWeOffer";
import OurTechStack from "./OurTechStack";
import WhyPartnerWithUs from "./WhyPartnerWithUs";

function Index() {
  return (
    <Box>
      <HomePage />
      <WhatWeOffer />
      <OurTechStack />
      <WhyPartnerWithUs />
    </Box>
  );
}

export default Index;
