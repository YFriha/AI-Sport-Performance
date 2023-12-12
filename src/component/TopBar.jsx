import {  Box, IconButton, InputBase, Stack, Toolbar, alpha, styled } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { DarkModeOutlined, LightModeOutlined, NotificationsOutlined, SettingsOutlined } from '@mui/icons-material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import { useTheme } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  // @ts-ignore
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  
  
  // eslint-disable-next-line react/prop-types
  export default function TopBar({open, handleDrawerOpen,setMode}) {
    const Theme = useTheme();
    
  return (
    
    <AppBar position="fixed" sx={{
      bgcolor: Theme.palette.mode==="light" ? "#9cd6d1": "#009688", transition:"1.2s",boxShadow: '5px 10px 100px white' }}
   
// @ts-ignore
      open={open}>
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box flexGrow={1}></Box>
          <Stack direction={'row'}>

            {Theme.palette.mode==="dark" ? (<IconButton color='inherit' onClick={() => {
              localStorage.setItem("currentMode", Theme.palette.mode ==="dark"? "light":"dark")
              setMode((prevMode) =>
              prevMode === 'light' ? 'dark' : 'light',
            );
            }
            }>
            <DarkModeOutlined />
          </IconButton>) :(<IconButton color='inherit' onClick={() => {
            localStorage.setItem("currentMode", Theme.palette.mode ==="dark"? "light":"dark")
            setMode((prevMode) =>
            prevMode === 'light' ? 'dark' : 'light',
          );
          }
          }>
            <LightModeOutlined />
          </IconButton> )}
          

          

          <IconButton color='inherit' aria-label="delete">
            <NotificationsOutlined />
          </IconButton>

          <IconButton color='inherit' aria-label="delete">
            <SettingsOutlined />
          </IconButton>

          <IconButton color='inherit' aria-label="profile">
            <PersonOutlineOutlinedIcon />
          </IconButton>
          </Stack>


        </Toolbar>
        
      </AppBar>

  )
}
