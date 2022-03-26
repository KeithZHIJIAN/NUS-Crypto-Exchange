import * as React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import AssetsPage from './pages/AssetsPage';
import TradePage from './pages/TradePage';

import Assets from './listItems/Assets';
import Trade from './listItems/Trade';
import Pay from './listItems/Pay';
import ForYou from './listItems/ForYou';
import LearnAndEarn from './listItems/LearnAndEarn';
import Notifications from './listItems/Notifications';


class Toplevel extends React.Component {
/*     componentDidMount() {
        const test = (<React.Fragment><AssetsPage /></React.Fragment>);
        ReactDOM.render(test, document.getElementById('main'));
    } */

    render() {
        return <HomePage />
    }
}

const element = <Toplevel />;
ReactDOM.render(element, document.getElementById('contents'));