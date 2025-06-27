import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import from centralized images file
import {
  shortLogo as teamgridLogo,
  reactIcon,
  bootstrapIcon,
  wordpressIcon,
  figmaIcon,
  shopifyIcon,
  nodejsIcon,
  postgresqlIcon,
  postmanIcon,
  muiIcon,
  mongoIcon,
  woo,
  mobileBackground,
} from "../images";
import CloseIcon from "@mui/icons-material/Close";
import data from "../data.json";

// Get hero data from data.json
const { subtitle, title, description, buttons } = data.home.hero;
const { techDescriptions } = data.home;

const techIcons = [
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "WordPress", icon: wordpressIcon },
  { name: "Postman", icon: postmanIcon },
  { name: "WooCommerce", icon: woo },
  { name: "Shopify", icon: shopifyIcon },
  { name: "Material UI", icon: muiIcon },
];

function Home() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isIPadPro = useMediaQuery("(min-width:1024px) and (max-width:1366px)");

  const [isPaused, setIsPaused] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
  const [orbitScale, setOrbitScale] = useState(1);
  const [orbitAngle, setOrbitAngle] = useState(0);

  // Get the current padding value in px
  let rightPadding = 0;
  if (isXl) rightPadding = 0;
  else if (isLg) rightPadding = parseInt(theme.spacing(8));
  else if (isMd) rightPadding = parseInt(theme.spacing(4));
  else if (isSm) rightPadding = parseInt(theme.spacing(2.5));
  else rightPadding = parseInt(theme.spacing(2.5));

  // Dynamically adjust orbit scale based on screen size
  useEffect(() => {
    if (isXs) {
      setOrbitScale(0.65);
    } else if (isSm) {
      setOrbitScale(0.7);
    } else if (isMd) {
      setOrbitScale(0.8);
    } else if (isIPadPro) {
      setOrbitScale(0.85);
    } else {
      setOrbitScale(1);
    }
  }, [isXs, isSm, isMd, isIPadPro, isLg]);

  useEffect(() => {
    if (isPaused) return;
    let frame;
    const animate = () => {
      setOrbitAngle((prev) => (prev + 0.2) % 360);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  const handleTechClick = (tech) => {
    setActiveTech(tech);
    setShowDescription(true);
    setIsPaused(true);
  };

  const closeDescription = () => {
    setShowDescription(false);
    setIsPaused(false);
  };

  // Set logo size and height to fixed values
  const logoWidth = 105;
  const logoHeight = 160;
  const logoOffset = 200 /2;

  return (
    <Box
      sx={{
        bgcolor: "#001C42",
        minHeight: "100vh",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: {
          xs: `url(${mobileBackground})`,
          sm: `url(${mobileBackground})`,
          md: "none",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "cover", sm: "cover", md: "auto" },
        backgroundPosition: { xs: "right bottom", sm: "right" },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 28, 66, 0.4)", // Overlay to ensure text is readable
          display: { xs: "block", sm: "block", md: "none" }, // Hide overlay on desktop
          zIndex: 1,
          pointerEvents: "none", // Allow clicks to pass through
        },
      }}
    >
      <Box
        maxWidth={"1200px"}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection:'column',
          justifyContent:'flex-start',
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          maxWidth: "1200px",
          width: "100%",
          zIndex: 2, // Ensure content is above the background
        }}
      > 
            {/* Text Section - pointer events none */}
            <Box sx={{ pointerEvents: "none", display: "flex", flexDirection: "column", gap: 1.8 ,zIndex:3}}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#E1E0E0",
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: 1.5,
                  textShadow: { xs: "0px 1px 2px rgba(0,0,0,0.5)", sm: "none" },
                  pointerEvents: "none",
                }}
              >
                {subtitle}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: "#ffffff",
                  fontSize: {
                    xs: "36px",
                    sm: "40px",
                    md: "48px",
                    lg: "64px",
                  },
                  fontWeight: 700,
                  lineHeight: "100%",
                  textShadow: { xs: "0px 1px 3px rgba(0,0,0,0.5)", sm: "none" },
                  pointerEvents: "none",
                }}
              >
                {title.split(",").map((part, idx, arr) => (
                  <React.Fragment key={idx}>
                    {part}
                    {idx < arr.length - 1 && ","}
                    {idx < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Typography>
              
            </Box>
            <Typography
                variant="body1"
                sx={{
                  color: "#E1E0E0",
                  fontSize: { xs: "16px", sm: "16px", md: "18px", lg: "20px" },
                  lineHeight: 1.6,
                  fontWeight: 300,
                  textShadow: { xs: "0px 1px 2px rgba(0,0,0,0.5)", sm: "none" },
                  pointerEvents: "none",
                  zIndex:3,
                  my:{xs:"15px",sm:'20px',md:'30px',lg:'40px'},
                  maxWidth:{xs:'80%',md:'75%'}
                }}
              >
                {description}
              </Typography>
            {/* Button Section - pointer events auto */}
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={'10px'}
                sx={{
                  width: { xs: "100%", md: "auto" },
                  maxWidth: { xs: "280px", md: "none" },
                  display:"flex",
                  justifyContent:"flex-start",
                  zIndex:3
                }}
              >
                <Button
                  variant={buttons[0].variant}
                  sx={{
                    bgcolor: "#007BFF",
                    borderRadius: "39px",
                    px: 5,
                    py: 2,
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 500,
                    boxShadow: "0 4px 10px rgba(0, 123, 255, 0.25)",
                    "&:hover": { bgcolor: "#0069d9" },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  {buttons[0].text}
                </Button>
                <Button
                  variant={buttons[1].variant}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: "white",
                    borderColor: "rgba(255,255,255,0.3)",
                    borderRadius: "39px",
                    px: 5,
                    py: 2,
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 500,
                    "&:hover": { borderColor: "rgba(255,255,255,0.5)" },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  {buttons[1].text}
                </Button>
              </Stack>
           
          {/* </Box> */}
       
         {/* Orbital system with tech icons */}
         {/* Only show orbits on md and up */}
         {isMd || isLg || isXl ? (
         <Box
           sx={{
             position: "absolute",
             right: 0,
             top: "50%",
             transform: "translate(4%,-50%)",
             width: "100%",
             height: "100%",
             pointerEvents: "none",
             zIndex: 1,
             overflow: "visible",
           }}
         >
           {/* Orbits with icons and dots, all rotate as a group */}
           {[
             { icons: techIcons.slice(0, 4), positions: 8 }, // more dots between 5 icons
             { icons: techIcons.slice(0, 5), positions: 10 },
             { icons: techIcons.slice(0, 6), positions: 12 },
             { icons: 
        techIcons.slice(0, 8)
             , positions: 16 }, // outermost, repeat to fill 16
           ].map((orbit, orbitIdx) => {
             // Use a base radius and progressively increasing gap for each orbit
             const baseRadius = 280; // starting radius for innermost orbit
             const gapStart = 140; // px, gap between 1st and 2nd orbit
             const gapInc = 12; // px, increment for each next gap
             let orbitRadius = baseRadius;
             for (let i = 1; i <= orbitIdx; i++) {
               orbitRadius += gapStart + (i - 1) * gapInc;
             }
             orbitRadius = orbitRadius * orbitScale;
             const animationName = `orbit-rotate-${orbitIdx}`;
             const duration = 600 + orbitIdx * 60;
             const direction = orbitIdx % 2 === 0 ? 'normal' : 'reverse';
             // Distribute icons at regular intervals, fill rest with dots
             const iconPositions = Array(orbit.positions).fill(null);
             const interval = Math.floor(orbit.positions / orbit.icons.length);
             let pos = 0;
             orbit.icons.forEach((icon, i) => {
               iconPositions[pos] = icon;
               pos = (pos + interval) % orbit.positions;
               while (iconPositions[pos] && iconPositions.filter(Boolean).length < orbit.icons.length) {
                 pos = (pos + 1) % orbit.positions;
               }
             });
             return (
               <Box
                 key={`orbit-parent-${orbitIdx}`}
                 sx={{
                   position: "absolute",
                   right: `${rightPadding + logoOffset - orbitRadius}px`,
                   top: "50%",
                   width: `${orbitRadius * 2}px`,
                   height: `${orbitRadius * 2}px`,
                   pointerEvents: "none",
                   zIndex: 2,
                   transform: "translateY(-50%)",
                   animation: `${animationName} ${duration}s linear infinite` ,
                   animationDirection: direction,
                   animationPlayState: isPaused ? 'paused' : 'running',
                   [`@keyframes ${animationName}`]: {
                     '0%': { transform: 'translateY(-50%) rotate(0deg)' },
                     '100%': { transform: 'translateY(-50%) rotate(360deg)' },
                   },
                 }}
               >
                 {/* Orbit border */}
                 <Box
                   sx={{
                     position: "absolute",
                     top: 0,
                     left: 0,
                     width: "100%",
                     height: "100%",
                     borderRadius: "50%",
                     border: "1.5px solid rgba(255,255,255,0.15)",
                     zIndex: 1,
                   }}
                 />
                 {/* Icons and dots at positions, using user-provided styles */}
                 {iconPositions.map((icon, posIdx) => {
                   const angle = (360 / orbit.positions) * posIdx;
                   const radians = (angle * Math.PI) / 180;
                   const x = Math.cos(radians) * orbitRadius;
                   const y = Math.sin(radians) * orbitRadius;
                   if (icon) {
                     // Icon style from user-provided TechIcon
                     return (
                       <Box
                         key={`icon-${orbitIdx}-${posIdx}`}
                         sx={{
                           position: "absolute",
                           right: `calc(50% - ${x}px)` ,
                           top: `calc(50% + ${y}px)` ,
                           transform: "translate(50%, -50%)",
                           zIndex: 20,
                           cursor: "pointer",
                           pointerEvents: "auto",
                         }}
                         onMouseEnter={() => setIsPaused(true)}
                         onMouseLeave={() => setIsPaused(false)}
                         onClick={() => handleTechClick(icon.name)}
                       >
                         <Box
                           sx={{
                             width: `${68 * orbitScale}px`,
                             height: `${68 * orbitScale}px`,
                             borderRadius: "50%",
                             bgcolor: "#0D264F",
                             display: "flex",
                             justifyContent: "center",
                             alignItems: "center",
                             boxShadow: "0 0 20px rgba(0, 123, 255, 0.2)",
                             border: "1px solid #3B526F",
                             '&:hover': {
                               boxShadow: "0 0 30px rgba(0, 123, 255, 0.4)",
                               transform: "scale(1.05)",
                             },
                             transition: "all 0.3s ease-in-out",
                           }}
                         >
                           <Box
                             component="img"
                             src={icon.icon}
                             alt={icon.name}
                             loading="lazy"
                             sx={{
                               width: `${38 * orbitScale}px`,
                               height: `${38 * orbitScale}px`,
                               objectFit: "contain",
                               transition: "transform 0.2s ease-in-out",
                               '&:hover': {
                                 transform: "scale(1.05)",
                               },
                             }}
                           />
                         </Box>
                       </Box>
                     );
                   } else {
                     // Dot style from user-provided code
                     return (
                       <Box
                         key={`dot-${orbitIdx}-${posIdx}`}
                         sx={{
                           position: "absolute",
                           right: `calc(50% - ${x}px)` ,
                           top: `calc(50% + ${y}px)` ,
                           transform: "translate(50%, -50%)",
                           width: { xs: "4px", sm: "6px", md: "7px" },
                           height: { xs: "4px", sm: "6px", md: "7px" },
                           borderRadius: "50%",
                           bgcolor: "#B2D2FC",
                           pointerEvents: "none",
                           zIndex: 5,
                         }}
                       />
                     );
                   }
                 })}
               </Box>
             );
           })}

           {/* Center logo with animated glowing ripple effect behind */}
           <Box
             sx={{
               position: "absolute",
               right: `${rightPadding}px`,
               top: "50%",
               transform: "translateY(-50%)",
               width: `${200}px`,
               height: `${200}px`,
               borderRadius: "50%",
               background: "#0F4285",
               boxShadow: "0 0 30px #0B3161",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               zIndex: 10,
               pointerEvents: "auto",
             }}
           >
             {/* Custom Ripple Animation (subtle, behind pulse) */}
             <Box
               sx={{
                 position: "absolute",
                 top: "50%",
                 left: "50%",
                 width: "200px",
                 height: "200px",
                 borderRadius: "50%",
                 transform: "translate(-50%, -50%)",
                 zIndex: 0,
                 pointerEvents: "none",
                animation: 'ripple 1.5s linear infinite',
                 '@keyframes ripple': {
                   '0%': {
                     boxShadow: '0 0 0 0 rgba(11,49,97,0.3), 0 0 0 1em rgba(11,49,97,0.3), 0 0 0 3em rgba(11,49,97,0.3), 0 0 0 5em rgba(11,49,97,0.3)',
                   },
                   '100%': {
                     boxShadow: '0 0 0 1em rgba(11,49,97,0.3), 0 0 0 3em rgba(11,49,97,0.3), 0 0 0 5em rgba(11,49,97,0.3), 0 0 0 8em rgba(11,49,97,0)',
                   },
                 },
               }}
             />
            
             {/* Show description or logo */}
             {showDescription ? (
               <Box
                 sx={{
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center",
                   justifyContent: "center",
                   p: 3,
                   position: "relative",
                   height: "100%",
                   width: "100%",
                   zIndex: 2,
                 }}
               >
                 <Typography
                   variant="h6"
                   sx={{
                     color: "#ffffff",
                     textAlign: "center",
                     fontWeight: 600,
                     mb: 1,
                     fontSize: { xs: "18px", sm: "20px", md: "22px" },
                   }}
                 >
                   {activeTech}
                 </Typography>
                 <Typography
                   variant="body2"
                   sx={{
                     color: "#B2D2FC",
                     textAlign: "center",
                     fontSize: { xs: "16px", sm: "16px", md: "16px" },
                     lineHeight: 1.4,
                     maxHeight: "130px",
                     overflow: "auto",
                     scrollbarWidth: "none", // For Firefox
                     '-ms-overflow-style': 'none', // For IE and Edge
                     '&::-webkit-scrollbar': {
                       width: '0px',
                       background: 'transparent',
                     },
                     '&::-webkit-scrollbar-thumb': {
                       background: 'transparent',
                     },
                   }}
                 >
                   {techDescriptions[activeTech]}
                 </Typography>
                 <Box
                   onClick={closeDescription}
                   sx={{
                     position: "absolute",
                     bottom: "20px",
                     cursor: "pointer",
                     display: "flex",
                     alignItems: "center",
                     color: "#4b91f1",
                     fontSize: "12px",
                     gap: 0.5,
                   }}
                 >
                   <CloseIcon sx={{ fontSize: 16 }} /> Close
                 </Box>
               </Box>
             ) : (
               <Box
                 component="img"
                 src={teamgridLogo}
                 alt="Teamgrid logo"
                 sx={{
                   width: `${logoWidth}px`,
                   height: `${logoHeight}px`,
                   position: 'relative',
                   zIndex: 2,
                   objectFit: 'contain',
                 }}
               />
             )}
           </Box>
         </Box>
         ) : null}
      </Box>
    </Box>
  );
}

export default Home;
