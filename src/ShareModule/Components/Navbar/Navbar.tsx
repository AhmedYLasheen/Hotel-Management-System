// import MenuIcon from "@mui/icons-material/Menu";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// // import Link from "@mui/material/Link";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import React, { useContext, useEffect, useState } from "react";
// import {  useNavigate } from "react-router-dom";

// // /////////////////////
// import { AuthContext } from "../../../Context/Components/AuthContext";
// import logo from "../../../assets/images/Staycation.png";
// import styles from "./NavBar.module.css";
// import { Link } from "react-router-dom";
// import axios from "axios";

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

// export default function Navbar(props: Props) {

// const logOut = () => {
//   localStorage.removeItem("token");
//   navigate("/login");
// };
//   const drawerWidth = 240;
//   // const navItems = ["Home", "Explore", "Reviews", "Favorites"];
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

// const authContext = useContext(AuthContext);
// const navigate = useNavigate();
// if (!authContext) {
//   // Handle the case where AuthContext is null
//   return null;
// }
// const { loginData , baseUrl ,requestHeaders } = authContext;
// console.log(loginData);

//   // /////////// user data
//   interface IUser {
//     id: string;
//     userName: string;
//     email: string;
//     phoneNumber: string;
//     profileImage: string;
//     country: string;
//     createdAt: string;
//     role : string
//   }
//   const [UserList, setUserList] = useState<IUser[]>([]);

//   const fetchData = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       throw new Error("User is not authenticated");
//     }
//     try {
//       const response = await axios.get(
//         `${baseUrl}/v0/admin/users/${loginData._id}`,
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );

//       console.log(response.data.data.user);
//       setUserList(response.data.data.user);
//       // console.log(response.data.data.user._id);
//       // setuserId(response.data.data.user._id);

//     } catch (error) {
//       console.log("ssssssssss");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 5 }}>
//         <img src={logo} />
//       </Typography>
//       <Divider />
//       <Box>
//         {/* {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))} */}

// <Box sx={{ display: { xs: "flex",flexDirection:"column", sm: "block" } }} >
//   {/* ///////// links of iconBar */}
//     <Link to="/user/explore"> Home</Link>
//     <Link to="/user/explore"> Explore</Link>
//     <Link to="/user/explore"> Favorites</Link>

//   {loginData ? (
//     <Button
//       onClick={logOut}

//       sx={{ p:1, width:"50%", m:"auto" ,alignItems:"center",  backgroundColor: "primary.dark", color: "common.black", }}

//     >
//       Log Out
//     </Button>
//   ) : (
// <Button
//   onClick={logOut}
//   sx={{ p:1, width:"50%", m:"auto" ,alignItems:"center",  backgroundColor: "primary.dark", color: "common.black", }}

//   color={"inherit"}
// >
//   Login Now
// </Button>
//   )}
// </Box>
//       </Box>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       <Box sx={{ display: "flex",  width:"100%"}}>
//         <CssBaseline />
//         <AppBar component="nav" className={styles.nav}>
//           <Toolbar>
//             <IconButton
//               color={"primary"}
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" } }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{ flexGrow: 1, display: { xs: "none", sm: "block"  } }}
//             >
//               <img src={logo} className={styles.logoimg} />
//             </Typography>
//             <Box sx={{"& a":{marginLeft:"10px",color:"common.black" ,textDecoration:"none"}, display: { xs: "none", sm: "block" } ,"& a:hover":{textDecoration:"underline"}}}>
// <Link to="/landing"> Home</Link>

// <Link to="/explore"> Explore</Link>
// <Link to="/Favorites"> Favorites</Link>

//               {loginData ? (
//                 <Button
//                   className={styles.linkStyle}
//                   onClick={logOut}
//                   sx={{
//                     color: "common.black",
//                     backgroundColor: "primary.dark",
//                     marginLeft: "30px",
//                   }}
//                   color={"inherit"}
//                 >
//                   Log Out
//                 </Button>
//               ) : (
//                 <Button
//                   className={styles.linkStyle}
//                   onClick={logOut}
//                   sx={{
//                     color: "common.black",
//                     backgroundColor: "primary.dark",
//                     marginLeft: "30px",
//                   }}
//                   color={"inherit"}
//                 >
//                   Login Now
//                 </Button>
//               )}
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <nav>
//           <Drawer
//             container={container}
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </nav>
//         <Box component="main" sx={{ p: 3 }}>
//           <Toolbar />
//         </Box>
//       </Box>
//     </>
//   );
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";

