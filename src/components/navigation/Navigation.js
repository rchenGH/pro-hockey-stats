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

    // this.signOut = this.signOut.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };


    // this.signOut = this.signOut.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,

    });
  }




  render() {
    const { user , onSignOut = () => {}} = this.props;
    return (
      <div className="nav-div">
        <Navbar light expand="md" fixed="top">
          <HockeyLogo/>
          <NavbarToggler onClick={this.toggle} className="clearfix"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-list-item">
                <NavLink href="/home" className="nav-link">HOME</NavLink>
              </NavItem>
              <NavItem className="nav-list-item">
                <NavLink href="/players" className="nav-link">PLAYERS</NavLink>
              </NavItem>
              { user
                ? <span className="wrap"><span className='greeting'>Hello, {this.props.user.first_name}</span>
                  <button className="signout" onClick={onSignOut}>SIGN OUT</button></span>
                : <NavLink to="/sign_in" className='signin'>SIGN IN</NavLink>
              }
            </Nav>
          </Collapse>

        </Navbar>

      </div>
    );
  }
}




export default Navigation
