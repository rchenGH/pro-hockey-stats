import React, {Component} from 'react';
import {SignInForm} from '../SignInForm/SignInForm'
import HockeyBackground from '../background/Background'

import {Token} from '../../lib/requests.js'
import SignInStyle from './signinpage.css'

class SignInPage extends Component {
  constructor (props){
    super(props);
    this.signInUser = this.signInUser.bind(this);
  }

  signInUser(params){
  const {onSignIn = () => {}} = this.props;
    Token
    .create(params)
    .then(data => {
      if(!data.error){
        const {jwt} = data;
        localStorage.setItem('jwt', jwt);

        onSignIn();
        this.props.history.push("/");
      }
    })
}
  render() {
    return (
      <div className="signinpage">
        <HockeyBackground/>
        <SignInForm onSubmit={this.signInUser}/>
      </div>
    )
  }

}

export default SignInPage
