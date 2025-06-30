import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  rectangleImage1 as Rectangle40,
  rectangleImage2 as Rectangle41,
  rectangleImage3 as Rectangle45,
  rectangleImage4 as Rectangle46,
} from "../images";
import data from "../data.json";

// Get WhoWeHelp data from data.json
const { title, subtitle, description, buttonText } = data.whoWeHelp;

// Replace image URLs with local assets
const image1 = Rectangle40;
const image2 = Rectangle41;
const image3 = Rectangle45;
const image4 = Rectangle46;

// Define component using named function
const WhoWeHelp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        bgcolor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Container
        maxWidth="1248pxx"
        sx={{
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          width: "100%",
          maxWidth: "1248px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container sx={{ width: "100%" }} spacing={3}>
          {/* Left Column - Text and Button */}
          <Grid size={{ xs: 12, md: 6 }} alignItems={"center"} display={"flex"}>
            <Box
              sx={{
                width: "95%",
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.5, sm: 2, md: 3 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "32px", sm: "45px", md: "56px" },
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: 0,
                    color: "#140E13",
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "150%",
                    letterSpacing: 0,
                    color: "#000000",
                  }}
                >
                  {subtitle}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "#000000",
                  mb: { xs: 0.5, sm: 1, md: 2 },
                }}
              >
                {description}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowRightAltIcon />}
                sx={{
                  borderRadius: "39px",
                  px: 5,
                  py: 2,
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "#FAFAFA",
                  boxShadow: "none",
                  alignSelf: "flex-start",
                }}
              >
                {buttonText}
              </Button>
            </Box>
          </Grid>

          {/* Right Column - Staggered Image Layout */}
          <Grid
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            gap={3}
            justifyContent={{ xs: "flex-start", md: "flex-end" }}
          >
            {/* Left Column Images */}
            <Box
              marginTop={"80px"}
              gap={3}
              display={"flex"}
              flexDirection={"column"}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  src={image1}
                  alt="Team member"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    maxWidth: "272px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  src={image3}
                  alt="Team member"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    maxWidth: "272px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Box>

            {/* Right Column Images */}
            <Box gap={3} display={"flex"} flexDirection={"column"}>
              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  src={image2}
                  alt="Team member"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    maxWidth: "272px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  src={image4}
                  alt="Team member"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    maxWidth: "272px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Export the component
export default WhoWeHelp;
