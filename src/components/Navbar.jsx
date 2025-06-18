import React, { useState } from "react";
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
import logo from "../assets/Layer_1.svg";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

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
          <ListItem
            key={index}
            sx={{
              color: "primary.main",
              px: 2,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              "&:hover": { bgcolor: "#F3F3F6" },
              borderRadius: "30px",
              transition: "all 0.2s",
              fontWeight: 500,
            }}
            onClick={item.hasSubmenu ? handleMenuOpen : null}
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
        ))}
      </List>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ mt: 1 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Web Development</MenuItem>
        <MenuItem onClick={handleMenuClose}>Mobile Development</MenuItem>
        <MenuItem onClick={handleMenuClose}>UI/UX Design</MenuItem>
      </Menu>
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
                    {item.submenuItems.map((subItem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        button
                        onClick={handleDrawerToggle}
                        sx={{
                          pl: 4,
                          py: 1,
                          "&:hover": { bgcolor: "rgba(11, 60, 123, 0.04)" },
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          {subItem}
                        </Typography>
                      </ListItem>
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
