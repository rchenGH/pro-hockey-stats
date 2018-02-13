import React, {Component} from 'react';
import homepagestyle from './homepage.css'
import HockeyBackground from '../background/Background'
import {Player} from '../../lib/requests'


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



    // to get the top points
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
      idPointsWithIndex.push([idPointObj.points[i],i])
    }

    let indexOrder = (idPointsWithIndex.sort().reverse())

    let arrayOrder = []

    for(let i=0; i<indexOrder.length; i++){
      arrayOrder.push(parseInt(indexOrder[i][1]))
    }

    console.log(arrayOrder)




    return(
      <div>
      <HockeyBackground/>
      <div className='home row'>

        {
        this.state.players.map(player => (
            <div key={player.id} {...player}>

            </div>
          ))
        }

      </div>

    </div>


    )
  }


}

export default HomePage
