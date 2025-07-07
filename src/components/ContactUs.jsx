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
} from "@mui/material";

const CONTACT_INFO = {
  address:
    "123 Innovation Street, Tech Park, San Francisco, CA 94103, United States",
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
    // Here you would handle sending the form data to your backend or email service
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #05408E 0%, #0070FF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 8 },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          borderRadius: 6,
          maxWidth: 900,
          width: "100%",
          p: { xs: 3, md: 6 },
          mx: 2,
        }}
      >
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  mb: 1,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, color: theme.palette.text.secondary }}
              >
                Have a project in mind or want to learn more? Fill out the form
                and our team will get back to you soon.
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Address
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {CONTACT_INFO.address}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Email
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {CONTACT_INFO.email}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Phone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {CONTACT_INFO.phone}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                height: "100%",
                justifyContent: "center",
              }}
            >
              {submitted ? (
                <Box sx={{ textAlign: "center", py: 6 }}>
                  <Typography variant="h5" color="success.main" gutterBottom>
                    Thank you for contacting us!
                  </Typography>
                  <Typography variant="body1">
                    We'll get back to you soon.
                  </Typography>
                </Box>
              ) : (
                <>
                  <TextField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    fullWidth
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
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ borderRadius: "40px", mt: 1 }}
                  >
                    Send Message
                  </Button>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ContactUs;
