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
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
  ThemeProvider,
  createTheme,
  styled,
  alpha,
} from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";
import { logout } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../authentication/firebase";
import Image from "../../src/images/e-book.jpg";
import { collection, query, where, getDocs } from "firebase/firestore";

const pages = ["Home", "Buku Fiksi Pilihan", "Komik Segera Terbit"];

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [login, setLogin] = React.useState("");

  let navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [first, setFirst] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseWishMenu = (event) => {
    navigate("/wishlist");
  };
  const handleCloseNavMenu = (event, page) => {
    setAnchorElNav(null);
    switch (page) {
      case "Home":
        navigate("/");
        break;
      case "Buku Fiksi Pilihan":
        navigate("/category/adult-fiction");
        break;
      case "Komik Segera Terbit":
        navigate("/category/comics-graphic-novels");
        break;
      case "Buku Bahasa Inggris Promo":
        navigate("/search/Sherlock");
        break;
      case "My Wishlist":
        navigate("/wishlist/");
        break;
      default:
        navigate("/");
        break;
    }
  };

  const handleCloseUserMenu = async (event, number) => {
    switch (number) {
      case 1:
        if (user) {
          setLogin("Logout");
          await logout();
          setLogin("Login");
          setFirst(null);
          navigate("/");
        } else {
          navigate("/login");
        }
        setAnchorElUser(null);
        break;
      case 2:
        if (user) {
          navigate("/edit");
        } else {
          navigate("/login");
        }
        setAnchorElUser(null);
        break;
      default:
        navigate("/");
        setAnchorElUser(null);
        break;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate("/search/" + event.target.value);
    }
  };

  React.useEffect(() => {
    if (user) {
      setLogin("Logout");
      const queryForProfile = async () => {
        const profileQuery = query(
          collection(firestore, "user_profile"),
          where("email", "==", user.email)
        );

        const querySnapshot = await getDocs(profileQuery);
        querySnapshot.forEach((profile) => {
          setFirst(profile.data().firstname);
        });
      };
      queryForProfile();
    } else {
      setLogin("Login");
    }
  }, [login, user, navigate]);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#009097",
          marginBottom: "0.001px",
        }}
      >
        <Container maxWidth="l">
          <Toolbar disableGutters>
            <img src={Image} alt="e-book" width="85" heigth="85"></img>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                bgcolor: "white",
              }}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={(event) => handleCloseNavMenu(event, page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Button
              key="1"
              onClick={(event) => handleCloseWishMenu(event)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              My Wishlist
            </Button>
            <Box sx={{ flexGrow: 0 }}>
              <div>
                {first === null ? "" : <Typography> Hi, {first}</Typography>}
              </div>
            </Box>
            <Box>
              <Search
                sx={{ marginRight: "5px", bgcolor: "white", color: "black" }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Cari Judul"
                  inputProps={{ "aria-label": "search" }}
                  onKeyPress={handleKeyPress}
                />
              </Search>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open settings"> */}
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Login" src="../images/recom.png" />
              </IconButton>
              {/* </Tooltip> */}
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
                <MenuItem
                  key="2"
                  onClick={(event) => handleCloseUserMenu(event, 2)}
                >
                  <Typography textAlign="center">Edit Akun</Typography>
                </MenuItem>
                <MenuItem
                  key="1"
                  onClick={(event) => handleCloseUserMenu(event, 1)}
                >
                  <Typography textAlign="center">{login}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default NavBar;
