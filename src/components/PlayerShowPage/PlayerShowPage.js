import React, {Component} from 'react';
import {Player} from '../../lib/requests'
import PlayerDetails from '../PlayerDetails/PlayerDetails'

class PlayerShowPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      player: {}
    }
  };

  componentDidMount(){
    const {params} = this.props.match;

    Player
      .get(params.id)
      .then(data => this.setState({player: data}))


  }

  render(){
    const {full_name} = this.state.player
    return (

      <div className="PlayerShowPage">
        <PlayerDetails {...this.state.player} />
      </div>
    )
  }
}

export default PlayerShowPage
