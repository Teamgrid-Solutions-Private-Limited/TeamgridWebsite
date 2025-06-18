import React, { useEffect } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './components/Home'
import WhoWeHelp from './components/WhoWeHelp'
import WhatWeDo from './components/WhatWeDo'
import WhyTeamgrid from './components/WhyTeamgrid'
import Technologies from './components/Technologies'
import Letstalk from './components/Letstalk'

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Enable smooth scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Box sx={{ 
      overflow: 'hidden',
      // Mobile optimization
      '& > *': {
        maxWidth: '100vw'
      }
    }}>
      <Navbar />
      <Home />
      <WhoWeHelp />
      <WhatWeDo />
      <WhyTeamgrid />
      <Technologies />
      <Letstalk />
    </Box>
  )
}

export default App