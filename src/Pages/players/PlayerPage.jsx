import axios from "axios";
import CardPlayer from "./CardPlayer";
// import selectedImage from "./ImageUploadButton";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";

import { useState } from "react";
import React from "react";
import ImageUploadButton from "./ImageUploadButton";
import { generateRandomPassword } from "./GenerateRandomPassword";
const PlayerPage = () => {
  // const playerData = [
  //   {
  //     id: 0,
  //     imageSrc: "/src/assets/walker.jpg",
  //     name: "Walker",
  //     email: "Walker@gmail.com",
  //     age: 32,
  //     phone: "+21262323252",
  //     height: "180",
  //     value: "10",
  //     poste: "AC",
  //   },
  //   {
  //     id: 1,
  //     imageSrc: "/src/assets/halaand.jpg",
  //     name: "Halaand",
  //     email: "Halaand@gmail.com",
  //     age: 25,
  //     phone: "+21262323252",
  //     height: "180",
  //     value: "10",
  //     poste: "AC",
  //   },
  //   {
  //     id: 2,
  //     imageSrc: "/src/assets/messi.png",
  //     name: "Messi",
  //     email: "Messi@gmail.com",
  //     age: 36,
  //     phone: "+21262323252",
  //     height: "180",
  //     value: "10",
  //     poste: "AC",
  //   },
  // ];
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageUpload = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // const [id, setId] = useState(0);
  // const [playerImage, setPlayerImage] = useState("");
  const [playerFname, setPlayerFname] = useState("");
  const [playerLname, setPlayerLname] = useState("");
  const [playerAge, setPlayerAge] = useState("");
  const [playerHeight, setPlayerHeight] = useState("");
  const [playerValue, setPlayerValue] = useState("");
  const [playerPhone, setPlayerPhone] = useState("");
  const [playerEmail, setPlayerEmail] = useState("");
  const [playerPost, setPlayerPost] = useState("");

  const [players, setPlayers] = useState([]);
  // const [playerUpdated, setPlayerUpdated] = useState([]);
  // const [ImgUrl,setImgUrl] = useState("");
  const [fieldColor,setFieldColor] = useState(true);
  // function isNotEmpty(playerFname, playerLname) {
  //   if (!playerFname) {
  //    setFieldColor(true);
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  const isTextFieldEmpty = (value) => {
    return value === "";
  };
  
  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:8080/players");
    setPlayers(result.data);
    // console.log("those are my players : "+result.data);
    result.data.forEach((player, index) => {
      console.log(`Player ${index + 1}: ${player.playerFname}`);
    });
  }
  const randomPassword = generateRandomPassword(12);
  async function save(event) {
    // setPlayerImage(selectedImage)
    toggleDialog3();
    console.log("this is the url : " + selectedImage);
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/players", {
        // id:id ,
        playerLogin: `${playerFname}.${playerLname}@intelltrac.com`,
        playerPassword: randomPassword,
        playerImage: selectedImage,
        playerFname: playerFname,
        playerLname: playerLname,
        playerAge: playerAge,
        playerHeight: playerHeight,
        playerValue: playerValue,
        playerPhone: playerPhone,
        playerEmail: playerEmail,
        playerPost: playerPost,
      });
      alert("Player Registation Successfully");
      setPlayerFname("");
      setPlayerLname("");
      setPlayerAge("");
      setPlayerHeight("");
      setPlayerValue("");
      setPlayerPhone("");
      setPlayerEmail("");
      setPlayerPost("");
      Load();
    } catch (err) {
      alert("player Registation Failed");
    }
  }

  async function deletePlayerById(playerId) {
    try {
      // Send a DELETE request to the API endpoint with the player's ID
      await axios.delete(`http://localhost:8080/players/${playerId}`);

      // If the request is successful, the player has been deleted
      console.log(`Player with ID ${playerId} has been deleted.`);
      Load();
    } catch (error) {
      // Handle any errors that occur during the deletion process
      console.error(
        `Error deleting player with ID ${playerId}: ${error.message}`
      );
    }
  }

  async function updatePlayer (updatedData) {
    console.log("voila le nom du joueurs updated : "+updatedData.playerFname)
    try {
      const response = await axios.put(
        `http://localhost:8080/players`,
        updatedData
      );

      if (response.status === 200) {
        // Handle a successful update (e.g., show a success message)
        console.log(`Player with ID has been updated.`);
        // Reload the player data if needed
        Load();
      } else {
        // Handle errors (e.g., show an error message)
        console.error(
          `Error updating player with ID : ${response.statusText}`
        );
      }
    } catch (error) {
      // Handle any network errors or exceptions
      console.error(`Error updating player: ${error.message}`);
    }
  }
  // async function updatePlayer(player) {
  //   var fName='ndn';
  //   var lName ='dd'
  //   const result = await axios.get(`http://localhost:8080/players/${player.id}`);
  //   setPlayerUpdated(result.data);
  //   // console.log("those are my players : "+result.data);
  //   result.data.forEach((player, index) => {
  //     console.log(`Player ${index + 1}: ${player.playerFname}`);
  //     // fName = player.playerFname;
  //     // lName = player.playerLname;
  //   });
  //   try {
  //     // Send a DELETE request to the API endpoint with the player's ID
  //     await axios.put(`http://localhost:8080/players/`,{
  //       id:"player.id" ,
  //       playerLogin: "`${playerFname}.${playerLname}@intelltrac.com`",
  //       playerPassword: "randomPassword",
  //       playerImage: "selectedImage",
  //       playerFname: fName,
  //       playerLname: lName,
  //       playerAge: "player.playerAge",
  //       playerHeight: "player.playerHeight",
  //       playerValue:" player.playerValue",
  //       playerPhone:" player.playerPhone",
  //       playerEmail: "player.playerEmail",
  //       playerPost: "player.playerPost",
  //     });

  //     // If the request is successful, the player has been deleted
  //     console.log(`Player with ID ${player.playerId} has been updated.`);
  //     Load();
  //   } catch (error) {
  //     // Handle any errors that occur during the deletion process
  //     console.error(`Error updating player with ID ${player.playerId}: ${error.message}`);
  //   }
  // }

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
      // @ts-ignore
      this.state.visible == false;
    }
  };

  const functionopenpopup2 = () => {
    toggleDialog();
    openchange2(true);
  };
  const closepopup2 = () => {
    openchange2(false);
  };

  const functionopenpopup3 = () => {
    save();
    toggleDialog2();
    openchange3(true);
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
  return (
    <div
      style={{
        flexDirection: "column",
      }}
      className="d-flex flex-column "
    >
      <h2
        style={{
          color: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
          fontFamily: "system-ui",
        }}
      >
        Team player
      </h2>
      <div>
        <Stack direction={"row"} padding={2}>
          <Box flexGrow={3} borderRadius={8}></Box>
          <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
            {" "}
            <DialogContent>
              <Stack spacing={2.5} margin={2}>
                <Typography
                  fontSize={25}
                  fontFamily={"sans-serif"}
                  color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
                >
                  Add player
                </Typography>
                <TextField
                  variant="outlined"
                  label="First name"
                  id="playerFname"
                  value={playerFname}
                  onChange={(event) => {
                    setPlayerFname(event.target.value);
                  }}
                  sx={{
                    borderColor: isTextFieldEmpty(playerFname) ? undefined : "red",
                    
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Last name"
                  id="playerLname"
                  value={playerLname}
                  onChange={(event) => {
                    setPlayerLname(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Age"
                  id="playerAge"
                  value={playerAge}
                  onChange={(event) => {
                    setPlayerAge(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Height"
                  id="playerHeight"
                  value={playerHeight}
                  onChange={(event) => {
                    setPlayerHeight(event.target.value);
                  }}
                ></TextField>
                <TextField variant="outlined" label="Weight"></TextField>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="contained"
                sx={{
                  bgcolor:
                    theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                  ":hover": {
                    bgcolor:
                      theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                  },
                }}
                onClick={() => {
                  if (isTextFieldEmpty(playerFname)) {
                    console.log("test1");
                    
                  }else{
                    setFieldColor(false)
                    console.log("test2");
                    functionopenpopup2();
                  }
                }}
              >
                Next
              </Button>{" "}
            </DialogActions>
          </Dialog>
          <Dialog open={open2} onClose={closepopup2} fullWidth maxWidth="sm">
            <DialogContent>
              <Stack spacing={2.5} margin={2}>
                <Typography
                  fontSize={25}
                  fontFamily={"sans-serif"}
                  color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
                >
                  Add player
                </Typography>
                <text>Additional informations</text>

                <TextField
                  variant="outlined"
                  label="Position"
                  id="playerPost"
                  value={playerPost}
                  onChange={(event) => {
                    setPlayerPost(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Number"
                  id="playerValue"
                  value={playerValue}
                  onChange={(event) => {
                    setPlayerValue(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Phone"
                  id="playerPhone"
                  value={playerPhone}
                  onChange={(event) => {
                    setPlayerPhone(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Email"
                  id="playerEmail"
                  value={playerEmail}
                  onChange={(event) => {
                    setPlayerEmail(event.target.value);
                  }}
                ></TextField>

                <Stack direction="row" alignItems="center" spacing={2}>
                  {/* <Button
                    variant="contained"
                    component="label"
                    sx={{
                      bgcolor:
                        theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                      ":hover": {
                        bgcolor:
                          theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                      },
                    }}
                  >
                    Upload
                    <input  accept="image/*"  type="file" />
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
                  bgcolor:
                    theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
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
                <Typography
                  fontSize={25}
                  fontFamily={"sans-serif"}
                  color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
                >
                  Add player
                </Typography>
                <text>Additional informations</text>
                <p className="lead">
                  Login : {playerFname}.{playerLname}@intelltrac.com{" "}
                </p>
                <p className="lead">Password : {randomPassword} </p>
                <Stack direction="row" alignItems="center" spacing={2}></Stack>
              </Stack>
            </DialogContent>

            <DialogActions>
              {/* <generateRandomPassword length = "16" /> */}
              <Button
                color="primary"
                variant="contained"
                sx={{
                  bgcolor:
                    theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                  ":hover": {
                    bgcolor:
                      theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                  },
                }}
                onClick={save}
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
                  bgcolor:
                    theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
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
        <div className="app ">
          {players.map((player, index) => (
            <div key={index} className="my-food">
              <CardPlayer
                imageSrc={player.playerImage}
                name={player.playerFname}
                age={player.playerAge}
                height={player.playerHeight}
                phone={player.playerPhone}
                email={player.playerEmail}
                value={player.playerValue}
                poste={player.playerPost}
                playerId={player.id}
                player={player}
                onDeletePlayer={deletePlayerById}
                updatePlayer={updatePlayer}
                handleImageUpload={handleImageUpload}
                // playerImage:playerImage
              />
            </div>
          ))}
        </div>

        {/* <CardPlayer
        height,
     phone, email, value, poste
             imageSrc={playerData[0].imageSrc}
            name={playerData[0].name}
            age={playerData[0].age}
            /> */}
      </div>
    </div>
  );
};
export default PlayerPage;
