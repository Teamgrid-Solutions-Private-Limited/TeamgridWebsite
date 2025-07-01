import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import data from "../../data.json";
import {
  fullstackImage,
  fileCodeIcon,
  storageIcon,
  wordpressIcon,
  vectorIcon,
  reactIcon,
  bootstrapIcon,
  javascriptIcon,
  typescriptIcon,
  cssIcon,
  materialUiIcon,
  htmlIcon,
  nodejsIcon,
  postgresqlIcon,
  mongodbIcon,
  graphQLIcon,
  redisIcon,
  dockerIcon,
  mernStackIcon,
  nextJSIcon,
  awsIcon,
  gitIcon,
  woocommerceIcon,
  phpIcon,
  elementorIcon,
  jQueryIcon,
  acfIcon,
  mySQLIcon,
} from "../../images";
import { fontClamp } from "../../fontUtils";
const services = data.developmentType;

function DevelopmentTypes() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // State to track which service is active
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  // Function to get the correct icon component based on the icon name from data.json
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "fileCodeIcon":
        return fileCodeIcon;
      case "storageIcon":
        return storageIcon;
      case "fullstackImage":
        return fullstackImage;
      case "wordpressIcon":
        return wordpressIcon;
      case "reactIcon":
        return reactIcon;
      case "bootstrapIcon":
        return bootstrapIcon;
      case "javascriptIcon":
        return javascriptIcon;
      case "typescriptIcon":
        return typescriptIcon;
      case "cssIcon":
        return cssIcon;
      case "materialUiIcon":
        return materialUiIcon;
      case "htmlIcon":
        return htmlIcon;
      case "nodejsIcon":
        return nodejsIcon;
      case "postgresqlIcon":
        return postgresqlIcon;
      case "expressIcon":
        return "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"; // Example URL for Express.js icon
      case "mongodbIcon":
        return mongodbIcon;
      case "graphQLIcon":
        return graphQLIcon; // Example URL for GraphQL icon
      case "nextJSIcon":
        return nextJSIcon; // Example URL for Next.js icon
      case "redisIcon":
        return redisIcon;
      case "dockerIcon":
        return dockerIcon;
      case "mernStackIcon":
        return mernStackIcon;
      case "awsIcon":
        return awsIcon; // Example URL for AWS icon
      case "gitIcon":
        return gitIcon; // Example URL for Git icon
      case "woocommerceIcon":
        return woocommerceIcon; // Example URL for WooCommerce icon
      case "phpIcon":
        return phpIcon; // Example URL for PHP icon
      case "elementorIcon":
        return elementorIcon; // Example URL for Elementor icon
      case "jQueryIcon":
        return jQueryIcon; // Example URL for jQuery icon
      case "acfIcon":
        return acfIcon; // Example URL for ACF icon
      case "mySQLIcon":
        return mySQLIcon; // Example URL for MySQL icon
      default:
        return fileCodeIcon;
    }
  };

  const isActiveOrHovered = (index) =>
    index === activeService || index === hoveredService;

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
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
          px: { xs: 2.5, md: 4, lg: 4, xl: 0 },
          maxWidth: "1248px",
          width: "100%",
        }}
      >
        <Grid container spacing={{ xs: 2, md: 2 }}>
          {/* Left column - Services */}
          <Grid item size={{ xs: 12, md: 5.5, lg: 4.5, xl: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                pt: { md: 6 },
              }}
            >
              {services.map((service, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  sx={{
                    width: { xs: "100%", sm: "382px" },
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    p: "24px",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "3px",
                    borderBottomRightRadius: "24px",
                    borderBottomLeftRadius: "24px",
                    bgcolor: isActiveOrHovered(index)
                      ? "#05408E"
                      : "transparent",
                    color: isActiveOrHovered(index) ? "white" : "inherit",
                    boxShadow: isActiveOrHovered(index)
                      ? "0 4px 20px rgba(5, 64, 142, 0.3)"
                      : "none",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={getIconComponent(service.icon)}
                    alt={service.title}
                    sx={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: isActiveOrHovered(index) ? "#FFFFFF" : "#E5F1FF",
                      borderRadius: "8px",
                      padding: "8px",
                      objectFit: "contain",
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "PayPal Open",
                        fontWeight: 500,
                        fontSize: fontClamp(20),
                        leadingTrim: "Cap height",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                        color: isActiveOrHovered(index) ? "#FAFAFA" : "#072449",
                        mb: 0.5,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "PayPal Open",
                        fontWeight: 400,
                        fontSize: fontClamp(16),
                        leadingTrim: "Cap height",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                        color: isActiveOrHovered(index) ? "#B2D2FC" : "#140E13",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Middle and right - Description and offerings */}
          <Grid item size={{ xs: 12, md: 6.5, lg: 7.5, xl: 8 }}>
            <Box
              sx={{
                bgcolor: "#F4F9FF",
                p: { xs: 2, sm: 4, md: 6 },
                borderTopLeftRadius: "24px",
                borderBottomLeftRadius: "24px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "PayPal Open",
                  fontWeight: 500,
                  fontSize: fontClamp(40),
                  leadingTrim: "Cap height",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#140E13",
                  mb: 3,
                }}
              >
                {services[activeService].heading}
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
                  mb: 4,
                }}
              >
                {services[activeService].content}
              </Typography>

              {/* What we offer */}
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "PayPal Open",
                  fontWeight: 500,
                  fontSize: fontClamp(32),
                  leadingTrim: "Cap height",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#140E13",
                  mb: 2,
                }}
              >
                What we offer
              </Typography>

              <Box sx={{ mb: 4, pl: 4, mt: 3 }}>
                {services[activeService].offerings.map((offering, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1.5,
                      gap: 1.5,
                    }}
                  >
                    <Box
                      component="img"
                      src={vectorIcon}
                      alt="Check icon"
                      loading="lazy"
                      sx={{
                        width: "20px",
                        height: "20px",
                        objectFit: "contain",
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "PayPal Open",
                        fontWeight: 400,
                        fontSize: fontClamp(16),
                        lineHeight: "150%",
                        letterSpacing: "0%",
                        color: "#140E13",
                      }}
                    >
                      {offering}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Tech Stack */}
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "PayPal Open",
                  fontWeight: 500,
                  fontSize: fontClamp(32),
                  leadingTrim: "Cap height",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#140E13",
                  mb: 3,
                }}
              >
                Tech Stack
              </Typography>

              <Grid
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "80%" },
                }}
                container
                spacing={2}
              >
                {services[activeService].techStack.map((tech, index) => (
                  <Grid item size={{ xs: 6, sm: 3, md: 4, lg: 3 }} key={index}>
                    <Box
                      sx={{
                        p: 1.5,
                        width: "123px",
                        height: "115px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "#FFFFFF",
                        borderRadius: "15%",
                        border: "1px solid #97B4D7",
                      }}
                    >
                      <Box
                        sx={{
                          width: 63,
                          height: 56,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 1,
                        }}
                      >
                        {/* We would normally import these icons, using colored boxes as placeholders */}

                        <Box
                          component="img"
                          src={getIconComponent(tech.icon)}
                          alt={tech.name}
                          loading="lazy"
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "PayPal Open",
                          fontWeight: 500,
                          fontSize: fontClamp(16),
                          leadingTrim: "Cap height",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          textAlign: "center",
                          color: "#05408E",
                        }}
                      >
                        {tech.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DevelopmentTypes;
