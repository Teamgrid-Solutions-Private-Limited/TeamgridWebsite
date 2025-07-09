import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WestIcon from "@mui/icons-material/West";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import data from "../data.json";
import { fontClamp } from "../fontUtils";
import {
  rectangleImage1,
  rectangleImage2,
  rectangleImage3,
  rectangleImage4,
  group19Png,
  rectangleImage51,
  leftArrowIcon,
  rightArrowIcon,
} from "../images";

const cardImages = [
  rectangleImage1,
  rectangleImage2,
  rectangleImage3,
  rectangleImage4,
  group19Png,
  rectangleImage51,
];

function WhyTeamgrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { title, subtitle, buttonText, features } = data.whyTeamgrid;

  // Fill up to 6 cards (if features < 6, repeat last)
  const featuresToShow = [...features];
  while (featuresToShow.length < 6) {
    featuresToShow.push(featuresToShow[featuresToShow.length - 1]);
  }

  return (
    <Box
      component="section"
      sx={{
        my: { xs: 6, sm: 8, md: 12 },
        width: "100%",
        backgroundColor: "#fff",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header Row */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                fontSize: fontClamp(56),
                lineHeight: "100%",
                color: "#140E13",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: fontClamp(18),
                lineHeight: "150%",
                color: "#140E13",
                mt: 1,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
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
            >
              <WestIcon
                className={"left_icon"}
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
            >
              <WestIcon
                className={"right_icon"}
                sx={{
                  fontSize: { xs: 18, sm: 20 },
                  color: "#9d9e9e",

                  transform: "rotate(180deg)",
                }}
              />
            </Box>
          </Box>
        </Box>
        {/* Card Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {featuresToShow.slice(0, 6).map((feature, idx) => (
            <Grid
              item
              size={{ xs: 12, sm: 6, md: 4 }}
              key={idx}
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  background: "#F3F3F6",
                  borderRadius: "24px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "396px",
                  width: "384px",
                  boxShadow: "0 2px 8px 0 rgba(20,14,19,0.04)",
                }}
              >
                <Box
                  component="img"
                  src={cardImages[idx]}
                  alt={feature.title}
                  sx={{
                    width: "100%",
                    height: "207px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    // alignItems: "center",
                    p: 3.5,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      fontStyle: "Medium",
                      leadingTrim: "CAP_HEIGHT",
                      lineHeight: "120%",
                      letterSpacing: "0%",
                      fontSize: fontClamp(24),
                      color: "#05408E",
                      mb: 1,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 400,
                      fontStyle: "Regular",
                      leadingTrim: "CAP_HEIGHT",
                      lineHeight: "150%",
                      letterSpacing: "0%",
                      fontSize: fontClamp(16),
                      color: "#000000",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* Explore Services Button */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowRightAltIcon />}
            sx={{
              borderRadius: "39px",
              px: 5,
              py: 2,
              fontWeight: 400,
              fontSize: fontClamp(18),
              lineHeight: "150%",
              textTransform: "none",
              background: "#05408E",
              color: "#fff",
              boxShadow: "none",
              mt: 2,
              "&:hover": {
                background: "#032B5A",
              },
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default WhyTeamgrid;
