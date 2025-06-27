import React from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import webDevMadeEasyImage from "../../assets/web-debelopment-made-easy.svg";

function WebDevelopmentMadeEasy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#FFFFFF",
        width: "100%",
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
          gap: { xs: 6, md: 4 },
        }}
      >
        {/* Left side - Text content */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography
            variant="h2"
            sx={{
              color: "#0D1317",
              fontSize: { xs: "32px", sm: "36px", md: "42px", lg: "48px" },
              fontWeight: 700,
              mb: 4,
              lineHeight: 1.1,
            }}
          >
            Web
            <br />
            Development
            <br />
            Made Easy
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#262F36",
              fontSize: { xs: "16px", md: "18px" },
              mb: 3,
              lineHeight: 1.6,
            }}
          >
            At Teamgrid, we help digital and web agencies deliver
            high-performing websites and web applications—without the cost and
            hassle of expanding in-house teams. Whether you need a single
            developer or a complete team, we provide vetted talent skilled in
            modern frameworks and tools.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#262F36",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.6,
            }}
          >
            We specialize in the{" "}
            <Box component="span" sx={{ fontWeight: 600 }}>
              MERN stack, custom WordPress development, and agile development
              practices
            </Box>
            —ensuring scalable, maintainable, and secure web solutions.
          </Typography>
        </Box>

        {/* Right side - Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={webDevMadeEasyImage}
            alt="Web Development Made Easy"
            sx={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default WebDevelopmentMadeEasy;
