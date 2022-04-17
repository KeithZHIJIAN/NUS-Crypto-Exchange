import * as React from 'react';
import Assets from './Assets';
import Trade from './Trade';
import Blog from './Blog';

export default class MainListItems extends React.Component {
    constructor() {
        super();
    }
    
    render() {
      return (
        <React.Fragment>
          <Assets/>
          <Trade/>
          <Blog/>
        </React.Fragment>
      )
    }
};