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
import reactIcon from '../assets/Group.svg';
import wordpressIcon from '../assets/Vector.svg';
import woocommerceIcon from '../assets/WooCommerce_logo 2.svg';
import shopifyIcon from '../assets/shopify.svg';
import nodejsIcon from '../assets/nodejs-3.svg';
import postgresqlIcon from '../assets/postgresql.svg';
import mongodbIcon from '../assets/mongodb-icon-1-1.svg';
import figmaIcon from '../assets/figma-icon.svg';
import postmanIcon from '../assets/Group 3.svg';

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

  // Group technologies into rows of 3 for exact 3-column layout
  const rows = [];
  for (let i = 0; i < technologies.length; i += 3) {
    rows.push(technologies.slice(i, i + 3));
  }

  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#0B3C7B',
        py: { xs: 5, md: 6 },
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Container 
        maxWidth={false}
        sx={{ 
          maxWidth: { xs: '100%', xl: '1440px' },
          px: { xs: 2, sm: 3, md: 4, lg: 5 }
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            mb: { xs: 4, md: 5 },
            pl: { md: 1 }
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
              color="#e1e0e0" 
              sx={{ mt: 1 }}
            >
              Modern Technologies & Collaborative Tools
            </Typography>
          </Box>
          
          <Button
            variant="contained"
            sx={{
              bgcolor: '#1976f8',
              '&:hover': {
                bgcolor: '#003272',
              },
              borderRadius: '32px',
              px: 4
            }}
            endIcon={<ArrowRightAltIcon />}
          >
            Get a Quote
          </Button>
        </Box>
        
        <Box sx={{ mt: 1 }}>
          {rows.map((row, rowIndex) => (
            <Box 
              key={rowIndex} 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                mb: rowIndex < rows.length - 1 ? 4 : 0,
                gap: { xs: 4, md: 4 }
              }}
            >
              {row.map((tech, idx) => (
                <Card 
                  key={tech.title}
                  sx={{ 
                    bgcolor: '#0B3C7B', 
                    borderRadius: 3,
                    border: '1px solid rgba(255,255,255,0.10)',
                    boxShadow: 'none',
                    height: { xs: 'auto', md: '124px' },
                    transition: 'all 0.2s ease',
                    flexGrow: 1,
                    flexBasis: 0,
                    width: { xs: '100%', md: 'calc(33.333% - 32px)' },
                    mb: { xs: 3, md: 0 },
                    '&:hover': {
                      bgcolor: '#003272',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <CardContent sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 2.5,
                    py: 2.5,
                    px: 3,
                    height: '100%'
                  }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: '#1B5093',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {tech.title === 'Postman' ? (
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            bgcolor: '#FF6C37',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Box
                            component="img"
                            src={tech.icon}
                            alt={tech.title}
                            sx={{
                              width: 28,
                              height: 28,
                              objectFit: 'contain',
                            }}
                          />
                        </Box>
                      ) : (
                        <Box
                          component="img"
                          src={tech.icon}
                          alt={tech.title}
                          sx={{
                            width: 40,
                            height: 40,
                            objectFit: 'contain',
                          }}
                        />
                      )}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h3" 
                        color="common.white" 
                        sx={{ 
                          fontSize: '20px', 
                          fontWeight: 600,
                          mb: 0.75,
                          lineHeight: 1.2
                        }}
                      >
                        {tech.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="common.white"
                        sx={{
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: 1.4,
                          opacity: 0.8
                        }}
                      >
                        {tech.desc}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
              {/* Add empty placeholders if row has less than 3 items */}
              {row.length < 3 && Array(3 - row.length).fill().map((_, i) => (
                <Box 
                  key={`empty-${i}`} 
                  sx={{ 
                    flexGrow: 1, 
                    flexBasis: 0,
                    display: { xs: 'none', md: 'block' }
                  }}
                />
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Technologies; 