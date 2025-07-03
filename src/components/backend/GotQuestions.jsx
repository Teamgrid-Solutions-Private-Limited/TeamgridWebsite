import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Collapse,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { fontClamp } from "../../fontUtils";
import data from "../../data.json";

const backendData = data.backend.gotQuestions;
const questions = backendData.questions;

function GotQuestions() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <Box
      sx={{
        background: "#F4F9FF",
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
          height: "100%",
          my: { xs: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "477px" },
            mx: "auto",
            textAlign: "center",
            mb: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              fontWeight: 500,
              fontSize: fontClamp(48),
              leadingTrim: "Cap height",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#140E13",
            }}
            gutterBottom
          >
            {backendData.title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: fontClamp(18),
              lineHeight: "150%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#000000",
            }}
          >
            {backendData.description}
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
                borderRadius: "24px",
                p: 3,
                bgcolor: "#FFFFFF",
                border: "1.5px solid #D2E6FF",
                boxShadow: "0 2px 8px 0 rgba(16,30,54,0.04)",
                textAlign: "left",
                transition: "border 0.2s",
                width: "100%",
                maxWidth: "588px",
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
                  sx={{
                    fontWeight: 400,
                    fontSize: fontClamp(18),
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    color: "#05408E",
                  }}
                >
                  {item.q}
                </Typography>
                <IconButton size="small" sx={{ color: "#05408E" }}>
                  {openIdx === idx ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
              </Box>
              <Collapse in={openIdx === idx}>
                {item.a && (
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: fontClamp(16),
                      lineHeight: "150%",
                      letterSpacing: "0%",
                      color: "#140E13",
                      mt: 1,
                    }}
                  >
                    {item.a}
                  </Typography>
                )}
              </Collapse>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default GotQuestions;
