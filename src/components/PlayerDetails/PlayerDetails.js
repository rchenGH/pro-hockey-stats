import React from 'react';
import detailstyle from './playerdetails.css'
import { Table } from 'reactstrap';

import Chart from '../Chart/Chart'


function PlayerDetails(props){
  const{
    player, full_name, first_name = {}, age, team, gp, g, a, pts, s, s_percentage, toi, seasons= []
  } = props;


  let total_shots = 0
  let total_goals = 0
  let total_assists = 0
  let total_games = 0
  let current_age = 0
  let points_per_82_projection = 0

  for(let i=0; i<seasons.length; i++){
    total_shots += (seasons[i].s)
  }

  for(let i=0; i<seasons.length; i++){
    total_goals += (seasons[i].g)
  }

  for(let i=0; i<seasons.length; i++){
    total_assists += (seasons[i].a)
  }

  for(let i=0; i<seasons.length; i++){
    total_games += (seasons[i].gp)
  }

  for(let i=0; i<seasons.length; i++){
    current_age = seasons[i].age
  }

  let average_shot_percentage = total_goals/total_shots;
  let average_shots_per_season = total_shots/total_games;
  let average_assists_per_game = total_assists/total_games;

  let assists_per_82 = average_assists_per_game * 82
  let shots_per_82 = average_shots_per_season * 82
  let goals_per_82 = shots_per_82 * average_shot_percentage

  let points_per_82 = (goals_per_82 + assists_per_82)

  let avg_shot_percentage = average_shot_percentage*100


  if(current_age < 29){
    points_per_82_projection = points_per_82 * 1.05
  } else if ( current_age === 30) {
    let points_per_82_projection = points_per_82
  } else if (current_age > 31 && current_age <34){
   points_per_82_projection =  points_per_82 * 0.97
 } else {
   points_per_82_projection =  points_per_82 * 0.95
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
          seasons.map(season =>
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
            <td className="goalsper82">{goals_per_82.toFixed(2)}</td>
            <td className="assistsper82">{assists_per_82.toFixed(2)}</td>
            <td className='pointsper82'>{points_per_82.toFixed(2)}</td>
            <td>{shots_per_82.toFixed(2)}</td>
            <td>{avg_shot_percentage.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </div>

    <Chart seasons= {props.seasons} points_per_82={props.points_per_82}/>

    </div>
  );

}
export default PlayerDetails
