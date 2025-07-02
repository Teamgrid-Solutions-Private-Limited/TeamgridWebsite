import React, { useState } from "react";
import { Box, Typography, Paper, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const questions = [
  {
    q: "Can I hire a front-end developer for just a week or two?",
    a: "Yes, we offer short-term engagements perfectly suited for urgent UI needs, one-off tasks, or overflow support when your internal team is at capacity.",
  },
  {
    q: "Do your developers follow responsive and accessibility guidelines?",
    a: "",
  },
  {
    q: "Can you work with our in-house backend team?",
    a: "",
  },
];

function GotQuestions() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <Box sx={{ bgcolor: "#F4F8FC", minHeight: "100vh", py: 8 }}>
      <Box sx={{ maxWidth: 700, mx: "auto", textAlign: "center", mb: 5 }}>
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{ fontSize: { xs: 32, md: 48 } }}
          gutterBottom
        >
          Got Questions
        </Typography>
        <Typography sx={{ color: "#222", fontSize: 18 }}>
          Clear responses to common questions about how we work and what we
          deliver.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: 700,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {questions.map((item, idx) => (
          <Paper
            key={item.q}
            elevation={0}
            sx={{
              borderRadius: 4,
              p: 3,
              bgcolor: "#fff",
              border: "1.5px solid #E3EAF3",
              boxShadow: "0 2px 8px 0 rgba(16,30,54,0.04)",
              textAlign: "left",
              transition: "border 0.2s",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
            >
              <Typography
                sx={{ color: "#1751A1", fontWeight: 500, fontSize: 20 }}
              >
                {item.q}
              </Typography>
              <IconButton size="small" sx={{ color: "#1751A1" }}>
                {openIdx === idx ? <RemoveIcon /> : <AddIcon />}
              </IconButton>
            </Box>
            <Collapse in={openIdx === idx}>
              {item.a && (
                <Typography sx={{ color: "#222", fontSize: 16, mt: 2 }}>
                  {item.a}
                </Typography>
              )}
            </Collapse>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default GotQuestions;
