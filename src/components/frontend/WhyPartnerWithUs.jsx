import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fontClamp } from "../../fontUtils";
import { whyPartnerWithUsImage } from "../../images";

const cards = [
  {
    title: "Agency-Centric",
    desc: "Specifically designed to support digital and creative agencies with reliable, scalable front-end development services.",
    bg: "#FFF7C7",
    iconBg: "#FDE658",
  },
  {
    title: "Speed & Flexibility",
    desc: "Kickstart projects quickly and scale up or down as your client demands change — no overhead, just results.",
    bg: "#EAEAFF",
    iconBg: "#DADAFD",
  },
  {
    title: "UI-First Thinking",
    desc: "Our developers prioritize design fidelity with responsive, pixel-perfect implementations that bring your mockups to life flawlessly.",
    bg: "#E7FFD7",
    iconBg: "#CDF5B3",
  },
  {
    title: "NDA-Compliant",
    desc: "We work under strict non-disclosure agreements, ensuring full confidentiality while representing your brand seamlessly.",
    bg: "#FFEFFC",
    iconBg: "#FFDDF9",
  },
  {
    title: "Seamless Integration",
    desc: "We collaborate smoothly with your in-house designers, backend developers, and project managers.",
    bg: "#ECF9FF",
    iconBg: "#CBEFFF",
  },
];

function WhyPartnerWithUs() {
  return (
    <Box
      sx={{
        my: { xs: 6, md: 10 },
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="1248px"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          maxWidth: "1248px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: { xs: 2, sm: 4 },
            mb: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 500,
              fontSize: fontClamp(48),
              leadingTrim: "Cap height",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#140E13",
            }}
          >
            Why Partner With Us
          </Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 5,
              py: 2,
              fontWeight: 400,
              fontSize: fontClamp(18),
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#140E13",
              borderColor: "#D6D6D6",
              background: "#fff",
              boxShadow: "none",
              borderRadius: "16px",
              "&:hover": {
                borderColor: "#0D3C7E",
                background: "#F7F9FC",
              },
            }}
          >
            Explore Services
          </Button>
        </Box>
        <Grid container spacing={3}>
          {cards.map((card, idx) => (
            <Grid
              item
              size={{ xs: 12, sm: 6, md: 4 }}
              key={card.title}
              sx={{ display: "flex" }}
            >
              <Card
                elevation={0}
                sx={{
                  bgcolor: card.bg,
                  borderRadius: 6,
                  width: "100%",
                  minHeight: 180,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  p: 3,
                  boxShadow: "none",
                }}
              >
                <Box
                  sx={{
                    bgcolor: card.iconBg,
                    borderRadius: 3.5,
                    width: 64,
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={whyPartnerWithUsImage}
                    alt="icon"
                    sx={{ width: 32, height: 32 }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: fontClamp(20),
                    leadingTrim: "Cap height",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    color: "#05408E",
                    mb: 1,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: fontClamp(16),
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    color: "#140E13",
                  }}
                >
                  {card.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyPartnerWithUs;
