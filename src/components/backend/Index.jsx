import React from "react";
import { Box } from "@mui/material";
import HomePage from "./HomePage";
import WhatWeOffer from "./WhatWeOffer";
import OurTechStack from "./OurTechStack";
import WhyPartnerWithUs from "./WhyPartnerWithUs";
import HowWeWork from "./HowWeWork";
import EngagementModels from "./EngagementModels";
import GotQuestions from "./GotQuestions";
import ContactUS from "./ContactUS";

function Index() {
  return (
    <Box>
      <HomePage />
      <WhatWeOffer />
      <OurTechStack />
      <WhyPartnerWithUs />
      <HowWeWork />
      <EngagementModels />
      <GotQuestions />
      <ContactUS/>
    </Box>
  );
}

export default Index;
