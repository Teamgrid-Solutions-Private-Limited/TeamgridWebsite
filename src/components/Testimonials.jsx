import React, { useEffect, useRef } from "react";
import { Box, Typography, Paper, Button, Avatar, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
}));

const TestimonialRow = styled(Box)(({ theme, direction, speed = 60 }) => ({
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
  
  // Speed up animation on smaller screens
  const animationSpeed = isMobile ? 40 : isTablet ? 50 : 60;
  
  // Pause animation on hover
  useEffect(() => {
    const handleMouseEnter = (e) => {
      e.currentTarget.style.animationPlayState = 'paused';
    };
    
    const handleMouseLeave = (e) => {
      e.currentTarget.style.animationPlayState = 'running';
    };
    
    const handleTouchStart = (e) => {
      e.currentTarget.style.animationPlayState = 'paused';
    };
    
    const handleTouchEnd = (e) => {
      e.currentTarget.style.animationPlayState = 'running';
    };
    
    const row1Element = row1Ref.current;
    const row2Element = row2Ref.current;
    
    if (row1Element) {
      row1Element.addEventListener('mouseenter', handleMouseEnter);
      row1Element.addEventListener('mouseleave', handleMouseLeave);
      row1Element.addEventListener('touchstart', handleTouchStart);
      row1Element.addEventListener('touchend', handleTouchEnd);
    }
    
    if (row2Element) {
      row2Element.addEventListener('mouseenter', handleMouseEnter);
      row2Element.addEventListener('mouseleave', handleMouseLeave);
      row2Element.addEventListener('touchstart', handleTouchStart);
      row2Element.addEventListener('touchend', handleTouchEnd);
    }
    
    return () => {
      if (row1Element) {
        row1Element.removeEventListener('mouseenter', handleMouseEnter);
        row1Element.removeEventListener('mouseleave', handleMouseLeave);
        row1Element.removeEventListener('touchstart', handleTouchStart);
        row1Element.removeEventListener('touchend', handleTouchEnd);
      }
      
      if (row2Element) {
        row2Element.removeEventListener('mouseenter', handleMouseEnter);
        row2Element.removeEventListener('mouseleave', handleMouseLeave);
        row2Element.removeEventListener('touchstart', handleTouchStart);
        row2Element.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  const renderTestimonialCard = (testimonial) => (
    <TestimonialCard elevation={0} key={testimonial.id}>
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
            border: "2px solid #F0F0F0"
          }}
        />
        <Box>
          <Typography 
            variant="subtitle1" 
            fontWeight={600}
            sx={{ 
              fontSize: { xs: "0.8125rem", sm: "0.875rem", md: "1rem" } 
            }}
          >
            {testimonial.name}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              fontSize: { xs: "0.6875rem", sm: "0.75rem", md: "0.875rem" } 
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
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
      id="testimonials"
    >
      <Box sx={{ 
        px: { xs: 2, sm: 3, md: 4 },
        maxWidth: "100%", 
      }}>
        <Box sx={{ 
          textAlign: "center", 
          mb: { xs: 4, sm: 5, md: 8 },
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 1, sm: 2, md: 3 },
        }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              mb: { xs: 1, sm: 1.5, md: 2 },
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" }
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              fontWeight: 400,
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.25rem" }
            }}
          >
            Trusted by teams for smart ideas and reliable execution.
          </Typography>
        </Box>

        {/* First row - scrolling left to right */}
        <TestimonialRow direction="left" speed={animationSpeed} sx={{ mb: { xs: 2, md: 3 } }}>
          <Box className="scroll-content" ref={row1Ref}>
            {testimonialsRow1.map(renderTestimonialCard)}
            {testimonialsRow1.map(testimonial => renderTestimonialCard({ ...testimonial, id: `${testimonial.id}-dup` }))}
          </Box>
        </TestimonialRow>

        {/* Second row - scrolling right to left */}
        <TestimonialRow direction="right" speed={animationSpeed}>
          <Box className="scroll-content" ref={row2Ref}>
            {testimonialsRow2.map(renderTestimonialCard)}
            {testimonialsRow2.map(testimonial => renderTestimonialCard({ ...testimonial, id: `${testimonial.id}-dup` }))}
          </Box>
        </TestimonialRow>

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
            Explore Testimonials
          </ExploreButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials; 