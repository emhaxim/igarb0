import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './styles/whole.css'
import App from './App';
import '@coreui/coreui/dist/css/coreui.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKItogtwesSMJO9Zi5uYZO5j_zEGXDW24&libraries=places&callback=initMap"async></script>

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


