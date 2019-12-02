import React from 'react'
import './styles/BadgesList.css'

class BadgesList extends React.Component {
  render () {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          { this.props.badges.map((badge) => {
            return (
              <li key={ badge.id }>
                <div className="BadgesList__item">
                  <img className="BadgesList__item-avatar" src={ badge.avatarUrl } alt="UserAvatar"/>
                  <div className="BadgesList__item-info">
                    <p>{ badge.firstName } { badge.lastName }</p>
                    <p>{ badge.jobTitle }</p>
                  </div>
                </div>
              </li>
            )
          }) }
        </ul>
      </div>
    )
  }
}

export default BadgesList