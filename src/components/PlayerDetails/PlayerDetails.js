import React from 'react';


function PlayerDetails(props){
  const{
    full_name, user = {}, season, age, team, gp, g, a, pts, s, s_percentage, toi
  } = props;


  return (
    <div className="PlayerDetails">
      <h2>{full_name}</h2>
      <p>{season}</p>
      <p>Age: {season}</p>
      <p>GP: {gp}</p>
      <p>PTS: {pts}</p>
    </div>
  );

}

export default PlayerDetails
