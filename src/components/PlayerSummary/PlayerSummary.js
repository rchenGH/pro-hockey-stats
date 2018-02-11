import React from 'react';
import {Link} from 'react-router-dom'
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';


import summarystyle from './playersummary.css'
import hockeyback from './hockey-vector.png'
import hockeyfront from './hockey-silhouette.png'


const PlayerSummary = (props) => {
  const {id, first_name, last_name} = props

  return (
    <div className="PlayerSummary maincontainer col-sm-12 col-md-6 col-lg-4">
      <div className="thecard">
        <Card className="thefront">
          <div className="top-head-div"></div>
          <div className="top-card-div">
            <img src={hockeyback} className="vector"/>
          </div>
            <div className="name-div">
              <Link to={`players/${props.id}`}>
                <div className="first-name">
                  {first_name.toUpperCase()}
                </div>
                <div className="last-name">
                  {last_name.toUpperCase()}
                </div>

              </Link>
            </div>
            <div className="bottom-card-div">
            </div>
        </Card>

        <Link to={`players/${id}`}>
        <Card className="theback">

          <div className="container top-back">
            <div className="row portrait-row">
              <div className="back-full-name col-sm-6 col-md-6">
                {first_name.toUpperCase()} <br></br>{last_name.toUpperCase()}
              </div>
              <div className="portrait col-md-6 col-md-6">

              </div>
            </div>

          </div>
          <div className="container bottom-back">
          </div>
        </Card>
        </Link>

      </div>





    </div>
  )


}

export default PlayerSummary
