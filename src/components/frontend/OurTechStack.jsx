import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { fontClamp } from "../../fontUtils";
import {
  reactIcon,
  javascriptIcon,
  typescriptIcon,
  htmlIcon,
  cssIcon,
  muiIcon,
  bootstrapIcon,
} from "../../images";
import teamImage from "../../assets/livediscussion.jpg";

const techs = [
  {
    name: "ReactJS",
    icon: reactIcon,
    bg: "#E8F4FD",
    color: "#0D3C7E",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    bg: "#FFF9E5",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: typescriptIcon,
    bg: "#EAF6FF",
    color: "#3178C6",
  },
  {
    name: "HTML5",
    icon: htmlIcon,
    bg: "#FFF3ED",
    color: "#E44D26",
  },
  {
    name: "CSS3",
    icon: cssIcon,
    bg: "#EDF6FF",
    color: "#1572B6",
  },
  {
    name: "Material UI",
    icon: muiIcon,
    bg: "#F0F7FF",
    color: "#007FFF",
  },
  {
    name: "Bootstrap",
    icon: bootstrapIcon,
    bg: "#F5F0FF",
    color: "#7952B3",
  },
];

function OurTechStack() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#fff" }}>
      <Container
        maxWidth="1248px"
        sx={{ px: { xs: 2.5, md: 3, lg: 4, xl: 0 }, }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left: Image with overlay text */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                minHeight: 380,
              }}
            >
              <Box
                component="img"
                src={teamImage}
                alt="Team discussion"
                sx={{
                  width: "100%",
                  height: { xs: 260, md: 380 },
                  objectFit: "cover",
                  borderRadius: 4,
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  p: 3,
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.0) 100%)",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: fontClamp(28),
                    mb: 0.5,
                  }}
                >
                  We use{" "}
                  <Box component="span" sx={{ color: "#1ED290" }}>
                    modern, scalable
                  </Box>{" "}
                  front-end technologies
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right: Tech stack */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: fontClamp(32),
                color: "#181A1C",
                mb: 2,
              }}
            >
              Our Tech Stack
            </Typography>
            <Typography
              sx={{
                color: "#222",
                fontSize: fontClamp(16),
                mb: 4,
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              We use modern, scalable front-end technologies to build fast,
              responsive, and modular interfaces. Our tech stack ensures
              performance, maintainability, and future-ready web experiences.
            </Typography>
            <Grid container spacing={2}>
              {techs.map((tech, idx) => (
                <Grid item xs={6} sm={4} md={4} key={tech.name}>
                  <Card
                    elevation={0}
                    sx={{
                      bgcolor: "#fff",
                      border: "1.5px solid #E6EAF0",
                      borderRadius: 3,
                      p: 0,
                      height: 90,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "box-shadow 0.2s",
                      "&:hover": {
                        boxShadow: "0 4px 16px rgba(13,60,126,0.10)",
                        borderColor: "#0D3C7E",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 1.5,
                      }}
                    >
                      <Box
                        component="img"
                        src={tech.icon}
                        alt={tech.name}
                        sx={{
                          width: 32,
                          height: 32,
                          mb: 1,
                          objectFit: "contain",
                          background: tech.bg,
                          borderRadius: 2,
                          p: 0.5,
                        }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: fontClamp(15),
                          color: "#222",
                        }}
                      >
                        {tech.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OurTechStack;
