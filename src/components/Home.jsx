import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  useTheme, 
  useMediaQuery, 
  Modal,
  Card,
  CardContent,
  IconButton
} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import teamgridLogo from "../assets/Group 8.svg";

const techIcons = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    name: "Figma",
    info: "Figma is a collaborative design tool for UI and UX.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    name: "Bootstrap",
    info: "Bootstrap is a CSS framework for responsive design.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    name: "WordPress",
    info: "WordPress is a CMS for building websites.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    name: "Shopify",
    info: "Shopify is an e-commerce platform.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    name: "React",
    info: "React is a JavaScript library for building UI.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    name: "PostgreSQL",
    info: "PostgreSQL is an advanced open-source database.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    name: "Material UI",
    info: "Material UI is a React UI framework based on Material Design.",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/919/919842.png",
    name: "Expo",
    info: "Expo is a framework for React Native apps.",
  },
];

function Home() {
  const [selected, setSelected] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        minHeight: { xs: 'auto', md: '859px' },
        py: { xs: 6, md: 0 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Grid container spacing={3} sx={{ height: '100%', alignItems: 'center' }}>
          <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
            <Box sx={{ py: { xs: 4, md: 0 } }}>
              <Typography 
                variant="subtitle1" 
                color="grey.300" 
                sx={{ mb: 2, fontWeight: 500 }}
              >
                Powering growth through talent
              </Typography>
              
              <Typography 
                variant="h1" 
                color="common.white" 
                sx={{ 
                  mb: 3,
                  fontSize: { xs: '36px', sm: '48px', md: '64px' },
                  maxWidth: { xs: '100%', md: '792px' }
                }}
              >
                Extend Your Team, Accelerate Your Growth
              </Typography>
              
              <Typography 
                variant="subtitle1" 
                color="grey.300" 
                sx={{ 
                  mb: 4,
                  maxWidth: { xs: '100%', md: '848px' }
                }}
              >
                We help agencies and startups scale smarter — with dedicated
                professionals, high-quality solutions, and flexible engagement
                models that fit your workflow and goals.
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2
                }}
              >
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  sx={{ 
                    minWidth: { xs: '100%', sm: '204px' },
                    fontSize: '18px'
                  }}
                >
                  Let's Talk
                </Button>
                
                <Button 
                  variant="outlined" 
                  color="inherit"
                  size="large"
                  endIcon={<ArrowRightAltIcon />}
                  sx={{ 
                    minWidth: { xs: '100%', sm: '230px' },
                    fontSize: '18px',
                    borderColor: 'rgba(255, 255, 255, 0.27)',
                    color: 'common.white',
                    '&:hover': {
                      borderColor: 'common.white',
                      bgcolor: 'rgba(255, 255, 255, 0.08)'
                    }
                  }}
                >
                  Explore Services
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5} sx={{ order: { xs: 1, md: 2 } }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '400px', md: '600px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '300px', sm: '400px', md: '623px' },
                  height: { xs: '300px', sm: '400px', md: '623px' },
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  animation: 'rotate 500s linear infinite',
                  '@keyframes rotate': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                  },
                }}
              >
                {techIcons.map((icon, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={icon.src}
                    alt={icon.name}
                    sx={{
                      width: { xs: '32px', md: '40px' },
                      height: { xs: '32px', md: '40px' },
                      padding: '8px',
                      bgcolor: 'rgba(13, 38, 79, 1)',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: `rotate(calc(${index} * 45deg)) 
                                 translateX(${isMobile ? '140px' : isTablet ? '180px' : '280px'}) 
                                 rotate(calc(${index} * -45deg))`,
                      transition: 'transform 0.1s',
                      cursor: 'pointer',
                      zIndex: 2
                    }}
                    onClick={() => setSelected(icon)}
                  />
                ))}
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '220px', sm: '300px', md: '491px' },
                  height: { xs: '220px', sm: '300px', md: '491px' },
                  borderRadius: '50%',
                  bgcolor: 'rgba(10, 43, 85, 1)',
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '180px', sm: '240px', md: '373px' },
                  height: { xs: '180px', sm: '240px', md: '373px' },
                  borderRadius: '50%',
                  bgcolor: 'rgba(11, 49, 97, 1)',
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '120px', sm: '160px', md: '245px' },
                  height: { xs: '120px', sm: '160px', md: '245px' },
                  borderRadius: '50%',
                  bgcolor: 'rgba(27, 57, 119, 1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 3,
                }}
              >
                <Box
                  component="img"
                  src={teamgridLogo}
                  alt="Teamgrid logo"
                  sx={{
                    width: { xs: '60px', sm: '80px', md: '106px' },
                    height: { xs: '90px', sm: '120px', md: '160px' },
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Modal
        open={Boolean(selected)}
        onClose={handleClose}
        aria-labelledby="tech-info-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card sx={{ 
          maxWidth: 400, 
          width: '90%', 
          bgcolor: '#0e2c54', 
          color: 'white', 
          borderRadius: 3,
          position: 'relative',
          p: 3
        }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'grey.400',
            }}
          >
            <CloseIcon />
          </IconButton>
          <CardContent>
            <Typography variant="h5" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
              {selected?.name}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              {selected?.info}
            </Typography>
          </CardContent>
        </Card>
      </Modal>
    </Box>
  );
}

export default Home;
