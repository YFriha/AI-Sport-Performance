// import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { CreateOutlined, DeleteOutlined, VisibilityOutlined} from "@mui/icons-material";
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

export default function Players() {
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
      align: "center",
      headerAlign: "center",
      width: 33,
    },

    {
      field: "photo",
      renderCell: ({ row: { photo } }) => {
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
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 150,
    },
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
        return (
        <Stack direction={"row"}>
            <IconButton color="inherit" aria-label="delete">
              <VisibilityOutlined />
            </IconButton>
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
      <h2 style={{color:theme.palette.mode === "dark" ? "#009688" : "#9cd6d1", fontFamily: "system-ui"}}>Team player</h2>
      
      <Stack direction={"row"} padding={2}>
        <Box flexGrow={3} borderRadius={8}></Box>
        <Dialog   open={open}
          onClose={closepopup}
          fullWidth
          maxWidth="sm"
        > <DialogContent><Stack spacing={2.5} margin={2}>
            <Typography fontSize={25} fontFamily={"sans-serif"} color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}  >Add player</Typography>
              <TextField variant="outlined" label="Name"></TextField>
              <TextField variant="outlined" label="Age"></TextField>
              <TextField variant="outlined" label="Weight"></TextField>
              <TextField variant="outlined" label="Height"></TextField>
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
              onClick={functionopenpopup2}
            >
              Next
            </Button> </DialogActions>
          
        </Dialog>
        <Dialog
          open={open2}
          onClose={closepopup2}
          fullWidth
          maxWidth="sm"
        >
          <DialogContent>
            <Stack spacing={2.5} margin={2}>
            <Typography fontSize={25} fontFamily={"sans-serif"} color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}  >Add player</Typography>
              <text>Additional informations</text>
              
              <TextField variant="outlined" label="Position"></TextField>
              <TextField variant="outlined" label="Number"></TextField>
              
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
            </DialogActions>
        </Dialog>
        <Dialog
          // fullScreen
          open={open3}
          onClose={closepopup3}
          fullWidth
          maxWidth="sm"
        >
          <DialogContent>
            <Stack spacing={2.5} margin={2}>
            <Typography fontSize={25} fontFamily={"sans-serif"} color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}  >Add player</Typography>
              <text>Additional informations</text>
              <p className="lead" >Login : </p>
              <p className="lead" >Password : </p>
     <Stack direction="row" alignItems="center" spacing={2}>
      
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
            </DialogActions>
          
        </Dialog>
        <Stack>
        
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
          Add new Player
        </Button>
        
        </Stack>
      </Stack>
        <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
      
    </div>
  );
  
}
