import React, {Component} from 'react';
import {Player} from '../../lib/requests'
import PlayersList from '../PlayersList/PlayersList';


class PlayersIndexPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      players:[]
    };
  }

  componentDidMount(){
   Player
    .getAll()
    .then(data => {this.setState({players:data})})
  }

  render(){
      return (
        <div className="PlayersIndexPage">
          <PlayersList players={this.state.players} />
        </div>
      )
    }

}

export default PlayersIndexPage
