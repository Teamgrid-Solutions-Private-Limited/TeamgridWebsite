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
        py: { xs: 6, sm: 8, md: 12 },
        width: "100%",
        backgroundColor: "#fff",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container
        maxWidth="1200px"
        sx={{
          px: { xs: 2.5, md: 4, lg: 8, xl: 0 },
          width: '100%',
          maxWidth: "1200px",
          display: 'flex',
          flexDirection: 'column',
          gap: "20px"
        }}
      >
        <Grid container >
          <Grid size={{xs:12,md:6}} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "48px" },
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: "16px", sm: "16px", md: "18px", lg: "20px" },
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              {subtitle}
            </Typography>
          </Grid>
          <Grid size={{xs:12,md:6}} sx={{ display: 'flex', alignItems: 'center', justifyContent: {xs:"flex-start",md:'flex-end'}, }}>
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
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              Explore Services
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{display:'flex',flexDirection:{xs:"column",md:'row'}}}>
          <Grid size={{xs:12,md:6}}>
            <Box
              component="img"
              src={rectangleImage51}
              alt="Team collaboration"
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Grid >
          <Grid size={{xs:12,md:6}} sx={{display:'flex',alignItems:'center'}}>
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
                        fontSize: { xs: "18px", sm: "20px", md: "22px" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "16px", sm: "16px", md: "18px" },
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
      </Container>
    </Box>
  );
}

export default WhyTeamgrid;
