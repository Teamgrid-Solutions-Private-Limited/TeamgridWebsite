import React from "react";
import { Box, Typography, Paper, Stack, Button, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const models = [
  {
    title: "Flexible Time & Material Model for Evolving Needs",
    points: [
      "Pay only for hours worked",
      "Ideal for ongoing or evolving tasks",
      "Transparent weekly timesheets",
    ],
  },
  {
    title: "Dedicated Front-End Developer",
    points: [
      "Full-time resource working under your brand",
      "Monthly fixed cost",
      "Flexible replacement or scaling",
    ],
  },
  {
    title: "Fixed-Cost Model for Defined Scopes",
    points: [
      "Ideal for defined scopes like landing pages or small apps",
      "Detailed estimate upfront",
      "Milestone-based delivery & billing",
    ],
  },
];

function EngagementModels() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 6, px: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 3,
            px: 3,
            py: 1,
            fontWeight: 500,
            textTransform: "none",
            borderColor: "#D1D5DB",
            color: "#222",
            boxShadow: "none",
            "&:hover": { borderColor: "#1976d2", background: "#f5faff" },
          }}
          endIcon={<span style={{ fontSize: 18, marginLeft: 4 }}>→</span>}
        >
          Explore Services
        </Button>
      </Box>
      <Typography
        variant="h2"
        fontWeight={700}
        sx={{ mb: 1, fontSize: { xs: 32, md: 48 } }}
      >
        Engagement Models
      </Typography>
      <Typography sx={{ mb: 5, color: "#222", fontSize: 18 }}>
        Choose the engagement model that best suits your project needs
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {models.map((model, idx) => (
          <Grid item xs={12} md={4} key={model.title}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 5,
                p: 4,
                bgcolor: "#F7F9FB",
                minHeight: 320,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 2px 8px 0 rgba(16,30,54,0.04)",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                color="#1751A1"
                sx={{ mb: 2 }}
              >
                {model.title}
              </Typography>
              <Box sx={{ mb: 3 }}>
                {model.points.map((point, i) => (
                  <Box
                    key={i}
                    sx={{ display: "flex", alignItems: "center", mb: 1.2 }}
                  >
                    <CheckCircleIcon
                      sx={{ color: "#4CE0B3", fontSize: 22, mr: 1 }}
                    />
                    <Typography sx={{ color: "#222", fontSize: 16 }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    fontWeight: 500,
                    textTransform: "none",
                    bgcolor: "#1751A1",
                    "&:hover": { bgcolor: "#0B4C8C" },
                  }}
                  endIcon={
                    <span style={{ fontSize: 18, marginLeft: 4 }}>→</span>
                  }
                >
                  Reach us
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    fontWeight: 500,
                    textTransform: "none",
                    bgcolor: "#fff",
                    borderColor: "#D1D5DB",
                    color: "#222",
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
    </Box>
  );
}

export default EngagementModels;
