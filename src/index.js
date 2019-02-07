import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
