import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import data from "../data.json";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { quickLinks, services, contact, copyright } = data.footer;

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "#051a36",
        color: "white",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 2, md: 4, lg: 8, xl: 0 },
        }}
      >
        <Grid container spacing={4}>
          {/* Blogs Section */}
          <Grid xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Blogs
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                How AI Is Transforming Web & Mobile App Development in 2025
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                Choosing the Right Tech Stack for Scalable Product Development
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                Design Smarter: Why UI/UX Matters More Than Ever in AI-Powered
                Apps
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                Fixed-Cost vs. Dedicated Teams: What Works Best for Your Next
                Project?
              </Link>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  underline="hover"
                  color="inherit"
                  sx={{
                    fontSize: "14px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Services
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href="#"
                  underline="hover"
                  color="inherit"
                  sx={{
                    fontSize: "14px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {service}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Policies */}
          <Grid xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Policies
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                NDA Available on Request
              </Link>
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
          <Box sx={{ maxWidth: "400px", width: { xs: "100%", md: "auto" } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Need Assistance? Call Us!
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                lineHeight: 1.6,
                mb: 2,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Our experts are here to help. Contact us for personalised guidance
              or any queries about your project or digital solution.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                mb: 1,
              }}
            >
              {contact.phone}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Mail us at {contact.email}
            </Typography>
          </Box>

          {/* Newsletter Section */}
          <Box sx={{ maxWidth: "450px", width: { xs: "100%", md: "auto" } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Stay Connected with Our Newsletter
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                lineHeight: 1.6,
                mb: 3,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Stay updated with expert insights, smart development tips, and
              exclusive Teamgrid news—delivered straight to your inbox.
            </Typography>

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
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      sx={{
                        color: "white",
                        bgcolor: "#0b3c7b",
                        borderRadius: "50%",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          bgcolor: "#0a3266",
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <SendIcon />
                    </IconButton>
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
          </Box>
        </Box>

        {/* Disclaimer and Copyright */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.5)",
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
              fontSize: "12px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
