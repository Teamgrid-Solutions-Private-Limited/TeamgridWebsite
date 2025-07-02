import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { fontClamp } from "../../fontUtils";

function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Requirements",
      desc: "We define goals, user types, and key screens to ensure alignment before design or development begins.",
    },
    {
      number: "02",
      title: "Design Handoff & Planning",
      desc: "We review design files, clarify edge cases, and outline technical scope for smooth project execution.",
    },
    {
      number: "03",
      title: "Development",
      desc: "We build responsive, pixel-perfect interfaces using React and modern CSS with clean, scalable code.",
    },
    {
      number: "04",
      title: "API Integration",
      desc: "We connect front-end with backend or CMS APIs to handle real-time data and error states reliably.",
    },
    {
      number: "05",
      title: "QA & Testing",
      desc: "We test on all screen sizes, ensure WCAG compliance, and validate performance across major browsers.",
    },
    {
      number: "06",
      title: "Deployment or Handover",
      desc: "We deliver clean, version-controlled code or coordinate handoff to backend teams for integration.",
    },
  ];

  const StepCard = ({ step }) => (
    <Paper
      elevation={6}
      sx={{
        bgcolor: "transparent",
        position: "relative",
        gap: 1,
        width: "100%",
        height: "100%",
        maxWidth: 384,
      }}
    >
      <Box
        sx={{
          bgcolor: "#30ECAD",
          color: "#0B4C8C",
          width: "80px",
          height: "80px",
          borderRadius: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "fit-content",
          position: "absolute",
          top: "-20%",
          left: "-10%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 300,
            fontSize: "40px",
            leadingTrim: "Cap height",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#089767",
          }}
        >
          {step.number}
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "#005DD5",
          color: "white",
          borderRadius: 4,
          p: 3,
          pl: { md: 5 },
          width: "100%",
          height: "100%",
          maxWidth: 384,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              fontSize: fontClamp(20),
              lineHeight: "120%",
              letterSpacing: 0,
              color: "#FFFFFF",
            }}
            gutterBottom
          >
            {step.title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: fontClamp(16),
              lineHeight: "150%",
              letterSpacing: 0,
              color: "#B2D2FC",
            }}
          >
            {step.desc}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );

  const ArrowIcon = ({ reversed = false }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: reversed ? "scaleX(-1)" : "none",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4CE0B3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </Box>
  );

  const CurvedArrow = () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 80,
        mt: 4,
        mb: 4,
      }}
    >
      <svg
        width="300"
        height="80"
        viewBox="0 0 200 80"
        fill="none"
        style={{ transform: "scaleX(-1)" }}
      >
        <path
          d="M20 20 Q 100 60, 180 20"
          stroke="#4CE0B3"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="12"
            markerHeight="8"
            refX="10"
            refY="4"
            orient="auto"
          >
            <polygon points="0 0, 12 4, 0 8" fill="#4CE0B3" />
          </marker>
        </defs>
      </svg>
    </Box>
  );

  return (
    <Box
      sx={{
        my: { xs: 6, md: 8 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#FFFFFF",
      }}
    >
      <Container
        maxWidth="1248px"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          maxWidth: "1248px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "#0B3C7B",
            borderRadius: "40px",
            p: { xs: 6 },
            textAlign: "center",
            height: "auto",
          }}
        >
          {/* Header */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              fontSize: fontClamp(56),
              leadingTrim: "Cap height",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              mb: 2,
              color: "#FFFFFF",
            }}
          >
            How We Work
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: fontClamp(16),
              lineHeight: "150%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#B2D2FC",
              mb: 6,
            }}
          >
            Our front-end development process is built to deliver speed,
            <br />
            quality, and collaboration.
          </Typography>

          {/* Top Row: Steps 1 → 2 → 3 */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 6 }}
          >
            <Grid item size={{ xs: 12, md: 4 }}>
              <StepCard step={steps[0]} />
            </Grid>
            <Grid item size={{ xs: 12, md: 1 }}>
              <ArrowIcon />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <StepCard step={steps[1]} />
            </Grid>
            <Grid item size={{ xs: 12, md: 1 }}>
              <CurvedArrow />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 6 }}
          >
            <Grid item size={{ xs: 12, md: 1 }}>
              <CurvedArrow />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <StepCard step={steps[2]} />
            </Grid>
            <Grid item size={{ xs: 12, md: 1 }}>
              <ArrowIcon />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <StepCard step={steps[3]} />
            </Grid>
            <Grid item size={{ xs: 12, md: 1 }}>
              <ArrowIcon />
            </Grid>
          </Grid>

          {/* Curved Arrow */}

          {/* Bottom Row: Steps 4 ← 5 ← 6 */}
          <Grid
            container
            spacing={5}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item size={{ xs: 12, md: 4 }}>
              <StepCard step={steps[4]} />
            </Grid>
            <Grid item size={{ xs: 12, md: 1 }}>
              <ArrowIcon />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <StepCard step={steps[5]} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HowWeWork;
