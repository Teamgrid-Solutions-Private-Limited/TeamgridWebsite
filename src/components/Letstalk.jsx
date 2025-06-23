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
        background: `url(${backgroundImage}), #085BC8`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, sm: 8, md: 12 },
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <Container
        maxWidth="1400px"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2.5, md: 4, lg: 8, xl: 0 },
          width: "1400px" ,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent:  "flex-start" ,
          }}
        >
          <Box
            sx={{
              width: '68%',
              bgcolor: "#072449",
              borderRadius: { xs: 2, sm: 3 },
              p: { xs: 3, sm: 4, md: 5, lg: 7 },
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1, md: 1.25 },
              color: "white",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "48px" },
                lineHeight: 1.2,
                mb: { xs: 1.5, sm: 2, md: 2.5 },
              }}
            >
              Let's Build Together
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "24px" },
                fontWeight: 400,
                lineHeight: 1.5,
                color: "rgba(255, 255, 255, 0.7)",
                mb: { xs: 1.5, sm: 2, md: 2.5 },
              }}
            >
              — Efficiently, Flexibly, and Reliably
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", sm: "16px", md: "18px", lg: "20px" },
                fontWeight: 400,
                lineHeight: 1.5,
                opacity: 0.8,
                mb: { xs: 3, sm: 4, md: 5 },
              }}
            >
              Whether you're scaling a team or shipping a project, Teamgrid is
              your partner in dependable delivery.
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
                  bgcolor: "white",
                  color: "#122640",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                  borderRadius: "39px",
                  px: 5,
                  py: 2,
                  fontSize: "16px",
                  fontWeight: 400,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Let's Talk
              </Button>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FF5A2D",
                  "&:hover": {
                    bgcolor: "#e54b24",
                  },
                  borderRadius: "39px",
                  px: 5,
                  py: 2,
                  fontSize: "16px",
                  fontWeight: 400,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  width: { xs: "100%", sm: "auto" },
                  lineHeight: 1.1,
                  whiteSpace: { xs: "normal", sm: "nowrap" },
                }}
              >
                Request a Free Quote
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
