import React, {Component} from 'react'
import Navigation from './navigation/Navigation'
import HockeyLogo from './logo/Logo'
import HockeyBackground from './background/Background'
import { Container, Row, Col } from 'reactstrap';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import jwtDecode from 'jwt-decode'
import AuthRoute from './AuthRoute'

// Pages
import PlayersIndexPage from './PlayersIndexPage/PlayersIndexPage'
import PlayerShowPage from './PlayerShowPage/PlayerShowPage'

import SignInPage from './SignIn/SignInPage'

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      user: {}
    }
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentWillMount(){
    this.signIn()
  }


  signIn(){
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      const payload = jwtDecode(jwt)
      this.setState({user:payload})
    }
  }

  signOut(){
    localStorage.clear()
    this.setState({user:{}})
  }

  isSignedIn(){
    console.log(!!this.state.user.id);
    return !!this.state.user.id
  }

  // renderNavBar(){
  //   return(
  //     <nav>
  //       <h3>Player Central</h3>
  //       <Link to="/">Home</Link>
  //       <Link to="/players">Players</Link>
  //       {this.isSignedIn()
  //         ? <span><span>Hello, {this.state.user.first_name}</span><button className="signout" onClick={this.signOut}>Sign Out</button></span>
  //         : <Link to="/sign_in">Sign In</Link>
  //       }
  //     </nav>
  //   );
  // }


  render(){
    return(
      <Router>
        <div className="App">
          <Navigation user={this.state.user} isSignedIn={this.isSignedIn()}/>
          <HockeyBackground/>

            <Switch>
              <AuthRoute
                isAuthenticated={this.isSignedIn()}
                path='/players/:id'
                component={PlayerShowPage}/>
              <AuthRoute
                isAuthenticated={this.isSignedIn()}
                path='/players'
                component={PlayersIndexPage}/>
              <Route
                path="/sign_in"
                render={props => <SignInPage{...props} onSignIn={this.signIn}/>}/>
            </Switch>

        </div>
      </Router>
    )
  }

}



export default App;
