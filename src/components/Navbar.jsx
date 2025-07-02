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
  layer1,
  layer2,
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
import data from "../data.json";
import { fontClamp } from "../fontUtils";

// Get menu items from data.json
const { menuItems: menuItemsData, serviceCategories: serviceCategoriesData } =
  data.navbar;

// Map icon names to imported icons
const iconMap = {
  fileCodeIcon,
  storageIcon,
  wordpressIcon,
  mobileIcon,
  crossPlatformIcon,
  webAppIcon,
  designIcon,
  prototypeIcon,
  systemsIcon,
  shopifyIcon,
  wooCommerceIcon,
};

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Handle scroll event to change navbar style with immediate changes, no animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Boolean state for immediate changes
      if (scrollPosition > 50) {
        setScrolled(true);
        setScrollProgress(1); // Full progress
      } else {
        setScrolled(false);
        setScrollProgress(0); // No progress
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  // Map serviceCategories data and convert icon strings to actual imported icons
  const serviceCategories = serviceCategoriesData.map((category) => ({
    ...category,
    services: category.services.map((service) => ({
      ...service,
      icon: iconMap[service.icon],
    })),
  }));

  const menuItems = menuItemsData;

  const renderDesktopMenu = () => (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={scrollProgress < 0.5 ? layer2 : layer1}
        alt="logo"
        loading="lazy"
        sx={{
          width: "158px",
          height: "50px",
          mr: 0,
          display: { xs: "none", md: "block" },
          filter: "none",
          flexShrink: 0,
          transition: "none",
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
          flex: "1 1 auto",
          mx: { md: 1, lg: 2 },
          overflow: "hidden",
          maxWidth: "100%",
          transition: "background 0.25s, color 0.25s",
        }}
      >
        {menuItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              flexShrink: 1,
            }}
            onMouseEnter={() => handleMenuHover(index)}
            onClick={() => handleMenuClick(index)}
          >
            <ListItem
              sx={{
                color: !scrolled ? "white" : "#05408E",
                px: { md: 1, lg: 1.5, xl: 2 },
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  bgcolor: !scrolled
                    ? "rgba(5, 64, 142, 0.2)"
                    : "rgba(5, 64, 142, 0.05)",
                },
                bgcolor:
                  activeTab === index || activeDropdown === index
                    ? !scrolled
                      ? "rgba(5, 64, 142, 0.2)"
                      : "rgba(5, 64, 142, 0.05)"
                    : "transparent",
                borderRadius: "30px",
                transition: "background 0.25s, color 0.25s",
                fontWeight: 500,
                fontSize: { md: "0.8rem", lg: "0.9rem", xl: "1rem" },
                whiteSpace: "nowrap",
                minWidth: 0,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  fontSize: fontClamp(16),
                  color: !scrolled ? "white" : "#05408E",
                  transition: "color 0.25s",
                }}
              >
                {item.title}
              </Typography>
              {item.hasSubmenu && (
                <KeyboardArrowDownIcon
                  fontSize="small"
                  sx={{
                    ml: 0.5,
                    color: !scrolled ? "white" : "#05408E",
                    transition: "color 0.25s",
                  }}
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
                  width: "100%",
                  maxWidth: "1248px",
                  mt: 1.5,
                  px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
                }}
              >
                <Box sx={{backgroundColor:"#fff", height: "auto",
                  minHeight: { md: "250px", lg: "300px" },
                  maxHeight: { xs: "75vh", md: "75vh", lg: "80vh" },
                  borderRadius: "12px",
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                  p: { xs: 1.5, md: 2, lg: 3 },
                  zIndex: 1300,
                  overflowY: "auto",
                  overflowX: "hidden",
                  display: "flex",
                  flexDirection: { xs: "column", md: "column", lg: "row" },
                  flexWrap: { xs: "nowrap", md: "nowrap", lg: "nowrap" },
                  justifyContent: { xs: "flex-start", lg: "space-between" },
                  gap: { xs: 1, md: 2, lg: 3 },}}>
                {serviceCategories.map((category, catIndex) => (
                  <Box
                    key={catIndex}
                    sx={{
                      width: { xs: "100%", md: "100%", lg: "23%" },
                      minWidth: { lg: "250px" },
                      height: "auto",
                      display: "flex",
                      flexDirection: "column",
                      mb: { xs: 2, md: 2.5, lg: 0 },
                      flexShrink: 0,
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        fontWeight: 400,
                        color: "text.secondary",
                        fontFamily: "PayPal Open, sans-serif",
                        fontSize: fontClamp(12),
                        mb: 0,
                        display: "block",
                        textTransform: "uppercase",
                        opacity: 0.7,
                        letterSpacing: "0.5px",
                        pl: 2.5,
                        lineHeight: '150%',
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
                            alignItems: "flex-start",
                            gap: 1,
                            cursor: "pointer",
                            width: "100%",
                            height: "auto",
                            minHeight: { xs: "50px", md: "55px", lg: "60px" },
                            "&:hover": {
                              bgcolor: "rgba(14, 65, 133, 0.03)",
                              "& .service-title": {
                                color: "#072449",
                              },
                              backgroundColor: "#F3F3F6",
                              borderRadius: "20px",
                              '& .service-icon-bg': {
                                bgcolor: '#FFFFFF',
                              },
                            },
                            px: { xs: 1.2, md: 1.5 },
                            py: { xs: 1.2, md: 1.5 },
                            transition: "all 0.2s ease",
                          }}
                          onClick={() => {
                            // Handle service item click
                            setActiveDropdown(null); // Close dropdown
                          }}
                        >
                          <Box
                          className='service-icon-bg'
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: { xs: "40px", md: "45px" },
                              height: { xs: "40px", md: "45px" },
                              flexShrink: 0,
                              borderRadius: "8px",
                              backgroundColor: "rgba(5, 64, 142, 0.06)",
                              padding: { xs: "6px", md: "8px" },
                              mt: "3px",
                            }}
                          >
                            <Box
                              component="img"
                              src={service.icon}
                              alt={service.title}
                              loading="lazy"
                              sx={{
                                width: "24px",
                                height: "24px",
                                objectFit: "contain",
                              }}
                            />
                          </Box>
                          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                            <Typography
                              className="service-title"
                              variant="subtitle1"
                              sx={{
                                fontWeight: 500,
                                color: "#05408E",
                                fontFamily: "PayPal Open, sans-serif",
                                fontSize: fontClamp(14),
                                mb: 0.25,
                                transition: "color 0.25s",
                                whiteSpace: "normal",
                                wordWrap: "break-word",
                                lineHeight: '150%',
                              }}
                            >
                              {service.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "text.secondary",
                                fontFamily: "PayPal Open, sans-serif",
                                fontSize: fontClamp(14),
                                lineHeight: '150%',
                                opacity: 0.8,
                                whiteSpace: "normal",
                                wordWrap: "break-word",
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
              </Box>
            )}
          </Box>
        ))}
      </List>

      <Button
        variant="contained"
        sx={{
          borderRadius: "39px",
          px: { md: 2, lg: 4, xl: 5 },
          py: 1.5,
          boxShadow: "none",
          fontWeight: 500,
          textTransform: "none",
          fontSize: fontClamp(16),
          whiteSpace: "nowrap",
          display: { xs: "none", md: "flex" },
          color: "white",
          border: "none",
          bgcolor: "#05408E",
          "&:hover": {
            bgcolor: "#05408E",
            border: "none",
            opacity: 0.9,
          },
          flexShrink: 0,
          minWidth: { md: 100, lg: 140 },
          transition: "background 0.25s, color 0.25s",
        }}
      >
        Lets Talk
      </Button>
    </Box>
  );

  const renderMobileMenu = () => (
    <Box sx={{ display: { xs: "flex", md: "none" }, marginLeft: "auto" }}>
      <IconButton
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerToggle}
        sx={{
          ml: 2,
          fontSize: "1.5rem",
          color: !scrolled ? "white" : "#05408E",
          transition: "none",
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
            p: 0,
            overflow: "auto",
            height: "100%",
          },
          zIndex: (theme) => theme.zIndex.drawer + 2,
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
            p: 2,
            borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
            position: "sticky",
            top: 0,
            backgroundColor: "#fff",
            zIndex: 10,
          }}
        >
          <Box
            component="img"
            src={layer1}
            alt="logo"
            loading="lazy"
            sx={{
              height: 40,
              width: "auto",
              filter: "none",
            }}
          />
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#05408E" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ p: 2, pb: 0, height: "calc(100% - 56px)", overflowY: "auto" }}
        >
          <List sx={{ width: "100%" }}>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  sx={{
                    py: 1.5,
                    px: 2,
                    borderRadius: 2,
                    "&:hover": { bgcolor: "rgba(5, 64, 142, 0.04)" },
                    bgcolor:
                      activeTab === index
                        ? "rgba(5, 64, 142, 0.06)"
                        : "transparent",
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
                      color="#05408E"
                      fontWeight={500}
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    {item.hasSubmenu &&
                      (openSubmenu === index ? (
                        <ExpandLessIcon sx={{ color: "#05408E" }} />
                      ) : (
                        <ExpandMoreIcon sx={{ color: "#05408E" }} />
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
                              pl: 2.5,
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
                                pl: 2.5,
                                py: 1,
                                "&:hover": {
                                  bgcolor: "rgba(5, 64, 142, 0.04)",
                                },
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
                                    backgroundColor: "rgba(5, 64, 142, 0.06)",
                                    padding: "6px",
                                  }}
                                >
                                  <Box
                                    component="img"
                                    src={service.icon}
                                    alt={service.title}
                                    loading="lazy"
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
                                      color: "#05408E",
                                      fontWeight: 500,
                                      fontSize: "14px",
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
                                      lineHeight: 1.4,
                                      opacity: 0.8,
                                      whiteSpace: "normal",
                                      wordWrap: "break-word",
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
        </Box>
        <Box
          sx={{ p: 2, mt: "auto", borderTop: "1px solid rgba(0, 0, 0, 0.06)" }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "39px",
              py: 2,
              px: 5,
              backgroundColor: "#05408E",
              color: "white",
              border: "none",
              "&:hover": {
                backgroundColor: "#05408E",
                border: "none",
                opacity: 0.9,
              },
            }}
            fullWidth
          >
            Let's Talk
          </Button>
        </Box>
      </Drawer>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        ref={navRef}
        sx={{
          py: { xs: 0.5, sm: 0.75, md: 1 },
          background: !scrolled
            ? "transparent"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0px 2px 10px rgba(0, 0, 0, 0.05)" : "none",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%",
          display: { xs: mobileOpen ? "none" : "flex", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          transition: "background 0.25s, color 0.25s, box-shadow 0.25s",
          maxHeight: { xs: 56, sm: 64, md: 70, lg: 80 },
        }}
      >
        {/* Gradient overlays */}
        {!scrolled && (
          <>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: { xs: 56*2, sm: 64*2, md: 70*3, lg: 80*3 }, // topmost, most opaque
                background: "linear-gradient(to bottom, \
                  rgba(0,0,0,0.70) 0%, \
                  rgba(0,0,0,0.62) 10%, \
                  rgba(0,0,0,0.54) 20%, \
                  rgba(0,0,0,0.46) 30%, \
                  rgba(0,0,0,0.38) 40%, \
                  rgba(0,0,0,0.28) 50%, \
                  rgba(0,0,0,0.20) 60%, \
                  rgba(0,0,0,0.12) 70%, \
                  rgba(0,0,0,0.06) 80%, \
                  rgba(0,0,0,0.03) 90%, \
                  rgba(0,0,0,0.00) 100%)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />
          </>
        )}

        <Container
          maxWidth="1248px"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2.5, md: 3, lg: 4, xl: 0 },
            width: "100%",
            maxWidth: "1248px" ,
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              minHeight: { xs: "56px", sm: "64px" },
              py: 0,
            }}
          >
            {/* Logo - hidden on all screens */}
            <Box
              component="img"
              src={scrollProgress < 0.5 ? layer2 : layer1}
              alt="logo"
              loading="lazy"
              sx={{
                height: { xs: 40, md: 48, lg: 58 },
                width: "auto",
                display: { xs: "block", md: "none" },
                filter: "none",
                transition: "none",
              }}
            />

            {renderDesktopMenu()}
            {renderMobileMenu()}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
