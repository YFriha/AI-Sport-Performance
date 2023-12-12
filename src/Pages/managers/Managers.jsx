// import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./dataManagers";
import {
  Avatar,
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
import { CreateOutlined, DeleteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import ImageUploadButton from "../players/ImageUploadButton";

// eslint-disable-next-line no-unused-vars
const VisuallyHiddenInput = styled("input")`
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

export default function Managers() {
  //------------------------------------------------------------
  const [managerId, setManagerId] = useState("");
  const [managerPhoto, setManagerPhoto] = useState();
  const [managerFname, setManagerFname] = useState("");
  const [managerLname, setManagerLname] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [managerPhone, setManagerPhone] = useState("");
  const [managers, setManagers] = useState([]);

  const isTextFieldEmpty = (value) => {
    return value === "";
  };

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:8080/managers");
    setManagers(result.data);
    // console.log("those are my players : "+result.data);
    result.data.forEach((manager, index) => {
      console.log(`Manager ${index + 1}: ${manager.managerFname}`);
    });
  }
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const handleImageUpload = (imageUrl) => {
    setSelectedPhoto(imageUrl);
  };

  async function save(event) {
    // setPlayerImage(selectedImage)
    toggleDialog3();
    console.log("this is the url : " + selectedPhoto);
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/managers", {
        // id:id ,
        managerPhoto: selectedPhoto,
        managerFname: managerFname,
        managerLname: managerLname,
        managerPhone: managerPhone,
        managerEmail: managerEmail,
      });
      alert("Manager Registation Successfully");
      setManagerFname("");
      setManagerLname("");
      setManagerPhone("");
      setManagerEmail("");
      Load();
    } catch (err) {
      alert("Manager Registation Failed");
    }
  }

  async function deleteManagerById(ManagerId) {
    try {
      // Send a DELETE request to the API endpoint with the player's ID
      await axios.delete(`http://localhost:8080/managers/${ManagerId}`);

      // If the request is successful, the player has been deleted
      console.log(`Manager with ID ${ManagerId} has been deleted.`);
      Load();
    } catch (error) {
      // Handle any errors that occur during the deletion process
      console.error(
        `Error deleting Manager with ID ${ManagerId}: ${error.message}`
      );
    }
  }

  async function updateManager(updatedData) {
    console.log(
      "voila le nom du manager updated : " + updatedData.managerFname
    );
    try {
      const response = await axios.put(
        `http://localhost:8080/managers`,
        updatedData
      );

      if (response.status === 200) {
        // Handle a successful update (e.g., show a success message)
        console.log(`Manager with ID has been updated.`);
        // Reload the player data if needed
        Load();
      } else {
        // Handle errors (e.g., show an error message)
        console.error(
          `Error updating manager with ID : ${response.statusText}`
        );
      }
    } catch (error) {
      // Handle any network errors or exceptions
      console.error(`Error updating manager: ${error.message}`);
    }
  }


  const [open4, openchange4] = useState(false);
  const functionopenpopup4 = () => {
    openchange4(true);
  };
  const closepopup4 = () => {
    openchange4(false);
  };

   async function handleUpdateManager() {

    
    console.log("the new image : "+ selectedPhoto)
    console.log("the new id : "+ managers[0].managerId)
    const updatedPlayerData = {
      id: managers[0].managerId,
      managerFname: managerFname,
      managerLname: managerLname,
      managerPhoto: selectedPhoto,
      managerPhone: managerPhone,
      managerEmail: managerEmail,
    };
    updateManager(updatedPlayerData);closepopup4()
  }

  const rows = [
    managers.map((manager,index) =>(
      {
      id: index,
      photo: (
        <Box>
         <Avatar alt="Remy Sharp" src={manager.managerPhoto} sx={{ width: 46, height: 46 }} />
  
        </Box>
      ),
      Fname: 'dd',
      Lname: 'dd',
      email: '{manager.managerEmail}',
      // age: "50",
      phone:" {manager.managerPhone}",
      col6: "dd",
    }
      ))
    ]

  //----------------------------------------------------------------
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
    {
      this.state.visible == false;
    }
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
  const closepopup3 = () => {
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

  managers.map((manager,index) =>(
   console.log(manager.id)
  ))
  
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
      field: "managerPhoto",
      renderCell: ({ row }) => (
        <Avatar alt="Manager" src={row.managerPhoto} sx={{ width: 46, height: 46 }} />
      ),
      headerName: "Photo",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    
    {
      field: "managerFname",
      headerName: "Fname",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "managerLname",
      headerName: "Lname",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "managerEmail",
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
      field: "managerPhone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 150,
    },


    {
      "nom": "Friha yassir",
      "âge": 25,
      "ville": "Marrakech",
      "contacts": [
        {
          "type": "email",
          "valeur": "friha.yassir@gmail.com"
        },
        {
          "type": "téléphone",
          "valeur": "0766405923"
        }
      ]
    },
    
    {
      field: "col6",
      renderCell: () => {
        return (
          <Stack direction={"row"}>
            <IconButton color="inherit" aria-label="delete"
            sx={{
              color: "#9f9f9f",
            }}
            onClick={functionopenpopup4}>
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
      <h2
        style={{
          color: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
          fontFamily: "system-ui",
        }}
      >
        Team manager
      </h2>
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
              <Typography
                fontSize={25}
                fontFamily={"sans-serif"}
                color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
              >
                Add Manager
              </Typography>
              <TextField
               variant="outlined" 
               label="First name" 
               value={managerFname}
               onChange={(event) =>{
                setManagerFname(event.target.value);
               }}
               ></TextField>
              <TextField variant="outlined" label="Last name"
              value={managerLname}
              onChange={(event) =>{
               setManagerLname(event.target.value);
              }}
              ></TextField>
              <TextField variant="outlined" label="Phone"
              value={managerPhone}
              onChange={(event) =>{
               setManagerPhone(event.target.value);
              }}
              ></TextField>
              <TextField variant="outlined" label="Email"
              value={managerEmail}
              onChange={(event) =>{
               setManagerEmail(event.target.value);
              }}
              ></TextField>
              {/* <FormControlLabel control={<Checkbox defaultChecked color="primary"></Checkbox>} label="Agree terms & conditions"></FormControlLabel> */}

              <Stack direction="row" alignItems="center" spacing={2}>
                {/* <Button variant="contained" component="label" sx={{
                bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                ":hover": {
                  bgcolor:
                    theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                },
              }}>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button> */}
                <ImageUploadButton onImageUpload={handleImageUpload} />
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
              // onKeyUp={closepopup}
              onClick={functionopenpopup3}
            >
              Next
            </Button>
            {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
          </DialogActions>
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
              <Typography
                fontSize={25}
                fontFamily={"sans-serif"}
                color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
              >
                Add Manager
              </Typography>
              <text>Additional informations</text>
              <p className="lead">Login : </p>
              <p className="lead">Password : </p>
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
              onClick={save}
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
            Add new Manager
          </Button>
        </Stack>
      </Stack>
      <DataGrid
        rows={managers}
        // @ts-ignore
        columns={columns}
      />
      <Dialog
          // fullScreen
          open={open4}
          onClose={closepopup4}
          fullWidth
          maxWidth="sm"
        >
          {/* <DialogTitle>User Registeration  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle> */}
          <DialogContent>
            {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
            <Stack spacing={2.5} margin={2}>
              <Typography
                fontSize={25}
                fontFamily={"sans-serif"}
                color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
              >
                Update Manager
              </Typography>
              <TextField
               variant="outlined" 
               label="First name" 
               value={managerFname}
               onChange={(event) =>{
                setManagerFname(event.target.value);
               }}
               ></TextField>
              <TextField variant="outlined" label="Last name"
              value={managerLname}
              onChange={(event) =>{
               setManagerLname(event.target.value);
              }}
              ></TextField>
              <TextField variant="outlined" label="Phone"
              value={managerPhone}
              onChange={(event) =>{
               setManagerPhone(event.target.value);
              }}
              ></TextField>
              <TextField variant="outlined" label="Email"
              value={managerEmail}
              onChange={(event) =>{
               setManagerEmail(event.target.value);
              }}
              ></TextField>
              {/* <FormControlLabel control={<Checkbox defaultChecked color="primary"></Checkbox>} label="Agree terms & conditions"></FormControlLabel> */}

              <Stack direction="row" alignItems="center" spacing={2}>
                {/* <Button variant="contained" component="label" sx={{
                bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                ":hover": {
                  bgcolor:
                    theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                },
              }}>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button> */}
                <ImageUploadButton onImageUpload={handleImageUpload} />
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
              // onKeyUp={closepopup}
              onClick={handleUpdateManager}
            >
              UPDATE
            </Button>
            {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
          </DialogActions>
        </Dialog>
    </div>
  );
}