import img from "../../../assets/images/avatar.png";
import { AuthContext } from "../../../Context/Components/AuthContext";
import style from "./NavBar.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // //////////////////////

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const authContext = React.useContext(AuthContext);
  const navigate = useNavigate();
  if (!authContext) {
    // Handle the case where AuthContext is null
    return null;
  }

  const { loginData, baseUrl, requestHeaders } = authContext;
  console.log(loginData?._id);
  // /////////// user data
  interface IUser {
    id: string;
    userName: string;
    email: string;
    phoneNumber: string;
    profileImage: string;
    country: string;
    createdAt: string;
    role : string
  }
  const [UserList, setUserList] = React.useState<IUser[]>([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User is not authenticated");
    }
    try {
      const response = await axios.get(
        `${baseUrl}/v0/admin/users/${loginData._id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response.data.data.user);
      setUserList(response.data.data.user);
      // console.log(response.data.data.user._id);
      // setuserId(response.data.data.user._id);

    } catch (error) {
      console.log("ssssssssss");
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppBar
      position="static"
      className={style.nav}
      sx={{ backgroundColor: "red" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex", color:"red" }, mr: 1 }} /> */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <h4 className={style.hlogo}>
              Stay<span className={style.logo}>cation</span>
            </h4>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="info"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              <Box
                sx={{
                  "& a": {
                    color: "common.black",
                    textDecoration: "none",
                    mb: 2,
                  },
                  display: { xs: "flex", flexDirection: "column", sm: "block" },
                  m: "20px",
                }}
              >
                {/* ///////// links of iconBar */}

                <Link to="/landing"> Home</Link>
                <Link to="/explore"> Explore</Link>
                <Link to="/Favorites"> Favorites</Link>

                {/* <Button
              // onClick={logOut}

              sx={{ p:1, width:"50%", m:"auto" ,alignItems:"center",  backgroundColor: "primary.dark", color: "common.black", }}

            >
              Log Out
            </Button>
       
            <Button
              // onClick={logOut}
              sx={{ p:1, width:"50%", m:"auto" ,alignItems:"center",  backgroundColor: "primary.dark", color: "common.black", }}

              color={"inherit"}
            >
              Login Now
            </Button> */}
              </Box>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <h6 className={style.hlogo}>
              Stay<span className={style.logo}>cation</span>
            </h6>
          </Typography>
          <Box
            sx={{
              "& a": { color: "common.black", textDecoration: "none", ml: 2 },
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "end",
                alignItems: "center",
              },
              mx: 2,
            }}
          >
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}

            <Link to="/landing"> Home</Link>
            <Link to="/explore"> Explore</Link>
            <Link to="/Favorites"> Favorites</Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {loginData ? (
              <Tooltip className={style.avatar} title="Open To Show Your Data">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={img} />
                  <ArrowDropDownIcon sx={{ color: "pramary.light" }} />
                </IconButton>
              </Tooltip>
            ) : (
              <Button
                onClick={logOut}
                sx={{
                  p: 1,
                  width: "100%",
                  m: "auto",
                  alignItems: "center",
                  backgroundColor: "primary.light",
                  color: "common.black",
                }}
                color={"inherit"}
              >
                Login Now
              </Button>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
              <Typography textAlign="center">Name</Typography>
              <Typography textAlign="center">Email</Typography>
              <MenuItem title="LogOut" onClick={logOut}>
                {/* <Typography textAlign="center">Log Out</Typography> */}
                <IconButton>
                  {/* <h6>LogOut</h6> */}
                  <LogoutIcon sx={{ color: "pramary.light" }} />
                </IconButton>
              </MenuItem>

            
            </Menu>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
