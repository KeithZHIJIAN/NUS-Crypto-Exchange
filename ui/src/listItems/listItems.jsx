import * as React from 'react';
import Assets from './Assets';
import Trade from './Trade';
import Pay from './Pay';
import ForYou from './ForYou';
import LearnAndEarn from './LearnAndEarn';
import Login from './Login';
import Register from './Register';
import Notifications from './Notifications';

export default class MainListItems extends React.Component {
    constructor() {
        super();
    }
    
    render() {
      return (
        <React.Fragment>
          <Assets/>
          <Trade/>
          <Pay />
          <ForYou />
          <LearnAndEarn />
          <Notifications />
          <Login />
          <Register />
        </React.Fragment>
      )
    }
};