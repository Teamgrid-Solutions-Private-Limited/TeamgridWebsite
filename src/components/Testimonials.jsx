import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper, Button, Avatar, useMediaQuery, useTheme, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Sample data for testimonials
const testimonialsRow1 = [
  {
    id: 1,
    quote: "Working with their team was a game-changer. They translated our product vision into a seamless web app with AI-powered features that impressed our investor.",
    name: "Amit Shaw",
    position: "CEO, Nexora Labs",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    id: 2,
    quote: "They've become an extension of our team. From design to delivery, their process is smooth, and their quality is consistently top-notch. We trust them with every sprint.",
    name: "Lisa Monroe",
    position: "Creative Director, PixelRiver",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    id: 3,
    quote: "We needed a cross-platform app fast, and they delivered in record time—beautiful UI, flawless performance, and full alignment with our brand.",
    name: "Jonas Malik",
    position: "Co-Founder, LoopRides",
    avatar: "https://mui.com/static/images/avatar/3.jpg",
  },
  // Adding extra cards to create continuous scroll effect
  {
    id: 4,
    quote: "Working with their team was a game-changer. They translated our product vision into a seamless web app with AI-powered features that impressed our investor.",
    name: "Amit Shaw",
    position: "CEO, Nexora Labs",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    id: 5,
    quote: "They've become an extension of our team. From design to delivery, their process is smooth, and their quality is consistently top-notch. We trust them with every sprint.",
    name: "Lisa Monroe",
    position: "Creative Director, PixelRiver",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
  },
];

const testimonialsRow2 = [
  {
    id: 6,
    quote: "They've become an extension of our team. From design to delivery, their process is smooth, and their quality is consistently top-notch. We trust them with every sprint.",
    name: "Amelia Jen",
    position: "Creative Director, PixelRiver",
    avatar: "https://mui.com/static/images/avatar/4.jpg",
  },
  {
    id: 7,
    quote: "Working with their team was a game-changer. They translated our product vision into a seamless web app with AI-powered features that impressed our investor.",
    name: "Amit Shaw",
    position: "CEO, Nexora Labs",
    avatar: "https://mui.com/static/images/avatar/5.jpg",
  },
  {
    id: 8,
    quote: "They've become an extension of our team. From design to delivery, their process is smooth, and their quality is consistently top-notch. We trust them with every sprint.",
    name: "Lisa Monroe",
    position: "Creative Director, PixelRiver",
    avatar: "https://mui.com/static/images/avatar/6.jpg",
  },
  // Adding extra cards to create continuous scroll effect
  {
    id: 9,
    quote: "They've become an extension of our team. From design to delivery, their process is smooth, and their quality is consistently top-notch. We trust them with every sprint.",
    name: "Amelia Jen",
    position: "Creative Director, PixelRiver",
    avatar: "https://mui.com/static/images/avatar/4.jpg",
  },
  {
    id: 10,
    quote: "Working with their team was a game-changer. They translated our product vision into a seamless web app with AI-powered features that impressed our investor.",
    name: "Amit Shaw",
    position: "CEO, Nexora Labs",
    avatar: "https://mui.com/static/images/avatar/5.jpg",
  },
];

// Combine testimonials for mobile slider
const mobileTestimonials = [...testimonialsRow1.slice(0, 3), ...testimonialsRow2.slice(0, 3)];

// Add these local constants at the top of the file, after the testimonial arrays
const title = "What our clients say";
const subtitle = "Real feedback from founders, product owners, and creative leaders who trusted us to build their vision.";
const buttonText = "Explore more testimonials";

// Custom styled quote icon
const QuoteIcon = styled(Box)(({ theme }) => ({
  color: "#0056D2", // Blue color for quote icon
  fontSize: "2rem",
  marginBottom: theme.spacing(1),
  "& svg": {
    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
  },
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: "350px",
  height: "280px",
  maxHeight: "280px",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(2),
  backgroundColor: "rgba(243, 243, 246, 1)", // Light gray background
  margin: theme.spacing(0, 1.5),
  flex: "0 0 auto",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
  },
  [theme.breakpoints.down("md")]: {
    width: "300px",
    padding: theme.spacing(3),
    height: "260px",
    maxHeight: "260px",
    margin: theme.spacing(0, 1),
  },
  [theme.breakpoints.down("sm")]: {
    width: "250px",
    padding: theme.spacing(2.5),
    height: "250px",
    maxHeight: "250px",
    margin: theme.spacing(0, 0.75),
  },
  [theme.breakpoints.only("xs")]: {
    width: "220px",
    padding: theme.spacing(2),
    height: "260px",
    maxHeight: "260px",
    margin: theme.spacing(0, 0.5),
  },
  // Special case for single card view on mobile
  '.single-card-view &': {
    [theme.breakpoints.down("md")]: {
      width: "90%", // 90% of container width
      maxWidth: "400px",
      height: "300px",
      maxHeight: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      maxWidth: "350px",
      height: "280px",
      maxHeight: "280px",
    }
  }
}));

const SliderNavButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "white",
  zIndex: 10,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "white",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
  },
  padding: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(1.5),
  },
}));

const TestimonialRow = styled(Box)(({ theme, direction, speed = 60, isPaused }) => ({
  display: "flex",
  overflowX: "hidden",
  padding: theme.spacing(2, 0),
  width: "100%",
  position: "relative",
  "& .scroll-content": {
    display: "flex",
    animation: direction === "left" 
      ? `scroll-left ${speed}s linear infinite`
      : `scroll-right ${speed}s linear infinite`,
    animationPlayState: isPaused ? 'paused' : 'running',
  },
  "@keyframes scroll-left": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
  "@keyframes scroll-right": {
    "0%": { transform: "translateX(-50%)" },
    "100%": { transform: "translateX(0)" },
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 0),
  },
}));

const ClientInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "auto",
  paddingTop: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(2),
  },
  // Reduce padding-top in single-card view to minimize gap
  '.single-card-view &': {
    paddingTop: theme.spacing(1.5),
  }
}));

const ExploreButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  padding: theme.spacing(1.5, 4),
  textTransform: "none",
  fontWeight: 500,
  border: `1px solid ${theme.palette.grey[300]}`,
  color: theme.palette.text.primary,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: theme.palette.grey[50],
    borderColor: theme.palette.grey[400],
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 3),
  },
}));

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Speed up animation on smaller screens
  const animationSpeed = isMobile ? 80 : isTablet ? 100 : 120;
  
  // Pause animation on hover
  useEffect(() => {
    const handleMouseEnter = () => {
      setIsPaused(true);
    };
    
    const handleMouseLeave = () => {
      setIsPaused(false);
    };
    
    const handleTouchStart = () => {
      setIsPaused(true);
    };
    
    const handleTouchEnd = () => {
      setIsPaused(false);
    };
    
    // Add event listeners to all testimonial cards
    const testimonialCards = document.querySelectorAll('[data-testimonial-card]');
    
    testimonialCards.forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('touchstart', handleTouchStart);
      card.addEventListener('touchend', handleTouchEnd);
    });
    
    return () => {
      // Clean up event listeners
      testimonialCards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
        card.removeEventListener('touchstart', handleTouchStart);
        card.removeEventListener('touchend', handleTouchEnd);
      });
    };
  }, []);

  // Simple navigation for mobile slider - show one card at a time
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? mobileTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === mobileTestimonials.length - 1 ? 0 : prev + 1));
  };

  const renderTestimonialCard = (testimonial) => (
    <TestimonialCard elevation={0} key={testimonial.id} data-testimonial-card>
      <QuoteIcon>
        <FormatQuoteIcon sx={{ 
          color: "#0056D2", 
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" } 
        }} />
      </QuoteIcon>
      <Typography 
        variant="body1" 
        sx={{ 
          mb: { xs: 1, sm: 1.5, md: 3 },
          flex: 1,
          fontStyle: "normal",
          fontSize: { xs: "0.8125rem", sm: "0.875rem", md: "1rem" },
          lineHeight: 1.5,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: { xs: 3, sm: 3, md: 4 },
          WebkitBoxOrient: "vertical",
          // Special styling for single-card view
          '.single-card-view &': {
            lineHeight: 1.6,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            mb: 1, // Reduce bottom margin
            WebkitLineClamp: 6, // Show more lines in single card view
          }
        }}
      >
        {testimonial.quote}
      </Typography>
      <ClientInfo>
        <Avatar 
          src={testimonial.avatar} 
          alt={testimonial.name}
          sx={{ 
            width: { xs: 36, sm: 42, md: 56 }, 
            height: { xs: 36, sm: 42, md: 56 },
            mr: { xs: 1, sm: 1.5, md: 2 },
            border: "2px solid #F0F0F0",
            // Slightly larger avatar in single-card view
            '.single-card-view &': {
              width: { xs: 48, sm: 54 },
              height: { xs: 48, sm: 54 },
            }
          }}
        />
        <Box>
          <Typography 
            variant="subtitle1" 
            fontWeight={600}
            sx={{ 
              fontSize: { xs: "0.8125rem", sm: "0.875rem", md: "1rem" },
              // Slightly larger font in single-card view
              '.single-card-view &': {
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }
            }}
          >
            {testimonial.name}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              fontSize: { xs: "0.6875rem", sm: "0.75rem", md: "0.875rem" },
              // Slightly larger font in single-card view
              '.single-card-view &': {
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }
            }}
          >
            {testimonial.position}
          </Typography>
        </Box>
      </ClientInfo>
    </TestimonialCard>
  );

  return (
    <Box 
      sx={{ 
        py: { xs: 6, sm: 8, md: 12 },
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
      id="testimonials"
    >
      <Box sx={{ 
        maxWidth: "100%", 
        width:"100%",
      }}>
      <Box sx={{display:"flex",justifyContent:'center',mb:{xs: 4, sm: 5, md: 8}}}>
        <Box sx={{ 
          px: { xs: 2.5, md: 4, lg: 8, xl: 0 },
          width:'1400px',
          
        }}>
          <Typography 
            variant="h2" 
            component="h2" 
            textAlign={'center'}
            sx={{ 
              fontWeight: 700,
              mb: { xs: 1, sm: 1.5, md: 2 },
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" }
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              fontWeight: 400,
              textAlign:'center',
              fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.25rem" }
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>

      {/* Mobile/Tablet Single Card Slider - only visible below md breakpoint */}
      <Box 
        sx={{ 
          display: { xs: 'block', md: 'none' },
          position: 'relative',
          mb: 5,
          px: { xs: 4, sm: 6 }
        }}
      >
        {/* Left navigation button */}
        <SliderNavButton 
          onClick={handlePrev}
          sx={{ 
            left: { xs: 0, sm: 4 },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </SliderNavButton>

        {/* Single card display with sliding effect */}
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            height: { xs: 310, sm: 330 }, // Increased height for larger cards
            width: '100%'
          }}
          className="single-card-view" // Add class for special styling
        >
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              transition: 'transform 0.5s ease',
              transform: `translateX(${activeIndex * -100}%)`,
              width: '100%'
            }}
          >
            {mobileTestimonials.map((testimonial, index) => (
              <Box 
                key={testimonial.id}
                sx={{ 
                  flex: '0 0 100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                {renderTestimonialCard(testimonial)}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right navigation button */}
        <SliderNavButton 
          onClick={handleNext}
          sx={{ 
            right: { xs: 0, sm: 4 },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </SliderNavButton>
      </Box>

      {/* Original auto-scrolling rows - only visible on md and up */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        {/* First row - scrolling left to right */}
        <TestimonialRow direction="left" speed={animationSpeed} isPaused={isPaused} sx={{ mb: { xs: 2, md: 3 } }}>
          <Box className="scroll-content" ref={row1Ref}>
            {testimonialsRow1.map(renderTestimonialCard)}
            {testimonialsRow1.map(testimonial => renderTestimonialCard({ ...testimonial, id: `${testimonial.id}-dup` }))}
          </Box>
        </TestimonialRow>

        {/* Second row - scrolling right to left */}
        <TestimonialRow direction="right" speed={animationSpeed} isPaused={isPaused}>
          <Box className="scroll-content" ref={row2Ref}>
            {testimonialsRow2.map(renderTestimonialCard)}
            {testimonialsRow2.map(testimonial => renderTestimonialCard({ ...testimonial, id: `${testimonial.id}-dup` }))}
          </Box>
        </TestimonialRow>
      </Box>

        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          mt: { xs: 4, sm: 5, md: 8 },
          maxWidth: "1200px",
          mx: "auto",
        }}>
          <ExploreButton 
            endIcon={<ArrowForwardIcon />}
            variant="outlined"
          >
            {buttonText}
          </ExploreButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;