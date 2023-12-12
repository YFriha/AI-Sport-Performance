// import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./dataDoctors";
import {
  Box,
  Button,
  // Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  // FormControlLabel,
  Stack,
  TextField,
  Typography,
  styled,
  // Typography,
  useTheme,
} from "@mui/material";
import { CreateOutlined, DeleteOutlined} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import React from "react";

// eslint-disable-next-line no-unused-vars
const VisuallyHiddenInput = styled('input')`
clip: rect(0 0 0 0);
clip-path: inset(50%);
height: 1px;
overflow: hidden;
position: absolute;
bottom: 0;
left: 0;
white-space: nowrap;
width: 1px;
`;

export default function Doctors() {
  const theme = useTheme();

  const [open, openchange] = useState(false);
  const [open2, openchange2] = useState(false);
  const [open3, openchange3] = useState(false);
  //----------------------------------------------------------------
  const functionopenpopup = () => {
    openchange(true);
  };

  const closepopup = () => {
    openchange(false);
    {this.state.visible==false }
  };

  const functionopenpopup2 = () => {
    toggleDialog();
    openchange2(true);
    
  };
  const functionopenpopup3 = () => {
    toggleDialog2();
    openchange3(true);
    
  };
  const closepopup2 = () => {
    openchange2(false);
  };
  const closepopup3= () => {
    openchange3(false);
  };
  const [visible] = React.useState(true);
  const toggleDialog = () => {
    openchange(!visible);
  };
  const toggleDialog2 = () => {
    openchange2(!visible);
  };
  const toggleDialog3 = () => {
    openchange3(!visible);
  };
 
  const columns = [
    {
      field: "id",
      headerName: "ID",
      // flex: 1,
      align: "center",
      headerAlign: "center",
      width: 33,
      // innerHeight:"5px"
    },

    {
      field: "photo",
      renderCell: ({ row: { photo } }) => {
        // function handleClick(event, cellValues) {
        //   throw new Error("Function not implemented.");
        // }

        return <Box>{photo}</Box>;
      },
      headerName: "Photo",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   flex: 1,
    //   align: "center",
    //   headerAlign: "center",
    //   width: 150,
    // },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "col6",
      renderCell: () => {
        // function handleClick(event, cellValues) {
        //   throw new Error("Function not implemented.");
        // }

        return (
          //-----------------------------------------------------------------
          //-----------------------------------------------------------------------

          //-----------------------------------------------------------------------
          <Stack direction={"row"}>
            <IconButton color="inherit" aria-label="delete">
              <CreateOutlined />
            </IconButton>
            <IconButton color="inherit" aria-label="delete">
              <DeleteOutlined />
            </IconButton>
          </Stack>
        );
      },
      headerName: "Func",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 150,
    },
  ];

  return (
    <div style={{ height: 800, width: "100%" }}>
      <h2 style={{color:theme.palette.mode === "dark" ? "#009688" : "#9cd6d1", fontFamily: "system-ui"}}>Team doctor</h2>
      <Stack direction={"row"} padding={2}>
        
        
        <Box flexGrow={3} borderRadius={8}></Box>
        <Dialog
          // fullScreen
          open={open}
          onClose={closepopup}
          fullWidth
          maxWidth="sm"
        >
          {/* <DialogTitle>User Registeration  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle> */}
          <DialogContent>
            {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
            <Stack spacing={2.5} margin={2}>
            <Typography fontSize={25} fontFamily={"sans-serif"} color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}  >Add Doctor</Typography>
              <TextField variant="outlined" label="Name"></TextField>
              <TextField variant="outlined" label="Age"></TextField>
              <TextField variant="outlined" label="Weight"></TextField>
              <TextField variant="outlined" label="Height"></TextField>
              <TextField variant="outlined" label="Value"></TextField>
              {/* <FormControlLabel control={<Checkbox defaultChecked color="primary"></Checkbox>} label="Agree terms & conditions"></FormControlLabel> */}
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                ":hover": {
                  bgcolor:
                    theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                },
              }}
              // onKeyUp={closepopup}
              onClick={functionopenpopup2}
            >
              Next
            </Button>
            {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
          </DialogActions>
          
        </Dialog>
        <Dialog
          // fullScreen
          open={open2}
          onClose={closepopup2}
          fullWidth
          maxWidth="sm"
        >
          {/* <DialogTitle>User Registeration  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle> */}
          <DialogContent>
            {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
            <Stack spacing={2.5} margin={2}>
            <Typography fontSize={25} fontFamily={"sans-serif"} color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}  >Add Doctor</Typography>
              <text>Additional informations</text>
              {/* <TextField
                variant="outlined"
                label="Namssssssssssssse"
              ></TextField> */}
              <TextField variant="outlined" label="Position"></TextField>
              <TextField variant="outlined" label="Number"></TextField>
              {/* <TextField variant="outlined" label="Height"></TextField>
              <TextField variant="outlined" label="Value"></TextField> */}
              {/* <FormControlLabel control={<Checkbox defaultChecked color="primary"></Checkbox>} label="Agree terms & conditions"></FormControlLabel> */}
             
             
              {/* <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      // @ts-ignore
      color="neutral"
      startDecorator={
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
      }
    >
      Upload a file
      <VisuallyHiddenInput type="file" />
    </Button> */}
     <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label" sx={{
                bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                ":hover": {
                  bgcolor:
                    theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                },
              }}>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>


            </Stack>
          </DialogContent>

          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                ":hover": {
                  bgcolor:
                    theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                },
              }}
              onClick={functionopenpopup3}
            >
              Next
            </Button>
            {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
          </DialogActions>
          {/* <svg
            className={`icon icon--seeds ${this.props.className}`}
            viewBox={this.getViewBox()}
          > */}
            
          {/* </svg> */}
          
          {/* <Stack direction={'row'} spacing={2}><Box flexGrow={0.47}></Box>
          <Icon color='disabled' >
        <LensRounded/>
        </Icon>
          <Icon color='inherit'>
        <LensRounded/>
        </Icon>
          <Icon color='disabled'>
        <LensRounded/>
        </Icon>
          </Stack> */}
        </Dialog>
        <Dialog
          // fullScreen
          open={open3}
          onClose={closepopup3}
          fullWidth
          maxWidth="sm"
        >
          {/* <DialogTitle>User Registeration  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle> */}
          <DialogContent>
            {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
            <Stack spacing={2.5} margin={2}>
            <Typography fontSize={25} fontFamily={"sans-serif"} color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}  >Add doctor</Typography>
              <text>Additional informations</text>
              <p className="lead" >Login : </p>
              <p className="lead" >Password : </p>
     <Stack direction="row" alignItems="center" spacing={2}>
      {/* <Button variant="contained" component="label" sx={{bgcolor:theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}}>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button> */}
    </Stack>


            </Stack>
          </DialogContent>

          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                ":hover": {
                  bgcolor:
                    theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                },
              }}
              onClick={toggleDialog3}
            >
              Terminer
            </Button>
            {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
          </DialogActions>
          {/* <svg
            className={`icon icon--seeds ${this.props.className}`}
            viewBox={this.getViewBox()}
          > */}
            
          {/* </svg> */}
          
          {/* <Stack direction={'row'} spacing={2}><Box flexGrow={0.47}></Box>
          <Icon color='disabled' >
        <LensRounded/>
        </Icon>
          <Icon color='inherit'>
        <LensRounded/>
        </Icon>
          <Icon color='disabled'>
        <LensRounded/>
        </Icon>
          </Stack> */}
        </Dialog>
        <Stack >
        {/* <p>Team doctor</p> */}
          <Button
          variant="contained"
          onClick={functionopenpopup}
          sx={{
            bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
            ":hover": {
              bgcolor: theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
            },
          }}
          // onClick={(event) => {
          //   handleClick(event, cellValues);
          // }}
        >
          Add new doctor
        </Button>
        
        </Stack>
      </Stack>
      {/* <p>hello</p> */}
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
}
