import * as React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import {HashRouter as Router} from 'react-router-dom';
import { createHashHistory } from 'history';
import PropTypes from 'prop-types';


class Toplevel extends React.Component {
  constructor() {
      super();
  }
    
  render() {
      return (<Router><HomePage /></Router>);
  }
}

const element = <Toplevel />;
ReactDOM.render(element, document.getElementById('contents'));