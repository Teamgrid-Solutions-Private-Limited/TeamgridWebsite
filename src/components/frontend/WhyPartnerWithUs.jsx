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
import { teamIcon } from "../../images";

const cards = [
  {
    title: "Agency-Centric",
    desc: "Specifically designed to support digital and creative agencies with reliable, scalable front-end development services.",
    bg: "#FFF7CC",
    iconBg: "#FFF0A6",
    color: "#0D3C7E",
  },
  {
    title: "Speed & Flexibility",
    desc: "Kickstart projects quickly and scale up or down as your client demands change — no overhead, just results.",
    bg: "#E6E9FF",
    iconBg: "#D6DBFF",
    color: "#0D3C7E",
  },
  {
    title: "UI-First Thinking",
    desc: "Our developers prioritize design fidelity with responsive, pixel-perfect implementations that bring your mockups to life flawlessly.",
    bg: "#E6FFE6",
    iconBg: "#C8F7C5",
    color: "#0D3C7E",
  },
  {
    title: "NDA-Compliant",
    desc: "We work under strict non-disclosure agreements, ensuring full confidentiality while representing your brand seamlessly.",
    bg: "#FCEEFF",
    iconBg: "#F6D6FF",
    color: "#0D3C7E",
  },
  {
    title: "Seamless Integration",
    desc: "We collaborate smoothly with your in-house designers, backend developers, and project managers.",
    bg: "#E6F7FF",
    iconBg: "#C6EFFF",
    color: "#0D3C7E",
  },
];

function WhyPartnerWithUs() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, background: "#fff" }}>
      <Container
        maxWidth="1248px"
        sx={{ px: { xs: 2.5, md: 3, lg: 4, xl: 0 } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: fontClamp(40),
              color: "#181A1C",
              letterSpacing: 0,
            }}
          >
            Why Partner With Us
          </Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 2,
              px: 3,
              py: 1.2,
              fontWeight: 500,
              fontSize: fontClamp(16),
              color: "#181A1C",
              borderColor: "#D6D6D6",
              background: "#fff",
              boxShadow: "none",
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
              xs={12}
              sm={6}
              md={4}
              key={card.title}
              sx={{ display: "flex" }}
            >
              <Card
                elevation={0}
                sx={{
                  bgcolor: card.bg,
                  borderRadius: 4,
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
                    borderRadius: 2,
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={teamIcon}
                    alt="icon"
                    sx={{ width: 28, height: 28 }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: fontClamp(18),
                    color: card.color,
                    mb: 1,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#222",
                    fontSize: fontClamp(15),
                    fontWeight: 400,
                    lineHeight: 1.6,
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
