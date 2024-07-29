import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, profile } from "../../Redux/authSlice";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Import arrow icon
import img from "./children.png";

const Navitems = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact" },
];

const Posts = [
  { name: "Add Post", route: "/addpost" },
  { name: "Show Post", route: "/showpost" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElProduct, setAnchorElProduct] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const { isLogin, profilePic } = useSelector((state) => state.authentication);
  const FirstName = localStorage.getItem("first_name");
  const [isLogged, setIsLogged] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenProductMenu = (event) => {
    setAnchorElProduct(event.currentTarget);
  };

  const handleCloseProductMenu = () => {
    setAnchorElProduct(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    setIsLogged(FirstName);
  }, [FirstName]);

  return (
    <AppBar position="fixed" sx={{ bgcolor: "black", color: "#8bc34a" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div className="logo">
              <img src={img} alt="" style={{ height: "50px", width: "50px" }} />
            </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                ml: 3,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Happy Moment
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="logo">
                <img
                  src={img}
                  alt=""
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  ml: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Happy Moment
              </Typography>
            </Box>
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
              {Navitems.map((item) => (
                <Link
                  key={item.route}
                  to={item.route}
                  style={{ textDecoration: "none", color: "#8bc34a" }}
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{
                      bgcolor: "black",
                      color: "#8bc34a",
                      "&:hover": {
                        bgcolor: "black",
                        color: "#8bc34a",
                      },
                    }}
                  >
                    {item.name}
                  </MenuItem>
                </Link>
              ))}
              {isLogin && (
                <Box>
                  <Button
                    aria-controls="product-menu"
                    aria-haspopup="true"
                    onClick={handleOpenProductMenu}
                    sx={{ color: "#8bc34a", display: "block", width: "100%" }}
                  >
                    Post <ArrowDropDownIcon /> {/* Add arrow icon */}
                  </Button>
                  <Menu
                    id="product-menu"
                    anchorEl={anchorElProduct}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElProduct)}
                    onClose={handleCloseProductMenu}
                  >
                    {Posts.map((item) => (
                      <MenuItem
                        key={item.route}
                        onClick={handleCloseProductMenu}
                        sx={{
                          bgcolor: "black",
                          color: "#8bc34a",
                          "&:hover": {
                            bgcolor: "black",
                            color: "#8bc34a",
                          },
                        }}
                      >
                        <Link
                          to={item.route}
                          style={{ textDecoration: "none", color: "#8bc34a" }}
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
            }}
          >
            {Navitems.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  key={item.route}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#8bc34a", display: "block" }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            {isLogin && (
              <Button
                aria-controls="product-menu"
                aria-haspopup="true"
                onClick={handleOpenProductMenu}
                sx={{ color: "#8bc34a" }}
              >
                Posts <ArrowDropDownIcon /> {/* Add arrow icon */}
              </Button>
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            {isLogin ? (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Profile Picture"
                    src={profilePic || "/path/to/default/profile-pic.png"} // Fallback image
                    sx={{ width: 40, height: 40 }}
                  />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="user-menu"
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
                  <MenuItem onClick={handleCloseUserMenu} sx={{ bgcolor: "black", color: "#8bc34a" }}>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "#8bc34a" }}
                    >
                      {isLogged}
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout} sx={{ bgcolor: "black", color: "#8bc34a" }}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button sx={{ color: "#8bc34a" }}>Login</Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
