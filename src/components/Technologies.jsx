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
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2.5, md: 4, lg: 8, xl: 0 },
          width:'1400px'
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
              mb: { xs: 3, sm: 4, md: 5 },
              width: "100%",
            }}
          >
            <Box
              sx={{
                mb: { xs: 2, sm: 3, md: 0 },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Typography
                variant="h2"
                color="common.white"
                sx={{
                  fontSize: { xs: "28px", sm: "32px", md: "40px", lg: "48px" },
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="#e1e0e0"
                sx={{
                  mt: { xs: 0.5, sm: 1 },
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
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
                borderRadius: "32px",
                px: { xs: 3, md: 4 },
                py: { xs: 0.75, md: 1 },
                fontSize: { xs: "13px", sm: "14px", md: "16px" },
                whiteSpace: "nowrap",
                alignSelf: { xs: "flex-start", md: "center" },
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
                  borderRadius: { xs: 4, sm: 5, md: 7 },
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#003272",
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
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
                    {tech.title === "Postman" ? (
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
                          sx={{
                            width: { xs: 20, sm: 24, md: 28 },
                            height: { xs: 20, sm: 24, md: 28 },
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    ) : (
                      <Box
                        component="img"
                        src={tech.icon}
                        alt={tech.title}
                        sx={{
                          width: { xs: 28, sm: 34, md: 40 },
                          height: { xs: 28, sm: 34, md: 40 },
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h3"
                      color="common.white"
                      sx={{
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                        fontWeight: 600,
                        mb: { xs: 0.5, md: 0.75 },
                        lineHeight: 1.2,
                      }}
                    >
                      {tech.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="common.white"
                      sx={{
                        fontSize: { xs: "12px", sm: "13px", md: "14px" },
                        fontWeight: 400,
                        lineHeight: 1.4,
                        opacity: 0.8,
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
