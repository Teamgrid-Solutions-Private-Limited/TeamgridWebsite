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
import { rectangleImage51, vectorIcon } from '../images';
import data from '../data.json';

function WhyTeamgrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { title, subtitle, buttonText, features } = data.whyTeamgrid;

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
                fontSize: { xs: '28px', sm: '32px', md: '42px' },
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                lineHeight: 1.6,
                maxWidth: { xs: '100%', md: '954px' }
              }}
            >
              {subtitle}
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
              marginRight:'120px',
              borderColor: 'rgba(202, 202, 202, 1)',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
                borderColor: 'primary.main'
              },
              fontSize: { xs: '12px', sm: '14px', md: '16px' },
            }}
          >
            {buttonText}
          </Button>
        </Box>
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={7} lg={6}>
            <Box
              component="img"
              src={rectangleImage51}
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
            <Stack spacing={4} sx={{ 
              width: '486px', 
              height: 'auto',
             // gap: '32px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                  }}
                >
                  <Box 
                    component="img" 
                    src={vectorIcon} 
                    alt="Check icon"
                    sx={{ 
                      width: '17.726999282836914px',
                      height: '8.485000610351562px',
                      position: 'relative',
                      top: '8.24px',
                      left: '3px',
                      borderWidth: '2px',
                      mt: 0.5
                    }}
                  />
                  <Box>
                    <Typography 
                      variant="h3" 
                      color="primary.main" 
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '16px', sm: '18px', md: '22px' }
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        fontWeight: 300,
                        fontSize: { xs: '12px', sm: '13px', md: '15px' }
                      }}
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