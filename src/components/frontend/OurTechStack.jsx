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
  ourTechStackImage,
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
    <Box
      sx={{
        my: { xs: 6, md: 8 },
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflow: "hidden", // Prevent any potential overflow issues
      }}
    >
      <Container
        maxWidth="1248px"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          maxWidth: "1248px",
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
            width: "100%",
          }}
        >
          {/* Left: Image with overlay text */}
          <Grid item size={{ xs: 12, md: 5 }} width={"100%"}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                width: "486px",
                height: "591px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "#FFFFFF",
              }}
            >
              <Box
                component="img"
                src={ourTechStackImage}
                alt="Team discussion"
                sx={{
                  width: "486px",
                  height: "591px",
                  borderRadius: "24px",
                  objectFit: "cover",
                  display: "block",
                  backgroundRepeat: "no-repeat",
                  // backgroundSize: "cover",
                  backgroundPosition: "left",
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
                    fontWeight: 500,
                    fontSize: "48px",
                    leadingTrim: "Cap height",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFFFFF",
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
          <Grid
            item
            size={{ xs: 12, md: 6.5 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 500,
                fontSize: fontClamp(56),
                leadingTrim: "Cap height",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#140E13",
                mb: 2,
              }}
            >
              Our Tech Stack
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: fontClamp(16),
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "#000000",
                mb: 4,
                maxWidth: "100%",
              }}
            >
              We use modern, scalable front-end technologies to build fast,
              responsive, and modular interfaces. Our tech stack ensures
              performance, maintainability, and future-ready web experiences.
            </Typography>
            <Grid container spacing={2}>
              {techs.map((tech, idx) => (
                <Grid item size={{ xs: 6, sm: 4, md: 3 }} key={tech.name}>
                  <Card
                    elevation={0}
                    sx={{
                      width: "123px",
                      height: "115px",
                      bgcolor: "#fff",
                      border: "1.5px solid #E6EAF0",
                      borderRadius: 4,
                      p: 0,
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
                          width: "63px",
                          height: "56px",
                          mb: 1,
                          objectFit: "contain",
                          // background: tech.bg,
                          borderRadius: 2,
                          p: 0.5,
                        }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: fontClamp(16),
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          textAlign: "center",
                          color: "#05408E",
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
