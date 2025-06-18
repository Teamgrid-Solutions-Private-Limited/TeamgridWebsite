import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import backgroundImage from '../assets/Rectangle 25.svg';

function Letstalk() {
  return (
    <Box
      sx={{
        background: `url(${backgroundImage}), #085BC8`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'flex-start' },
        py: { xs: 6, md: 0 },
        height: { xs: 'auto', md: '592px' },
        px: { xs: 2, md: 12 }
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '600px', md: '792px' },
          height: { xs: 'auto', md: '428px' },
          bgcolor: 'rgba(18, 38, 64, 0.9)',
          borderRadius: 3,
          p: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          gap: 1.25,
          color: 'white',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            fontSize: { xs: '36px', sm: '42px', md: '56px' },
            lineHeight: 1,
            mb: 2.5
          }}
        >
          Let's Build Together
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
            fontWeight: 400,
            lineHeight: 1.5,
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 2.5
          }}
        >
          — Efficiently, Flexibly, and Reliably
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            fontWeight: 400,
            lineHeight: 1.5,
            opacity: 0.8,
            mb: 5
          }}
        >
          Whether you're scaling a team or shipping a project, Teamgrid is your partner in dependable delivery.
        </Typography>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={1.25}
          sx={{ mt: 'auto' }}
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
              height: { xs: '48px', md: '59px' },
              fontSize: '18px',
              fontWeight: 400,
              textTransform: 'none'
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
              width: { xs: '100%', sm: '262px' },
              height: { xs: '48px', md: '59px' },
              fontSize: '18px',
              fontWeight: 400,
              textTransform: 'none'
            }}
          >
            Request a Free Quote
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Letstalk; 