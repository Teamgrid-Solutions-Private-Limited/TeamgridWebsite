import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import webDevelopmentImage from "../../assets/web-development.svg";

function WebDevelopment() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "#001C42",
        width: "100%",
        minHeight: "70vh",
        pt: { xs: 12, md: 16 },
        // pb: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="1200px"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          px: { xs: 2.5, md: 4, lg: 4, xl: 0 },
          maxWidth: "1200px",
          width: "100%",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          // gap: { xs: 4, md: 2 },
        }}
      >
        {/* Text Content */}
        <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: "56px",
              leadingTrim: "Cap height",
              lineHeight: "100%",
              letterSpacing: "0%",
              mb: 3,
            }}
          >
            <Box component="span" sx={{ color: "#FFFFFF" }}>
              Custom{" "}
            </Box>
            <Box component="span" sx={{ color: "#30ECAD" }}>
              Web Development{" "}
            </Box>
            <Box component="span" sx={{ color: "#FFFFFF" }}>
              Services
            </Box>
            <br />
            <Box component="span" sx={{ color: "#FFFFFF" }}>
              for Agencies
            </Box>
          </Typography>
          <Box sx={{ width: { xs: "100%", sm: "90%", md: "95%", lg: "85%" } }}>
            <Typography
              variant="body1"
              sx={{
                color: "#E1E0E0",
                fontFamily: "PayPal Open",
                fontWeight: 300,
                fontSize: "20px",
                lineHeight: "150%",
                letterSpacing: "0%",
                mb: 5,
              }}
            >
              Hire expert developers for your front-end, back-end, full-stack,
              or WordPress projects.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#007BFF",
                borderRadius: "39px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontFamily: "PayPal Open",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "#FFFFFF",
                boxShadow: "0 4px 10px rgba(0, 123, 255, 0.25)",
                "&:hover": { bgcolor: "#0069d9" },
                minWidth: { xs: "100%", sm: "auto" },
              }}
            >
              Schedule a Call
            </Button>

            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.3)",
                borderRadius: "39px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontFamily: "PayPal Open",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "#FFFFFF",
                "&:hover": { borderColor: "rgba(255,255,255,0.5)" },
                minWidth: { xs: "100%", sm: "auto" },
              }}
            >
              See Work
            </Button>
          </Box>
        </Box>

        {/* Image */}
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            maxWidth: { xs: "100%", md: "50%" },
            justifyContent: "flex-end",
            alignItems: "flex-end",
            // mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src={webDevelopmentImage}
            alt="Web Development Services"
            sx={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: "100%",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default WebDevelopment;
