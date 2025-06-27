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
          px: { xs: 2.5, md: 4, lg: 8, xl: 0 },
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
              color: "#ffffff",
              fontSize: { xs: "32px", sm: "36px", md: "40px", lg: "48px" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            <Box component="span" sx={{ color: "#ffffff" }}>
              Custom{" "}
            </Box>
            <Box component="span" sx={{ color: "#00E5A1" }}>
              Web Development{" "}
            </Box>
            <Box component="span" sx={{ color: "#ffffff" }}>
              Services
            </Box>
            <br />
            <Box component="span" sx={{ color: "#ffffff" }}>
              for Agencies
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#E1E0E0",
              fontSize: { xs: "16px", md: "18px" },
              mb: 5,
              maxWidth: "480px",
              lineHeight: 1.6,
            }}
          >
            Hire expert developers for your front-end, back-end, full-stack, or
            WordPress projects.
          </Typography>

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
                fontSize: "16px",
                fontWeight: 500,
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
                fontSize: "16px",
                fontWeight: 500,
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
