import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/home' },
    { text: 'Create New Story', path: '/create-new-story' },
    { text: 'Current Stories', path: '/current-stories' },
  ];

  return (
    <>
      <MenuIcon
  onClick={toggleDrawer(true)}
  style={{
    color: '#a2979d',
    cursor: 'pointer',
    position: 'absolute',
    top: 8,
    left: 0,
    zIndex: 1000,
    fontSize: '2rem' // Set the font size to 2rem (adjust as needed)
  }}
/>

      <Drawer
        anchor={'left'}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: { backgroundColor: '#354a55' },
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.path}
              onClick={toggleDrawer(false)}
              style={{ color: '#a2979d'}}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
