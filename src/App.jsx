import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// import MuiDrawer from '@mui/material/Drawer';

// import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';

import TopBar from './component/TopBar';
import SideBar from './component/SideBar';
import { getDesignTokens } from './theme';
import { Outlet } from 'react-router-dom';
// import { Cloudinary } from '@cloudinary/url-gen';
// import Terrain from './component/terrain';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   // @ts-ignore
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

export default function MiniDrawer() {
  // const cld = new Cloudinary({cloud: {cloudName: 'dwckvxlca'}});
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // const isLogin = true;
  // Check if the current route is "/login"
  const isLoginRoute = location.pathname === "/login";
  const [mode,setMode] = React.useState(localStorage.getItem("currentMode")? localStorage.getItem("currentMode") : 'light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider  theme={theme}>
    <Box sx={{ display: 'flex' ,backgroundColor:"#f5f5f5" }}>
      <CssBaseline />
      {/* Conditionally render the TopBar and SideBar */}
      {isLoginRoute ? null : (
          <>
            <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
            <SideBar open={open} handleDrawerClose={handleDrawerClose} />
          </>
        )}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet/>
      </Box>
    </Box>
    </ThemeProvider>
  );
}