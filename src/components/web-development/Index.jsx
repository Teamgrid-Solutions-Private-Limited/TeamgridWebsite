import React from "react";
import WebDevelopment from "./WebDevelopment";
import WebDevelopmentMadeEasy from "./WebDevelopmentMadeEasy";
import { Box } from "@mui/material";
import DevelopmentTypes from "./DevelopmentTypes";
import WhyChooseTeamgrid from "./WhyChooseTeamgrid";
import ContactUs from "./ContactUS"; // Adjust the import path as necessary

function Index() {
  return (
    <Box>
      <WebDevelopment />
      <WebDevelopmentMadeEasy />
      <DevelopmentTypes />
      <WhyChooseTeamgrid />
      <ContactUs />
    </Box>
  );
}

export default Index;