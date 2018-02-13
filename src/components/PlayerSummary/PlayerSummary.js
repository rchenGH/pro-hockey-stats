import React from 'react';
import {Link} from 'react-router-dom'
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

  import { Table } from 'reactstrap';


import summarystyle from './playersummary.css'
import hockeyback from './hockey-vector.png'
import hockeyfront from './hockey-silhouette.png'


const PlayerSummary = (props) => {
  const {id, first_name, last_name, players =[], seasons=[]} = props

  console.log(seasons[0].age)

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
            <br></br>
            <br></br>
            <Table bordered>
              <thead>
                <tr style={{width:"100px"}}>
                  <th className="table-head" id='season-head'>SEASON</th>

                  <th className='table-head goals-head'>G</th>
                  <th className="table-head assists-head">A</th>
                  <th className="table-head points-head">PTS</th>
                </tr>
              </thead>
              <tbody>
                <td className="table-data">{seasons[0].season}</td>

                <td className="table-data">{seasons[0].g}</td>
                <td className="table-data">{seasons[0].a}</td>
                <td className="table-data">{seasons[0].pts}</td>
              </tbody>
            </Table>
        </div>
        </Card>
        </Link>

      </div>





    </div>
  )


}

export default PlayerSummary
