import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// You'll need to replace these with your actual images or use these placeholders
const image1 = "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
const image2 = "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
const image3 = "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
const image4 = "https://images.unsplash.com/photo-1542744173-8659b8e77b10?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";

function WhoWeHelp() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#fff',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: 6 }
          }}
        >
          {/* Left Column - Text and Button */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '40%' },
              maxWidth: { xs: '100%', md: '470px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '32px', sm: '36px', md: '42px' },
                fontWeight: 700,
                mb: 1,
                color: '#000'
              }}
            >
              Who We Help
            </Typography>
            
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                color: 'text.secondary',
                mb: 3
              }}
            >
              A Trusted Partner for Growing Teams
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                mb: 4,
                color: 'text.secondary',
                lineHeight: 1.6
              }}
            >
              We work with agencies, startups, and businesses of all sizes — supporting 
              their teams and projects. We specialize in design, development, and everything 
              in between that matters most.
            </Typography>
            
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                borderRadius: '40px',
                px: 3,
                py: 1.5,
                textTransform: 'none',
                fontSize: '16px',
                boxShadow: 'none',
                alignSelf: 'flex-start'
              }}
            >
              Explore Services
            </Button>
          </Box>

          {/* Right Column - Staggered Image Layout */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '55%' },
              position: 'relative',
              height: { xs: '550px', md: '600px' }
            }}
          >
            {/* Left top image */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '48%',
                height: '48%',
                borderRadius: '16px',
                overflow: 'hidden',
                bgcolor: '#f6efef',
                zIndex: 1
              }}
            >
              <Box
                component="img"
                src={image1}
                alt="Team member"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
            
            {/* Right image (taller) */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '48%',
                height: '65%',
                borderRadius: '16px',
                overflow: 'hidden',
                bgcolor: '#fce5e3',
                zIndex: 1
              }}
            >
              <Box
                component="img"
                src={image2}
                alt="Team collaborating"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
            
            {/* Bottom left image */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '48%',
                height: '48%',
                borderRadius: '16px',
                overflow: 'hidden',
                bgcolor: '#f6efef',
                zIndex: 1
              }}
            >
              <Box
                component="img"
                src={image3}
                alt="Group discussion"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
            
            {/* Bottom right image */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '48%',
                height: '32%',
                borderRadius: '16px',
                overflow: 'hidden',
                bgcolor: '#fdecd2',
                zIndex: 1
              }}
            >
              <Box
                component="img"
                src={image4}
                alt="Person working"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default WhoWeHelp; 