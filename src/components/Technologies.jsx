import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  groupIcon as reactIcon,
  vectorSvg as wordpressIcon,
  woocommerceIcon,
  shopifyIcon,
  nodejsIcon,
  postgresqlIcon,
  mongodbIcon,
  figmaIcon,
  group3 as postmanIcon,
} from "../images";
import data from "../data.json";
import { fontClamp } from '../fontUtils';

// Map icon strings to the imported icon variables
const iconMap = {
  reactIcon,
  wordpressIcon,
  woocommerceIcon,
  shopifyIcon,
  nodejsIcon,
  postgresqlIcon,
  mongodbIcon,
  figmaIcon,
  postmanIcon,
};

function Technologies() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const {
    title,
    subtitle,
    buttonText,
    technologies: techData,
  } = data.technologies;

  // Map icon string names to actual imported image paths
  const technologies = techData.map((tech) => ({
    ...tech,
    icon: iconMap[tech.icon],
  }));

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#0B3C7B",
        py: { xs: 6, sm: 8, md: 12 },
        overflow: "hidden", // Prevent any potential overflow issues
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="1248px"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          width: "100%",
          maxWidth: "1248px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              mb:  2,
              width: "100%",
            }}
          >
            <Box
              sx={{
                mb: { xs: 2, sm: 3, md: 0 },
                width: { xs: "100%", md: "auto" },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 0.8, sm: 1, md: 1.5 },
              }}
            >
              <Typography
                // variant="h2"
                color="common.white"
                sx={{
                  fontWeight: 500,
                  fontSize: fontClamp(56),
                  leadingTrim: "Cap height",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FAFAFA",
                }}
              >
                {title}
              </Typography>
              <Typography
                // variant="body2"
                color="#e1e0e0"
                sx={{
                  mt: { xs: 0.5, sm: 1 },
                  fontWeight: 400,
                  fontSize: fontClamp(18),
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                {subtitle}
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#1976f8",
                "&:hover": {
                  bgcolor: "#003272",
                },
                borderRadius: "39px",
                px: 5,
                py: 2,
                fontWeight: 400,
                fontSize: fontClamp(16),
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "#FFFFFF",
                whiteSpace: "nowrap",
                alignSelf: { xs: "flex-start", md: "center" },
                textTransform: "none",
              }}
              endIcon={<ArrowRightAltIcon />}
            >
              {buttonText}
            </Button>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 2, sm: 2.5, md: 3 },
              mt: { xs: 2, md: 3 },
              width: "100%",
            }}
          >
            {technologies.map((tech) => (
              <Card
                key={tech.title}
                sx={{
                  bgcolor: "#0B3C7B",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#003272",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1.5, sm: 2, md: 2.5 },
                    py: { xs: 1.5, sm: 2, md: 2.5 },
                    px: { xs: 2, sm: 2.5, md: 3 },
                    "&:last-child": { pb: { xs: 1.5, sm: 2, md: 2.5 } }, // Override MUI default padding
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 48, sm: 56, md: 64 },
                      height: { xs: 48, sm: 56, md: 64 },
                      bgcolor: "#1B5093",
                      borderRadius: { xs: 2, sm: 2.5, md: 3 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {/* {tech.title === "Postman" ? (
                      <Box
                        sx={{
                          width: { xs: 32, sm: 38, md: 44 },
                          height: { xs: 32, sm: 38, md: 44 },
                          bgcolor: "#FF6C37",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src={tech.icon}
                          alt={tech.title}
                          loading="lazy"
                          sx={{
                            width: { xs: 20, sm: 24, md: 28 },
                            height: { xs: 20, sm: 24, md: 28 },
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    ) : ( */}
                      <Box
                        component="img"
                        src={tech.icon}
                        alt={tech.title}
                        loading="lazy"
                        sx={{
                          width: { xs: 28, sm: 34, md: 40 },
                          height: { xs: 28, sm: 34, md: 40 },
                          objectFit: "contain",
                        }}
                      />
                    {/* )} */}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      py: { xs: 0.2, sm: 0.5, md: 0.8 },
                    }}
                  >
                    <Typography
                      variant="h3"
                      color="common.white"
                      sx={{
                        fontWeight: 500,
                        fontSize: fontClamp(20),
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#FFFFFF",
                      }}
                    >
                      {tech.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="common.white"
                      sx={{
                        fontWeight: 400,
                        fontSize: fontClamp(14),
                        lineHeight: "150%",
                        letterSpacing: "0%",
                        color: "#E3EFFF",
                      }}
                    >
                      {tech.desc}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Technologies;
