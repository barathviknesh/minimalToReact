import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import makeStyles from '@mui/styles/makeStyles';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import { Home, About } from "./screens"



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const usestyles = makeStyles((theme) => ({


  link: {
    textDecoration: "none",
    color: "grey"
  },
  nav: {
    width: "90px",
    height: '100vh',
    background: "#ffffff",
    // position: 'fixed ',
    '&:hover': {
      background: "#ffffff",
      width: "300px",
    },
    transition: 'width 200ms ease',
    overflow: 'auto',

    '&::-webkit-scrollbar': {
      width: '0.1em'
    },
    '&::-webkit-scrollbar-track': {
      // boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      // webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      // backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid'
    },

    grow: {
      // flexGrow: 1,
      // zIndex: theme.zIndex.drawer + 1
    },
    appBar: {
      // zIndex: theme.zIndex.drawer + 1
      height: "160px"
    },

  },

  body: {
    '&::-webkit-scrollbar': {
      width: '0.1em'
    },
    '&::-webkit-scrollbar-track': {
      // boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      // webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      // backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid'
    },
  }






}));


function App() {

  const classes = usestyles();

  const [isHovered, setIsHovered] = React.useState(false);



  const onMouseEnterHandler = () => { setIsHovered(true) };
  const onMouseLeaveHandler = () => { setIsHovered(false) };



  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div className={classes.nav} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
          <div style={{ marginLeft: "20px", }}><img style={{ height: "50px", marginTop: '20px' }} src="https://themes-backend.material-ui.com/wp-content/uploads/2021/01/cropped-minimal_logo-1-1.png" alt="logo"></img></div>
          <div style={{ marginLeft: "10px", marginTop: '50px' }}>
            {isHovered ? <div style={{ margin: "16px", backgroundColor: "#f2f3f5", height: "82px", borderRadius: "15px" }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ width: 46, height: 46, marginTop: '18px', marginLeft: "16px" }} alt="Remy Sharp" src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" />
                <div style={{ marginLeft: "15px", marginTop: "10px" }}>
                  {/* <div style={{ marginLeft: "16px" }}>minimal ui</div> */}
                  <Typography variant="subtitle2" style={{ fontWeight: "600" }}>{"minimal ui"}</Typography>
                  <Typography variant="body2">{"admin"}</Typography>
                  {/* <div style={{ marginLeft: "16px" }}>admin</div> */}
                </div>

              </div>
            </div> : <Avatar sx={{ width: 46, height: 46, marginLeft: "10px" }} alt="Remy Sharp" src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" />}
          </div>
          <div style={{ marginTop: "90px", }}>{isHovered ? <h4 style={{ marginLeft: "20px" }}>GENERAL</h4> : <h4 style={{ marginLeft: "20px" }}></h4>}</div>
          <div>


            <div style={{ marginLeft: "16px" }}>
              <List style={{ marginRight: "16px" }}>

                <Link to="/" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <SpeedOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "App" : " "} className={classes.logoText} />}
                  </ListItem>
                </Link>

                <Link to="/about" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <ShoppingBagOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "E-Commerce" : "  "} className={classes.logoText} />}
                  </ListItem>
                </Link>
                <Link to="/" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <SignalCellularAltOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "Analytics" : "  "} className={classes.logoText} />}
                  </ListItem>
                </Link>

                <Link to="/about" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <AccountBalanceOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "Banking" : "  "} className={classes.logoText} />}
                  </ListItem>
                </Link>

                <Link to="/" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <EventOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "Booking" : "  "} className={classes.logoText} />}
                  </ListItem>
                </Link>



              </List>
            </div>
          </div>
          <div style={{ marginTop: "55px", }}>{isHovered ? <h4 style={{ marginLeft: "20px" }}>MANAGEMENT</h4> : <h4 style={{ marginLeft: "20px" }}></h4>}</div>
          <div>


            <div style={{ marginLeft: "16px" }}>
              <List style={{ marginRight: "16px" }}>

                <Link to="/" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "User" : " "} className={classes.logoText} />}
                  </ListItem>
                </Link>

                <Link to="/about" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <ShoppingCartCheckoutOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "E-Commerce" : "  "} className={classes.logoText} />}
                  </ListItem>
                </Link>
                <Link to="/" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <BookOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "Blog" : "  "} className={classes.logoText} />}
                  </ListItem>
                </Link>





              </List>
            </div>
          </div>
          <div style={{ marginTop: "90px", }}>{isHovered ? <h4 style={{ marginLeft: "20px" }}>APP</h4> : <h4 style={{ marginLeft: "20px" }}></h4>}</div>
          <div>


            <div style={{ marginLeft: "16px" }}>
              <List style={{ marginRight: "16px" }}>

                <Link to="/" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <EmailOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "Mail" : " "} className={classes.logoText} />}
                  </ListItem>
                </Link>

                <Link to="/about" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <MarkUnreadChatAltOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "Chat" : "  "} className={classes.logoText} />}
                  </ListItem>
                </Link>
                <Link to="/" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <DateRangeOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "Calender" : "  "} className={classes.logoText} />}
                  </ListItem>
                </Link>

                <Link to="/about" className={classes.link}>
                  <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
                    <ListItemIcon>
                      <DesktopWindowsOutlinedIcon />
                    </ListItemIcon>
                    {<ListItemText primary={isHovered ? "Kanban" : "  "} className={classes.logoText} />}
                  </ListItem>
                </Link>





              </List>
            </div>
          </div>

          {isHovered ? <div style={{
            marginTop: '70px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}>

            <div style={{}}>
              <img src={"images/sidebar_end_pic.png"} alt="logo" style={{
                height: "150px",
                maxWidth: "96%",

                "object-fit": "contain",

              }} />
            </div>
            <div>
              <Typography variant="h6" style={{ fontWeight: '600' }}>{"Hi, Minimal UI "}</Typography>
              <Typography variant="subtitle2" style={{ marginLeft: "30px" }}>{"Need help?"}</Typography>
              <Typography variant="subtitle2">{"Please check our docs"}</Typography>
              <Button variant="contained"
                style={{
                  backgroundColor: "#00ab55",
                  marginTop: '20px',
                  marginLeft: "-12px",
                  border: "2px",
                  borderRadius: "10px",
                  marginBottom: "50px"
                }}>
                <Typography variant="button" style={{ fontWeight: '700' }}>{"Documentation"}</Typography>
              </Button>
            </div>

          </div> : <></>}

        </div>

        <div className={classes.grow} style={{ flex: 1 }}>
          <AppBar position="static" color='transparent' className={classes.appBar} style={{ height: "100px", justifyContent: 'center' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              // sx={{ mr: 2 }}
              >
                <SearchOutlinedIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

              </Typography>
              {auth && (
                <div>
                  <IconButton>
                    <img style={{ height: '20px' }} src="https://upload.wikimedia.org/wikipedia/commons/2/2c/India-flag-a4.jpg" alt="flag"></img>
                  </IconButton>

                  <IconButton>
                    <NotificationsIcon />
                  </IconButton>
                  <IconButton>
                    <PeopleIcon />
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <Avatar sx={{ width: 46, height: 46, marginLeft: "10px" }} alt="Remy Sharp" src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" />
                    {/* <AccountCircle /> */}
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
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>


          <div className={classes.body} style={{ backgroundColor: "#ffffff", height: '87vh', overflowY: 'auto', padding: '10px' }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/about">
                <About />
              </Route>

            </Switch>


          </div>


        </div>



      </div>

    </Router>
  );
}

export default App;
