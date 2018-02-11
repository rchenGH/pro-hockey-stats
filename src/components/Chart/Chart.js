import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Table } from 'reactstrap';
import {Bar, Line, Pie} from 'react-chartjs-2';


function Chart (props) {
  const {seasons =[]} = props;
  const {points_per_82} = props

  let seasonsArray = [];
  let pointsArray = [];
  let colourArray1 = [];
  let colourArray2 = [];
  // let totalPoints = 0;
  // let totalGames = 0;

  let ppgaArray = [];

  for(let i=0; i<seasons.length; i++){
    pointsArray.push(seasons[i].pts)
  }

  for(let i=0; i<seasons.length; i++){
    seasonsArray.push(seasons[i].season)
    // console.log(seasons[i].season)
  }

  for(let i=0; i<seasons.length; i++){
    colourArray1.push('rgba(240,180,80,0.7)')
  }

  for(let i=0; i<seasons.length; i++){
    colourArray2.push('rgba(180, 120, 50, 0.7)')
  }

// rgba(200, 59, 59, 0.5)

for(let i=0; i<seasons.length; i++){
  ppgaArray.push((seasons[i].pts)/(seasons[i].gp))
}

console.log(points_per_82)


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
