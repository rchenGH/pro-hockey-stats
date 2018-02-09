import React, {Component} from 'react';
import NavStyle from './navigation.css'
import jwtDecode from 'jwt-decode'

import HockeyLogo from '../logo/Logo'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import SignInPage from '../SignIn/SignInPage'



class Navigation extends Component{
  constructor(props) {
    super(props);

    this.state={
      user: {}
    }

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,

    });
  }

  componentDidMount(){
  }


  signIn(){

  }

  signOut(){

  }


  render() {
    return (
      <div className="nav-div">
        <Navbar light expand="md" fixed="top">
          <HockeyLogo/>
          <NavbarToggler onClick={this.toggle} className="clearfix"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-list-item">
                <NavLink href="/" className="nav-link">HOME</NavLink>
              </NavItem>
              <NavItem className="nav-list-item">
                <NavLink href="/players" className="nav-link">PLAYERS</NavLink>
              </NavItem>
              {this.props.isSignedIn
                ? <span><span>Hello, {this.props.user.first_name}</span><button className="signout" onClick={this.signOut}>Sign Out</button></span>
                : <NavLink to="/sign_in">SIGN IN</NavLink>
              }
            </Nav>
          </Collapse>

        </Navbar>

      </div>
    );
  }
}




export default Navigation
