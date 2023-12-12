import PropTypes from "prop-types";
// import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

function PlayerCard({ players }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/players`;
    navigate(path);
  };
  return (
    <div onClick={routeChange} className="">
      <div className="card-counter primary">
        <i className="fa fa-user-circle"></i>
        <span className="count-numbers">Players</span>
        <span className="count-name">{players}</span>
      </div>
    </div>
  );
}

PlayerCard.propTypes = {
  players: PropTypes.number.isRequired,
  managers: PropTypes.number.isRequired,
  doctors: PropTypes.number.isRequired,
};

export default PlayerCard;
export function ManagerCard({ managers }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/managers`;
    navigate(path);
  };
  return (
    <div onClick={routeChange} className="">
      <div className="card-counter info2">
        <i className="fa fa-user-circle"></i>
        <span className="count-numbers">Managers</span>
        <span className="count-name">{managers}</span>
      </div>
    </div>
  );
}

ManagerCard.propTypes = {
  managers: PropTypes.number.isRequired,
};
export function DoctorCard({ doctors }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/doctors`;
    navigate(path);
  };
  return (
    <div onClick={routeChange} className="">
      <div className="card-counter info">
        <i className="fa fa-user-circle"></i>
        <span className="count-numbers">Doctors</span>
        <span className="count-name">{doctors}</span>
      </div>
    </div>
  );
}

DoctorCard.propTypes = {
  doctors: PropTypes.number.isRequired,
};
export function GoalsCard({ goals }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/players`;
    navigate(path);
  };
  return (
    <div onClick={routeChange} className="">
      <div className="card-counter info1">
        <i className="fa fa-user-circle"></i>
        <span className="count-numbers">Goals</span>
        <span className="count-name">{goals}</span>
      </div>
    </div>
  );
}

GoalsCard.propTypes = {
  goals: PropTypes.number.isRequired,
};

export function Score({ score }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/players`;
    navigate(path);
  };
  return (
    <div onClick={routeChange} className="">
      <div className="card-counter success">
        <i className="fa fa-user-circle"></i>
        <span className="count-numbers">Score</span>
        <span className="count-name">{score}</span>
      </div>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
};
