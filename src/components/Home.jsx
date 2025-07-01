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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
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
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CloseIcon from "@mui/icons-material/Close";
import data from "../data.json";
import { fontClamp } from "../fontUtils";

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
  const [showDescriptionText, setShowDescriptionText] = useState(false);
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
    const updateOrbitScale = () => {
      const scale = Math.max(0.5, Math.min(window.innerWidth / 1440, 1.2)); // Clamp between 0.5 and 2 for sanity
      setOrbitScale(scale);
    };
    updateOrbitScale();
    window.addEventListener("resize", updateOrbitScale);
    return () => window.removeEventListener("resize", updateOrbitScale);
  }, []);

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
    setTimeout(() => setShowDescriptionText(true), 400); // fade in text after scale up
  };

  const closeDescription = () => {
    setShowDescriptionText(false);
    setTimeout(() => {
      setShowDescription(false);
      setIsPaused(false);
      setActiveTech(null);
    }, 200); // scale down after fade out
  };

  // Responsive logo and ripple sizes
  const logoWidth = isXs ? 60 : isSm ? 80 : isMd ? 100 : isLg ? 120 : isXl ? 140 : 105;
  const logoHeight = isXs ? 90 : isSm ? 120 : isMd ? 140 : isLg ? 160 : isXl ? 180 : 160;
  const logoOffset = isXs ? 60 : isSm ? 80 : isMd ? 100 : isLg ? 120 : isXl ? 140 : 122.5;
  const baseRadius = 280; // must match the orbit's baseRadius
  const rippleDiameter = baseRadius * 2 * orbitScale;
 

  return (
    <Box
      sx={{
        bgcolor: "#072449",
        height: {xs:"100vh",xl:"80vh"},
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
        maxWidth={"1248px"}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection:'column',
          justifyContent:'flex-start',
          px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
          maxWidth: "1248px",
          width: "100%",
          zIndex: 2, // Ensure content is above the background
        }}
      > 
            {/* Text Section - pointer events none */}
            <Box sx={{ pointerEvents: "none", display: "flex", flexDirection: "column", gap: 1.8 ,zIndex:3}}>
              <Typography
                sx={{
                  color: "#E1E0E0",
                  fontSize: fontClamp(18,{minPx:16,maxMultiplier:1.25}),
                  lineHeight: 1.5,
                  textShadow: { xs: "0px 1px 2px rgba(0,0,0,0.5)", sm: "none" },
                  pointerEvents: "none",
                }}
              >
                {subtitle}
              </Typography>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: fontClamp(64,{minPx:40,maxMultiplier:1.25}),
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
                sx={{
                  color: "#E1E0E0",
                  fontSize: fontClamp(20,{minPx:16,maxMultiplier:1.25}),
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
                  display:"flex",
                  zIndex:3,
                  pointerEvents:'none'
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
                    fontSize: fontClamp(16),
                    fontWeight: 500,
                    boxShadow: "0 4px 10px rgba(0, 123, 255, 0.25)",
                    "&:hover": { bgcolor: "#0069d9" },
                    width: { xs: "100%", sm: "auto" },
                    pointerEvents:'auto'
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
                    fontSize: fontClamp(16),
                    fontWeight: 500,
                    "&:hover": { borderColor: "rgba(255,255,255,0.5)" },
                    width: { xs: "100%", sm: "auto" },
                    pointerEvents:'auto'
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
                           left: `calc(50% + ${x}px)`,
                           top: `calc(50% + ${y}px)`,
                           transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
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
                             boxShadow: "0 0 20px 0 rgba(0, 123, 255, 0.4)",
                             animation: "glowPulse 3s ease-in-out infinite",
                             '@keyframes glowPulse': {
                               '0%':   { boxShadow: "0 0 0px 0 rgba(0, 123, 255, 0.0)" },
                               '50%':  { boxShadow: "0 0 20px 0 rgba(0, 123, 255, 0.4)" },
                               '100%': { boxShadow: "0 0 0px 0 rgba(0, 123, 255, 0.0)" },
                             },
                             border: "1px solid #3B526F",
                             transition: "transform 0.3s ease-in-out",
                             '&:hover': {
                               transform: "scale(1.05)",
                             },
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
                           left: `calc(50% + ${x}px)`,
                           top: `calc(50% + ${y}px)`,
                           transform: "translate(-50%, -50%)",
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
               width: `${logoOffset*2}px`,
               height: `${logoOffset*2}px`,
               borderRadius: "50%",
               background: "#0F4285",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               zIndex: 10,
               pointerEvents: "auto",
              //  transition: "transform 0.5s cubic-bezier(.7,.2,.2,1)",
               // overflow: "hidden",
             }}
           >
             {/* Custom Ripple Animation (subtle, behind pulse) */}
             <Box
               sx={{
                 position: "absolute",
                 top: "50%",
                 left: "50%",
                 width: `${logoOffset*2}px`,
                 height: `${logoOffset*2}px`,
                 borderRadius: "50%",
                 transform: "translate(-50%, -50%)",
                 zIndex: -14,
                 pointerEvents: "none",
                 animation: 'ripple 1.5s linear infinite',
                 '@keyframes ripple': {
                   '0%': {
                     boxShadow: `0 0 0 0 rgba(11,49,97,0.5), 0 0 0 ${0.0286 * rippleDiameter}px rgba(11,49,97,0.5), 0 0 0 ${0.0286*4 * rippleDiameter}px rgba(11,49,97,0.5), 0 0 0 ${0.0286*7 * rippleDiameter}px rgba(11,49,97,0.5)`
                   },
                   '100%': {
                     boxShadow: `0 0 0 ${0.0286 * rippleDiameter}px rgba(11,49,97,0.5), 0 0 0 ${0.0286*4 * rippleDiameter}px rgba(11,49,97,0.5), 0 0 0 ${0.0286*7 * rippleDiameter}px rgba(11,49,97,0.5), 0 0 0 ${0.0286*9 * rippleDiameter}px rgba(11,49,97,0)`
                   },
                 },
               }}
             />
            
             {/* Show description or logo */}
             <Box
               sx={{
                position: "relative",
                //  transition: 'width 0.5s, height 0.5s',
               }}
             >
               <Box
                 component="img"
                 src={teamgridLogo}
                 alt="Teamgrid logo"
                 sx={{
                   borderRadius: '12px',
                   transition: 'transform 1s ',
                   transform: showDescription ? 'translate(-160%,-260%) scale(18)' : 'translateX(0%) scale(1)',
                   transformOrigin:'left top',
                   zIndex: 2,
                 }}
               />
               {showDescription && (
                 <Box
                   sx={{
                     position: 'absolute',
                     left: '0%',
                     top: '50%',
                     transform: 'translate(-37%,-30%)',
                  
                     height:'500px',
                     width:'400px',
                     zIndex: 3,
                     color: '#fff',
                     
                     p: { xs: 2, sm: 4 },
                    //  boxShadow: '0 8px 40px 0 rgba(0,0,0,0.18)',
                     display: 'flex',
                     flexDirection: 'column',
                     gap:2,
                     alignItems: 'flex-start',
                     opacity: showDescriptionText ? 1 : 0,
                     transition: 'opacity 0.4s cubic-bezier(.7,.2,.2,1)',
                   }}
                 >
                   {/* Tech icon at the top */}
                   
                     <ReplyOutlinedIcon sx={{ fontSize: 40, }} onClick={closeDescription}/>
                   <Box sx={{bgcolor:'#fff',p:1,borderRadius: '16px',display:'flex',justifyContent:'center',alignItems:"center"}}>
                    <Box
                     component="img"
                     src={techIcons.find(t => t.name === activeTech)?.icon}
                     alt={activeTech}
                     sx={{
                       width: { xs: '38px', md: '42px' },
                       height: { xs: '38px', md: '42px' },
                       objectFit: 'contain',
                       display: 'block',
                     }}
                   /></Box>
                  
                   <Typography
                     
                     sx={{
                       color: '#fff',
                       fontWeight: 500,
                       mb: 1,
                       fontSize: fontClamp(36),
                       textShadow: '0 2px 8px rgba(0,0,0,0.18)',
                       textAlign: 'left',
                     }}
                   >
                     {activeTech}
                   </Typography>
                   <Typography
                    
                     sx={{
                       color: '#fff',
                       fontSize: fontClamp(18),
                       fontWeight:400,
                       lineHeight: 1.5,
                       mb: 3,
                       textAlign: 'left',
                     }}
                   >
                     {techDescriptions[activeTech]}
                   </Typography>
                   <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowRightAltIcon />}
                sx={{
                  borderRadius: "39px",
                  px: 5,
                  py: 2,
                  textTransform: "none",
                  fontSize:fontClamp(18),
                  fontWeight: 400,
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "#FAFAFA",
                  boxShadow: "none",
                  alignSelf: "flex-start",
                }}
              >
                Explore Services
              </Button>
                  
                 </Box>
               )}
             </Box>
           </Box>
         </Box>
         ) : null}
      </Box>
    </Box>
  );
}

export default Home;
