import React from 'react';
// Estilos
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
// Componentes
import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = { 
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    } 
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render () {
    return (
      <div>
        <NavBar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={ header } alt="LogoHero" />
        </div>

        <div>
          <div className="row">
            <div className="col-6">
              <Badge 
                avatarUrl="https://pbs.twimg.com/profile_images/907087687944949760/hVF_2ygD_400x400.jpg"
                firstName={ this.state.form.firstName }
                lastName={ this.state.form.lastName }
                jobTitle={ this.state.form.jobTitle }
                email={ this.state.form.email }
                twitter={ this.state.form.twitter } />
            </div>
            <div className="col-6">
              <BadgeForm 
                onChange={ this.handleChange }
                formValues={ this.state.form } />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;