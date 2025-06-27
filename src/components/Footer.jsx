import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import data from "../data.json";
import { FiSend } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const currentYear = new Date().getFullYear();

  const { quickLinks, services, contact, copyright } = data.footer;
  const dynamicCopyright = copyright.replace(/\d{4}/, currentYear);

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "#051a36",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="1200px"
        sx={{
          display: "flex",
          flexDirection: "column",
          px: {
            xs: 2.5,
            md: 4,
            lg: 8,
            xl: 0,
          },
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }}>
          {/* Blogs Section */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                mb: 3,
              }}
            >
              Blogs
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                component={RouterLink}
                to={"/"}
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  transition: "all 0.2s ease",
                  color: "#A8B6C5",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "#ffffff",
                    textDecoration: "underline",
                  },
                }}
              >
                How AI Is Transforming Web & Mobile App Development in 2025
              </Box>
              <Box
                component={RouterLink}
                to={"/"}
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  transition: "all 0.2s ease",
                  color: "#A8B6C5",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "#ffffff",
                    textDecoration: "underline",
                  },
                }}
              >
                Choosing the Right Tech Stack for Scalable Product Development
              </Box>
              <Box
                component={RouterLink}
                to={"/"}
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  transition: "all 0.2s ease",
                  color: "#A8B6C5",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "#ffffff",
                    textDecoration: "underline",
                  },
                }}
              >
                Design Smarter: Why UI/UX Matters More Than Ever in AI-Powered
                Apps
              </Box>
              <Box
                component={RouterLink}
                to={"/"}
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  transition: "all 0.2s ease",
                  color: "#A8B6C5",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "#ffffff",
                    textDecoration: "underline",
                  },
                }}
              >
                Fixed-Cost vs. Dedicated Teams: What Works Best for Your Next
                Project?
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                mb: 3,
              }}
            >
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {quickLinks.map((link, index) => (
                <Box
                  component={RouterLink}
                  to={"/"}
                  key={index}
                  sx={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: 400,
                    transition: "all 0.2s ease",
                    color: "#A8B6C5",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateX(5px)",
                      color: "#ffffff",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {link}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                mb: 3,
              }}
            >
              Services
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {services.map((service, index) => (
                <Box
                  component={RouterLink}
                  to={service.link}
                  key={index}
                  sx={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: 400,
                    transition: "all 0.2s ease",
                    color: "#A8B6C5",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateX(5px)",
                      color: "#ffffff",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {service.name}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Policies */}
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                mb: 3,
              }}
            >
              Policies
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                component={RouterLink}
                to={"/"}
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  transition: "all 0.2s ease",
                  color: "#A8B6C5",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "#ffffff",
                    textDecoration: "underline",
                  },
                }}
              >
                Terms & Conditions
              </Box>
              <Box
                component={RouterLink}
                to={"/"}
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  transition: "all 0.2s ease",
                  color: "#A8B6C5",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "#ffffff",
                    textDecoration: "underline",
                  },
                }}
              >
                Privacy Policy
              </Box>
              <Box
                component={RouterLink}
                to={"/"}
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  transition: "all 0.2s ease",
                  color: "#A8B6C5",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "#ffffff",
                    textDecoration: "underline",
                  },
                }}
              >
                NDA Available on Request
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 0 },
            justifyContent: "space-between",
          }}
        >
          {/* Contact Section */}
          <Box sx={{ maxWidth: "40%", width: { xs: "100%", md: "auto" } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                mb: 2,
              }}
            >
              Need Assistance? Call Us!
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.6,
                mb: 2,
                color: "#A8B6C5",
              }}
            >
              Our experts are here to help. Contact us for personalised guidance
              or any queries about your project or digital solution.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                mb: 1,
              }}
            >
              {contact.phone}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#A8B6C5",
              }}
            >
              Mail us at {contact.email}
            </Typography>
          </Box>

          {/* Newsletter Section */}
          <Box sx={{ maxWidth: "40%", width: { xs: "100%", md: "auto" } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                mb: 2,
              }}
            >
              Stay Connected with Our Newsletter
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.6,
                mb: 3,
                color: "#A8B6C5",
              }}
            >
              Stay updated with expert insights, smart development tips, and
              exclusive Teamgrid news—delivered straight to your inbox.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <TextField
                fullWidth
                placeholder="Your email ID"
                variant="outlined"
                sx={{
                  transition: "all 0.3s ease",
                  "&:focus-within": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "rgba(255,255,255,0.5)" }} />
                    </InputAdornment>
                  ),

                  sx: {
                    bgcolor: "rgba(255,255,255,0.05)",
                    borderRadius: "50px",
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.5)",
                    },
                  },
                }}
              />
              <IconButton
                edge="end"
                sx={{
                  color: "white",
                  borderRadius: "50%",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "#0a3266",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <FiSend size={24} />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Disclaimer and Copyright */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#A8B6C5",
              mb: 2,
            }}
          >
            Disclaimer : Content and services on this site are for general
            information only and may change. Teamgrid is not liable for outcomes
            influenced by third-party tools or evolving technologies.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#A8B6C5",
            }}
          >
            {dynamicCopyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
