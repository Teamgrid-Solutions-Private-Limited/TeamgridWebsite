import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  teamIcon,
  NdaIcon,
  modelIcon,
  documentationIcon,
  qualityIcon,
} from "../../images"; // Adjust the import path as necessary
import data from "../../data.json"; // Assuming you have a data.json file with the features
const features = data.whyChooseTeamgrid;

const WhyChooseTeamgrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "teamIcon":
        return teamIcon;
      case "NdaIcon":
        return NdaIcon;
      case "modelIcon":
        return modelIcon;
      case "documentationIcon":
        return documentationIcon;
      case "qualityIcon":
        return qualityIcon;
      default:
        return teamIcon;
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "#FFFFFF",
        width: "100%",
        mb: { md: 8 },
      }}
    >
      <Container
        maxWidth="1200px"
        sx={{
          px: { xs: 2.5, md: 4, lg: 4, xl: 0 },
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            mb: { xs: 4, md: 5 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "PayPal Open",
              fontWeight: 500,
              fontSize: "48px",
              leadingTrim: "Cap height",
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#140E13",
              mb: { xs: 2, md: 0 },
              maxWidth: "600px",
            }}
          >
            Why Choose Teamgrid for Web Development?
          </Typography>

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
              fontSize: "18px",
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#140E13",
              textTransform: "none",
            }}
          >
            Explore Services
          </Button>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  width: "384px",
                  height: "172px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
                  border: "1px solid #E5E9F0",
                  bgcolor: "#F3F3F6",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <img
                  src={getIconComponent(feature.icon)}
                  alt={feature.title}
                  style={{
                    width: 32,
                    height: 32,
                    marginBottom: 16,
                    objectFit: "contain",
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "PayPal Open",
                    fontWeight: 500,
                    fontSize: "20px",
                    leadingTrim: "Cap height",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    color: "#05408E",
                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "PayPal Open",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    color: "#140E13",
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseTeamgrid;
