import React, { useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhoWeHelp from "./components/WhoWeHelp";
import WhatWeDo from "./components/WhatWeDo";
import WhyTeamgrid from "./components/WhyTeamgrid";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";
import Letstalk from "./components/Letstalk";
import Footer from "./components/Footer";
import Index from "./components/web-development/Index";
import Frontend from "./components/frontend/Index";
import Backend from './components/backend/Index'
import ContactUs from "./components/ContactUs";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Enable smooth scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // The MainPage component that contains all sections
  const MainPage = () => (
    <>
      <Home />
      <WhoWeHelp />
      <WhatWeDo />
      <WhyTeamgrid />
      <Technologies />
      <Testimonials />
      <Letstalk />
    </>
  );

  return (
    <BrowserRouter basename="/teamgrid">
      <Box
        sx={{
          overflowX: "hidden",
          // Mobile optimization
          "& > *": {
            maxWidth: "100vw",
          },
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/web-development" element={<Index />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend/>} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
