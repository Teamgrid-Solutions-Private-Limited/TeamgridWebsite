import React from 'react';
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
  useMediaQuery
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import styles from '../style/Footer.module.css';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: '#051a36',
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Blogs Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '18px',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Blogs
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                How AI Is Transforming Web & Mobile App Development in 2025
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                Choosing the Right Tech Stack for Scalable Product Development
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                Design Smarter: Why UI/UX Matters More Than Ever in AI-Powered Apps
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                Fixed-Cost vs. Dedicated Teams: What Works Best for Your Next Project?
              </Link>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '18px',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Quick Links
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                Home
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                About Us
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                What We Do
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                Technologies We Use
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                How We Work
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                Let's Talk
              </Link>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '18px',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Services
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                Web Development
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                Mobile App Development
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                UI/UX Design
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                AI/ML & GenAI Solutions
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                E-commerce
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                WordPress & Shopify
              </Link>
            </Box>
          </Grid>

          {/* Policies */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '18px',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Policies
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                Terms & Conditions
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                Privacy Policy
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '14px' }} className={styles.footerLink}>
                NDA Available on Request
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box 
          sx={{ 
            mt: 8, 
            pt: 4, 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 0 },
            justifyContent: 'space-between'
          }}
        >
          {/* Contact Section */}
          <Box sx={{ maxWidth: '400px' }} className={isMobile ? styles.mobileFullWidth : ''}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Need Assistance? Call Us!
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
                lineHeight: 1.6,
                mb: 2,
                color: 'rgba(255,255,255,0.7)'
              }}
            >
              Our experts are here to help. Contact us for personalised
              guidance or any queries about your project or digital solution.
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                mb: 1,
              }}
            >
              +91 - 98304 42666
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.9)'
              }}
            >
              Mail us at info@teamgrid.com
            </Typography>
          </Box>

          {/* Newsletter Section */}
          <Box sx={{ maxWidth: '450px' }} className={isMobile ? styles.mobileFullWidth : ''}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Stay Connected with Our Newsletter
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
                lineHeight: 1.6,
                mb: 3,
                color: 'rgba(255,255,255,0.7)'
              }}
            >
              Stay updated with expert insights, smart development tips, and exclusive
              Teamgrid news—delivered straight to your inbox.
            </Typography>
            
            <TextField
              fullWidth
              placeholder="Your email ID"
              variant="outlined"
              className={styles.newsletterInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton 
                      edge="end" 
                      className={styles.sendButton}
                      sx={{ 
                        color: 'white', 
                        bgcolor: '#0b3c7b', 
                        borderRadius: '50%', 
                        '&:hover': { 
                          bgcolor: '#0a3266' 
                        } 
                      }}
                    >
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: 'rgba(255,255,255,0.05)',
                  borderRadius: '50px',
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255,0.2)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255,0.3)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255,0.5)',
                  }
                }
              }}
            />
          </Box>
        </Box>

        {/* Disclaimer and Copyright */}
        <Box 
          sx={{ 
            mt: 8, 
            pt: 4, 
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: '12px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Disclaimer : Content and services on this site are for general information only and may change. Teamgrid is not liable for outcomes influenced by third-party
            tools or evolving technologies.
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              fontSize: '12px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)',
              width: '394px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              mt: 1
            }}
          >
            © 2025 Teamgrid. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 