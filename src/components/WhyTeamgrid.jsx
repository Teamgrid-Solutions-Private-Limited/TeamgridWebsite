import React from "react";
import { Box, Typography, Button, Container, Grid, Stack } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { rectangleImage51, vectorIcon } from "../images";
import data from "../data.json";

// Global style constants
const FONT_FAMILY = "PayPal Open, sans-serif";
const TITLE_FONT_SIZE = {
  xs: "20px",
  sm: "24px",
  md: "30px",
  lg: "40px",
  xl: "56px",
};
const SUBTITLE_FONT_SIZE = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
};
const BUTTON_STYLE = {
  borderRadius: "39px",
  height: { xs: "40px", md: "59px" },
  px: { xs: 2, md: 4 },
  borderColor: "rgba(202, 202, 202, 1)",
  fontFamily: FONT_FAMILY,
  fontSize: { xs: "13px", sm: "15px", md: "18px" },
  color: "#140E13",
  alignSelf: { xs: "flex-end", md: "flex-end" },
  mr: { xs: 0, md: 0 },
  "&:hover": {
    backgroundColor: "primary.main",
    color: "white",
    borderColor: "primary.main",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
};
const IMAGE_STYLE = {
  width: { xs: "100%", sm: "100%", md: "100%" },
  maxWidth: { xs: "100%", sm: "100%", md: "100%" },
  height: "auto",
  maxHeight: {
    xs: "120px",
    sm: "180px",
    md: "250px",
    lg: "350px",
    xl: "522px",
  },
  objectFit: "cover",
  borderRadius: 2,
  boxShadow: { xs: 1, md: 3 },
  mx: 0,
  display: "block",
};
const FEATURE_TITLE_FONT_SIZE = {
  xs: "11.5px",
  sm: "13.5px",
  md: "15px",
  lg: "16px",
  xl: "18px",
};
const FEATURE_DESC_FONT_SIZE = {
  xs: "10.5px",
  sm: "12.5px",
  md: "14px",
  lg: "15px",
  xl: "16px",
};

function WhyTeamgrid() {
  const { title, subtitle, buttonText, features } = data.whyTeamgrid;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 10 },
        mt: { xs: 0, sm: 0, md: 0 },
        fontFamily: "PayPal Open, sans-serif",
        ml: { xs: 0, sm: "8px", md: "32px" },
        mr: { xs: 0, sm: "8px", md: "32px" },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 0.5, sm: 2, md: 4 } }}>
        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                mb: { xs: 2, md: 3 },
                textAlign: { xs: "left", md: "left" },
              }}
            >
              <Typography
                variant="h2"
                color="text.primary"
                gutterBottom
                sx={{
                  fontSize: TITLE_FONT_SIZE,
                  fontWeight: 520,
                  fontFamily: FONT_FAMILY,
                  wordBreak: "break-word",
                  textAlign: { xs: "left", md: "left" },
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  maxWidth: { xs: "100%", md: "954px" },
                  fontFamily: FONT_FAMILY,
                  fontSize: SUBTITLE_FONT_SIZE,
                  textAlign: { xs: "left", md: "left" },
                  mx: 0,
                }}
              >
                {subtitle}
              </Typography>
            </Box>
            <Box
              component="img"
              src={rectangleImage51}
              alt="Team collaboration"
              sx={IMAGE_STYLE}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            lg={6}
            sx={{
              pl: { xs: 2, md: 4 }, // Add left padding for small screens
              pr: { xs: 0, md: 4 },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: { xs: "center", md: "flex-end" },
              mt: { xs: 3, md: 0 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                mb: { xs: 3, md: 4 },
                pl: { xs: 0, md: 0 }, // Ensure no double padding
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowRightAltIcon sx={{ color: "#140E13" }} />}
                sx={BUTTON_STYLE}
              >
                {buttonText}
              </Button>
            </Box>
            <Stack
              spacing={6} // Increased spacing for more gap between feature boxes
              sx={{
                width: "100%",
                maxWidth: { xs: "95%", sm: "500px", md: "486px" },
                minHeight: { xs: "auto", md: "538px" },
                display: "flex",
                flexDirection: "column",
                fontFamily: "PayPal Open, sans-serif",
                alignItems: "flex-start", // Always left align content
                mt: { xs: 2, md: 6 },
                pl: { xs: 0, md: 0 }, // Ensure no double padding
              }}
            >
              {features.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                    width: "100%",
                    flexWrap: "nowrap",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    component="img"
                    src={vectorIcon}
                    alt="Check icon"
                    sx={{
                      width: "18px",
                      height: "9px",
                      position: "relative",
                      top: "8px",
                      left: "3px",
                      borderWidth: "2px",
                      mt: 0.5,
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="h3"
                      color="primary.main"
                      gutterBottom
                      sx={{
                        fontWeight: 500,
                        fontSize: FEATURE_TITLE_FONT_SIZE,
                        lineHeight: 1.2,
                        letterSpacing: "0%",
                        fontFamily: FONT_FAMILY,
                        textAlign: { xs: "left", md: "left" },
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        mb: 0.5,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400,
                        fontSize: FEATURE_DESC_FONT_SIZE,
                        lineHeight: 1.5,
                        letterSpacing: "0%",
                        color: "#140E13",
                        textAlign: { xs: "left", md: "left" },
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        mb: 0,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyTeamgrid;
