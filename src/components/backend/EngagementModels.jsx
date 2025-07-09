import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Grid,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fontClamp } from "../../fontUtils";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { vectorIcon } from "../../images";
import data from "../../data.json";

const backendData = data.backend.engagementModels;
const models = backendData.models;

function EngagementModels() {
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
          justifyContent: "center",
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          maxWidth: "1248px",
          width: "100%",
        }}
      >
        <Grid container mb={{ xs: 3, md: 6 }}>
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
                fontSize: fontClamp(48),
                lineHeight: "100%",
                letterSpacing: 0,
                color: "#140E13",
              }}
            >
              {backendData.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontWeight: "500",
                fontSize: fontClamp(18),
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "#000000",
              }}
            >
              {backendData.description}
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
                  borderColor: "#0D3C7E",
                  background: "#F7F9FC",
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
        <Grid container spacing={4} alignItems="stretch">
          {models.map((model, idx) => (
            <Grid size={{ xs: 6, md: 4 }} key={model.title} sx={{ display: "flex" }}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: "24px",
                  p: 3,
                  bgcolor: "#F3F3F6",
                  width: "auto",
                  minHeight: 350,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 2px 8px 0 rgba(16,30,54,0.04)",
                  border: "1px solid #EAEAEF",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 500,
                    fontSize: fontClamp(24),
                    leadingTrim: "Cap height",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    color: "#05408E",
                  }}
                >
                  {model.title}
                </Typography>
                <Box sx={{ mb: 2.5 }}>
                  {model.points.map((point, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1.5,
                        gap: 1.5,
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
                        }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: fontClamp(16),
                          lineHeight: "150%",
                          letterSpacing: "0%",
                          color: "#140E13",
                        }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "39px",
                      height: "48px",
                      px: 2.5,
                      fontWeight: 400,
                      fontSize: fontClamp(16),
                      lineHeight: "150%",
                      letterSpacing: "0%",
                      color: "#FAFAFA",
                      textTransform: "none",
                      bgcolor: "#1751A1",
                      "&:hover": { bgcolor: "#0B4C8C" },
                    }}
                    endIcon={<ArrowRightAltIcon />}
                  >
                    Reach us
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "39px",
                      px: 2.5,
                      height: "48px",
                      fontWeight: 400,
                      fontSize: fontClamp(16),
                      lineHeight: "150%",
                      letterSpacing: "0%",
                      borderColor: "#D1D5DB",
                      color: "#140E13",
                      "&:hover": {
                        borderColor: "#1976d2",
                        background: "#f5faff",
                      },
                    }}
                  >
                    Know more...
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default EngagementModels;
