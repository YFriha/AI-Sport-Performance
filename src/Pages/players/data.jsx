import { Avatar, Box } from "@mui/material";
// import PlayerInfo from "./PlayerInfo";
// import PlayerInfo from "./PlayerInfo";
export const rows = [

  // <PlayerInfo 
  // info={{
  //   fname:"yassir",
  //   lname:"friha",
  //   age:25,
  //   phone:"0766405923",
  //   height:"1.75",
  //   email:"yassir@gmail.com"
  // }}
  
  // />
 
  {

    id: 0,
    photo: (
      <Box>
       <Avatar alt="Remy Sharp" src="./src/assets/walker.jpg" sx={{ width: 46, height: 46 }} />

      </Box>
    ),
    name: "Walker",
    email: "Walker@gmail.com",
    age: "32",
    phone: "+21262323252",
    col6: "dd",
  },
  {
    id: 1,
    photo: (
      <Box>
        <Avatar alt="Remy Sharp" src="./src/assets/halaand.jpg"  sx={{ width: 46, height: 46 }}/>

      </Box>
    ),
    name: "Halaand",
    email: "Halaand@gmail.com",
    age: "25",
    phone: "+21262323252",
    col6: "dd",
  },
  {
    id: 2,
    photo: (
      <Box>
        <Avatar alt="Remy Sharp" src="./src/assets/messi.png" sx={{ width: 46, height: 46 }}/>

      </Box>
    ),
    name: "Messi",
    email: "Messi@gmail.com",
    age: "36",
    phone: "+21262323252",
    col6: "",
  },
];
