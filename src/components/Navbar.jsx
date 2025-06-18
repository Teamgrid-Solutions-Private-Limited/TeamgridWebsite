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
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import logo from "../assets/Layer_1.svg";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
    { title: "What We Do", hasSubmenu: true, submenuItems: [
      "Web Development",
      "Mobile Development",
      "UI/UX Design"
    ] },
    { title: "Technologies We Use", hasSubmenu: false },
    { title: "How we work", hasSubmenu: false },
    { title: "Let's Talk", hasSubmenu: false },
  ];

  const renderDesktopMenu = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
      <List sx={{ 
        display: 'flex', 
        bgcolor: 'background.paper',
        borderRadius: '46px',
        padding: '8px',
        '& .MuiListItem-root': { width: 'auto' }
      }}>
        {menuItems.map((item, index) => (
          <ListItem 
            key={index} 
            sx={{
              color: 'primary.main',
              px: 2,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              '&:hover': { bgcolor: 'rgba(11, 60, 123, 0.04)' },
              borderRadius: '30px',
              transition: 'all 0.2s'
            }}
            onClick={item.hasSubmenu ? handleMenuOpen : null}
          >
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              {item.title}
            </Typography>
            {item.hasSubmenu && <KeyboardArrowDownIcon fontSize="small" sx={{ ml: 0.5, color: 'primary.main' }} />}
          </ListItem>
        ))}
      </List>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ mt: 1 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
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
          ml: 2, 
          height: 48, 
          borderRadius: '37px',
          boxShadow: 'none'
        }}
      >
        Get a Quote
      </Button>
    </Box>
  );

  const renderMobileMenu = () => (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
          '& .MuiDrawer-paper': { 
            width: { xs: '100%', sm: 320 },
            boxSizing: 'border-box',
            p: 2
          },
        }}
      >
        <Box
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            p: 1,
            mb: 2 
          }}
        >
          <Box 
            component="img" 
            src={logo} 
            alt="logo" 
            sx={{ height: 40, width: 'auto' }} 
          />
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <List sx={{ width: '100%' }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem 
                sx={{ 
                  py: 1.5,
                  px: 2,
                  borderRadius: 2,
                  '&:hover': { bgcolor: 'rgba(11, 60, 123, 0.04)' },
                }}
                button
                onClick={item.hasSubmenu ? () => handleSubmenuToggle(index) : handleDrawerToggle}
              >
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  width: '100%'
                }}>
                  <Typography variant="body1" color="primary.main" fontWeight={500}>
                    {item.title}
                  </Typography>
                  {item.hasSubmenu && (
                    openSubmenu === index ? 
                      <ExpandLessIcon color="primary" /> : 
                      <ExpandMoreIcon color="primary" />
                  )}
                </Box>
              </ListItem>
              
              {item.hasSubmenu && (
                <Collapse in={openSubmenu === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.submenuItems.map((subItem, subIndex) => (
                      <ListItem 
                        key={subIndex} 
                        button 
                        onClick={handleDrawerToggle}
                        sx={{ 
                          pl: 4,
                          py: 1,
                          '&:hover': { bgcolor: 'rgba(11, 60, 123, 0.04)' },
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
        <Box sx={{ position: 'sticky', bottom: 16, px: 2, mt: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ 
              borderRadius: '37px',
              py: 1.5
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
      position="sticky" 
      color="default" 
      elevation={0} 
      sx={{ 
        py: 1.5,
        bgcolor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box 
            component="img" 
            src={logo} 
            alt="logo" 
            sx={{ 
              height: { xs: 40, md: 58 },
              width: 'auto'
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
