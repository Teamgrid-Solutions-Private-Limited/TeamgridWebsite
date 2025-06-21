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
        py: { xs: 6, md: 10 },
        width: "100%",
        backgroundColor: "#fff",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Container
        maxWidth="1400px"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 4, lg: 8, xl: 0 },
          width:'1400px'
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              mb: 5,
              width: "100%",
              position: "relative",
            }}
          >
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
              <Typography
                variant="h2"
                color="text.primary"
                gutterBottom
                sx={{
                  fontSize: { xs: "28px", sm: "32px", md: "42px" },
                  fontWeight: 700,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  lineHeight: 1.6,
                  maxWidth: { xs: "100%", md: "600px" },
                }}
              >
                {subtitle}
              </Typography>
            </Box>

            <Button
              variant="outlined"
              color="primary"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                position: { md: "absolute", xs: "static" },
                right: 0,
                top: 0,
                borderRadius: "39px",
                height: { xs: "48px", md: "59px" },
                px: 4,
                borderColor: "rgba(202, 202, 202, 1)",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                  borderColor: "primary.main",
                },
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                marginRight:"300px"
              }}
            >
              Explore Services
            </Button>
          </Box>

          <Grid container spacing={4} sx={{ width: "100%", ml: 0 }}>
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <Box
                component="img"
                src={rectangleImage51}
                alt="Team collaboration"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: { xs: "350px", md: "522px" },
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6}>
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
                      sx={{
                        width: "24px",
                        height: "24px",
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
                          fontWeight: 600,
                          fontSize: { xs: "18px", md: "20px" },
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "14px", md: "16px" },
                          lineHeight: 1.6,
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
        </Toolbar>
      </Container>
    </Box>
  );
}

export default WhyTeamgrid;
