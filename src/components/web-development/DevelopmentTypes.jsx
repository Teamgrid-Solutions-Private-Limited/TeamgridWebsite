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
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import LayersIcon from "@mui/icons-material/Layers";
import WebIcon from "@mui/icons-material/Web";

function DevelopmentTypes() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // State to track which service is active
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  const getServiceIcon = (index) => {
    switch (index) {
      case 0:
        return <CodeIcon sx={{ fontSize: 24 }} />;
      case 1:
        return <StorageIcon sx={{ fontSize: 24 }} />;
      case 2:
        return <LayersIcon sx={{ fontSize: 24 }} />;
      case 3:
        return <WebIcon sx={{ fontSize: 24 }} />;
      default:
        return <CodeIcon sx={{ fontSize: 24 }} />;
    }
  };

  // Service items
  const services = [
    {
      title: "Front-End Development",
      description: "Fast, responsive, and pixel-perfect user interfaces.",
      heading: "Build modern, responsive interfaces that users love.",
      content:
        "Our front-end developers bring designs to life using clean, optimized code. We specialize in React.js, HTML/CSS, and ensure all designs are fluid and responsive for your business.",
      offerings: [
        "Responsive UI development",
        "Component-based architecture using React.JS",
        "RESTful APIs and accessible markup",
        "Integrated UI/UX APIs",
      ],
      techStack: [
        { name: "React JS", icon: "reactjs.svg" },
        { name: "JavaScript", icon: "javascript.svg" },
        { name: "Next.js", icon: "nextjs.svg" },
        { name: "HTML5", icon: "html5.svg" },
        { name: "CSS3", icon: "css3.svg" },
        { name: "Material UI", icon: "materialui.svg" },
        { name: "Bootstrap", icon: "bootstrap.svg" },
      ],
    },
    {
      title: "Back-End Development",
      description: "Scalable, secure, and efficient architecture.",
      heading: "Scalable, secure, and efficient backend solutions.",
      content:
        "Our back-end experts create robust, secure, and high-performance server-side applications that power your digital products. We build scalable architecture that grows with your business.",
      offerings: [
        "RESTful & GraphQL API development",
        "Database architecture and optimization",
        "Server-side business logic implementation",
        "Authentication and authorization systems",
      ],
      techStack: [
        { name: "Node.js", icon: "nodejs.svg" },
        { name: "Express", icon: "express.svg" },
        { name: "PostgreSQL", icon: "postgresql.svg" },
        { name: "MongoDB", icon: "mongodb.svg" },
        { name: "GraphQL", icon: "graphql.svg" },
        { name: "Redis", icon: "redis.svg" },
        { name: "Docker", icon: "docker.svg" },
      ],
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end development for fully integrated web apps.",
      heading: "End-to-end solutions for complex web applications.",
      content:
        "Our full-stack developers handle every aspect of your project—from user interfaces to server logic to database management. Get a cohesive solution with seamless integration across all layers.",
      offerings: [
        "Unified development approach",
        "Seamless data flow between front and back-end",
        "Comprehensive testing and optimization",
        "Streamlined communication and faster development",
      ],
      techStack: [
        { name: "MERN Stack", icon: "mern.svg" },
        { name: "TypeScript", icon: "typescript.svg" },
        { name: "Next.js", icon: "nextjs.svg" },
        { name: "GraphQL", icon: "graphql.svg" },
        { name: "AWS", icon: "aws.svg" },
        { name: "Git", icon: "git.svg" },
        { name: "Jest", icon: "jest.svg" },
      ],
    },
    {
      title: "WordPress & CMS",
      description: "Custom WordPress sites with Elementor, and more.",
      heading: "Custom WordPress solutions for content-driven websites.",
      content:
        "We build customized WordPress websites that go beyond templates. From custom plugins to e-commerce solutions, our WordPress experts create optimized, secure, and user-friendly CMS experiences.",
      offerings: [
        "Custom theme and plugin development",
        "WooCommerce integration for e-commerce",
        "Performance optimization and caching",
        "Security hardening and maintenance",
      ],
      techStack: [
        { name: "WordPress", icon: "wordpress.svg" },
        { name: "PHP", icon: "php.svg" },
        { name: "WooCommerce", icon: "woocommerce.svg" },
        { name: "Elementor", icon: "elementor.svg" },
        { name: "ACF", icon: "acf.svg" },
        { name: "jQuery", icon: "jquery.svg" },
        { name: "MySQL", icon: "mysql.svg" },
      ],
    },
  ];

  const isActiveOrHovered = (index) =>
    index === activeService || index === hoveredService;

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "#F8FAFC",
        width: "100%",
      }}
    >
      <Container
        maxWidth="1200px"
        sx={{
          px: { xs: 2.5, md: 4, lg: 8, xl: 0 },
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Left column - Services */}
          <Grid item size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {services.map((service, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  sx={{
                    width: { xs: "100%", sm: "382px" },
                    height: "113px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    p: "24px",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "3px",
                    borderBottomRightRadius: "24px",
                    borderBottomLeftRadius: "24px",
                    bgcolor: isActiveOrHovered(index) ? "#05408E" : "#F0F7FF",
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
                    sx={{
                      width: 64,
                      height: 64,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: isActiveOrHovered(index)
                        ? "rgba(255, 255, 255, 0.2)"
                        : "#FFFFFF",
                      borderRadius: "16px",
                      color: isActiveOrHovered(index) ? "white" : "#05408E",
                    }}
                  >
                    {getServiceIcon(index)}
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: "18px",
                        color: isActiveOrHovered(index) ? "white" : "#05408E",
                        mb: 0.5,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        color: isActiveOrHovered(index)
                          ? "rgba(255, 255, 255, 0.8)"
                          : "#505C73",
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
          <Grid item size={{ xs: 12, md: 7 }}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "24px", md: "28px", lg: "32px" },
                  lineHeight: 1.3,
                  color: "#0F172A",
                  mb: 2,
                }}
              >
                {services[activeService].heading}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "#505C73",
                  mb: 4,
                }}
              >
                {services[activeService].content}
              </Typography>

              {/* What we offer */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#0F172A",
                  mb: 2,
                }}
              >
                What we offer
              </Typography>

              <Box sx={{ mb: 5 }}>
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
                    <CheckCircleIcon
                      sx={{
                        color: "#38BDF8",
                        fontSize: 20,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "15px",
                        color: "#505C73",
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
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#0F172A",
                  mb: 3,
                }}
              >
                Tech Stack
              </Typography>

              <Grid container spacing={2}>
                {services[activeService].techStack.map((tech, index) => (
                  <Grid item xs={4} sm={3} md={2} key={index}>
                    <Box
                      sx={{
                        border: "1px solid #E5E9F0",
                        borderRadius: "8px",
                        p: 1.5,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "#FFFFFF",
                      }}
                    >
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 1,
                        }}
                      >
                        {/* We would normally import these icons, using colored boxes as placeholders */}
                        <Box
                          sx={{
                            width: 28,
                            height: 28,
                            bgcolor:
                              index === 0
                                ? "#61DAFB"
                                : index === 1
                                ? "#F7DF1E"
                                : index === 2
                                ? "#0070F3"
                                : index === 3
                                ? "#E34F26"
                                : index === 4
                                ? "#1572B6"
                                : index === 5
                                ? "#0081CB"
                                : "#7952B3",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "12px",
                          color: "#505C73",
                          textAlign: "center",
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
