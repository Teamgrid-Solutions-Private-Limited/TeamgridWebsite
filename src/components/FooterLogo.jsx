import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import styles from '../style/Footer.module.css';
import { teamgridLogo } from '../images';

function FooterLogo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      sx={{ 
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        mx: 'auto',
        mb: 6
      }}
      className={styles.logoSection}
    >
      <Box 
        component="img"
        src={teamgridLogo}
        alt="Teamgrid Logo"
        sx={{
          height: '40px',
          mb: 2
        }}
      />

      <Typography
        variant="body2"
        sx={{
          fontSize: '14px',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '600px',
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        Teamgrid is a leading web and mobile app development company specializing in custom solutions, 
        AI integration, and cutting-edge design. We help businesses transform their digital presence 
        with expertise and innovation.
      </Typography>
    </Box>
  );
}

export default FooterLogo; 