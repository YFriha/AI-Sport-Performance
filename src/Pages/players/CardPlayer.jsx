// import React from "react"; // Import React
import PropTypes from "prop-types"; // Import PropTypes
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { CreateOutlined, DeleteOutlined } from "@mui/icons-material";
import { useState } from "react";
import ImageUploadButton from "./ImageUploadButton";
// import PropTypes from 'prop-types';
// import axios from "axios";

function CardPlayer({
  imageSrc,
  name,
  age,
  height,
  phone,
  email,
  value,
  poste,
  playerId, // Receive the playerId prop
  // playerObj,
  onDeletePlayer,
  updatePlayer,
  player
  // handleImageUpload,
}) {
  const navigate = useNavigate();

  const routeChange = () => {
    const path = `/Playerdetails/${encodeURIComponent(
      imageSrc
    )}/${encodeURIComponent(name)}/${encodeURIComponent(
      age
    )}/${encodeURIComponent(height)}/${encodeURIComponent(
      phone
    )}/${encodeURIComponent(email)}/${encodeURIComponent(
      value
    )}/${encodeURIComponent(poste)}`;

    navigate(path);
  };

  const [playerFname, setPlayerFname] = useState(player.playerFname);
  const [playerLname, setPlayerLname] = useState(player.playerLname);
  const [playerAge, setPlayerAge] = useState(player.playerAge);
  const [playerHeight, setPlayerHeight] = useState(player.playerHeight);
  const [playerWeight, setPlayerWeight] = useState(player.playerWeight);
  const [playerValue, setPlayerValue] = useState(player.playerValue);
  const [playerPhone, setPlayerPhone] = useState(player.playerPhone);
  const [playerEmail, setPlayerEmail] = useState(player.playerEmail);
  const [playerPost, setPlayerPost] = useState(player.playerPost);
  const [ selectedImage,  setSelectedImage] = useState(player.playerImage);

  // async function deletePlayerById(playerId) {
  //   try {
  //     // Send a DELETE request to the API endpoint with the player's ID
  //     await axios.delete(`http://localhost:8080/players/${playerId}`);

  //     // If the request is successful, the player has been deleted
  //     console.log(`Player with ID ${playerId} has been deleted.`);
  //   } catch (error) {
  //     // Handle any errors that occur during the deletion process
  //     console.error(`Error deleting player with ID ${playerId}: ${error.message}`);
  //   }
  // }
  async function handleDeletePlayer() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this player?"
    );
    if (confirmDelete) {
      onDeletePlayer(playerId);
    }
  }
  // async function handleUpdatePlayer() {

  //     onUpdatePlayer(playerObj);

  // }
  const handleImageUpload = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  async function handleUpdatePlayer() {

    closepopup4()
    console.log("the new image : "+ selectedImage)
    const updatedPlayerData = {
      id: playerId,
      playerFname: playerFname,
      playerLname: playerLname,
      playerImage: selectedImage,
      playerAge: playerAge,
      playerHeight: playerHeight,
      playerValue: playerValue,
      playerPhone: playerPhone,
      playerEmail: playerEmail,
      playerPost: playerPost,
    };
    updatePlayer(updatedPlayerData);
  }

  const theme = useTheme();
  const [open4, openchange4] = useState(false);

  const functionopenpopup4 = () => {
    openchange4(true);
  };
  const closepopup4 = () => {
    openchange4(false);
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={name} className="card-image img-responsive" />
      <div className="card-content">
        <h2 className="card-title" style={{ color: "#9cd6d1" }}>
          {name}
        </h2>
        <p className="card-description">
          age : <span style={{ color: "#9f9f9f" }}>{age}</span>
        </p>
        <p className="card-description">
          Height: <span style={{ color: "#9f9f9f" }}>{height}</span>
        </p>
        <p className="card-description">
          Phone : <span style={{ color: "#9f9f9f" }}>{phone}</span>
        </p>
        <p className="card-description">
          Email : <span style={{ color: "#9f9f9f" }}>{email}</span>
        </p>
        <p className="card-description">
          Value : <span style={{ color: "#9f9f9f" }}>{value}</span>
        </p>
        <p className="card-description">
          Post : <span style={{ color: "#9f9f9f" }}>{poste}</span>
        </p>
        <div className="row ">
          <div className="col-8">
            <Button
              className="card-button"
              onClick={routeChange}
              style={{
                backgroundColor: "white",
                color: "black",
                border: "2px solid #9cd6d1",
                borderRadius: " 4px",
                padding: " 8px 16px",
                cursor: "pointer",
                transition: "transform 0.6s ease-in-out",
                marginTop: "20px",
                // marginLeft:"10px"
                // paddingLeft:"40px"
              }}
            >
              More details
            </Button>
          </div>
          {/* <Box ></Box>   */}
          <div
            style={{
              marginTop: "20px",
            }}
            className="col-4"
          >
            <IconButton
              sx={{
                color: "#9f9f9f",
              }}
              onClick={functionopenpopup4}
              color="inherit"
              aria-label="delete"
            >
              <CreateOutlined />
            </IconButton>
            <IconButton
              sx={{
                color: "#9f9f9f",
              }}
              // onClick={() => deletePlayerById(player.id)}
              onClick={handleDeletePlayer}
              color="inherit"
              aria-label="delete"
            >
              <DeleteOutlined />
            </IconButton>
          </div>
        </div>
      </div>
      <Dialog
        // fullScreen
        open={open4}
        onClose={closepopup4}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent>
          <Stack spacing={2.5} margin={1}>
            <Typography
              fontSize={25}
              fontFamily={"sans-serif"}
              color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
            >
              Update player
            </Typography>
            <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="First name"
                  id="playerFname"
                  value={playerFname}
                  onChange={(event) => {
                    setPlayerFname(event.target.value);
                  }}
                ></TextField>
              </div>
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Last name"
                  id="playerLname"
                  value={playerLname}
                  onChange={(event) => {
                    setPlayerLname(event.target.value);
                  }}
                ></TextField>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Age"
                  id="playerAge"
                  value={playerAge}
                  onChange={(event) => {
                    setPlayerAge(event.target.value);
                  }}
                ></TextField>
              </div>
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Height"
                  id="playerHeight"
                  value={playerHeight}
                  onChange={(event) => {
                    setPlayerHeight(event.target.value);
                  }}
                ></TextField>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Weight"
                  id="playerWeight"
                  value={playerWeight}
                  onChange={(event) => {
                    setPlayerWeight(event.target.value);
                  }}
                ></TextField>
              </div>
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Phone"
                  id="playerPhone"
                  value={playerPhone}
                  onChange={(event) => {
                    setPlayerPhone(event.target.value);
                  }}
                ></TextField>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Email"
                  id="playerEmail"
                  value={playerEmail}
                  onChange={(event) => {
                    setPlayerEmail(event.target.value);
                  }}
                ></TextField>
              </div>
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Value"
                  id="playerValue"
                  value={playerValue}
                  onChange={(event) => {
                    setPlayerValue(event.target.value);
                  }}
                ></TextField>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ paddingBottom: "20px" }}>
                <TextField
                  variant="outlined"
                  label="Post"
                  id="playerPost"
                  value={playerPost}
                  onChange={(event) => {
                    setPlayerPost(event.target.value);
                  }}
                ></TextField>
              </div>

              <ImageUploadButton
                onImageUpload={
                  handleImageUpload}
              />
            </div>

            {/* <text>Additional informations</text> */}
            {/* <p className="lead">Login : {playerFname}.{playerLname}@intelltrac.com </p>
                <p className="lead">Password : {randomPassword} </p> */}
            <Stack direction="row" alignItems="center" spacing={2}></Stack>
          </Stack>
        </DialogContent>

        <DialogActions>
          {/* <generateRandomPassword length = "16" /> */}
          <Button
            color="primary"
            variant="contained"
            sx={{
              bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
              ":hover": {
                bgcolor: theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
              },
            }}
            onClick={handleUpdatePlayer}
          >
            UPDATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CardPlayer.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  poste: PropTypes.string.isRequired,
  onDeletePlayer: PropTypes.func.isRequired,
  playerId: PropTypes.string.isRequired,
  // playerImage: PropTypes.string.isRequired,
  updatePlayer: PropTypes.func.isRequired,
  handleImageUpload: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
  // playerObj: PropTypes.object.isRequired,
};

export default CardPlayer;
