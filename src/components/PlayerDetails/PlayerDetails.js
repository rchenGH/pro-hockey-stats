import React from 'react';
import detailstyle from './playerdetails.css'
import { Table } from 'reactstrap';

import Chart from '../Chart/Chart'


function PlayerDetails(props){
  const{
    player, full_name, first_name = {}, age, team, gp, g, a, pts, s, s_percentage, toi, seasons= []
  } = props;


  let totalShots = 0
  let totalGoals = 0
  let totalAssists = 0
  let totalGames = 0
  let currentAge = 0
  let pointsPer82Projection = 0

  for(let i=0; i<seasons.length; i++){
    totalShots += (seasons[i].s)
  }

  for(let i=0; i<seasons.length; i++){
    totalGoals += (seasons[i].g)
  }

  for(let i=0; i<seasons.length; i++){
    totalAssists += (seasons[i].a)
  }

  for(let i=0; i<seasons.length; i++){
    totalGames += (seasons[i].gp)
  }

  for(let i=0; i<seasons.length; i++){
    currentAge = seasons[i].age
  }

  let averageShotPercentage = totalGoals/totalShots;
  let averageShotsPerSeason = totalShots/totalGames;
  let averageAssistsPerGame = totalAssists/totalGames;

  let assistsPer82 = averageAssistsPerGame * 82
  let shotsPer82 = averageShotsPerSeason * 82
  let goalsPer82 = shotsPer82 * averageShotPercentage

  let pointsPer82 = (goalsPer82 + assistsPer82)

  let avgShotPercentage = averageShotPercentage*100


  if(currentAge < 29){
    pointsPer82Projection = pointsPer82 * 1.05
  } else if ( currentAge === 30) {
    let pointsPer82Projection = pointsPer82
  } else if (currentAge > 31 && currentAge <34){
   pointsPer82Projection =  pointsPer82 * 0.97
 } else {
   pointsPer82Projection =  pointsPer82 * 0.95
 }

 let team_name = ""
 for(let i=0; i<seasons.length; i++){
   team_name = (seasons[seasons.length-1].team)
 }


  return (
    <div className="PlayerDetails container" style={{marginLeft:"auto", marginRight:"auto"}}>
      <div className="row" style={{paddingLeft:"17px"}}>
        <div className="show-name" style={{minWidth: "100px"}}>{team_name}</div>
        <div className="show-name" style={{minWidth: "300px"}}>{props.first_name} {props.last_name}</div>

      </div>

      <Table bordered>
      <thead>
        <tr>
          <th className="season">SEASON</th>
          <th className="team">TEAM</th>
          <th className="age">AGE</th>
          <th className="gp">GP</th>
          <th className="g">G</th>
          <th className="a">A</th>
          <th className="pts">PTS</th>
          <th className="plus_minus">+/-</th>
          <th className="pim">PIM</th>
          <th className="evg">EVG</th>
          <th className="eva">EVA</th>
          <th className="ppg">PPG</th>
          <th className="ppa">PPA</th>
          <th className="sh">SH</th>
          <th className="gw">GW</th>
          <th className="s">S</th>
          <th className="s_percentage">S%</th>
        </tr>
      </thead>
      <tbody className="SeasonsList">

        {
          seasons.reverse().map(season =>
            <tr key={season.id}>
                <td id="season">{season.season}</td>
                <td>{season.team}</td>
                <td>{season.age}</td>
                <td>{season.gp}</td>
                <td>{season.g}</td>
                <td>{season.a}</td>
                <td>{season.pts}</td>
                <td>{season.plus_minus}</td>
                <td>{season.pim}</td>
                <td>{season.evg}</td>
                <td>{season.eva}</td>
                <td>{season.ppg}</td>
                <td>{season.ppa}</td>
                <td>{season.sh}</td>
                <td>{season.gw}</td>
                <td>{season.s}</td>
                <td>{season.s_percentage}</td>
              </tr>)
        }
      </tbody>


    </Table>

    <br></br>
    <hr></hr>
    <br></br>

    <div className="projections">
      <p className="note">*NOTE THAT THESE PROJECTIONS ARE CALCULATED BASED ON AN 82 GAME SEASON*</p>

        <div className="show-projections">Projections</div>
      <Table bordered>
        <thead>
          <tr>
            <th className="next-season">NEXT SEASON</th>
            <th className="projected-goals">PROJECTED GOALS</th>
            <th className="projected-assists">PROJECTED ASSISTS</th>
            <th className="projected-points">PROJECTED POINTS</th>
            <th className="projected-shots">PROJECTED SHOTS</th>
            <th className="projected-shot-percentage">PROJECTED SHOT %</th>
          </tr>
        </thead>

        <tbody className="ProjectionsList">
          <tr>
            <td>2018-19</td>
            <td className="goalsper82">{goalsPer82.toFixed(2)}</td>
            <td className="assistsper82">{assistsPer82.toFixed(2)}</td>
            <td className='pointsper82'>{pointsPer82.toFixed(2)}</td>
            <td>{shotsPer82.toFixed(2)}</td>
            <td>{avgShotPercentage.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </div>

    <br></br>
    <hr></hr>
    <br></br>

    <Chart seasons= {props.seasons} pointsPer82={props.pointsPer82}/>

    </div>
  );

}
export default PlayerDetails
