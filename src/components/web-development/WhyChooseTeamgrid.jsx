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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";

const WhyChooseTeamgrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Feature data
  const features = [
    {
      icon: <PeopleAltOutlinedIcon sx={{ fontSize: 28, color: "#0070F3" }} />,
      title: "Dedicated developers or full teams",
      description:
        "Get skilled individuals or complete teams tailored to your project needs.",
    },
    {
      icon: <GppGoodOutlinedIcon sx={{ fontSize: 28, color: "#0070F3" }} />,
      title: "NDA-compliant & agency-friendly",
      description:
        "We protect your privacy and work seamlessly under your brand.",
    },
    {
      icon: (
        <CalendarMonthOutlinedIcon sx={{ fontSize: 28, color: "#0070F3" }} />
      ),
      title: "Flexible engagement models",
      description:
        "Choose hourly, retainer, or project-based models that fit your workflow.",
    },
    {
      icon: <CodeOutlinedIcon sx={{ fontSize: 28, color: "#0070F3" }} />,
      title: "Modular code with documentation",
      description:
        "We write scalable code that's easy to maintain and well-documented.",
    },
    {
      icon: <SpeedOutlinedIcon sx={{ fontSize: 28, color: "#0070F3" }} />,
      title: "Quality Assured. High Performance.",
      description:
        "Every solution is thoroughly tested for speed, stability, and reliability.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "#F2F2F2",
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
              color: "#0F172A",
              fontSize: { xs: "28px", sm: "32px", md: "36px" },
              fontWeight: 700,
              mb: { xs: 2, md: 0 },
              maxWidth: "500px",
            }}
          >
            Why Choose Teamgrid for Web Development?
          </Typography>

          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: "50px",
              px: 3,
              py: 1,
              borderColor: "#E5E5E5",
              color: "#0F172A",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                borderColor: "#0070F3",
                bgcolor: "rgba(0, 112, 243, 0.04)",
              },
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
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  border: "1px solid #E5E9F0",
                  bgcolor: "#FFFFFF",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    bgcolor: "#F0F7FF",
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#0F172A",
                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "15px",
                    color: "#505C73",
                    lineHeight: 1.5,
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
