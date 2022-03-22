import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {StartPage, TestPage} from '../pages/';

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={StartPage}/>
                <Route path="/test" component={TestPage}/>
            </div>
        );
    }
}

export default App;