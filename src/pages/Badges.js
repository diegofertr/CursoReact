import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import MiniLoader from '../components/MiniLoader'
import PageError from '../components/PageError'

import api from '../api'

class Badges extends React.Component {
  
  constructor (props) {
    super(props)
    // Lugar donde se inicializa los estados
    console.log('1. Constructor [inicializando estados y datos]')
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    }
  }

  componentDidMount () {
    console.log('3. Componente Did Mount!!')
    // El mejor lugar para hacer llamadas a APIS
    // Aquí se tiene la seguridad de que nuestros datos estan listos para recibirlos

    this.fetchData()

    // simulando data en tiempo real
    // this.intervalId = setInterval(this.fetchData, 5000)

    // this.timeoutId = setTimeout(() => {
    //   this.setState({
    //     data: 'some data',
    //   })
    // }, 3000)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.list()
      this.setState({
        loading: false,
        data: data
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. Component Did Update!!')
    console.log({
      prevProps,
      prevState
    })

    console.log({
      props: this.props,
      state: this.state
    })
  }

  componentWillUnmount() {
    // Antes de que el componente salga de escena
    console.log('6. Component Badges Will Unmount!!');
    // clearTimeout(this.timeoutId)
    // clearInterval(this.intervalId)
  }

  render () {
    console.log('2/4. Render Badges!')
    if (this.state.loading && !this.state.data) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              { this.state.loading && <MiniLoader />}
              <BadgesList badges={this.state.data} />
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Badges