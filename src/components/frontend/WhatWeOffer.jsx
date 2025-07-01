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
} from "../../images";

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
      icon: figmaIcon,
      color: "#0D3C7E",
    },
    {
      title: "Responsive Web Design",
      description: "Optimized layouts for mobile, tablet, and desktop.",
      icon: designIcon,
      color: "#F7F9FC",
    },
    {
      title: "React Component Development",
      description: "Reusable, maintainable modern React components.",
      icon: reactIcon,
      color: "#0D3C7E",
    },
    {
      title: "API-Driven Integration Service",
      description: "Seamless UI integration with RESTful or headless APIs.",
      icon: documentationIcon,
      color: "#F7F9FC",
    },
    {
      title: "Performance Optimisation",
      description: "Fast-loading, efficient front-end experiences.",
      icon: javascriptIcon,
      color: "#0D3C7E",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Consistent appearance across Chrome, Firefox, Safari, Edge.",
      icon: htmlIcon,
      color: "#F7F9FC",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container
        maxWidth="1248px"
        sx={{
          display: "flex",
          flexDirection: "column",
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
                fontSize: fontClamp(36),
                fontWeight: 700,
                mb: 3,
                color: "#222222",
              }}
            >
              What We Offer
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: fontClamp(20),
                fontWeight: 600,
                mb: 3,
                color: "#222222",
                lineHeight: 1.4,
              }}
            >
              Pixel-Perfect Front-End Development, Aligned with Your Designs and
              Deadlines
            </Typography>

            <Typography
              sx={{
                fontSize: fontClamp(16),
                mb: 4,
                color: "#555555",
                lineHeight: 1.6,
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
                bgcolor: "#0D3C7E",
                color: "white",
                borderRadius: "4px",
                py: 1.5,
                px: 3,
                textTransform: "none",
                fontSize: fontClamp(16),
                fontWeight: 500,
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
          <Grid item size={{ xs: 12, md: 7 }}>
            <Grid container spacing={3}>
              {services.map((service, index) => {
                const isActive =
                  hoveredCard === index || selectedCard === index;
                return (
                  <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                    <Card
                      elevation={0}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => setSelectedCard(index)}
                      sx={{
                        bgcolor: isActive ? "#0D3C7E" : "#F7F9FC",
                        color: isActive ? "white" : "#333333",
                        height: "100%",
                        borderRadius: 2,
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
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              bgcolor: isActive
                                ? "rgba(255,255,255,0.1)"
                                : "rgba(13,60,126,0.1)",
                              borderRadius: "50%",
                              p: 1.5,
                              mr: 2,
                              width: 48,
                              height: 48,
                            }}
                          >
                            <Box
                              component="img"
                              src={service.icon}
                              alt={service.title}
                              sx={{
                                width: 24,
                                height: 24,
                                filter: isActive ? "brightness(5)" : "none",
                              }}
                            />
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: fontClamp(18),
                              fontWeight: 600,
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Box>

                        <Typography
                          sx={{
                            fontSize: fontClamp(14),
                            color: isActive
                              ? "rgba(255,255,255,0.85)"
                              : "#555555",
                            lineHeight: 1.5,
                          }}
                        >
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhatWeOffer;
