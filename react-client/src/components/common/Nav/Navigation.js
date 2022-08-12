import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useState } from 'react';
import { ShoppingCartOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../../Cart/Cart.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals } from '../../../redux/Public/cartSlice.js';
import { openModal } from '../../../redux/Public/modalSlice.js';
import { UserActions } from '../../../Admin/components/Helpers/UserListConstants.js';

const pages = ['login', 'register'];
const settings = ['Profile', 'Orders', 'Logout'];

const Navigation = () => {
  const blankPictueUrl =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
  const { avatar, isAdmin, token } = useSelector((state) => state.auth);

  const { isOpen, userAction } = useSelector((state) => state.modal);
  const { amount } = useSelector((store) => store.cart);
  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch, isAdmin]);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className="app-header">
      <Container maxwidth="xl" className="header-container">
        <Toolbar disableGutters>
          <StoreMallDirectoryIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Link to="/">
            <Navbar.Brand>SHOP4E</Navbar.Brand>
          </Link>

          {/* mobile habburger */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
            {!token ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        tyle={{ textDecoration: 'none', color: 'black' }}
                        to={`/${page}`}
                      >
                        {page.toUpperCase()}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            ) : (
              ''
            )}
            {isAdmin === true ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem key={'admin'} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    {' '}
                    <Link
                      style={{ textDecoration: 'none', color: 'black' }}
                      to={`/${'admin'}`}
                    >
                      {'ADMIN'}
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            ) : (
              ''
            )}
          </Box>

          {!token ? (
            <Box
              display="flex"
              justifyContent="end"
              alignItems="end"
              sx={{ flexGrow: 30, display: { xs: 'none', md: 'flex' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={`/${page}`}
                  >
                    {page.toUpperCase()}
                  </Link>
                </MenuItem>
              ))}
            </Box>
          ) : (
            ''
          )}
          {isAdmin === true ? (
            <Box
              className="avtr"
              sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <MenuItem key={'admin'} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  {' '}
                  <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={`/${'admin'}`}
                  >
                    {'ADMIN'}
                  </Link>
                </Typography>
              </MenuItem>
            </Box>
          ) : (
            ''
          )}
          <Box
            display="flex"
            justifyContent="end"
            sx={{ flexGrow: 3, display: { xs: 'flex', md: 'flex' } }}
          >
            <MenuItem
              onClick={() =>
                dispatch(
                  openModal({ isOpen: true, action: UserActions.OpenCart })
                )
              }
            >
              <Badge badgeContent={amount} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Box>

          {token ? (
            <Box
              className="avtr"
              display="flex"
              justifyContent="end"
              sx={{ flexGrow: 0 }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {avatar ? (
                    <Avatar alt="Remy Sharp" src={`${avatar}`} />
                  ) : (
                    <Avatar alt="Remy Sharp" src={`${blankPictueUrl}`} />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                className="profile-menu"
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      {' '}
                      <Link
                        style={{ textDecoration: 'none', color: 'Black' }}
                        to={`/${setting}`}
                      >
                        {setting}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            ''
          )}
        </Toolbar>
        {isOpen && userAction === 'openCart' && <Cart />}
      </Container>
    </AppBar>
  );
};

export default Navigation;
