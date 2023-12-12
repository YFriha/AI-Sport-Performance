// import Terrain from './component/Terrain'
// import PlayerCard from 'Pages/players/PlayerCard';
import PlayerCard, { DoctorCard, GoalsCard, ManagerCard, Score } from "../players/PlayerCardDash";
import Terrain from "../../component/Terrain";
import { Paper } from "@mui/material";
// import { Box } from '@mui/material';
// import React from 'react'

export default function Dashboard() {
  const numberOfPlayers = 11;
  const numberOfManagers = 3;
  const numberOfDoctors = 2;
  const numberOfGoals = 7;
  const score = 7;
  return (
    <div  className="container">
      <div style={{
        paddingTop:"20px",
      }} className="row ">
        <div className="col-md-3">
          <PlayerCard players={numberOfPlayers} />
        </div>
        <div className="col-md-3">
          {/* <h3>Manager Overview</h3> */}
          <ManagerCard managers={numberOfManagers} />
        </div>
        <div className="col-md-3">
          {/* <h3>Doctor Overview</h3> */}
          <DoctorCard doctors={numberOfDoctors} />
        </div>
        <div className="col-md-3">
          {/* <h3>Doctor Overview</h3> */}
          <GoalsCard goals={numberOfGoals} />
        </div>
        <div className="col-md-3">
          {/* <h3>Doctor Overview</h3> */}
          <Score score={score} />
        </div>
      </div>
      <div style={{ marginTop: "350px", backgroundColor:"#eeeeee" }} className="terrain responsive">
        <Paper>
          <Terrain />
        </Paper>
        
      </div>
    </div>
  );
}
