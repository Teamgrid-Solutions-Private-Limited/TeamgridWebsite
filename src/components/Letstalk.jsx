import React from 'react';
import { Box, Typography, Button, Container, Stack, useTheme, useMediaQuery } from '@mui/material';
import { rectangleImage25 as backgroundImage } from '../images';

function Letstalk() {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        background: `url(${backgroundImage}), #085BC8`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'flex-start' },
        py: { xs: 5, sm: 6, md: 0 },
        height: { xs: 'auto', md: '592px' },
        px: { xs: 2, sm: 3, md: 6, lg: 12 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '90%', md: '70%', lg: '50%', xl: '792px' },
          maxWidth: { xs: '100%', sm: '600px', md: '792px' },
          height: { xs: 'auto', md: 'auto' },
          minHeight: { xs: 'auto', md: '428px' },
          bgcolor: 'rgba(18, 38, 64, 0.9)',
          borderRadius: { xs: 2, sm: 3 },
          p: { xs: 3, sm: 4, md: 6, lg: 8 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 1, md: 1.25 },
          color: 'white',
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            fontSize: { xs: '28px', sm: '36px', md: '42px', lg: '56px' },
            lineHeight: 1.2,
            mb: { xs: 1.5, sm: 2, md: 2.5 }
          }}
        >
          Let's Build Together
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '24px' },
            fontWeight: 400,
            lineHeight: 1.5,
            color: 'rgba(255, 255, 255, 0.7)',
            mb: { xs: 1.5, sm: 2, md: 2.5 }
          }}
        >
          — Efficiently, Flexibly, and Reliably
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
            fontWeight: 400,
            lineHeight: 1.5,
            opacity: 0.8,
            mb: { xs: 3, sm: 4, md: 5 }
          }}
        >
          Whether you're scaling a team or shipping a project, Teamgrid is your partner in dependable delivery.
        </Typography>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={{ xs: 1, sm: 1.25 }}
          sx={{ 
            mt: { xs: 1, md: 'auto' },
            width: '100%',
            justifyContent: { xs: 'center', sm: 'flex-start' }
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: '#122640',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
              borderRadius: '39px',
              width: { xs: '100%', sm: '156px' },
              height: { xs: '44px', sm: '48px', md: '54px', lg: '59px' },
              fontSize: { xs: '15px', sm: '16px', md: '18px' },
              fontWeight: 400,
              textTransform: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Let's Talk
          </Button>

          <Button
            variant="contained"
            sx={{
              bgcolor: '#FF5A2D',
              '&:hover': {
                bgcolor: '#e54b24',
              },
              borderRadius: '39px',
              width: { xs: '100%', sm: '220px', md: '262px' },
              height: { xs: '44px', sm: '48px', md: '54px', lg: '59px' },
              fontSize: { xs: '15px', sm: '16px', md: '18px' },
              fontWeight: 400,
              textTransform: 'none',
              transition: 'all 0.3s ease',
              lineHeight: 1.1,
              whiteSpace: { xs: 'normal', sm: 'nowrap' },
              padding: { xs: '6px 12px', sm: '6px 16px' },
              '& .MuiButton-label': {
                display: 'inline-block'
              }
            }}
          >
            Request a Free Quote
          </Button>
        </Stack>
      </Box>
      
      {/* Background overlay for better text contrast */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(8, 91, 200, 0.2)',
          zIndex: 1,
        }}
      />
    </Box>
  );
}

export default Letstalk; 