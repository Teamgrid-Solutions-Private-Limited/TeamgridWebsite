import React, { useState } from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import from centralized images file
import { 
  shortLogo as teamgridLogo,
  reactIcon,
  bootstrapIcon, 
  wordpressIcon,
  figmaIcon,
  shopifyIcon,
  nodejsIcon,
  postgresqlIcon,
  postmanIcon,
  muiIcon
} from "../images";


function Home() {
  const [isPaused, setIsPaused] = useState(false);

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
          px: { xs: 2, md: 6, lg: 8, xl: 23 },
          mx: 0,
          width: "100%",
          maxWidth: "none",
        }}
      >
        <Box
          sx={{
            width: "60%",
            gap: 2,
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
            models that fit your workflow and goals.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            sx={{ mt: 1 }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#007BFF",
                borderRadius: "30px",
                px: 7,
                py: 1.5,
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                boxShadow: "0 4px 10px rgba(0, 123, 255, 0.25)",
                "&:hover": { bgcolor: "#0069d9" },
                height: "55px",
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
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                "&:hover": { borderColor: "rgba(255,255,255,0.5)" },
                height: "55px",
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
          top: "5%",
          right: 0,
          left: "84%",
          transform: "translateX(-50%)",
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
            width: "1150px",
            height: "1150px",
          }}
        >
          {/* Orbit paths - 4 concentric circles */}
          {[...Array(4)].map((_, index) => (
            <Box
              key={`orbit-${index}`}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width:
                  index === 0
                    ? `${623}px`
                    : index === 1
                    ? `${957}px`
                    : index === 2
                    ? `${1301}px`
                    : `${1645}px`,
                height:
                  index === 0
                    ? `${623}px`
                    : index === 1
                    ? `${957}px`
                    : index === 2
                    ? `${1301}px`
                    : `${1645}px`,
                borderRadius: "50%",
                border: "1px solid #FFFFFF",
                transform: "translate(-50%, -50%)",
                animation: `rotate${index + 1} ${
                  30 + index * 5
                }s linear infinite`,
                animationPlayState: isPaused ? "paused" : "running",
                cursor: "pointer",
                "@keyframes rotate1": {
                  "0%": {
                    transform: "translate(-50%, -50%) rotate(0deg)",
                  },
                  "100%": {
                    transform: "translate(-50%, -50%) rotate(360deg)",
                  },
                },
                "@keyframes rotate2": {
                  "0%": {
                    transform: "translate(-50%, -50%) rotate(0deg)",
                  },
                  "100%": {
                    transform: "translate(-50%, -50%) rotate(360deg)",
                  },
                },
                "@keyframes rotate3": {
                  "0%": {
                    transform: "translate(-50%, -50%) rotate(0deg)",
                  },
                  "100%": {
                    transform: "translate(-50%, -50%) rotate(360deg)",
                  },
                },
                "@keyframes rotate4": {
                  "0%": {
                    transform: "translate(-50%, -50%) rotate(0deg)",
                  },
                  "100%": {
                    transform: "translate(-50%, -50%) rotate(360deg)",
                  },
                },
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* White dots on the orbits */}
              {[...Array(8)].map((_, dotIndex) => {
                const angle = dotIndex * 45 * (Math.PI / 180);
                const radius =
                  index === 0
                    ? 311.5
                    : index === 1
                    ? 478.5
                    : index === 2
                    ? 650.5
                    : 822.5;

                return (
                  <Box
                    key={`dot-${index}-${dotIndex}`}
                    sx={{
                      position: "absolute",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      bgcolor: "#B2D2FC",
                      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                );
              })}

              {index === 0 && (
                <>
                  <TechIcon
                    name="React"
                    icon={reactIcon}
                    position="top"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                  <TechIcon
                    name="Node.js"
                    icon={nodejsIcon}
                    position="right"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                  <TechIcon
                    name="PostgreSQL"
                    icon={postgresqlIcon}
                    position="bottom"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                </>
              )}

              {index === 1 && (
                <>
                  <TechIcon
                    name="Figma"
                    icon={figmaIcon}
                    position="top"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                  <TechIcon
                    name="Bootstrap"
                    icon={bootstrapIcon}
                    position="right"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                  <TechIcon
                    name="MongoDB"
                    icon={mongoIcon}
                    position="left"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                </>
              )}

              {index === 2 && (
                <>
                  <TechIcon
                    name="WordPress"
                    icon={wordpressIcon}
                    position="topRight"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                  <TechIcon
                    name="Postman"
                    icon={postmanIcon}
                    position="bottom"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                  <TechIcon
                    name="WooCommerce"
                    icon={woo}
                    position="left"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                </>
              )}

              {index === 3 && (
                <>
                  <TechIcon
                    name="Shopify"
                    icon={shopifyIcon}
                    position="topRight"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                  <TechIcon
                    name="Material UI"
                    icon={muiIcon}
                    position="bottomRight"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                </>
              )}
            </Box>
          ))}

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
                animation: "ripple 4s infinite",
                animationPlayState: isPaused ? "paused" : "running",
                "@keyframes ripple": {
                  "0%": {
                    boxShadow: "0 0 0 0 rgba(75, 145, 241, 0.3)",
                  },
                  "70%": {
                    boxShadow: "0 0 0 20px rgba(75, 145, 241, 0)",
                  },
                  "100%": {
                    boxShadow: "0 0 0 0 rgba(75, 145, 241, 0)",
                  },
                },
              }}
            >
              <Box
                component="img"
                src={teamgridLogo}
                alt="Teamgrid logo"
                sx={{
                  width: "105.968px",
                  height: "143.162px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Tech icon component with positions on the orbit
function TechIcon({ name, icon, position, onMouseEnter, onMouseLeave }) {
  const getPosition = () => {
    switch (position) {
      case "top":
        return { top: "0%", left: "50%", transform: "translate(-50%, -50%)" };
      case "topRight":
        return { top: "15%", left: "85%", transform: "translate(-50%, -50%)" };
      case "right":
        return { top: "50%", left: "100%", transform: "translate(-50%, -50%)" };
      case "bottomRight":
        return { top: "85%", left: "85%", transform: "translate(-50%, -50%)" };
      case "bottom":
        return { top: "100%", left: "50%", transform: "translate(-50%, -50%)" };
      case "bottomLeft":
        return { top: "85%", left: "15%", transform: "translate(-50%, -50%)" };
      case "left":
        return { top: "50%", left: "0%", transform: "translate(-50%, -50%)" };
      case "topLeft":
        return { top: "15%", left: "15%", transform: "translate(-50%, -50%)" };
      default:
        return { top: "0%", left: "50%", transform: "translate(-50%, -50%)" };
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        ...getPosition(),
        zIndex: 5,
        cursor: "pointer",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Box
        sx={{
          width: "68px",
          height: "68px",
          borderRadius: "50%",
          bgcolor: "#0D264F",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 20px rgba(0, 123, 255, 0.2)",
          border: "1px solid #3B526F",
          "&:hover": {
            boxShadow: "0 0 30px rgba(0, 123, 255, 0.4)",
          },
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={name}
          sx={{
            width: "38px",
            height: "38px",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;
