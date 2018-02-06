import React, {Component} from 'react';

import {PlayerDetails} from './PlayerDetails';


class PlayerIndexPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      players:[]
    };
  }``

  componentDidMount(){

  }

  render(){
    const {loading} = this.state


      return (
        <PlayerIndexPage/>
      )
    }

}
