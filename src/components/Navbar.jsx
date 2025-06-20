import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Drawer,
  Collapse,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { layer1 as logo } from "../images";

// Import service icons from assets
import fileCodeIcon from "../assets/lucide_file-code.svg";
import storageIcon from "../assets/Group 26.svg";
import wordpressIcon from "../assets/ic_round-wordpress.svg";
import mobileIcon from "../assets/Group 29.svg";
import crossPlatformIcon from "../assets/Group 30.svg";
import webAppIcon from "../assets/Group 31.svg";
import designIcon from "../assets/Group 33.svg";
import prototypeIcon from "../assets/lucide_pencil-ruler.svg";
import systemsIcon from "../assets/Group 35.svg";
import shopifyIcon from "../assets/Group 36.svg";
import wooCommerceIcon from "../assets/Group11.svg";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  // Handle hover on menu item
  const handleMenuHover = (index) => {
    if (menuItems[index].hasSubmenu) {
      setActiveDropdown(index);
    }
  };

  // Handle mouse leave on dropdown
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const serviceCategories = [
    {
      title: "WEB DEVELOPMENT",
      services: [
        {
          title: "Front-End Development",
          description: "Fast, responsive, and pixel-perfect user interfaces.",
          icon: (
            <Box
              component="img"
              src={fileCodeIcon}
              alt="Front-End Development"
              height={40}
              width={40}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
        {
          title: "Back-End Development",
          description: "Scalable, secure, and efficient architecture.",
          icon: (
            <Box
              component="img"
              src={storageIcon}
              alt="Back-End Development"
              height={45}
              width={45}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
        {
          title: "WordPress & CMS",
          description: "Custom WordPress sites with Elementor, and more.",
          icon: (
            <Box
              component="img"
              src={wordpressIcon}
              alt="WordPress & CMS"
              height={45}
              width={45}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
      ],
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      services: [
        {
          title: "iOS & Android Development",
          description: "Native mobile experiences that perform and scale.",
          icon: (
            <Box
              component="img"
              src={mobileIcon}
              alt="iOS & Android Development"
              height={45}
              width={45}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
        {
          title: "Cross-Platform Apps",
          description:
            "Build and deploy everywhere with React Native or Flutter.",
          icon: (
            <Box
              component="img"
              src={crossPlatformIcon}
              alt="Cross-Platform Apps"
              height={45}
              width={45}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
        {
          title: "Progressive Web Apps",
          description: "Web apps that work offline and feel native.",
          icon: (
            <Box
              component="img"
              src={webAppIcon}
              alt="Progressive Web Apps"
              height={45}
              width={45}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
      ],
    },
    {
      title: "UI/UX & DESIGN",
      services: [
        {
          title: "UI/UX Design",
          description: "Intuitive, user-focused design for web and mobile.",
          icon: (
            <Box
              component="img"
              src={designIcon}
              alt="UI/UX Design"
              height={45}
              width={45}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
        {
          title: "Prototyping & Wireframing",
          description: "Visualize fast using tools like Figma and Adobe XD.",
          icon: (
            <Box
              component="img"
              src={prototypeIcon}
              alt="Prototyping & Wireframing"
              height={35}
              width={35}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
        {
          title: "Design Systems",
          description:
            "Scalable design libraries to maintain brand consistency.",
          icon: (
            <Box
              component="img"
              src={systemsIcon}
              alt="Design Systems"
              height={45}
              width={45}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
      ],
    },
    {
      title: "E-COMMERCE SOLUTIONS",
      services: [
        {
          title: "Shopify Development",
          description: "Custom stores with fast checkout and optimized UX.",
          icon: (
            <Box
              component="img"
              src={shopifyIcon}
              alt="Shopify Development"
              height={45}
              width={45}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
        {
          title: "WooCommerce Integration",
          description: "Extend WordPress with powerful features.",
          icon: (
            <Box
              component="img"
              src={wooCommerceIcon}
              alt="WooCommerce Integration"
              height={45}
              width={45}
              sx={{ objectFit: "contain" }}
            />
          ),
        },
      ],
    },
  ];

  const menuItems = [
    { title: "Home", hasSubmenu: false },
    { title: "About Us", hasSubmenu: false },
    {
      title: "What We Do",
      hasSubmenu: true,
      submenuItems: ["Web Development", "Mobile Development", "UI/UX Design"],
    },
    { title: "Technologies We Use", hasSubmenu: false },
    { title: "How we work", hasSubmenu: false },
    { title: "Let's Talk", hasSubmenu: false },
  ];

  const renderDesktopMenu = () => (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        ml: 8,
      }}
    >
      <List
        ref={menuRef}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "transparent",
          padding: "8px",
          pl: 10,
          "& .MuiListItem-root": { width: "auto" },
          minWidth: "600px",
        }}
      >
        {menuItems.map((item, index) => (
          <Box
            key={index}
            sx={{ position: "relative" }}
            onMouseEnter={() => handleMenuHover(index)}
          >
            <ListItem
              sx={{
                color: "primary.main",
                px: 2,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                "&:hover": { bgcolor: "#F3F3F6" },
                bgcolor: activeDropdown === index ? "#F3F3F6" : "transparent",
                borderRadius: "30px",
                transition: "all 0.2s",
                fontWeight: 500,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {item.title}
              </Typography>
              {item.hasSubmenu && (
                <KeyboardArrowDownIcon
                  fontSize="small"
                  sx={{ ml: 0.5, color: "primary.main" }}
                />
              )}
            </ListItem>

            {/* Dropdown Menu */}
            {item.hasSubmenu && activeDropdown === index && (
              <Box
                ref={dropdownRef}
                onMouseLeave={handleDropdownLeave}
                sx={{
                  position: "fixed",
                  top: "84px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "1248px",
                  mt: 1.5,
                  height: "auto",
                  minHeight: "300px",
                  maxHeight: "500px",
                  borderRadius: "12px",
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
                  p: 3,
                  backgroundColor: "#fff",
                  zIndex: 1300,
                  overflowY: "visible",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {serviceCategories.map((category, catIndex) => (
                  <Box
                    key={catIndex}
                    sx={{
                      width: "282px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      overflowY: "visible",
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        fontWeight: 400,
                        color: "text.secondary",
                        fontFamily: "PayPal Open, sans-serif",
                        fontSize: "11px",
                        mb: 1,
                        display: "block",
                        textTransform: "uppercase",
                        opacity: 0.7,
                        letterSpacing: "0.5px",
                      }}
                    >
                      {category.title}
                    </Typography>

                    <Box sx={{ mt: 1 }}>
                      {category.services.map((service, serviceIndex) => (
                        <Box
                          key={serviceIndex}
                          sx={{
                            mb: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            cursor: "pointer",
                            width: "100%",
                            height: "auto",
                            minHeight: "60px",
                            "&:hover": {
                              "& .service-title": {
                                color: "#0B3C7B",
                              },
                              backgroundColor: "rgba(0, 0, 0, 0.02)",
                              borderRadius: "6px",
                            },
                            px: 1,
                            py: 0.5,
                            transition: "all 0.2s ease",
                          }}
                          onClick={() => {
                            // Handle service item click
                            setActiveDropdown(null); // Close dropdown
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "45px",
                              height: "45px",
                              flexShrink: 0,
                              borderRadius: "8px",
                              backgroundColor: "rgba(11, 60, 123, 0.06)",
                              padding: "8px",
                            }}
                          >
                            {service.icon}
                          </Box>
                          <Box>
                            <Typography
                              className="service-title"
                              variant="subtitle1"
                              sx={{
                                fontWeight: 500,
                                color: "#0B3C7B",
                                fontFamily: "PayPal Open, sans-serif",
                                fontSize: "15px",
                                mb: 0.25,
                                transition: "color 0.2s",
                              }}
                            >
                              {service.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "text.secondary",
                                fontFamily: "PayPal Open, sans-serif",
                                fontSize: "13px",
                                lineHeight: 1.5,
                                opacity: 0.8,
                              }}
                            >
                              {service.description}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </List>

      <Button
        variant="contained"
        color="primary"
        sx={{
          ml: 3,
          height: 48,
          borderRadius: "37px",
          boxShadow: "none",
          px: 4,
          fontWeight: 500,
          textTransform: "none",
        }}
      >
        Get a Quote
      </Button>
    </Box>
  );

  const renderMobileMenu = () => (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ ml: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 320 },
            boxSizing: "border-box",
            p: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ height: 40, width: "auto" }}
          />
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <List sx={{ width: "100%" }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  py: 1.5,
                  px: 2,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "rgba(11, 60, 123, 0.04)" },
                }}
                button
                onClick={
                  item.hasSubmenu
                    ? () => handleSubmenuToggle(index)
                    : handleDrawerToggle
                }
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="primary.main"
                    fontWeight={500}
                  >
                    {item.title}
                  </Typography>
                  {item.hasSubmenu &&
                    (openSubmenu === index ? (
                      <ExpandLessIcon color="primary" />
                    ) : (
                      <ExpandMoreIcon color="primary" />
                    ))}
                </Box>
              </ListItem>

              {item.hasSubmenu && (
                <Collapse
                  in={openSubmenu === index}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {serviceCategories.map((category, catIndex) => (
                      <React.Fragment key={`cat-${catIndex}`}>
                        <ListItem
                          sx={{
                            pl: 4,
                            py: 1,
                          }}
                        >
                          <Typography
                            variant="overline"
                            sx={{
                              fontWeight: 500,
                              color: "text.secondary",
                              fontSize: "12px",
                            }}
                          >
                            {category.title}
                          </Typography>
                        </ListItem>

                        {category.services.map((service, serviceIndex) => (
                          <ListItem
                            key={`service-${catIndex}-${serviceIndex}`}
                            button
                            onClick={handleDrawerToggle}
                            sx={{
                              pl: 6,
                              py: 1,
                              "&:hover": { bgcolor: "rgba(11, 60, 123, 0.04)" },
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              {service.icon}
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#0B3C7B",
                                }}
                              >
                                {service.title}
                              </Typography>
                            </Box>
                          </ListItem>
                        ))}
                      </React.Fragment>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
        <Box sx={{ position: "sticky", bottom: 16, px: 2, mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              borderRadius: "37px",
              py: 1.5,
            }}
          >
            Get a Quote
          </Button>
        </Box>
      </Drawer>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        py: 1,
        bgcolor: "#FFFFFF",
        backdropFilter: "blur(8px)",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 4, lg: 0 },
        }}
      >
        <Toolbar disableGutters sx={{ width: "100%", display: "flex" }}>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              height: { xs: 40, md: 58 },
              width: "auto",
              mr: 4,
            }}
          />

          {renderDesktopMenu()}
          {renderMobileMenu()}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
