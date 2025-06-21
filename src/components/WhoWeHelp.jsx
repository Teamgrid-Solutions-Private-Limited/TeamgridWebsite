import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  rectangleImage1 as Rectangle40,
  rectangleImage2 as Rectangle41,
  rectangleImage3 as Rectangle45,
  rectangleImage4 as Rectangle46,
} from "../images";

// Replace image URLs with local assets
const image1 = Rectangle40;
const image2 = Rectangle41;
const image3 = Rectangle45;
const image4 = Rectangle46;

// Define component using named function
const WhoWeHelp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#fff",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:"100%"
      }}
    >
      <Container
        maxWidth="1400px"
        sx={{
          px: { xs: 2, md: 4, lg: 8, xl: 0 },
          width:'1400px',
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
         gap:'20px'
          }}
        >
          {/* Left Column - Text and Button */}
          <Box
            sx={{
             
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", sm: "36px", md: "42px" },
                fontWeight: 700,
                mb: 1,
                color: "#000",
              }}
            >
              Who We Help
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "text.secondary",
                mb: 3,
              }}
            >
              A Trusted Partner for Growing Teams
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                mb: 4,
                color: "text.secondary",
                lineHeight: 1.6,
              }}
            >
              We work with agencies, startups, and businesses of all sizes —
              supporting their teams and projects. We specialize in design,
              development, and everything in between that matters most.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                borderRadius: "40px",
                px: 3,
                py: 1.5,
                textTransform: "none",
                fontSize: "16px",
                boxShadow: "none",
                alignSelf: "flex-start",
              }}
            >
              Explore Services
            </Button>
          </Box>

          {/* Right Column - Staggered Image Layout */}
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              position: "relative",
              height: { xs: "700px", md: "700px" },
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {/* Left Column Images */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "272.87px",
                marginTop: "50px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  bgcolor: "#f6efef",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                  height: "324.15px",
                }}
              >
                <Box
                  component="img"
                  src={image1}
                  alt="Team member"
                  sx={{
                    width: "272.87px",
                    height: "324.15px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>

              <Box
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  bgcolor: "#f6efef",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                  height: "324.15px",
                }}
              >
                <Box
                  component="img"
                  src={image3}
                  alt="Group discussion"
                  sx={{
                    width: "272.87px",
                    height: "324.15px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Box>

            {/* Right Column Images */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "272.87px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  bgcolor: "#fce5e3",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                  height: "324.15px",
                }}
              >
                <Box
                  component="img"
                  src={image2}
                  alt="Team collaborating"
                  sx={{
                    width: "272.87px",
                    height: "324.15px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>

              <Box
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  bgcolor: "#fdecd2",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                  height: "324.15px",
                }}
              >
                <Box
                  component="img"
                  src={image4}
                  alt="Person working"
                  sx={{
                    width: "272.87px",
                    height: "324.15px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Export the component
export default WhoWeHelp;
