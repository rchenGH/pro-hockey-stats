import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';
import footerstyle from './footer.css'

class Footer extends React.Component {

  render(){
    return(
      <div className="footer-nav fixed-bottom">
        <div className =" site-info">
          <div className="copyright-column">PRO HOCKEY STATS</div>
          <div className="author-column">
            By Raymond Chen. Built at &nbsp;
            <a href="https://codecore.ca/">
             CodeCore
          </a>
          </div>
        </div>

      </div>
    )
  }


}

export default Footer
