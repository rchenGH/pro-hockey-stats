import React from 'react';

import {Link} from 'react-router-dom'

function PlayerSummary(props){
  const {id, full_name, season, age,
            team, gp, g, a, pts, s, s_percentage, toi
} = props

  return (
    <div className="PlayerSummary">
      <Link to={`players/${id}`}>{full_name}</Link>
    </div>
  )


}

export default PlayerSummary
