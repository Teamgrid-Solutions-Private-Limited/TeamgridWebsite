import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { rectangleImage51, vectorIcon } from "../images";
import data from "../data.json";
import { fontClamp } from "../fontUtils";

function WhyTeamgrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const { title, subtitle, buttonText, features } = data.whyTeamgrid;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="1248px"
        sx={{
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          width: "100%",
          maxWidth: "1248px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Grid container>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: fontClamp(56),
                lineHeight: "100%",
                letterSpacing: 0,
                color: "#140E13",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontWeight: "400",
                fontSize: fontClamp(18),
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              {subtitle}
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                borderRadius: "39px",
                px: 5,
                py: 2,
                borderColor: "rgba(202, 202, 202, 1)",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                  borderColor: "primary.main",
                },
                fontWeight: 400,
                fontSize: fontClamp(18),
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "#140E13",
                textTransform: "none",
              }}
            >
              Explore Services
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 4, lg: 8, xl: 10 }}
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="img"
              src={rectangleImage51}
              alt="Team collaboration"
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Stack spacing={4}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
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
                      mt: 0.5,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      color="primary.main"
                      gutterBottom
                      sx={{
                        fontWeight: 500,
                        fontSize: fontClamp(20),
                        leadingTrim: "Cap height",
                        lineHeight: "120%",
                        letterSpacing: "0%",
                        color: "#05408E",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                     fontWeight: 400,
                     fontSize: fontClamp(16),
                     lineHeight: "150%",
                     letterSpacing: "0%",
                     color: "#140E13"
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyTeamgrid;
