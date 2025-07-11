import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { rectangleImage25 as backgroundImage } from "../images";
import data from "../data.json";
import { fontClamp } from "../fontUtils";

// Get letsTalk data from data.json
const { title, subtitle, description, buttons } = data.letsTalk;

function Letstalk() {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { xs: 6, sm: 8, md: 12 },
        py: { xs: 6, sm: 8, md: 12 },
        overflow: "hidden",
        position: "relative",
        width: "100%",
        backgroundColor: "#085BC8", // Fallback color while image loads
      }}
      loading="lazy"
    >
      <Container
        maxWidth="1248px"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          width: "100%",
          maxWidth: "1248px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "68%" },
              bgcolor: "#072449",
              borderRadius: 6,
              p: { xs: 3, sm: 4, md: 5, lg: 7 },
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1, sm: 2, md: 5 },
              color: "white",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  fontSize: fontClamp(56),
                  leadingTrim: "Cap height",
                  lineHeight: "100%",
                  letterSpacing: 0,
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  fontSize: fontClamp(18),
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "#FAFAFA",
                }}
              >
                {subtitle}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: fontClamp(20),
                lineHeight: "150%",
                letterSpacing: 0,
                color: "#FFFFFF",
              }}
            >
              {description}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 1.25 }}
              sx={{
                mt: { xs: 1, md: "auto" },
                width: "100%",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: buttons[0].color,
                  color: "#140E13",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                  borderRadius: "16px",
                  px: 5,
                  py: 2,
                  fontSize: fontClamp(18,{maxMultiplier:1.1}),
                  fontWeight: 400,
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                {buttons[0].text}
              </Button>

              <Button
                variant="contained"
                sx={{
                  bgcolor: buttons[1].color,
                  "&:hover": {
                    bgcolor: "#e54b24",
                  },
                  borderRadius: "16px",
                  px: 5,
                  py: 2,
                  fontSize: fontClamp(18,{maxMultiplier:1.1}),
                  fontWeight: 400,
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: { xs: "normal", sm: "nowrap" },
                  color: "#FFFFFF",
                }}
              >
                {buttons[1].text}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* Background overlay for better text contrast */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(8, 91, 200, 0.2)",
          zIndex: 1,
        }}
      />
    </Box>
  );
}

export default Letstalk;
