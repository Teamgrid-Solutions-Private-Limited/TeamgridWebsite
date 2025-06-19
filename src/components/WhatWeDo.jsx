import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Group15 from '../assets/Group 15.svg';

// Sample ecommerce image - replace with your actual images
const ecommerceImage = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

// Sample product images for the grid - replace with your actual images
const productImages = [
  "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
];

// Service categories
const serviceCategories = [
  { id: 1, name: "E-commerce", description: "Convert visitors to sales" },
  { id: 2, name: "Web Development", description: "Clean, modern websites" },
  { id: 3, name: "UI / UX", description: "Design with purpose" },
  { id: 4, name: "Mobile App Development", description: "Apps that perform" },
  { id: 5, name: "Dedicated Teams", description: "Staff your team" },
  { id: 6, name: "AI / ML / Digital", description: "Enhance & drive results" }
];

function WhatWeDo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: '#fff',
      }}
    >
      <Container maxWidth="xl">
        {/* Heading and intro text */}
        <Box sx={{ mb: 5, maxWidth: '700px' }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'PayPal Open',
              fontWeight: 500,
              fontSize: '56px',
              lineHeight: '100%',
              letterSpacing: 0,
              mb: 2,
              color: 'text.primary',
              textAlign: 'left'
            }}
          >
            What We Do
          </Typography>

          <Box sx={{ width: '1200px', height: '41px' }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'PayPal Open',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '150%',
                letterSpacing: 0,
                color: 'text.secondary',
                mb: 3,
                textAlign: 'left'
              }}
            >
              We build AI-powered web and mobile apps with innovative design and scalable development. Our team delivers seamless UI/UX and solutions to help your business grow smarter and faster.
            </Typography>
          </Box>
        </Box>

        {/* Main feature showcase - E-commerce */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            bgcolor: '#f8fafe',
            mb: 3,
            p: { xs: 2, sm: 3, md: 4 },
            backgroundImage: `url(${Group15})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left side - E-commerce content in a white box */}
            <Grid item xs={12} md={5} lg={4}>
              <Box sx={{
                bgcolor: 'transparent',
                
                
                p: { xs: 2, sm: 3 },
                maxWidth: 420,
                ml: { md: 2 },
                mt: { xs: 2, md: 6 },
                mb: { xs: 2, md: 6 },
                
              }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '24px', md: '28px' },
                    fontWeight: 600,
                    mb: 2,
                    color: '#0b3c7b'
                  }}
                >
                  E-commerce
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: 'text.secondary',
                    mb: 3
                  }}
                >
                  We design and develop high-performing e-commerce platforms tailored to your business's needs. Whether it's checkout, we build seamless, scalable, and conversion-focused experiences that drive sales and customer loyalty.
                </Typography>

                <Button
                  variant="text"
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    color: '#0b3c7b',
                    textTransform: 'none',
                    fontWeight: 500,
                    p: 0,
                    '&:hover': {
                      bgcolor: 'transparent',
                      opacity: 0.8
                    }
                  }}
                >
                  Explore Our Portfolio
                </Button>

                <Box sx={{ display: 'flex', mt: 5, mb: 2 }}>
                  <Box 
                    sx={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      bgcolor: '#edf1f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1,
                      cursor: 'pointer'
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#0b3c7b' }} />
                  </Box>
                  <Box 
                    sx={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      bgcolor: '#edf1f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 12, color: '#0b3c7b', transform: 'rotate(180deg)' }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* The right side is left empty for the background image effect */}
          </Grid>

          {/* Service categories at the bottom inside the card */}
          <Box sx={{ mt: { xs: 2, md: 4 } }}>
            <Grid container spacing={1.25} /* 10px gap */>
              {serviceCategories.map((service) => (
                <Grid item xs={6} sm={4} md={2} key={service.id}>
                  <Card
                    sx={{
                      width: '169px',
                      height: '77px',
                      borderRadius: '8px',
                      bgcolor: service.id === 1 ? '#0b3c7b' : 'white',
                      border: service.id === 1 ? 'none' : '1px solid #e0e0e0',
                      boxShadow: 'none',
                      transition: 'all 0.2s',
                      '&:hover': {
                        bgcolor: '#072449',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                      },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      p: 0,
                      m: 0
                    }}
                  >
                    <CardContent sx={{ p: 0, pt: '16px', pr: '24px', pb: '16px', pl: '24px', '&:last-child': { pb: '16px' } }}>
                      <Box sx={{ width: '121px', height: '45px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            mb: 0,
                            color: service.id === 1 ? 'white' : 'text.primary',
                            fontSize: { xs: '14px', sm: '16px' }
                          }}
                        >
                          {service.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: '10px', sm: '12px' },
                            color: service.id === 1 ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                            mb: 0
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default WhatWeDo; 