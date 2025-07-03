import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fontClamp } from "../../fontUtils";
import {
  reactIcon,
  wordpressIcon,
  muiIcon,
  javascriptIcon,
  typescriptIcon,
  cssIcon,
  htmlIcon,
  bootstrapIcon,
  teamgridLogo,
  figmaIcon,
} from "../../images";
import data from "../../data.json";

const iconMap = {
  reactIcon,
  wordpressIcon,
  muiIcon,
  javascriptIcon,
  typescriptIcon,
  cssIcon,
  htmlIcon,
  bootstrapIcon,
  figmaIcon,
};

function HomePage() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  const [isPaused, setIsPaused] = useState(false);
  const [orbitScale, setOrbitScale] = useState(1);
  const [orbitAngle, setOrbitAngle] = useState(0);

  // Get frontend data from data.json
  const frontendData = data.frontend.homePage;
  const techIcons = frontendData.techIcons.map((icon) => ({
    ...icon,
    icon: iconMap[icon.icon],
  }));

  // Get the current padding value in px
  let rightPadding = 0;
  if (isXl) rightPadding = 0;
  else if (isLg) rightPadding = parseInt(theme.spacing(8));
  else if (isMd) rightPadding = parseInt(theme.spacing(4));
  else if (isSm) rightPadding = parseInt(theme.spacing(2.5));
  else rightPadding = parseInt(theme.spacing(2.5));

  // Dynamically adjust orbit scale based on screen size
  useEffect(() => {
    const updateOrbitScale = () => {
      const scale = Math.max(
        0.5,
        Math.min((window.innerWidth / 1440) * 0.9, 1.2)
      );
      setOrbitScale(scale);
    };
    updateOrbitScale();
    window.addEventListener("resize", updateOrbitScale);
    return () => window.removeEventListener("resize", updateOrbitScale);
  }, []);

  // Animation for orbits
  useEffect(() => {
    if (isPaused) return;
    let frame;
    const animate = () => {
      setOrbitAngle((prev) => (prev + 0.2) % 360);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  // Responsive logo and ripple sizes
  const logoWidth = isXs
    ? 60
    : isSm
    ? 80
    : isMd
    ? 100
    : isLg
    ? 120
    : isXl
    ? 140
    : 105;
  const logoHeight = isXs
    ? 90
    : isSm
    ? 120
    : isMd
    ? 140
    : isLg
    ? 160
    : isXl
    ? 180
    : 160;
  const logoOffset = isXs
    ? 60
    : isSm
    ? 80
    : isMd
    ? 100
    : isLg
    ? 120
    : isXl
    ? 140
    : 122.5;
  const baseRadius = 280;
  const rippleDiameter = baseRadius * 2 * orbitScale;

  return (
    <Box
      sx={{
        bgcolor: "#072449",
        minHeight: "90vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="1248px"
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          maxWidth: "1248px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            py: { xs: 6, md: 8 },
            gap: 4,
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              zIndex: 10,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#ffffff",
                fontSize: fontClamp(56),
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 1,
              }}
            >
              {frontendData.heroTitle}
              <Box component="span" sx={{ display: "block", mt: 1 }}>
                {frontendData.heroSubtitle[0]}{" "}
                <Box component="span" sx={{ color: "#30ECAD" }}>
                  {frontendData.heroSubtitle[1]}
                </Box>
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                {frontendData.heroHighlight}
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#E1E0E0",
                fontSize: fontClamp(20),
                lineHeight: 1.6,
                my: 3,
                maxWidth: "100%",
              }}
            >
              {frontendData.description}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant={frontendData.buttons[0].variant}
                sx={{
                  bgcolor:
                    frontendData.buttons[0].variant === "contained"
                      ? "#007BFF"
                      : undefined,
                  borderRadius: "16px",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: fontClamp(18),
                  fontWeight: 500,
                  boxShadow: "0 4px 10px rgba(0, 123, 255, 0.25)",
                  "&:hover": { bgcolor: "#0069d9" },
                }}
              >
                {frontendData.buttons[0].text}
              </Button>
              <Button
                variant={frontendData.buttons[1].variant}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.3)",
                  borderRadius: "16px",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: fontClamp(18),
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                {frontendData.buttons[1].text}
              </Button>
            </Stack>
          </Box>

          {/* Orbital system with tech icons - only visible on md and up */}
          <Box
            sx={{
              position: "relative",
              left: "40%",
              transform: "translateX(-60%) translateY(90%)",
              width: { xs: "100%", md: "40%" },
              height: { xs: "auto", md: "500px" },
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Orbits with icons and dots */}
            {[
              { icons: techIcons.slice(0, 3), positions: 6 },
              { icons: techIcons.slice(3, 7), positions: 9 },
              { icons: techIcons.slice(4, 9), positions: 14 },
            ].map((orbit, orbitIdx) => {
              // Use a base radius and progressively increasing gap for each orbit
              const baseRadius = 350;
              const gapStart = 250;
              const gapInc = 18;
              let orbitRadius = baseRadius;
              for (let i = 1; i <= orbitIdx; i++) {
                orbitRadius += gapStart + (i - 1) * gapInc;
              }
              orbitRadius = orbitRadius * orbitScale;
              const animationName = `frontend-orbit-rotate-${orbitIdx}`;
              const duration = 500 + orbitIdx * 10;
              const direction = orbitIdx % 2 === 0 ? "normal" : "reverse";

              // Distribute icons at regular intervals, fill rest with dots
              const iconPositions = Array(orbit.positions).fill(null);
              const interval = Math.floor(orbit.positions / orbit.icons.length);
              let pos = 0;
              orbit.icons.forEach((icon, i) => {
                iconPositions[pos] = icon;
                pos = (pos + interval) % orbit.positions;
                while (
                  iconPositions[pos] &&
                  iconPositions.filter(Boolean).length < orbit.icons.length
                ) {
                  pos = (pos + 1) % orbit.positions;
                }
              });

              return (
                <Box
                  key={`orbit-parent-${orbitIdx}`}
                  sx={{
                    position: "absolute",
                    width: `${orbitRadius * 2}px`,
                    height: `${orbitRadius * 2}px`,
                    pointerEvents: "none",
                    zIndex: 2,
                    // transform: `rotate(${
                    //   orbitAngle * (orbitIdx % 2 === 0 ? 1 : -1)
                    // }deg)`,
                    transition: "transform 0.1s linear",
                    // animation: `${animationName} ${duration}s linear infinite`,
                    // animationDirection: direction,
                    // animationPlayState: isPaused ? "paused" : "running",
                    // [`@keyframes ${animationName}`]: {
                    //   "0%": { transform: "rotate(0deg)" },
                    //   "100%": { transform: "rotate(360deg)" },
                    // },
                  }}
                >
                  {/* Orbit border */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.15)",
                      zIndex: 1,
                    }}
                  />

                  {/* Icons and dots at positions */}
                  {iconPositions.map((icon, posIdx) => {
                    const angle = (360 / orbit.positions) * posIdx;
                    const radians = (angle * Math.PI) / 180;
                    const x = Math.cos(radians) * orbitRadius;
                    const y = Math.sin(radians) * orbitRadius;

                    if (icon) {
                      // Icon
                      return (
                        <Box
                          key={`icon-${orbitIdx}-${posIdx}`}
                          sx={{
                            position: "absolute",
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: `translate(-50%, -50%)`,
                            zIndex: 20,
                            pointerEvents: "auto",
                          }}
                          onMouseEnter={() => setIsPaused(true)}
                          onMouseLeave={() => setIsPaused(false)}
                        >
                          <Box
                            sx={{
                              width: `${180 * orbitScale}px`,
                              height: `${180 * orbitScale}px`,
                              borderRadius: "50%",
                              bgcolor: "#0D264F",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              boxShadow: "0 0 25px 0 rgba(0, 123, 255, 0.5)",
                              animation: "glowPulse 3s ease-in-out infinite",
                              "@keyframes glowPulse": {
                                "0%": {
                                  boxShadow: "0 0 0px 0 rgba(0, 123, 255, 0.0)",
                                },
                                "50%": {
                                  boxShadow:
                                    "0 0 25px 0 rgba(0, 123, 255, 0.5)",
                                },
                                "100%": {
                                  boxShadow: "0 0 0px 0 rgba(0, 123, 255, 0.0)",
                                },
                              },
                              border: "1px solid #3B526F",
                              transition: "transform 0.3s ease-in-out",
                              "&:hover": {
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={icon.icon}
                              alt={icon.name}
                              loading="lazy"
                              sx={{
                                width: `${130 * orbitScale}px`,
                                height: `${130 * orbitScale}px`,
                                objectFit: "contain",
                                transition: "transform 0.2s ease-in-out",
                                "&:hover": {
                                  transform: "scale(1.1)",
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      );
                    } else {
                      // Dot
                      return (
                        <Box
                          key={`dot-${orbitIdx}-${posIdx}`}
                          sx={{
                            position: "absolute",
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: "translate(-50%, -50%)",
                            width: { xs: "6px", sm: "8px", md: "8px" },
                            height: { xs: "6px", sm: "8px", md: "8px" },
                            borderRadius: "50%",
                            bgcolor: "#B2D2FC",
                            pointerEvents: "none",
                            zIndex: 5,
                          }}
                        />
                      );
                    }
                  })}
                </Box>
              );
            })}

            {/* React logo in center */}
            <Box
              sx={{
                position: "relative",
                width: `${logoOffset * 2}px`,
                height: `${logoOffset * 2}px`,
                borderRadius: "50%",
                // bgcolor: "#0F4285",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                // boxShadow: "0 0 40px rgba(0, 123, 255, 0.5)",
              }}
            >
              {/* <Box
                component="img"
                src={teamgridLogo}
                alt="React"
                sx={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  animation: "pulse 4s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%": { opacity: 0.8 },
                    "50%": { opacity: 1 },
                    "100%": { opacity: 0.8 },
                  },
                }}
              /> */}
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Background gradient effect */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          width: "50%",
          height: "70%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      />
    </Box>
  );
}

export default HomePage;
