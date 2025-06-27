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
import { WebDevelopmentContactUsImage as backgroundImage } from "../../images";

function ContactUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: { xs: "auto", md: "70vh" },
        backgroundColor: "#001E43", // Dark blue background
      }}
    >
      {/* Left blue gradient */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { xs: "100%", md: "30%" },
          background: "#085BC8",
          zIndex: 1,
        }}
      />

      {/* Right side image */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: { xs: "0%", md: "70%" },
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Content container */}
      <Container
        maxWidth="1200px"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2.5, md: 4, lg: 4, xl: 0 },
          py: { xs: 6, md: 0 },
          height: "100%",
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
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
              width: "68%",
              bgcolor: "#072449",
              borderRadius: { xs: 2, sm: 3 },
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
                  fontSize: { xs: "32px", sm: "42px", md: "56px" },
                  leadingTrim: "Cap height",
                  lineHeight: "100%",
                  letterSpacing: 0,
                }}
              >
                Need a reliable web development partner?
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "#FAFAFA",
                }}
              >
                — Let’s talk about your next project or developer requirement.
              </Typography>
            </Box>

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
                  bgcolor: "#FFFFFF",
                  color: "#140E13",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                  borderRadius: "39px",
                  px: 5,
                  py: 2,
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Contact Us
              </Button>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FF4D00",
                  "&:hover": {
                    bgcolor: "#e54b24",
                  },
                  borderRadius: "39px",
                  px: 5,
                  py: 2,
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  width: { xs: "100%", sm: "auto" },
                  lineHeight: 1.1,
                  whiteSpace: { xs: "normal", sm: "nowrap" },
                  color: "#FFFFFF",
                }}
              >
                Schedule a Call
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
