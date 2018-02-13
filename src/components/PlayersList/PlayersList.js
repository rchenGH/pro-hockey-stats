import React from 'react';
import PlayerSummary from '../PlayerSummary/PlayerSummary'


function PlayersList(props){
  const { players = [] } = props;
  const { seasons = [] } = props;



  return (
    <div className='PlayerList row'>

      {
      players.map(player => (
          <PlayerSummary key={player.id} {...player}/>
        ))
      }

      {
      seasons.map(season => (
          <PlayerSummary {...season}/>
        ))
      }
    </div>
  );
}

export default PlayersList
