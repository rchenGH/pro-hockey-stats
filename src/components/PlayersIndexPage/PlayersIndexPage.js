import React, {Component} from 'react';
import {Player} from '../../lib/requests'
import PlayersList from '../PlayersList/PlayersList';
import playerindexstyle from './playerindex.css'

class PlayersIndexPage extends Component{
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
      return (
        <div className="PlayersIndexPage container">
          <PlayersList players={this.state.players} />

        </div>
      )
    }

}

export default PlayersIndexPage
