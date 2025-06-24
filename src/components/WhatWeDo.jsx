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

// Import Funiro images from centralized file
import {
  funiroLanding3 as funiroMainImage,
  funiroLanding4 as funiroProductsImage,
} from "../images";

// Get service categories and content from data.json
const { serviceCategories, serviceContent: serviceContentData } = data.whatWeDo;

// Add images to the service content
const serviceContent = serviceContentData.map(service => ({
  ...service,
  image: funiroProductsImage,
  overlayImage: funiroMainImage
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
        overflow: "hidden", 
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Container
        maxWidth="1400px"
        sx={{
          px: { xs: 2.5, md: 4, lg: 8, xl: 0 },
          width: "1400px",
          overflow: "hidden"
        }}
      >
        {/* Heading and intro text */}
        <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: "800px" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "48px" },
              fontWeight: 700,
              mb: { xs: 1.5, md: 2 },
              color: "text.primary",
            }}
          >
            {data.whatWeDo.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", sm: "16px", md: "18px", lg: "20px" },
              lineHeight: 1.6,
              color: "text.secondary",
              mb: { xs: 2, md: 3 },
            }}
          >
            {data.whatWeDo.description}
          </Typography>
        </Box>

        {/* Main feature showcase - E-commerce */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            background: "linear-gradient(180deg, #E1ECF7 0%, #E2E9F0 103.33%)",
            mb: 3,
            height: { xs: "auto", md: 585 },
            minHeight: { xs: 700, sm: 585 },
            position: "relative",
          }}
        >
          <Box sx={{
            transition: "transform 0.5s ease",
            transform: `translateX(-${index * 100}%)`,
            display: 'flex',
            height:'100%'
          }}>
            {serviceContent.map((item, i) => (
              <Grid container width={'100%'} key={i} minWidth={'100%'} spacing={3} height={'100%'}>
                {/* Left side - text content */}
                <Grid size={{ xs: 12, md: 6 }} display={"flex"} justifyContent={'center'} flexDirection={"column"} p={{xs:2.5,md:4,lg:5,xl:6}}>
                  <Typography variant="h4"
                    sx={{
                      fontSize: { xs: "22px", sm: "24px", md: "28px" },
                      fontWeight: 600,
                      mb: { xs: 1.5, md: 2 },
                      color: "#140E13",
                    }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "16px", sm: "16px", md: "18px" },
                      color: "#000000",
                      lineHeight: 1.6,
                      mb: { xs: 2, md: 3 },
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box>
                    <Button
                      variant="text"
                      endIcon={<ArrowRightAltIcon />}
                      sx={{
                        color: "black",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "16px",
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

                    <Box sx={{ display: "flex", mt: { xs: 3, md: 5 }, mb: 2 }}>
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
                          sx={{ fontSize: { xs: 18, sm: 20 }, color: "#0b3c7b" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: { xs: 45, sm: 56 },
                          height: { xs: 45, sm: 56 },
                          borderRadius: "50%",
                          bgcolor: "#edf1f7",
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
                <Grid
                  size={{ xs: 12, md: 6 }}
                  position={"relative"}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '3%',
                      top: '3%',
                      width:'50%',
                      zIndex: 20
                    }}
                    component="img"
                    src={item.image}
                    alt="Funiro products showcase"
                    loading="lazy"
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '40%',
                      width:'50%',
                      top: '0px',
                      zIndex: 10
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
                borderRadius: 2,
                width: "95%",
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
                  minHeight: "80px",
                  gap: "2px",

                  // Special styles for small screens
                  "@media (max-width: 600px)": {
                    gap: "4px",
                    "& > div": {
                      width: "calc(33.33% - 4px)",
                      position: "relative",
                      "&:not(:nth-of-type(3n))::after": {
                        content: '""',
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        height: "70%",
                        width: "1px",
                        backgroundColor: "#DDDDDD",
                        zIndex: 1,
                      },
                      "&:hover::after, &:nth-of-type(1)::after": {
                        opacity: 0,
                      },
                      "&:nth-of-type(-n+3)": {
                        borderBottom: "1px solid #DDDDDD",
                        marginBottom: "2px",
                        paddingBottom: "8px",
                      },
                      "&:nth-of-type(n+4)": {
                        marginTop: "2px",
                        paddingTop: "8px",
                      },
                    },
                  },

                  // Styles for medium screens and up
                  "@media (min-width: 601px)": {
                    flexWrap: "nowrap",
                    gap: "3px",
                    "& > div": {
                      flex: "1 1 calc(16.66% - 3px)",
                      "&:not(:last-child)::after": {
                        content: '""',
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        height: "40%",
                        width: "1px",
                        backgroundColor: "#DDDDDD",
                        zIndex: 1,
                      },
                      "&:hover::after, &:nth-of-type(1)::after": {
                        opacity: 0,
                      },
                    },
                  },
                }}
              >
                {serviceCategories.map((service, idx) => (
                  <Box
                    key={service.id}
                    onClick={() => setIndex(idx)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: { xs: "3px", sm: "0 8px" },
                      textAlign: "center",
                      position: "relative",
                      cursor: "pointer",
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      backgroundColor: index === idx ? "#0b3c7b" : "transparent",
                      zIndex: 2,
                      "&:hover": {
                        backgroundColor: "#0b3c7b",
                        "& .service-text": {
                          color: "white",
                        },
                        "& .service-description": {
                          color: "rgba(255,255,255,0.9)",
                        },
                        "&::after": {
                          opacity: 0,
                        },
                      },
                    }}
                  >
                    <Typography
                      className="service-text"
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                        color: index === idx ? "white" : "text.primary",
                        fontSize: { xs: "16px", sm: "16px", md: "18px" },
                        transition: "color 0.3s ease",
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      className="service-description"
                      variant="body2"
                      sx={{
                        fontSize: { xs: "16px", sm: "16px", md: "16px" },
                        color: index === idx ? "rgba(255,255,255,0.9)" : "text.secondary",
                        lineHeight: 1.2,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {service.description}
                    </Typography>
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
