import React, { useEffect, useRef } from "react";
import { Box, Typography, Paper, Button, Avatar } from "@mui/material";
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
    fontSize: "2.5rem",
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
  backgroundColor: "#F9FAFB", // Light gray background
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
  margin: theme.spacing(0, 1.5),
  flex: "0 0 auto",
  [theme.breakpoints.down("md")]: {
    width: "280px",
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    width: "260px",
    padding: theme.spacing(2),
  },
}));

const TestimonialRow = styled(Box)(({ theme, direction }) => ({
  display: "flex",
  overflowX: "hidden",
  padding: theme.spacing(2, 0),
  width: "100%",
  position: "relative",
  "& .scroll-content": {
    display: "flex",
    animation: direction === "left" 
      ? "scroll-left 60s linear infinite"
      : "scroll-right 60s linear infinite",
  },
  "@keyframes scroll-left": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
  "@keyframes scroll-right": {
    "0%": { transform: "translateX(-50%)" },
    "100%": { transform: "translateX(0)" },
  },
}));

const ClientInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "auto",
  paddingTop: theme.spacing(3),
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
  },
}));

const Testimonials = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  
  // Pause animation on hover
  useEffect(() => {
    const handleMouseEnter = (e) => {
      e.currentTarget.style.animationPlayState = 'paused';
    };
    
    const handleMouseLeave = (e) => {
      e.currentTarget.style.animationPlayState = 'running';
    };
    
    const row1Element = row1Ref.current;
    const row2Element = row2Ref.current;
    
    if (row1Element) {
      row1Element.addEventListener('mouseenter', handleMouseEnter);
      row1Element.addEventListener('mouseleave', handleMouseLeave);
    }
    
    if (row2Element) {
      row2Element.addEventListener('mouseenter', handleMouseEnter);
      row2Element.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (row1Element) {
        row1Element.removeEventListener('mouseenter', handleMouseEnter);
        row1Element.removeEventListener('mouseleave', handleMouseLeave);
      }
      
      if (row2Element) {
        row2Element.removeEventListener('mouseenter', handleMouseEnter);
        row2Element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const renderTestimonialCard = (testimonial) => (
    <TestimonialCard elevation={0} key={testimonial.id}>
      <QuoteIcon>
        <FormatQuoteIcon sx={{ color: "#0056D2" }} />
      </QuoteIcon>
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 3,
          flex: 1,
          fontStyle: "normal",
          fontSize: "1rem",
          lineHeight: 1.6,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 4,
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
            width: 56, 
            height: 56,
            mr: 2,
            border: "2px solid #F0F0F0"
          }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {testimonial.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {testimonial.position}
          </Typography>
        </Box>
      </ClientInfo>
    </TestimonialCard>
  );

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        width: "100vw",
        position: "relative",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
      id="testimonials"
    >
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Box sx={{ 
          textAlign: "center", 
          mb: { xs: 6, md: 8 },
          maxWidth: "1200px",
          mx: "auto",
        }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" }
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
              mx: "auto"
            }}
          >
            Trusted by teams for smart ideas and reliable execution.
          </Typography>
        </Box>

        {/* First row - scrolling left to right */}
        <TestimonialRow direction="left" sx={{ mb: 3 }}>
          <Box className="scroll-content" ref={row1Ref}>
            {testimonialsRow1.map(renderTestimonialCard)}
            {testimonialsRow1.map(testimonial => renderTestimonialCard({ ...testimonial, id: `${testimonial.id}-dup` }))}
          </Box>
        </TestimonialRow>

        {/* Second row - scrolling right to left */}
        <TestimonialRow direction="right">
          <Box className="scroll-content" ref={row2Ref}>
            {testimonialsRow2.map(renderTestimonialCard)}
            {testimonialsRow2.map(testimonial => renderTestimonialCard({ ...testimonial, id: `${testimonial.id}-dup` }))}
          </Box>
        </TestimonialRow>

        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          mt: { xs: 6, md: 8 },
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