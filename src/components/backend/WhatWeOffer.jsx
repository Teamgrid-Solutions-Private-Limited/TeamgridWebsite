import React, { useRef, useState } from "react";
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
  whyPartnerWithUsImage,
  whiteTeamIcon,
} from "../../images";
import { HiOutlineUserGroup } from "react-icons/hi";
import WestIcon from "@mui/icons-material/West";
import data from "../../data.json";

const iconMap = {
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
  whyPartnerWithUsImage,
  whiteTeamIcon,
};

function WhatWeOffer() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(0); // Default select first card
  const scrollRef = useRef();

  // Get backend data from data.json
  const backendData = data.backend.whatWeOffer;
  const services = backendData.services.map((service) => ({
    ...service,
    icon: iconMap[service.icon],
  }));

  const handleScroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        my: { xs: 6, md: 8 },
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow:'visible'
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
          overflow:'visible'
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            overflow:'visible'
          }}
        >
          {/* Left Column - Text Content */}
          <Grid
            item
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
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
              {backendData.title}
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
              {backendData.subtitle}
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
              {backendData.description}
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#05408E",
                color: "#FAFAFA",
                px: 5,
                py: 2,
                borderRadius: "16px",
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
              {backendData.buttonText}
            </Button>
          </Grid>

          {/* Right Column - Service Cards */}
          <Grid item size={{ xs: 12, md: 7 }} width="100%">
            {/* Scrollable Container */}
            <Box
              sx={{
                width: "100%",
                overflow:'visible',
                scrollBehavior: "smooth",
                scrollbarWidth: "none", // Firefox
                "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari
              }}
              ref={scrollRef}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(1, 282px)",
                    sm:'repeat(2, 282px)',
                    md: "repeat(4, 282px)",
                  },
                  gridTemplateRows: { xs: "auto", md: "repeat(2, auto)" },
                  gap: 3,
                  justifyContent: "flex-start",
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
                          transform: "translateY(-2px)",
                          // boxShadow: "0 8px 24px rgba(13, 60, 126, 0.25)",
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
                            mb: 1,
                            width: "64px",
                            height: "64px",
                          }}
                        >
                          <Box
                            component="img"
                            src={
                              isActive ? whiteTeamIcon : whyPartnerWithUsImage
                            }
                            alt="icon"
                            sx={{ width: 32, height: 32 }}
                          />
                        </Box>

                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 500,
                            fontSize: fontClamp(20),
                            lineHeight: "120%",
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
            </Box>

            {/* Scroll Buttons */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
                alignItems: "center",
                mt: { xs: 3, md: 3 },
              }}
            >
              <Box
                sx={{
                  width: { xs: 45, sm: 56 },
                  height: { xs: 45, sm: 56 },
                  borderRadius: "50%",
                  bgcolor: "#f0f4f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1,
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#E3EBF2",
                    "& .left_icon": {
                      color: "#000000",
                    },
                  },
                }}
                onClick={() => handleScroll(-300)}
              >
                <WestIcon
                className={'left_icon'}
                  sx={{
                    fontSize: { xs: 18, sm: 20 },
                    color: "#9d9e9e",
                    
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: 45, sm: 56 },
                  height: { xs: 45, sm: 56 },
                  borderRadius: "50%",
                  bgcolor: "#f0f4f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1,
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#E3EBF2",
                    "& .right_icon": {
                      color: "#000000",
                    },
                  },
                }}
                onClick={() => handleScroll(300)}
              >
                <WestIcon
                className={'right_icon'}
                  sx={{
                    fontSize: { xs: 18, sm: 20 },
                    color: "#9d9e9e",
                   
                    transform: "rotate(180deg)",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhatWeOffer;
