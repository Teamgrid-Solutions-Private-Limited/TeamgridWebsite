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
  Divider,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WestIcon from '@mui/icons-material/West';

// Import Funiro images from assets
import funiroMainImage from '../assets/Funiro Landing Page 3.svg';
import funiroProductsImage from '../assets/Funiro Landing Page 4.svg';

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
        py: { xs: 5, md: 10 },
        bgcolor: '#fff',
        overflow: 'hidden', // Prevent horizontal scroll on small screens
      }}
    >
      <Container maxWidth="xl">
        {/* Heading and intro text */}
        <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: '800px' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', sm: '32px', md: '42px' },
              fontWeight: 700,
              mb: { xs: 1.5, md: 2 },
              color: 'text.primary'
            }}
          >
            What We Do
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', sm: '16px' },
              lineHeight: 1.6,
              color: 'text.secondary',
              mb: { xs: 2, md: 3 }
            }}
          >
            We build AI-powered web and mobile apps with innovative design and scalable development. Our team delivers seamless UI/UX and solutions to help your business grow smarter and faster.
          </Typography>
        </Box>

        {/* Main feature showcase - E-commerce */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #E1ECF7 0%, #E2E9F0 103.33%)',
            mb: 3,
            height: { xs: 'auto', md: 585 },
            minHeight: { xs: 700, sm: 585 },
            position: 'relative',
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 2, 
            height: '100%',
            pb: { xs: '240px', sm: '210px', md: 0 } // Add bottom padding on mobile for the grid
          }}>
            {/* Left side - text content */}
            <Box 
              sx={{ 
                width: { xs: '100%', md: '50%' },
                pt: { xs: 4, md: 0 }
              }} 
              alignItems='center' 
              justifyContent='center' 
              display={'flex'}
            >
              <Box 
                sx={{ px: { xs: 3, md: 2 }, pr: { md: 2 } }} 
                display='flex' 
                flexDirection='column' 
                justifyContent='center' 
                height='100%' 
                width={{ xs: '100%', md: '80%' }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '22px', sm: '24px', md: '28px' },
                    fontWeight: 600,
                    mb: { xs: 1.5, md: 2 },
                    color: '#140E13'
                  }}
                >
                  E-commerce
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '14px', md: '15px' },
                    lineHeight: 1.6,
                    mb: { xs: 2, md: 3 },
                    color: '#000000'
                  }}
                >
                  We design and develop high-performing e-commerce platforms tailored to your business's needs. Whether it's checkout, we build seamless, scalable, and conversion-focused experiences that drive sales and customer loyalty.
                </Typography>

                <Button
                  variant="text"
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    color: 'black',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: { xs: '12px', sm: '14px', md: '16px' },
                    border: '1px solid rgba(168, 189, 211, 1)',
                    borderRadius: '30px',
                    padding: '5px 15px',
                    width: 'fit-content',
                    '&:hover': {
                      bgcolor: 'transparent',
                      opacity: 0.8
                    }
                  }}
                >
                  Explore Our Portfolio
                </Button>

                <Box sx={{ display: 'flex', mt: { xs: 3, md: 5 }, mb: 2 }}>
                  <Box 
                    sx={{ 
                      width: { xs: 45, sm: 56 }, 
                      height: { xs: 45, sm: 56 }, 
                      borderRadius: '50%', 
                      bgcolor: '#edf1f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1,
                      cursor: 'pointer'
                    }}
                  >
                    <WestIcon sx={{ fontSize: { xs: 18, sm: 20 }, color: '#0b3c7b' }} />
                  </Box>
                  <Box 
                    sx={{ 
                      width: { xs: 45, sm: 56 }, 
                      height: { xs: 45, sm: 56 }, 
                      borderRadius: '50%', 
                      bgcolor: '#edf1f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <WestIcon sx={{ fontSize: { xs: 18, sm: 20 }, color: '#0b3c7b', transform: 'rotate(180deg)' }} />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Right side - image showcase */}
            <Box sx={{ 
              width: { xs: '100%', md: '50%' }, 
              position: 'relative',
              height: { xs: 320, sm: 350, md: 'auto' },
              mt: { xs: 0, md: 0 },
              display: { xs: 'flex', md: 'block' },
              justifyContent: 'center',
              overflow: 'visible'
            }}>
              <Box 
                sx={{ 
                  display: { xs: 'block', md: 'flex' },
                  flexDirection: 'column', 
                  height: '100%',
                  width: { xs: '75%', sm: '60%', md: 382 }, 
                  maxWidth: { xs: 300, sm: 320, md: 382 },
                  position: { xs: 'absolute', md: 'absolute' }, 
                  top: { xs: 10, sm: 20, md: 60 }, 
                  left: { xs: '50%', md: 0 }, 
                  transform: { xs: 'translateX(-50%)', md: 'none' },
                  zIndex: 10,
                  maxHeight: { xs: '90%', md: '100%' },
                  filter: 'drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.18))'
                }} 
                component="img" 
                src={funiroProductsImage} 
                alt="Funiro products showcase" 
              />
              <Box 
                sx={{ 
                  display: { xs: 'none', sm: 'flex' },
                  flexDirection: 'column', 
                  height: '100%',
                  width: { sm: 240, md: 280, lg: 345 }, 
                  position: 'absolute', 
                  top: { sm: 0, md: -10 }, 
                  left: { sm: '50%', md: 250 },
                  transform: { sm: 'translateX(25%)', md: 'none' },
                  zIndex: 1,
                  maxHeight: { xs: '80%', md: '100%' },
                  filter: 'drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.18))'
                }} 
                component="img" 
                src={funiroMainImage} 
                alt="Funiro E-commerce showcase" 
              />
            </Box>
          </Box>
          <Box 
            sx={{
              position: 'absolute', 
              bottom: { xs: 10, md: 20 }, 
              left: 0, 
              right: 0,
              zIndex: 100,
              width: '100%',
              padding: 0
            }} 
            display={'flex'} 
            justifyContent={'center'} 
          >
            {/* Services row with dividers using CSS flexbox wrapping */}
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255,1)',
                backdropFilter: 'blur(156.89999389648438px)',
                borderRadius: 2,
                width: '95%',
                padding: { xs: '8px', sm: '8px' },
                boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  position: 'relative',
                  minHeight: '80px',
                  gap: '2px',
                  
                  // Special styles for small screens
                  '@media (max-width: 600px)': {
                    gap: '4px',
                    '& > div': {
                      width: 'calc(33.33% - 4px)',
                      position: 'relative',
                      '&:not(:nth-of-type(3n))::after': {
                        content: '""',
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: '70%',
                        width: '1px',
                        backgroundColor: '#DDDDDD',
                        zIndex: 1
                      },
                      '&:hover::after, &:nth-child(1)::after': {
                        opacity: 0
                      },
                      '&:nth-of-type(-n+3)': {
                        borderBottom: '1px solid #DDDDDD',
                        marginBottom: '2px',
                        paddingBottom: '8px'
                      },
                      '&:nth-of-type(n+4)': {
                        marginTop: '2px',
                        paddingTop: '8px'
                      }
                    }
                  },
                  
                  // Styles for medium screens and up
                  '@media (min-width: 601px)': {
                    flexWrap: 'nowrap',
                    gap: '3px',
                    '& > div': {
                      flex: '1 1 calc(16.66% - 3px)',
                      '&:not(:last-child)::after': {
                        content: '""',
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: '40%',
                        width: '1px',
                        backgroundColor: '#DDDDDD',
                        zIndex: 1
                      },
                      '&:hover::after, &:nth-child(1)::after': {
                        opacity: 0
                      }
                    }
                  }
                }}
              >
                {serviceCategories.map((service, index) => (
                  <Box
                    key={service.id}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: { xs: '3px', sm: '0 8px' },
                      textAlign: 'center',
                      position: 'relative',
                      cursor: 'pointer',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      backgroundColor: service.id === 1 ? '#0b3c7b' : 'transparent',
                      zIndex: 2,
                      '&:hover': {
                        backgroundColor: '#0b3c7b',
                        '& .service-text': {
                          color: 'white'
                        },
                        '& .service-description': {
                          color: 'rgba(255,255,255,0.9)'
                        },
                        '&::after': {
                          opacity: 0
                        }
                      }
                    }}
                  >
                    <Typography
                      className="service-text"
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                        color: service.id === 1 ? 'white' : 'text.primary',
                        fontSize: { xs: '11px', sm: '14px', md: '16px' },
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      className="service-description"
                      variant="body2"
                      sx={{
                        fontSize: { xs: '9px', sm: '11px', md: '12px' },
                        color: service.id === 1 ? 'rgba(255,255,255,0.9)' : 'text.secondary',
                        lineHeight: 1.2,
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Service categories */}

      </Container>
    </Box>
  );
}

export default WhatWeDo; 