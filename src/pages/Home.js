import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'
import astronauts from '../images/astronauts.svg'
import logo from '../images/platziconf-logo.svg'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="Home__hero">
            <div className="Home__hero-description">
              <img src={logo} alt="Logo"/>
              <div>
                <h1>PRINT YOUR BADGES</h1>
                <p>The easiest way to manage your <br/> conference</p>
                <Link to="/badges" className="btn btn-primary">Start now</Link>
              </div>
            </div>
            <div className="Home__hero-image">
              <img src={astronauts} alt="Astronauts"/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home