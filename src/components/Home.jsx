import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import local assets
import teamgridLogo from "../assets/shortLogo.svg";
import reactIcon from "../assets/react-2.svg";
import bootstrapIcon from "../assets/bootstrap.svg";
import wordpressIcon from "../assets/wordPress.svg";
import figmaIcon from "../assets/figma-icon.svg";
import shopifyIcon from "../assets/shopify.svg";
import nodejsIcon from "../assets/nodejs-3.svg";
import postgresqlIcon from "../assets/postgresql.svg";
import postmanIcon from "../assets/postman.svg";
import muiIcon from "../assets/material-ui-1 1.svg";

function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#001C42",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          py: 10,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          px: { xs: 2, md: 6, lg: 8, xl: 15 },
          mx: 0,
          width: "100%",
          maxWidth: "none",
        }}
      >
        <Box
          sx={{
            width: "50%",
            gap: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "#E1E0E0", fontSize: "18px" }}
          >
            Powering growth through talent
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: "#ffffff",

              fontSize: { xs: "36px", sm: "48px", md: "64px" },
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Extend Your Team, <br />
            Accelerate Your Growth
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#E1E0E0",

              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "90%",
            }}
          >
            We helps agencies and startups scale smarter — with dedicated
            professionals, high-quality solutions, and flexible engagement{" "}
            {/* <Box component="span" sx={{ color: "#3C90FB" }}> */}
            models
            {/* </Box>{" "} */}
            that fit your workflow and goals.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#007BFF",
                borderRadius: "30px",
                px: 5,
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Let's Talk
            </Button>

            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.3)",
                borderRadius: "30px",
                px: 3,
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Explore Services
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Orbital system with tech icons */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "75%",
          height: "100%",
          zIndex: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* Orbital circles */}
        <Box
          sx={{
            position: "relative",
            width: "850px",
            height: "850px",
            mr: { xs: -4, md: -8 },
          }}
        >
          {/* Orbit paths - three concentric circles */}
          {[1, 2, 3].map((_, index) => (
            <Box
              key={`orbit-${index}`}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: `${480 + index * 200}px`,
                height: `${480 + index * 200}px`,
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* White dots on the orbit paths */}
          {[...Array(20)].map((_, index) => (
            <Box
              key={`dot-${index}`}
              sx={{
                position: "absolute",
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                bgcolor: "rgba(255, 255, 255, 0.8)",
                top: `${10 + Math.floor(Math.random() * 80)}%`,
                left: `${10 + Math.floor(Math.random() * 80)}%`,
              }}
            />
          ))}

          {/* Technology icons positioned like in the second image */}
          <TechIcon
            name="Figma"
            icon={figmaIcon}
            position={{ top: "8%", left: "50%" }}
            bgcolor="#0D264F"
          />
          <TechIcon
            name="Shopify"
            icon={shopifyIcon}
            position={{ top: "25%", left: "12%" }}
            bgcolor="#0D264F"
          />
          <TechIcon
            name="React"
            icon={reactIcon}
            position={{ top: "28%", right: "16%" }}
            bgcolor="#0D264F"
          />
          <TechIcon
            name="Material UI"
            icon={muiIcon}
            position={{ top: "15%", right: "20%" }}
            bgcolor="#0D264F"
          />
          <TechIcon
            name="Bootstrap"
            icon={bootstrapIcon}
            position={{ top: "68%", left: "20%" }}
            bgcolor="#0D264F"
          />
          <TechIcon
            name="WordPress"
            icon={wordpressIcon}
            position={{ top: "80%", left: "53%" }}
            bgcolor="#0D264F"
          />
          <TechIcon
            name="Postman"
            icon={postmanIcon}
            position={{ top: "62%", right: "12%" }}
            bgcolor="#0D264F"
          />
          <TechIcon
            name="Node.js"
            icon={nodejsIcon}
            position={{ top: "90%", left: "48%" }}
            bgcolor="#0D264F"
          />
          <TechIcon
            name="PostgreSQL"
            icon={postgresqlIcon}
            position={{ top: "45%", right: "8%" }}
            bgcolor="#0D264F"
          />

          {/* Main blue circle with logo in center */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            {/* Outer circle */}
            <Box
              sx={{
                position: "absolute",
                width: "491px",
                height: "491px",
                borderRadius: "50%",
                background: "#0A2B55",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
              }}
            />

            {/* Middle circle */}
            <Box
              sx={{
                position: "absolute",
                width: "373px",
                height: "373px",
                borderRadius: "50%",
                background: "#0B3161",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                zIndex: 2,
              }}
            />

            {/* Inner circle with logo */}
            <Box
              sx={{
                position: "absolute",
                width: "245px",
                height: "245px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#0F4285",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                zIndex: 3,
                boxShadow: "0 0 40px rgba(17, 105, 207, 0.3)",
              }}
            >
              <Box
                component="img"
                src={teamgridLogo}
                alt="Teamgrid logo"
                sx={{
                  width: "100px",
                  height: "auto",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Tech icon component with custom positioning
function TechIcon({ name, icon, position, bgcolor }) {
  return (
    <Box
      sx={{
        position: "absolute",
        ...position,
        zIndex: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          bgcolor: bgcolor || "rgba(13, 38, 79, 1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 20px rgba(0, 123, 255, 0.2)",
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={name}
          sx={{
            width: "28px",
            height: "28px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;
