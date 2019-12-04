import React from "react";

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar'

class Badge extends React.Component {
  render () {
    const {
      avatarUrl,
      firstName,
      lastName,
      jobTitle,
      twitter,
      email
    } = this.props;

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={ confLogo } alt="Logo de la conferencia"></img>
        </div>

        <div className="Badge__section-name">
          {/* <img className="Badge__avatar" src={ avatarUrl } alt="Avatar usuario"></img> */}
          <Gravatar 
            className='Badge__avatar' 
            email={ email } />
          <h1>{ firstName } <br/> { lastName }</h1>
        </div>

        <div className="Badge__section-info">
          <h4>{ jobTitle }</h4>
          <div>@{ twitter }</div>
        </div>

        <div className="Badge__footer">#platziConf</div>
      </div>
    )
  }
}

export default Badge;