import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
  InputAdornment,
  Fade,
} from "@mui/material";
import { Email, Phone, Person, Message } from "@mui/icons-material";

const CONTACT_INFO = {
  address: "Kolkata",
  email: "hello@teamgrid.com",
  phone: "+1 (555) 123-4567",
};

function ContactUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #05408E 0%, #0070FF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 8, lg: 12 },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          backdropFilter: "blur(15px)",
          backgroundColor: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 6,
          maxWidth: 1000,
          width: "100%",
          p: { xs: 3, md: 6 },
          color: "white",
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Left Info Section */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#fff",
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, color: "rgba(255,255,255,0.8)" }}
              >
                Have a project in mind or want to learn more? Fill out the form
                and our team will get back to you soon.
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Address
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {CONTACT_INFO.address}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Email
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {CONTACT_INFO.email}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Phone
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {CONTACT_INFO.phone}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Right Form Section */}
          <Grid
            item
            spacing={6}
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
                justifyContent: "center",
                
              }}
            >
              <Fade in={!submitted} timeout={500} unmountOnExit>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <TextField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    sx={{
                      input: { color: "#fff" },
                      "& label": { color: "#fff" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#fff" },
                        "&:hover fieldset": { borderColor: "#ccc" },
                      },
                    }}
                  />

                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    sx={{
                      input: { color: "#fff" },
                      "& label": { color: "#fff" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#fff" },
                        "&:hover fieldset": { borderColor: "#ccc" },
                      },
                    }}
                  />

                  <TextField
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    sx={{
                      input: { color: "#fff" },
                      "& label": { color: "#fff" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#fff" },
                        "&:hover fieldset": { borderColor: "#ccc" },
                      },
                    }}
                  />

                  <TextField
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    fullWidth
                    multiline
                    minRows={4}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Message />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    sx={{
                      textarea: { color: "#fff" },
                      "& label": { color: "#fff" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#fff" },
                        "&:hover fieldset": { borderColor: "#ccc" },
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    sx={{
                      borderRadius: "30px",
                      mt: 1,
                      textTransform: "none",
                      fontWeight: 600,
                      backgroundColor: "#fff",
                      color: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Fade>

              <Fade in={submitted} timeout={500}>
                <Box sx={{ textAlign: "center", py: 6 }}>
                  <Typography variant="h5" color="success.main" gutterBottom>
                    Thank you for contacting us!
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    We'll get back to you soon.
                  </Typography>
                </Box>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ContactUs;
