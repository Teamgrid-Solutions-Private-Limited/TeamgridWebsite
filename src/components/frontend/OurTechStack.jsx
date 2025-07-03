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
import data from "../../data.json";

const frontendData = data.frontend.ourTechStack;
const iconMap = {
  reactIcon,
  javascriptIcon,
  typescriptIcon,
  htmlIcon,
  cssIcon,
  muiIcon,
  bootstrapIcon,
};
const techs = frontendData.techs.map((tech) => ({
  ...tech,
  icon: iconMap[tech.icon],
}));

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
              {frontendData.title}
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
              {frontendData.description}
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
