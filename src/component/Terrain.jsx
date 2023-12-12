import  { Component } from 'react';
import './Terrain.css';
// import { green } from '@mui/material/colors';

class Terrain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: Array.from({ length: 11 }, (_, index) => ({
        id: index + 1,
        x: Math.random() * 700 + 50,
        y: Math.random() * 500 + 50,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      })),
    };
  }

  updatePlayersPosition = () => {
    this.setState(prevState => ({
      players: prevState.players.map(player => {
        let newX = player.x + player.speedX;
        let newY = player.y + player.speedY;

        
        if (newX < 0 || newX > 700) {
          player.speedX *= -1;
          newX = player.x + player.speedX;
        }
        if (newY < 0 || newY > 500) {
          player.speedY *= -1;
          newY = player.y + player.speedY;
        }

        return {
          ...player,
          x: newX,
          y: newY,
        };
      }),
    }));
  };
  

  componentDidMount() {
    this.interval = setInterval(this.updatePlayersPosition, 16); // Update every 16ms (approx. 60fps)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // let nbr=0;
    return (
      <div className="terrain">
          <div className="ball"></div> {/* Ball element */}
        {this.state.players.map(player => (
          <div key={player.id} className="player" style={{ left: player.x, top: player.y }}>
          {player.id} {}
        </div>
        ))}
      </div>
    );
  }
}

export default Terrain;
