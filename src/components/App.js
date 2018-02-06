import React, {Component} from 'react'
import Navigation from './navigation/Navigation'
import HockeyLogo from './logo/Logo'
import HockeyBackground from './background/Background'
import { Container, Row, Col } from 'reactstrap';


class App extends Component{
  constructor(props){
    super(props);

    this.state={

    }
  }


  render(){
    return(
      <div>
        <Navigation/>
        <HockeyBackground/>
      </div>
    )


  }

}

export default App;
