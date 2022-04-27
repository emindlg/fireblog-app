import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import clarusway from "../assests/cw.jpeg"
import { useNavigate } from 'react-router-dom';
import { AuthContext} from "../contexts/AuthContext";
import { useContext, useState } from "react";
import { logOut } from "../utils/firebase";

const Navbar = () => {
  //const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  

  //const handleChange = (event) => {
  //  setAuth(event.target.checked);
  //};
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
    
  const handleClickProfil = () => {
    setAnchorEl(null);
    navigate("/Profile");
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    
  };
  
  const handleClickNew = (e) => {
    setAnchorEl(null);
    navigate("/NewBlog");
  };

  const handleClickLogout = (e) => {
    logOut();
    setAnchorEl(null);
    navigate("/Login");
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static">     
        
        <Toolbar>
         
          <img src={clarusway} style={{width: '40px', height: "40px"}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>            
            
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/Dashboard")}
          >
            |[] --- BLOG --- []|
          </IconButton >
            
          </Typography>
            <div>
          
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
               {!currentUser ? (
                 <div>
                <MenuItem onClick={() =>navigate("/Login")}>Login</MenuItem>
                <MenuItem onClick={() =>navigate("/Register")}>Register</MenuItem>
                
                </div>
               ) : (
                 <div>
                 <MenuItem onClick={handleClickProfil}>Profile</MenuItem>
                 <MenuItem onClick={handleClickNew}>New Blog</MenuItem>
                 <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
                 </div>
               )}
                
              </Menu> 
            </div>
           
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;