import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from "./views/theme"

const themedApp = <Theme><App /></Theme>
const routedApp= <Router>{themedApp}</Router>
ReactDOM.render(routedApp , document.getElementById('root'));


