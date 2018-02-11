import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Table } from 'reactstrap';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{

  constructor(props){

    const {seasons =[]} = props


    // for(let i=0; i<seasons.length; i++){
    //   console.log(seasons)
    // }

    super(props);
    this.state = {
      chartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label: 'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              95072,
            ],
            backgroundColor: [
              'rgba(255, 99,132, 0.6)',
              'rgba(255, 99,132, 0.6)',
              'rgba(255, 99,132, 0.6)',
              'rgba(255, 99,132, 0.6)',
              'rgba(255, 99,132, 0.6)',
              'rgba(255, 99,132, 0.6)'
            ]
          }
        ]
      }
    }
  }

static defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPOsition: 'right'
}

  render(){
    return (
      <div className = "chart">
        <Bar
          data = {this.state.chartData}
          // width= {100}
          // height={50}
          options = {{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities in Massachusetts'
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              fontSize: 25
            }
          }}
        />

      </div>
    )
  }
}


export default Chart












import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Table } from 'reactstrap';


function Chart (props) {


  const {seasons =[]} = props

  console.log(seasons)

  return(
    <div className="container">

    </div>
  )

}

export default Chart
