import React from 'react';
import ReactDOM from 'react-dom';

// Importacion de estilos
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

// Importacion de componentes
import Badges from './pages/Badges';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <Badges />,
  container
);
