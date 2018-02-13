import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Table } from 'reactstrap';
import {Bar, Line, Pie} from 'react-chartjs-2';


function Chart (props) {
  const {seasons =[]} = props;
  console.log(seasons)

  let seasonsArray = [];
  let pointsArray = [];
  let colourArray1 = [];
  let colourArray2 = [];

  let currentAge = 0;
  let totalGames = 0


  let totalShots = 0
  let totalGoals = 0
  let totalAssists = 0

  let ppgaArray = [];
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
    pointsArray.push(seasons[i].pts)
  }

  for(let i=0; i<seasons.length; i++){
    seasonsArray.push(seasons[i].season)
  }

  for(let i=0; i<seasons.length; i++){
    colourArray1.push('rgba(240,180,80,0.8)')
  }

  for(let i=0; i<seasons.length; i++){
    colourArray2.push('rgba(180, 120, 50, 0.8)')
  }


  for(let i=0; i<seasons.length; i++){
    ppgaArray.push((seasons[i].pts)/(seasons[i].gp))
  }


  for(let i=0; i<seasons.length; i++){
    currentAge = (seasons[seasons.length-1])
  }

  let averageShotPercentage = totalGoals/totalShots;
  let averageShotsPerSeason = totalShots/totalGames;
  let averageAssistsPerGame = totalAssists/totalGames;

  let assistsPer82 = averageAssistsPerGame * 82
  let shotsPer82 = averageShotsPerSeason * 82
  let goalsPer82 = shotsPer82 * averageShotPercentage

  let pointsPer82 = (goalsPer82 + assistsPer82)

  let avgShotPercentage = averageShotPercentage * 100

  if(currentAge < 29){
    pointsPer82Projection = pointsPer82 * 1.05
  } else if ( currentAge === 30) {
    let pointsPer82Projection = pointsPer82
  } else if (currentAge > 31 && currentAge <34){
   pointsPer82Projection =  pointsPer82 * 0.97
  } else {
   pointsPer82Projection =  pointsPer82 * 0.95
  }

  pointsArray.push(pointsPer82Projection)
  seasonsArray.push("2018-19")
  colourArray1.push('rgba(180,70,70)')


  ppgaArray.push(pointsPer82Projection/82)
  colourArray2.push('rgba(180,70,70)')





  let dataArrayTotal = {
    chartData: {
      labels: seasonsArray,
      datasets:[
        {
          label: 'POINTS PER SEASON',
          data:pointsArray,
          backgroundColor: colourArray1
        }
      ]
    }
  }

  let dataArrayPPGA = {
    chartData: {
      labels: seasonsArray,
      datasets:[
        {
          label: 'PPGA',
          data: ppgaArray,
          backgroundColor: colourArray2
        }
      ]
    }
  }


  return(
    <div className="container">
      <Bar
        data = {dataArrayTotal.chartData}

        options = {{
          title: {
          },
          legend: {
            fontSize: 25
          }
        }}
      />
      <br></br>
      <hr></hr>
      <br></br>

      <Bar
        data = {dataArrayPPGA.chartData}

        options = {{
          title: {
          },
          legend: {
            fontSize: 25
          }
        }}
      />
    </div>
  )

}

export default Chart
