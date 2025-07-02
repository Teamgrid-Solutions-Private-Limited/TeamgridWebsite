import React from "react";
import { Box } from "@mui/material";
import HomePage from "./HomePage";
import WhatWeOffer from "./WhatWeOffer";
import OurTechStack from "./OurTechStack";
import WhyPartnerWithUs from "./WhyPartnerWithUs";
// import HowWeWork from "./HowWeWork";

function Index() {
  return (
    <Box>
      <HomePage />
      <WhatWeOffer />
      <OurTechStack />
      <WhyPartnerWithUs />
      {/* <HowWeWork /> */}
    </Box>
  );
}

export default Index;
