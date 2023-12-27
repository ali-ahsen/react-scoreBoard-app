import './App.css';
import React,{Component} from 'react';
import Header from './Header';
import Player from './Players';
import AddPlayerForm from './AddPlayerForm';
class App extends Component {

  state = {
     players:[
      {
        name:"Ali Ahsan",
        score:0,
        id : 1
      },
      {
        name:"Akhtar Gull",
        score:0,
        id : 2
      },
      {
        name:"Waqar Lala",
        score:0,
        id : 3
      },
      {
        name:"Irfan Khan",
        score:0,
        id : 4
      },
      {
        name:"Arslan Rana",
        score:0,
        id : 5
      },
    ]
  };

  handeleScoreChange = (index, delta) => {
    this.setState({
        score: this.state.players[index].score +=delta
     
    });
  }

handleRemovePlayer = (id)=>{
  this.setState( prevState =>{
    return{
      players: prevState.players.filter(p =>p.id !==id)
    }
   
  })
}


prevPlayerId = 6;

handleAddPlayer = (name) =>{
  this.setState({
    players: [
      ...this.state.players, 
      {
        name,
        score: 0,
        id: this.prevPlayerId += 1
,      }
    ]
  })
}
getHigherScore = () =>{
  const score = this.state.players.map(x => x.score);
  const  highestScore = Math.max(...score)
  if(highestScore) return highestScore
  // else null
}
  render(){
    const {
      name,
      id,
      score,
      isHighScore,
      index,
      removePlayer,
      changeScore
    } = this.props;
  const heighestscore = this.getHigherScore()
  return (
  <div className='scoreboard'>
    <Header title="Scoreboard" players={this.state.players} />
    {this.state.players.map((player,index) => 
    <Player 
      name={player.name}
      id={player.id} 
      score={player.score} 
      key={player.id} 
      index ={index}
      hScore ={heighestscore}
      changeScore={this.handeleScoreChange}  
      removePlayer={this.handleRemovePlayer}
    />
    )}
    <AddPlayerForm  addPlayer={this.handleAddPlayer}/>
    </div>
  );
    }
}

export default App;




