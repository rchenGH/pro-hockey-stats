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
      user: null
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

  isSignedIn(){
    return !!this.state.user
  }

  signOut(){
    localStorage.clear()
    this.setState({
      user: null
    })
  }



  render(){
    return(
      <Router>
        <div className="App" style={{backgroundColor: "rgba(59,59,59,1)", paddingTop:'5px', marginTop:'-50px', width: '100vw'}}>
          <Navigation user={this.state.user} onSignOut={this.signOut} isSignedIn={this.isSignedIn()}/>


            <Switch>

              <AuthRoute
                isAuthenticated={this.isSignedIn()}
                path='/players/:id'
                component={PlayerShowPage}/>
              <AuthRoute
                isAuthenticated={this.isSignedIn()}
                path='/players'
                component={PlayersIndexPage}
              />
              <Route
                path="/sign_in"
                render={props => <SignInPage{...props} onSignIn={this.signIn}/>}
                component={SignInPage}
              />
            </Switch>

        </div>
      </Router>
    )
  }

}



export default App;
