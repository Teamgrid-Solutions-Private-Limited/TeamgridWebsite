import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import teamImage from '../assets/Rectangle 51.png';

const features = [
  {
    title: "Right Talent, Matched Your Needs",
    description: "We align expertise with your business objectives and workflows."
  },
  {
    title: "Flexible Engagement Models",
    description: "Work the way you prefer — retainers, sprints, or fixed-cost projects."
  },
  {
    title: "Trustworthy and Confidential",
    description: "NDA-backed, process-driven, and fully aligned with your brand."
  },
  {
    title: "Optional Project Oversight",
    description: "NDA-backed, process-driven, and fully aligned with your brand."
  },
  {
    title: "Seamless Collaboration",
    description: "Slack, Trello, GitHub, or your tools — we work your way."
  }
];

function WhyTeamgrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 },
        mt: { xs: 0, sm: 0, md: 0 } // Adjust spacing based on design
      }}
    >
      <Container maxWidth="xl">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            mb: 5
          }}
        >
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography 
              variant="h2" 
              color="text.primary" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '36px', sm: '42px', md: '56px' },
                fontWeight: 500
              }}
            >
              Why Teamgrid
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="text.secondary"
              sx={{ maxWidth: { xs: '100%', md: '954px' } }}
            >
              Flexible Talent. Reliable Delivery. Scalable Results.
            </Typography>
          </Box>
          
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowRightAltIcon />}
            sx={{
              borderRadius: '39px',
              height: { xs: '48px', md: '59px' },
              px: 4,
              borderColor: 'rgba(202, 202, 202, 1)',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
                borderColor: 'primary.main'
              }
            }}
          >
            Explore Services
          </Button>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={7} lg={6}>
            <Box
              component="img"
              src={teamImage}
              alt="Team collaboration"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: { xs: '350px', md: '522px' },
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Grid>
          
          <Grid item xs={12} md={5} lg={6}>
            <Stack spacing={4}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                  }}
                >
                  <CheckCircleOutlineIcon 
                    sx={{ 
                      color: 'success.main', 
                      fontSize: { xs: 24, md: 28 },
                      mt: 0.5
                    }} 
                  />
                  <Box>
                    <Typography 
                      variant="h3" 
                      color="primary.main" 
                      gutterBottom
                      sx={{ fontWeight: 700 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ fontWeight: 300 }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyTeamgrid; 