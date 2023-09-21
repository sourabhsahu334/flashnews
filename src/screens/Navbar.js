import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

 function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flash News
          </Typography>
          <Link to="/" style={{ textDecoration: 'none',color:"white",background:"black",borderRadius:"15px" }}>
      <Button color="inherit">Home</Button>
    </Link>
    <Link to="/policy" style={{ textDecoration: 'none',color:"white",background:"black",borderRadius:"15px",marginLeft:"10px" }}>
      <Button color="inherit">Policy</Button>
    </Link>
            </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;