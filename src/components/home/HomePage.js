import React, {Component} from 'react';
import homepagestyle from './homepage.css'
import HockeyBackground from '../background/Background'
import {Player} from '../../lib/requests'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      seasons: []
    };
  }

  componentDidMount(){
   Player
    .getAll()

    .then(data =>{this.setState({players:data})})
  }
  render(){

    // let idPointsArr = [[],[]]
    let idPointObj = {
      'id':[],
      'points': [],
      'first_name':[],
      'last_name':[]
    }

    // top 10 list
    for(let i=0; i<this.state.players.length; i++){
      idPointObj['first_name'].push(this.state.players[i].first_name)
      idPointObj['last_name'].push(this.state.players[i].last_name)

      for(let j=0; j<this.state.players[i].seasons.length; j++){
      }
      idPointObj['id'].push(this.state.players[i].seasons[0].id)
      idPointObj['points'].push(this.state.players[i].seasons[0].pts)
    }

    let idPointsWithIndex = [];
    for (let i in idPointObj.points){
      idPointsWithIndex.push([idPointObj.points[i], idPointObj.first_name[i], idPointObj.last_name[i], idPointObj.id[i] ,i])
    }

    let sortedStats = (idPointsWithIndex.sort().reverse())

    let sortedFirst = []
    let sortedLast = []

    for(let i =0; i<sortedStats.length-40; i++){
       sortedFirst.push(sortedStats[i][1]);
       sortedLast.push(sortedStats[i][2]);
    }

    let limitedStats = []

    for(let i=0; i<sortedStats.length-40; i++){
      limitedStats.push(sortedStats[i])
    }



    return(
      <div className='container-fluid top-10-container'>
      <div className='home row top-10-row'>
        <div className='col-md-12'>
          <div className="top-10-header-div">
            <p className="top-10-header">TOP 10 CURRENT PLAYERS</p>
          </div>

          {limitedStats.map(function(limited, i){
              return(
              <Card body obj={limited} key={i} id='top-10-card' id="top-10-card">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <CardTitle className="top-10-name">{limited[1]} {limited[2]}</CardTitle>
                    </div>
                    <div className="col-md-6">
                      <CardTitle className="top-10-points">{limited[0]} POINTS</CardTitle>
                    </div>
                  </div>
                </div>

              </Card>
            )
          })}


        </div>


      </div>

    </div>


    )
  }


}

export default HomePage
