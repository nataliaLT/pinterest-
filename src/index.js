import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faCoffee)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
