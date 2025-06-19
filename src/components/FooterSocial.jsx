import React from 'react';
import { Box, IconButton, Typography, useTheme, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from '../style/Footer.module.css';
import data from '../data.json';

// Map of icon components to use based on icon name from data.json
const iconComponents = {
  'Facebook': FacebookIcon,
  'Twitter': TwitterIcon,
  'LinkedIn': LinkedInIcon,
  'Instagram': InstagramIcon,
  'YouTube': YouTubeIcon
};

function FooterSocial() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { title, platforms } = data.footer.social;

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
        {title}
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        {platforms.map((platform, index) => {
          const IconComponent = iconComponents[platform.icon];
          return (
            <IconButton 
              key={index}
              className={styles.socialButton} 
              aria-label={platform.name}
              sx={{ 
                color: 'white', 
                bgcolor: 'rgba(255,255,255,0.1)',
                '&:hover': {
                  bgcolor: platform.color,
                }
              }}
            >
              <IconComponent />
            </IconButton>
          );
        })}
      </Box>
    </Box>
  );
}

export default FooterSocial; 