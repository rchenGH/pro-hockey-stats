import React from 'react';
import PlayerSummary from '../PlayerSummary/PlayerSummary'


function PlayersList(props){
  const {
    players = []
  } = props;

  return (
    <div className='PlayersList'>
      {
        players.map(player =>(
          <PlayerSummary key={player.id}{...player}/>
        ))
      }

    </div>

  );
}

export default PlayersList
