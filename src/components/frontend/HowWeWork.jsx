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
import {
  leftArrowIcon,
  leftDownIcon,
  rightArrowIcon,
  rightDownIcon,
} from "../../images";
import data from "../../data.json";

function HowWeWork() {
  const frontendData = data.frontend.howWeWork;
  const steps = frontendData.steps;

  const StepCard = ({ step }) => (
    <Paper
      elevation={6}
      sx={{
        bgcolor: "#005DD5",
        position: "relative",
        boxShadow:'none',
        gap: 1,
        width: "100%",
        height: "100%",
        maxWidth: "400px",
        borderRadius: "24px",
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
          top: "-12%",
          left: "-7%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 300,
            fontSize: fontClamp(36),
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
          ml: 5,
          width: "100%",
          height: "100%",
          maxWidth: "384px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
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
              textAlign:'left',
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
              textAlign:'left',
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
        // transform: reversed ? "scaleX(-1)" : "none",
      }}
    >
      <Box component="img" src={reversed ? rightArrowIcon : leftArrowIcon} />
    </Box>
  );

  const CurvedArrow = ({ reversed = false }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // transform: reversed ? "scaleX(-1)" : "none",
      }}
    >
      <Box component="img" src={reversed ? leftDownIcon : rightDownIcon} />
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
            {frontendData.title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: fontClamp(16),
              lineHeight: "150%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#B2D2FC",
              mb: { xs: 6, md: 8 },
            }}
          >
            {frontendData.description}
          </Typography>

          <Grid
            container
            sx={{
              width: "100%",
              display: "flex",
              gap:2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Top Row: Steps 1 → 2 → 3 */}
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
              sx={{ mb: 6 }}
            >
              <Grid item size={{ xs: 12, md: 5 }}>
                <StepCard step={steps[0]} />
              </Grid>
              <Grid item size={{ xs: 0, md: 1 }}>
                <ArrowIcon />
              </Grid>
              <Grid item size={{ xs: 12, md: 5 }}>
                <StepCard step={steps[1]} />
              </Grid>
              <Grid item size={{ xs: 0, md: 1 }}>
                <CurvedArrow reversed />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
              sx={{ mb: { xs: 6, md: 6 } }}
            >
              <Grid item size={{ xs: 0, md: 1 }}>
                <CurvedArrow />
              </Grid>
              <Grid item size={{ xs: 12, md: 5 }}>
                <StepCard step={steps[2]} />
              </Grid>
              <Grid item size={{ xs: 0, md: 1 }}>
                <ArrowIcon reversed />
              </Grid>
              <Grid item size={{ xs: 12, md: 5 }}>
                <StepCard step={steps[3]} />
              </Grid>
            </Grid>

            {/* Curved Arrow */}

            {/* Bottom Row: Steps 4 ← 5 ← 6 */}
            <Grid
              container
              spacing={5}
              alignItems="center"
              justifyContent="flex-start"
              sx={{ mb: 4 }}
            >
              <Grid item size={{ xs: 12, md: 5 }}>
                <StepCard step={steps[4]} />
              </Grid>
              <Grid item size={{ xs: 0, md: 1.5 }}>
                <ArrowIcon />
              </Grid>
              <Grid item size={{ xs: 12, md: 5 }}>
                <StepCard step={steps[5]} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HowWeWork;
