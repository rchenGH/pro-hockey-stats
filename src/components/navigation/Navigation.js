import React, {Component} from 'react';
import NavStyle from './navigation.css'


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

import HockeyLogo from '../logo/Logo'


class Navigation extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,

    });
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
                <NavLink href="/players" className="nav-link">PLAYERS</NavLink>
              </NavItem>
            </Nav>
          </Collapse>

        </Navbar>

      </div>
    );
  }
}

export {Navigation}


export default Navigation
