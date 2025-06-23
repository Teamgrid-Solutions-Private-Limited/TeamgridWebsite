import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  IconButton,
  Typography,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Drawer,
  Collapse,
  Divider,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  layer1 as logo,
  storageIcon,
  fileCodeIcon,
  wordpressIconModal as wordpressIcon,
  mobileIcon,
  crossPlatformIcon,
  webAppIcon,
  designIcon,
  prototypeIcon,
  systemsIcon,
  shopifyIconModal as shopifyIcon,
  wooCommerceIconModal as wooCommerceIcon,
} from "../images";

// Import service icons from assets

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile drawer on resize
  useEffect(() => {
    if (!isMobile && mobileOpen) {
      setMobileOpen(false);
    }
  }, [isMobile, mobileOpen]);

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

  // Handle click on menu item
  const handleMenuClick = (index) => {
    setActiveTab(index);

    if (menuItems[index].hasSubmenu) {
      // If it has submenu, toggle the dropdown
      setActiveDropdown(activeDropdown === index ? null : index);
    } else {
      // If it's a regular tab, close any open dropdown
      setActiveDropdown(null);
    }

    // On mobile, close the drawer for non-submenu items
    if (isMobile && !menuItems[index].hasSubmenu) {
      setMobileOpen(false);
    }
  };

  const serviceCategories = [
    {
      title: "WEB DEVELOPMENT",
      services: [
        {
          title: "Front-End Development",
          description: "Fast, responsive, and pixel-perfect user interfaces.",
          icon: fileCodeIcon,
        },
        {
          title: "Back-End Development",
          description: "Scalable, secure, and efficient architecture.",
          icon: storageIcon,
        },
        {
          title: "WordPress & CMS",
          description: "Custom WordPress sites with Elementor, and more.",
          icon: wordpressIcon,
        },
      ],
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      services: [
        {
          title: "iOS & Android Development",
          description: "Native mobile experiences that perform and scale.",
          icon: mobileIcon,
        },
        {
          title: "Cross-Platform Apps",
          description:
            "Build and deploy everywhere with React Native or Flutter.",
          icon: crossPlatformIcon,
        },
        {
          title: "Progressive Web Apps",
          description: "Web apps that work offline and feel native.",
          icon: webAppIcon,
        },
      ],
    },
    {
      title: "UI/UX & DESIGN",
      services: [
        {
          title: "UI/UX Design",
          description: "Intuitive, user-focused design for web and mobile.",
          icon: designIcon,
        },
        {
          title: "Prototyping & Wireframing",
          description: "Visualize fast using tools like Figma and Adobe XD.",
          icon: prototypeIcon,
        },
        {
          title: "Design Systems",
          description:
            "Scalable design libraries to maintain brand consistency.",
          icon: systemsIcon,
        },
      ],
    },
    {
      title: "E-COMMERCE SOLUTIONS",
      services: [
        {
          title: "Shopify Development",
          description: "Custom stores with fast checkout and optimized UX.",
          icon: shopifyIcon,
        },
        {
          title: "WooCommerce Integration",
          description: "Extend WordPress with powerful features.",
          icon: wooCommerceIcon,
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
  ];

  const renderDesktopMenu = () => (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        width: "100%",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          height: { xs: 40, md: 48, lg: 58 },
          width: "auto",
          mr: { md: 2, lg: 4 },
          display: { xs: "none", md: "block" },
        }}
      />
      <List
        ref={menuRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          bgcolor: "transparent",
          padding: 0,
          "& .MuiListItem-root": { width: "auto" },
          gap: { md: 0.5, lg: 1 },
          flex: { md: "1 1 auto" },
          mx: { md: 2, lg: 4 },
          overflow: { md: "auto" },
        }}
      >
        {menuItems.map((item, index) => (
          <Box
            key={index}
            sx={{ position: "relative" }}
            onMouseEnter={() => handleMenuHover(index)}
            onClick={() => handleMenuClick(index)}
          >
            <ListItem
              sx={{
                color: "primary.main",
                px: { md: 1, lg: 1.5, xl: 2 },
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                "&:hover": { bgcolor: "#F3F3F6" },
                bgcolor:
                  activeTab === index || activeDropdown === index
                    ? "#F3F3F6"
                    : "transparent",
                borderRadius: "30px",
                transition: "all 0.2s",
                fontWeight: 500,
                fontSize: { md: "0.85rem", lg: "1rem" },
                whiteSpace: "nowrap",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "0.85rem", lg: "1rem" },
                }}
              >
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
                  top: { md: "76px", lg: "84px" },
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { md: "90vw", lg: "90vw", xl: "1248px" },
                  maxWidth: "1248px",
                  mt: 1.5,
                  height: "auto",
                  minHeight: { md: "250px", lg: "300px" },
                  maxHeight: { md: "80vh", lg: "500px" },
                  borderRadius: "12px",
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
                  p: { md: 2, lg: 3 },
                  backgroundColor: "#fff",
                  zIndex: 1300,
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: { md: "column", lg: "row" },
                  flexWrap: { md: "wrap", lg: "nowrap" },
                  justifyContent: "space-between",
                  gap: { md: 2, lg: 3 },
                }}
              >
                {serviceCategories.map((category, catIndex) => (
                  <Box
                    key={catIndex}
                    sx={{
                      width: { md: "100%", lg: "282px" },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      mb: { md: 3, lg: 0 },
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        fontWeight: 400,
                        color: "text.secondary",
                        fontFamily: "PayPal Open, sans-serif",
                        fontSize: "12px",
                        mb: 0,
                        display: "block",
                        textTransform: "uppercase",
                        opacity: 0.7,
                        letterSpacing: "0.5px",
                        pl: 2.5,
                      }}
                    >
                      {category.title}
                    </Typography>

                    <Box sx={{ mt: 0 }}>
                      {category.services.map((service, serviceIndex) => (
                        <Box
                          key={serviceIndex}
                          sx={{
                            mb: 0,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            cursor: "pointer",
                            width: "100%",
                            height: "auto",
                            minHeight: "60px",
                            "&:hover": {
                              bgcolor: "#f2f2f5",
                              "& .service-title": {
                                color: "#0B3C7B",
                              },
                              backgroundColor: "rgba(0, 0, 0, 0.02)",
                              borderRadius: "20px",
                            },
                            px: 2,
                            py: 2,
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
                              "&:hover": {
                                bgcolor: "#FFFFFF",
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={service.icon}
                              alt={service.title}
                              sx={{
                                width: "24px",
                                height: "24px",
                                objectFit: "contain",
                              }}
                            />
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography
                              className="service-title"
                              variant="subtitle1"
                              sx={{
                                fontWeight: 500,
                                color: "#0B3C7B",
                                fontFamily: "PayPal Open, sans-serif",
                                fontSize: "14px",
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
                                fontSize: "14px",
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
          height: { md: 42, lg: 48 },
          minWidth: { md: "120px", lg: "auto" },
          borderRadius: "37px",
          boxShadow: "none",
          px: { md: 2, lg: 4 },
          fontWeight: 500,
          textTransform: "none",
          fontSize: { md: "0.85rem", lg: "1rem" },
          whiteSpace: "nowrap",
          display: { xs: "none", md: "flex" },
        }}
      >
        Lets Talk
      </Button>
    </Box>
  );

  const renderMobileMenu = () => (
    <Box sx={{ display: { xs: "flex", md: "none" }, marginLeft: "auto" }}>
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerToggle}
        sx={{
          ml: 2,
          fontSize: "1.5rem",
        }}
      >
        <MenuIcon fontSize="large" />
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
            overflow: "auto",
          },
        }}
        ModalProps={{
          keepMounted: true, // Better mobile performance
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
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ width: "100%" }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  py: 1.5,
                  px: 2,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "rgba(11, 60, 123, 0.04)" },
                  bgcolor: activeTab === index ? "#F3F3F6" : "transparent",
                }}
                button
                onClick={
                  item.hasSubmenu
                    ? () => handleSubmenuToggle(index)
                    : () => {
                        handleMenuClick(index);
                        handleDrawerToggle();
                      }
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
                              "&:hover": { bgcolor: "#f2f2f5" },
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                width: "100%",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "36px",
                                  height: "36px",
                                  flexShrink: 0,
                                  borderRadius: "8px",
                                  backgroundColor: "rgba(11, 60, 123, 0.06)",
                                  padding: "6px",
                                }}
                              >
                                <Box
                                  component="img"
                                  src={service.icon}
                                  alt={service.title}
                                  sx={{
                                    width: "24px",
                                    height: "24px",
                                    objectFit: "contain",
                                  }}
                                />
                              </Box>
                              <Stack spacing={0.5} sx={{ flex: 1 }}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#0B3C7B",
                                    fontWeight: 500,
                                  }}
                                >
                                  {service.title}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    display: { xs: "none", sm: "block" },
                                    color: "text.secondary",
                                    fontSize: "11px",
                                  }}
                                >
                                  {service.description}
                                </Typography>
                              </Stack>
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
        <Box sx={{ px: 2, pb:2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              borderRadius: "37px",
              py: 1.5,
            }}
          >
            Let's Talk
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
      ref={navRef}
      sx={{
        py: { xs: 0.5, sm: 0.75, md: 1 },
        bgcolor: "#FFFFFF",
        backdropFilter: "blur(8px)",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="1400px"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 4, lg: 8, xl: 0 },
          maxWidth: { xs: "100%", xl: "1400px" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo - visible on all screens */}
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              height: { xs: 40, md: 48, lg: 58 },
              width: "auto",
              display: { xs: "block", md: "none" },
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
