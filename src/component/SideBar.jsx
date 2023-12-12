import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import {  Avatar, Typography, styled, useTheme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { CalendarMonthOutlined, ChatOutlined, ContactsOutlined, FastfoodOutlined, HomeOutlined, ManageAccountsOutlined, MedicationOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';




const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp, 
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  const Array1=[
    {"text": "Dashboard", "icon": <HomeOutlined/>,"path":"/"},
    {"text": "Players", "icon": <ContactsOutlined/>,"path":"/players"},
    {"text": "Managers", "icon": <ManageAccountsOutlined/>,"path":"/managers"},
    {"text": "Doctors", "icon": <MedicationOutlined/>,"path":"/doctors"}
  ];
  const Array2=[
    {"text": "Food", "icon": <FastfoodOutlined/>,"path":"/food"},
    // {"text": "Food", "icon": <FastfoodOutlined/>,"path":"/fooddetails"},
    {"text": "Calendar", "icon": <CalendarMonthOutlined/>,"path":"/calendar"},
    {"text": "Chat", "icon": <ChatOutlined/>,"path":"/chat"},
  ];

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );


  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  

// eslint-disable-next-line react/prop-types
export default function SideBar({open, handleDrawerClose}) {
    // const Navigate = useNavigation();
    let location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <Avatar sx={{mx:"auto",height: open ? 90 : 40, transition: "1.2s", width: open? 90 : 40,my:2, border:"3px solid #9cd6d1"}} alt="Remy Sharp" src="/src/component/friha.jpeg" />
    {/* <img src='D:/react/react-app/src/assets/logocroped.png'/> */}
    <Typography align='center' sx={{fontSize: open ? 17 : 0, transition: "1.2s"  }} variant='body1'>YASSIR FRIHA</Typography>
    <Typography align='center' sx={{fontSize: open ? 13 : 0, transition: "1.2s", color: theme.palette.info.main}} variant='body1'>Admin</Typography>

    <Divider />
    <List>
      {Array1.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
         
          <ListItemButton
          
          onClick={() => {
            navigate(item.path)
          }
          }
            sx={{
              bgcolor: (location.pathname===item.path ||(location.pathname.startsWith('/Playerdetails') && item.path==="/players") )  ? 
              theme.palette.mode === "dark"? "#009688"
                :"#9cd6d1" 
              : null,
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              transition:"1.2s"
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {Array2.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
          onClick={() => {
            navigate(item.path)
          }
          }
          sx={{
            bgcolor: (location.pathname === item.path ||(location.pathname.startsWith('/fooddetails') && item.path==="/food")) ?
                     (theme.palette.mode === "dark" ? "#009688" : "#9cd6d1") : null,
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            transition: "1.2s"
          }}
          
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>

  )
}

