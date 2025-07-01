import React from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import webDevMadeEasyImage from "../../assets/web-debelopment-made-easy.svg";
import { fontClamp } from "../../fontUtils";

function WebDevelopmentMadeEasy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        my: { xs: 6, md: 8 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#FFFFFF",
        width: "100%",
      }}
    >
      <Container
        maxWidth="1248px"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          px: { xs: 2.5, md: 4, lg: 4, xl: 0 },
          maxWidth: "1248px",
          width: "100%",
          alignItems: "center",
          gap: { xs: 4, sm: 4, md: 6, lg: 6, xl: 10 },
        }}
      >
        {/* Left side - Text content */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "PayPal Open",
              fontWeight: 500,
              fontSize: fontClamp(56),
              leadingTrim: "Cap height",
              lineHeight: "100%",
              letterSpacing: "0%",
              mb: 4,
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
              fontFamily: "PayPal Open",
              fontWeight: 400,
              fontSize: fontClamp(16),
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#000000",
              mb: 3,
            }}
          >
            At{" "}
            <Typography
              variant="span"
              sx={{
                fontWeight: 700,
              }}
            >
              Teamgrid
            </Typography>
            , we help digital and web agencies deliver high-performing websites
            and web applications—without the cost and hassle of expanding
            in-house teams. Whether you need a single developer or a complete
            team, we provide vetted talent skilled in modern frameworks and
            tools.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "PayPal Open",
              fontWeight: 400,
              fontSize: fontClamp(16),
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#000000",
            }}
          >
            We specialize in the{" "}
            <Box
              component="span"
              sx={{
                fontFamily: "PayPal Open",
                fontWeight: 700,
                fontSize: fontClamp(16),
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
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
              borderRadius: "24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default WebDevelopmentMadeEasy;
