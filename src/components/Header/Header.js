import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';
import './Header.sass';

const pages = ['home', 'index', 'contribute', 'why'];
const linkNames = ['Merch', 'Bio', 'Music'];
const links = ['https://www.taylorswift.com/', 'https://en.wikipedia.org/wiki/Taylor_Swift', 'https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const capFirstLetter = (st) => {
    return st.charAt(0).toUpperCase() + st.slice(1);
  }

  return (
    <AppBar position="sticky" sx={{ boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
          >
            SWIFTINDEX
          </Typography>

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
                  <Link className='header-link' key={page} to={`/${page}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{capFirstLetter(page)}</Typography>
                    </MenuItem>
                  </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            SWIFTINDEX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                // <Link exact activeClassName='header-link' onClick={handleCloseNavMenu} key={page} to={`/${page}`} style={{ textDecoration: 'none' }}>
                    <Button
                        variant='primary'
                        key={page}
                        to={`/${page}`}
                        component={Link}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        <Typography variant='header'>
                            {capFirstLetter(page)}
                        </Typography>
                    </Button>
                // </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Links">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Taylor Swift" src="https://cdn.theatlantic.com/thumbor/0aBjTVZrhe5-gsIG3QTzLfeRXx8=/569x0:1975x1406/1080x1080/media/img/mt/2020/12/9c9e09d5_8136_48b0_b748_006ca005bb65_000030030002_6/original.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
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
              {linkNames.map((linkName, i) => (
                <MenuItem key={linkName} onClick={handleCloseUserMenu}>
                  <a className='menu-link' href={links[i]} target="_blank" rel="noopener noreferrer">
                    <Typography textAlign="center">{linkName}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;