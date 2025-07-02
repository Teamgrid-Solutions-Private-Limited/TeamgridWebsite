import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WestIcon from "@mui/icons-material/West";
import data from "../data.json";
import { fontClamp } from "../fontUtils";

// Import Funiro images from centralized file
import {
  funiroLanding3 as funiroMainImage,
  funiroLanding4 as funiroProductsImage,
} from "../images";

// Get service categories and content from data.json
const { serviceCategories, serviceContent: serviceContentData } = data.whatWeDo;

// Add images to the service content
const serviceContent = serviceContentData.map((service) => ({
  ...service,
  image: funiroProductsImage,
  overlayImage: funiroMainImage,
}));

function WhatWeDo() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex(index === 0 ? serviceContent.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === serviceContent.length - 1 ? 0 : index + 1);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        bgcolor: "#fff",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="1248px"
        sx={{
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          width: "100%",
          maxWidth: "1248px",
          overflow: "hidden",
        }}
      >
        {/* Heading and intro text */}
        <Box
          sx={{
            mb: { xs: 4, md: 5 },
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: fontClamp(56),
              fontWeight: 500,
              lineHeight: "100%",
              letterSpacing: 0,
              color: "#140E13",
            }}
          >
            {data.whatWeDo.title}
          </Typography>

          <Typography
            sx={{
              fontSize: fontClamp(18),
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: 0,
              color: "#000000",
            }}
          >
            {data.whatWeDo.description}
          </Typography>
        </Box>

        {/* Main feature showcase - E-commerce */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 6,
            overflow: "hidden",
            background: "linear-gradient(180deg, #E1ECF7 0%, #E2E9F0 103.33%)",
            mb: 3,
            height: {xs:"clamp(600px, 30.6vw, 1000px)",md:"clamp(600px, 40.6vw, 700px)"},
            position: "relative",
          }}
        >
          <Box
            sx={{
              transition: "transform 0.5s ease",
              transform: `translateX(-${index * 100}%)`,
              display: "flex",
              height: "100%",
            }}
          >
            {serviceContent.map((item, i) => (
              <Grid
                container
                width={"100%"}
                key={i}
                minWidth={"100%"}
                spacing={3}
                height={"auto"}
              >
                {/* Left side - text content */}
                <Grid
                  size={{ xs: 12, md: 6 }}
                  display={"flex"}
                  height={'auto'}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  p={{ xs: 2.5, md: 4, lg: 5, xl: 6 }}
                  gap={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Typography
                    sx={{
                      fontSize: fontClamp(40),
                      fontWeight: 500,
                      lineHeight: "100%",
                      letterSpacing: 0,
                      color: "#140E13",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: fontClamp(16),
                      fontWeight: 400,
                      lineHeight: "150%",
                      letterSpacing: 0,
                      color: "#000000",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box>
                    <Button
                      variant="text"
                      endIcon={<ArrowRightAltIcon />}
                      sx={{
                        color: "#000000",
                        textTransform: "none",
                        fontSize: fontClamp(16),
                        fontWeight: 500,
                        lineHeight: "100%",
                        letterSpacing: 0,
                        border: "1px solid rgba(168, 189, 211, 1)",
                        borderRadius: "39px",
                        px: 5,
                        py: 2,
                        width: "fit-content",
                        "&:hover": {
                          bgcolor: "transparent",
                          opacity: 0.8,
                        },
                      }}
                    >
                      {item.buttonText}
                    </Button>

                    <Box sx={{ display: "flex", mt: { xs: 3, md: 3 }, mb: 2 }}>
                      <Box
                        sx={{
                          width: { xs: 45, sm: 56 },
                          height: { xs: 45, sm: 56 },
                          borderRadius: "50%",
                          bgcolor: "#edf1f7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 1,
                          cursor: "pointer",
                        }}
                        onClick={handlePrev}
                      >
                        <WestIcon
                          sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: "#0b3c7b",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: { xs: 45, sm: 56 },
                          height: { xs: 45, sm: 56 },
                          borderRadius: "50%",
                          bgcolor: "#FFFFFFA6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                        onClick={handleNext}
                      >
                        <WestIcon
                          sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: "#0b3c7b",
                            transform: "rotate(180deg)",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Right side - image showcase */}
                <Grid size={{ xs: 12, md: 6 }} position={"relative"}>
                  <Box
                    sx={{
                      position: "absolute",
                      left: "3%",
                      top: "3%",
                      width: "50%",
                      zIndex: 20,
                    }}
                    component="img"
                    src={item.image}
                    alt="Funiro products showcase"
                    loading="lazy"
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      left: "40%",
                      width: "50%",
                      top: "0px",
                      zIndex: 10,
                    }}
                    component="img"
                    src={item.overlayImage}
                    alt="Funiro E-commerce showcase"
                    loading="lazy"
                  />
                </Grid>
              </Grid>
            ))}
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 10, md: 20 },
              left: 0,
              right: 0,
              zIndex: 100,
              width: "100%",
              padding: 0,
            }}
            display={"flex"}
            justifyContent={"center"}
          >
            {/* Services row with dividers using CSS flexbox wrapping */}
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255,1)",
                backdropFilter: "blur(156.89999389648438px)",
                borderRadius: 4,
                width: "auto",
                maxWidth:'98%',
                padding: { xs: "8px", sm: "8px" },
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  position: "relative",
                  // gap: { xs: "4px", sm: "3px" },
                  width: "100%",
                  // Special styles for small screens
                  // "@media (max-width: 600px)": {
                  //   gap: "4px",
                  // },
                  // // Styles for medium screens and up
                  // "@media (min-width: 601px)": {
                  //   gap: "3px",
                  // },
                }}
              >
                {serviceCategories.map((service, idx) => (
                  <Box
                    key={service.id}
                    sx={{
                      display: "flex",
                      alignItems: "stretch",
                      position: "relative",
                    }}
                  >
                    <Box
                      onClick={() => setIndex(idx)}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: { xs: "8px", md: "10px", lg: "14px" },
                        textAlign: "center",
                        position: "relative",
                        cursor: "pointer",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        backgroundColor: index === idx ? "#0b3c7b" : "transparent",
                        zIndex: 2,
                        gap: 1,
                        overflow: "visible",
                        '&:hover': {
                          backgroundColor: '#0b3c7b',
                          '& .service-text': {
                            color: 'white',
                          },
                          '& .service-description': {
                            color: '#9EAAB8',
                          },
                        },
                        // minWidth: { xs: '80px', sm: '100px', md: '120px' },
                        flex: '1 1 auto',
                      }}
                    >
                      <Typography
                        className="service-text"
                        variant="subtitle1"
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          lineHeight: "100%",
                          letterSpacing: 0,
                          color: index === idx ? "#FFFFFF" : "#072449",
                          transition: "color 0.3s ease",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {service.name}
                      </Typography>
                      <Typography
                        className="service-description"
                        variant="body2"
                        sx={{
                          fontSize: 14,
                          fontWeight: 400,
                          lineHeight: "100%",
                          letterSpacing: 0,
                          color: index === idx ? "#9EAAB8" : "#0724498C",
                          transition: "color 0.3s ease",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                    {/* Divider, except after last tab */}
                    {idx !== serviceCategories.length - 1 && (
                      <Box
                        sx={{
                          alignSelf: 'center',
                          height: '50%',
                          width: '1px',
                          backgroundColor: '#DDDDDD',
                          mx: { xs: '2px', sm: '4px', md: '6px' },
                          zIndex: 3,
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Service categories */}
      </Container>
    </Box>
  );
}

export default WhatWeDo;
