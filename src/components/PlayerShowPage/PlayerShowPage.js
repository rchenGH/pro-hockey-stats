import React, {Component} from 'react';
import {Player} from '../../lib/requests'
import PlayerDetails from '../PlayerDetails/PlayerDetails'

class PlayerShowPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      player: {},
      seasons:{}
    }
  };

  async componentDidMount(){
    const {params} = this.props.match;
    const player = await Player.get(params.id);
    this.setState({player})
    // console.log(player.seasons[0].age)
  }




  render(){



    return (

      <div className="PlayerShowPage">
        <PlayerDetails {...this.state.player} />
      </div>
    )
  }
}

export default PlayerShowPage
