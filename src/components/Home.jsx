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
  muiIcon,
  mongoIcon,
  woo
} from "../images";
import CloseIcon from "@mui/icons-material/Close";


function Home() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const [isPaused, setIsPaused] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
  const [orbitScale, setOrbitScale] = useState(1);

  // Dynamically adjust orbit scale based on screen size
  useEffect(() => {
    if (isXs) {
      setOrbitScale(0.4);
    } else if (isSm) {
      setOrbitScale(0.5);
    } else if (isMd) {
      setOrbitScale(0.8);
    } else {
      setOrbitScale(1);
    }
  }, [isXs, isSm, isMd, isLg]);

  const techDescriptions = {
    React:
      "React is a JavaScript library for building user interfaces with a component-based architecture.",
    "Node.js":
      "Node.js is a JavaScript runtime built on Chrome's V8 engine for building scalable network applications.",
    PostgreSQL:
      "PostgreSQL is a powerful, open-source object-relational database system with a strong reputation.",
    MongoDB:
      "MongoDB is a source-available cross-platform document-oriented database program, using JSON-like documents.",
    Figma:
      "Figma is a cloud-based design tool for collaborative interface design, prototyping, and design systems.",
    Bootstrap:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    WordPress:
      "WordPress is a free and open-source content management system written in PHP and paired with a MySQL database.",
    Postman:
      "Postman is an API platform for building and using APIs. It simplifies API development workflow.",
    WooCommerce:
      "WooCommerce is an open-source e-commerce plugin for WordPress, designed for online merchants.",
    Shopify:
      "Shopify is an e-commerce platform for online stores and retail point-of-sale systems.",
    "Material UI":
      "Material UI is a popular React UI framework that implements Google's Material Design.",
  };

  const handleTechClick = (tech) => {
    setActiveTech(tech);
    setShowDescription(true);
    setIsPaused(true);
  };

  const closeDescription = () => {
    setShowDescription(false);
    setIsPaused(false);
  };

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
          top: { xs: "55px", sm: "80px", md: "30px" },
          py: { xs: 3, md: 10 },
          height: { xs: "auto", md: "100vh" },
          minHeight: { xs: "85vh", md: "auto" },
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          pt: { xs: 5, md: 10 },
          px: { xs: 2, md: 6, lg: 8, xl: 23 },
          mx: 0,
          width: "100%",
          maxWidth: "none",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "60%", lg: "50%" },
            gap: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 5, // Ensure text is above orbital system on small screens
            mb: { xs: 10, md: 0 }, // Add bottom margin on mobile
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "#E1E0E0", fontSize: { xs: "16px", md: "18px" } }}
          >
            Powering growth through talent
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "64px" },
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
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.6,
              maxWidth: { xs: "100%", md: "90%" },
            }}
          >
            We helps agencies and startups scale smarter — with dedicated
            professionals, high-quality solutions, and flexible engagement{" "}
            models that fit your workflow and goals.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3 }}
            sx={{ mt: { xs: 2, sm: 3 } }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#007BFF",
                borderRadius: "30px",
                px: { xs: 4, sm: 7 },
                py: 1.5,
                textTransform: "none",
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 500,
                boxShadow: "0 4px 10px rgba(0, 123, 255, 0.25)",
                "&:hover": { bgcolor: "#0069d9" },
                height: { xs: "45px", sm: "55px" },
                width: { xs: "100%", sm: "auto" },
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
                px: { xs: 3, sm: 4 },
                py: 1.5,
                textTransform: "none",
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 500,
                "&:hover": { borderColor: "rgba(255,255,255,0.5)" },
                height: { xs: "45px", sm: "55px" },
                width: { xs: "100%", sm: "auto" },
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
          top: { xs: "38%", sm: "38%", md: "5%" },
          bottom: { xs: "auto", sm: "-30%", md: "auto" },
          right: { xs: "-15%", sm: "-30%", md: 0 },
          left: { xs: "50%", sm: "50%", md: "87%", lg: "91%" },
          transform: "translateX(-50%)",
          width: { xs: "130%", sm: "120%", md: "100%", lg: "75%" },
          height: "100%",
          zIndex: { xs: 1, md: 0 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: { xs: 0.9, md: 1 },
          pointerEvents: { xs: "auto", md: "auto" }, // Re-enable pointer events on mobile
        }}
      >
        {/* Orbital circles */}
        <Box
          sx={{
            position: "relative",
            width: {
              xs: `${600 * orbitScale}px`,
              sm: `${800 * orbitScale}px`,
              md: `${1000 * orbitScale}px`,
              lg: "1150px",
            },
            height: {
              xs: `${600 * orbitScale}px`,
              sm: `${800 * orbitScale}px`,
              md: `${1000 * orbitScale}px`,
              lg: "1150px",
            },
          }}
        >
          {/* Main blue circle with logo in center */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              scale: { xs: 0.3, sm: 0.5, md: 1, lg: 1 },
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

            {/* Inner circle with logo or description */}
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
                animation: showDescription ? "none" : "ripple 4s infinite",
                overflow: "hidden",
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
              {!showDescription ? (
                <Box
                  component="img"
                  src={teamgridLogo}
                  alt="Teamgrid logo"
                  sx={{
                    width: "105.968px",
                    height: "143.162px",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#ffffff",
                      textAlign: "center",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {activeTech}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#B2D2FC",
                      textAlign: "center",
                      fontSize: "12px",
                      lineHeight: 1.4,
                      maxHeight: "130px",
                      overflow: "auto",
                      scrollbarWidth: "thin",
                      "&::-webkit-scrollbar": {
                        width: "5px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(255,255,255,0.3)",
                        borderRadius: "10px",
                      },
                    }}
                  >
                    {techDescriptions[activeTech]}
                  </Typography>

                  <Box
                    onClick={closeDescription}
                    sx={{
                      position: "absolute",
                      bottom: "20px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      color: "#4b91f1",
                      fontSize: "12px",
                      gap: 0.5,
                    }}
                  >
                    <CloseIcon sx={{ fontSize: 16 }} /> Close
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

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
                    ? `${623 * orbitScale}px`
                    : index === 1
                    ? `${957 * orbitScale}px`
                    : index === 2
                    ? `${1301 * orbitScale}px`
                    : `${1645 * orbitScale}px`,
                height:
                  index === 0
                    ? `${623 * orbitScale}px`
                    : index === 1
                    ? `${957 * orbitScale}px`
                    : index === 2
                    ? `${1301 * orbitScale}px`
                    : `${1645 * orbitScale}px`,
                borderRadius: "50%",
                border: "1px solid #FFFFFF36",
                transform: "translate(-50%, -50%)",
                animation: `rotate${index + 1} ${500}s linear infinite`,
                animationPlayState: isPaused ? "paused" : "running",
                cursor: "pointer",
                zIndex: 5 - index, // Higher z-index for inner orbits
                display: {
                  xs: index > 2 ? "none" : "block", // Hide outermost orbit on xs screens
                  sm: "block",
                },
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
              {[...Array(isXs || isSm ? 4 : 8)].map((_, dotIndex) => {
                const angle =
                  dotIndex * (isXs || isSm ? 90 : 45) * (Math.PI / 180);
                const radius =
                  index === 0
                    ? 311.5 * orbitScale
                    : index === 1
                    ? 478.5 * orbitScale
                    : index === 2
                    ? 650.5 * orbitScale
                    : 822.5 * orbitScale;

                return (
                  <Box
                    key={`dot-${index}-${dotIndex}`}
                    sx={{
                      position: "absolute",
                      width: { xs: "4px", sm: "6px" },
                      height: { xs: "4px", sm: "6px" },
                      borderRadius: "50%",
                      bgcolor: "#B2D2FC",
                      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                      transform: "translate(-50%, -50%)",
                      pointerEvents: "none", // Let clicks pass through dots
                    }}
                  />
                );
              })}

              {/* Orbit 1 - Innermost */}
              {index === 0 && (
                <>
                  <TechIcon
                    name="React"
                    icon={reactIcon}
                    position="top"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("React")}
                    orbitScale={orbitScale}
                  />
                  <TechIcon
                    name="Node.js"
                    icon={nodejsIcon}
                    position="right"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("Node.js")}
                    orbitScale={orbitScale}
                  />
                  <TechIcon
                    name="PostgreSQL"
                    icon={postgresqlIcon}
                    position="bottom"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("PostgreSQL")}
                    orbitScale={orbitScale}
                  />
                </>
              )}

              {/* Orbit 2 */}
              {index === 1 && (
                <>
                  <TechIcon
                    name="Figma"
                    icon={figmaIcon}
                    position="top"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("Figma")}
                    orbitScale={orbitScale}
                  />
                  <TechIcon
                    name="Bootstrap"
                    icon={bootstrapIcon}
                    position="right"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("Bootstrap")}
                    orbitScale={orbitScale}
                  />
                  <TechIcon
                    name="MongoDB"
                    icon={mongoIcon}
                    position="left"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("MongoDB")}
                    orbitScale={orbitScale}
                  />
                </>
              )}

              {/* Orbit 3 */}
              {index === 2 && (
                <>
                  <TechIcon
                    name="WordPress"
                    icon={wordpressIcon}
                    position="topRight"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("WordPress")}
                    orbitScale={orbitScale}
                  />
                  <TechIcon
                    name="Postman"
                    icon={postmanIcon}
                    position="bottom"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("Postman")}
                    orbitScale={orbitScale}
                  />
                  <TechIcon
                    name="WooCommerce"
                    icon={woo}
                    position="left"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("WooCommerce")}
                    orbitScale={orbitScale}
                  />
                </>
              )}

              {/* Orbit 4 - Outermost */}
              {index === 3 && (
                <>
                  <TechIcon
                    name="Shopify"
                    icon={shopifyIcon}
                    position="topRight"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("Shopify")}
                    orbitScale={orbitScale}
                  />
                  <TechIcon
                    name="Material UI"
                    icon={muiIcon}
                    position="bottomRight"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleTechClick("Material UI")}
                    orbitScale={orbitScale}
                  />
                </>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// Tech icon component with positions on the orbit
function TechIcon({
  name,
  icon,
  position,
  onMouseEnter,
  onMouseLeave,
  onClick,
  orbitScale = 1,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        zIndex: 20, // Ensure icons are always clickable
        cursor: "pointer",
        pointerEvents: "auto", // Explicitly enable pointer events
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Box
        sx={{
          width: isMobile ? `${60 * orbitScale}px` : `${68 * orbitScale}px`,
          height: isMobile ? `${60 * orbitScale}px` : `${68 * orbitScale}px`,
          borderRadius: "50%",
          bgcolor: "#0D264F",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 20px rgba(0, 123, 255, 0.2)",
          border: "1px solid #3B526F",
          "&:hover": {
            boxShadow: "0 0 30px rgba(0, 123, 255, 0.4)",
            transform: "scale(1.1)",
          },
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={name}
          sx={{
            width: isMobile ? `${38 * orbitScale}px` : `${38 * orbitScale}px`,
            height: isMobile ? `${38 * orbitScale}px` : `${38 * orbitScale}px`,
            objectFit: "contain",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;
