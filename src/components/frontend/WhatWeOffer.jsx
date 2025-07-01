import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fontClamp } from "../../fontUtils";
import {
  reactIcon,
  figmaIcon,
  cssIcon,
  htmlIcon,
  javascriptIcon,
  muiIcon,
  typescriptIcon,
  bootstrapIcon,
  documentationIcon,
  designIcon,
  teamIcon,
} from "../../images";
import { HiOutlineUserGroup } from "react-icons/hi";

function WhatWeOffer() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(0); // Default select first card

  // Service card data
  const services = [
    {
      title: "Design-to-Code Conversion",
      description: "Pixel-perfect UI from Figma, Sketch, or PSD files.",
      icon: teamIcon,
      // color: "#0D3C7E",
    },
    {
      title: "Responsive Web Design",
      description: "Optimized layouts for mobile, tablet, and desktop.",
      icon: teamIcon,
      // color: "#F7F9FC",
    },
    {
      title: "React Component Development",
      description: "Reusable, maintainable modern React components.",
      icon: teamIcon,
      // color: "#0D3C7E",
    },
    {
      title: "API-Driven Integration Service",
      description: "Seamless UI integration with RESTful or headless APIs.",
      icon: teamIcon,
      // color: "#F7F9FC",
    },
    {
      title: "Performance Optimisation",
      description: "Fast-loading, efficient front-end experiences.",
      icon: teamIcon,
      // color: "#0D3C7E",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Consistent appearance across Chrome, Firefox, Safari, Edge.",
      icon: teamIcon,
      // color: "#F7F9FC",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container
        maxWidth="1248px"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          maxWidth: "1248px",
          width: "100%",
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Left Column - Text Content */}
          <Grid item size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                fontSize: fontClamp(56),
                leadingTrim: "Cap height",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#140E13",
                mb: 2,
              }}
            >
              What We Offer
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: fontClamp(18),
                lineHeight: "150%",
                letterSpacing: "0%",
                mb: 3,
                color: "#000000",
              }}
            >
              Pixel-Perfect Front-End Development, Aligned with Your Designs and
              Deadlines
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: "0%",
                mb: 4,
                color: "#000000",
              }}
            >
              We help web and digital agencies deliver high-quality user
              interfaces that are responsive, accessible, and fast. Whether
              you're building a simple landing page or a complex web app, our
              front-end developers work as an extension of your team to bring
              your vision to life.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#05408E",
                color: "#FAFAFA",
                py: 1.5,
                px: 3,
                textTransform: "none",
                fontWeight: 400,
                letterSpacing: "0%",
                fontSize: fontClamp(18),
                lineHeight: "150%",
                boxShadow: "0 4px 10px rgba(13, 60, 126, 0.25)",
                "&:hover": {
                  bgcolor: "#072758",
                  boxShadow: "0 6px 12px rgba(13, 60, 126, 0.35)",
                },
              }}
            >
              Explore Services
            </Button>
          </Grid>

          {/* Right Column - Service Cards */}
          <Grid item size={{ xs: 12, md: 7 }} width="100%">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 282px)",
                  sm:"repeat(2, 282px)",
                  md: "repeat(3, 282px)",
                }, // 3 fixed-width columns
                gridAutoRows: "auto",
                gap: 3, // 24px gap like your design
                justifyContent: { xs: "center", md: "flex-start" }, // center on mobile, left-align on md+
                overflow: "hidden",
              }}
            >
              {services.map((service, index) => {
                const isActive =
                  hoveredCard === index || selectedCard === index;
                return (
                  <Card
                    key={index}
                    elevation={0}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => setSelectedCard(index)}
                    sx={{
                      bgcolor: isActive ? "#05408E" : "#F3F3F6",
                      color: isActive ? "#FFFFFF" : "#05408E",
                      borderRadius: "24px",
                      cursor: "pointer",
                      transition:
                        "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 24px rgba(13, 60, 126, 0.25)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: isActive ? "#1777F6" : "#F3F3F6",
                          borderRadius: "14px",
                          p: 1.5,
                          mb: 2,
                          width: "64px",
                          height: "64px",
                        }}
                      >
                        <HiOutlineUserGroup
                          size={fontClamp(32)}
                          color={isActive ? "#FFFFFF" : "#05408E"}
                        />
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: fontClamp(20),
                          leadingTrim: "Cap height",
                          lineHeight: "120%",
                          letterSpacing: 0,
                          color: isActive ? "#FFFFFF" : "#05408E",
                          mb: 1,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: fontClamp(16),
                          lineHeight: "150%",
                          letterSpacing: 0,
                          color: isActive ? "#EBF4FF" : "#3E393E",
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhatWeOffer;
