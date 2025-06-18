import React from 'react';
import { Box, IconButton, Typography, useTheme, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from '../style/Footer.module.css';

function FooterSocial() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      sx={{ 
        width: '100%',
        maxWidth: '1200px',
        height: '48px',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: { xs: 'center', sm: 'space-between' },
        mx: 'auto',
        mb: 3,
        mt: 2
      }}
      className={styles.socialSection}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: 500,
          color: 'white',
          mb: { xs: 2, sm: 0 }
        }}
      >
        Connect with us on social media
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton 
          className={styles.socialButton} 
          aria-label="Facebook"
          sx={{ 
            color: 'white', 
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': {
              bgcolor: '#1877F2',
            }
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton 
          className={styles.socialButton} 
          aria-label="Twitter"
          sx={{ 
            color: 'white', 
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': {
              bgcolor: '#1DA1F2',
            }
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton 
          className={styles.socialButton} 
          aria-label="LinkedIn"
          sx={{ 
            color: 'white', 
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': {
              bgcolor: '#0A66C2',
            }
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton 
          className={styles.socialButton} 
          aria-label="Instagram"
          sx={{ 
            color: 'white', 
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': {
              bgcolor: '#E4405F',
            }
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton 
          className={styles.socialButton} 
          aria-label="YouTube"
          sx={{ 
            color: 'white', 
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': {
              bgcolor: '#FF0000',
            }
          }}
        >
          <YouTubeIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default FooterSocial; 