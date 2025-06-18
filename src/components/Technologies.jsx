import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import reactIcon from '../assets/Group 16.svg';
import wordpressIcon from '../assets/Group 17.svg';
import woocommerceIcon from '../assets/vector.svg';
import shopifyIcon from '../assets/Group 19.svg';
import nodejsIcon from '../assets/Group 20.svg';
import postgresqlIcon from '../assets/postgresql.svg';
import mongodbIcon from '../assets/Group 22.svg';
import figmaIcon from '../assets/Group 23.svg';
import postmanIcon from '../assets/Group 24.svg';

const technologies = [
  {
    icon: reactIcon,
    title: 'ReactJS',
    desc: 'Build fast, interactive UIs with component-based architecture.'
  },
  {
    icon: wordpressIcon,
    title: 'WordPress',
    desc: 'Flexible CMS for custom websites and content-rich platforms.'
  },
  {
    icon: woocommerceIcon,
    title: 'WooCommerce',
    desc: 'Power your online store with WordPress integration.'
  },
  {
    icon: shopifyIcon,
    title: 'Shopify',
    desc: 'Launch beautiful, high-converting e-commerce stores with ease.'
  },
  {
    icon: nodejsIcon,
    title: 'Node.js',
    desc: 'Build fast, scalable servers with non-blocking architecture.'
  },
  {
    icon: postgresqlIcon,
    title: 'PostgreSQL',
    desc: 'Reliable, powerful open-source relational database.'
  },
  {
    icon: mongodbIcon,
    title: 'MongoDB',
    desc: 'Flexible NoSQL database for modern applications.'
  },
  {
    icon: figmaIcon,
    title: 'Figma',
    desc: 'Collaborative UI/UX design and prototyping platform.'
  },
  {
    icon: postmanIcon,
    title: 'Postman',
    desc: 'Simplify API development, testing, and collaboration.'
  },
];

function Technologies() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'primary.main',
        py: { xs: 5, md: 6 },
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Container maxWidth="xl">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            mb: { xs: 4, md: 5 }
          }}
        >
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography 
              variant="h2" 
              color="common.white" 
              sx={{ 
                fontSize: { xs: '36px', sm: '40px', md: '48px' },
                fontWeight: 700,
                lineHeight: 1
              }}
            >
              Our Capabilities
            </Typography>
            <Typography 
              variant="body2" 
              color="grey.300" 
              sx={{ mt: 1 }}
            >
              Modern Technologies & Collaborative Tools
            </Typography>
          </Box>
          
          <Button
            variant="contained"
            sx={{
              bgcolor: 'secondary.light',
              '&:hover': {
                bgcolor: 'secondary.main',
              },
              borderRadius: '32px',
              px: 4
            }}
            endIcon={<ArrowRightAltIcon />}
          >
            Get a Quote
          </Button>
        </Box>
        
        <Grid container spacing={3}>
          {technologies.map((tech, idx) => (
            <Grid item xs={12} sm={6} md={4} key={tech.title}>
              <Card 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.04)', 
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: 'none',
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardContent sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  gap: 2,
                  p: 3
                }}>
                  <Box
                    component="img"
                    src={tech.icon}
                    alt={tech.title}
                    sx={{
                      width: 64,
                      height: 64,
                      objectFit: 'contain'
                    }}
                  />
                  <Box>
                    <Typography 
                      variant="h3" 
                      color="common.white" 
                      gutterBottom
                      sx={{ fontSize: '22px', fontWeight: 600 }}
                    >
                      {tech.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="grey.300"
                    >
                      {tech.desc}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Technologies; 