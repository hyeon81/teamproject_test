import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {StartPage, TestPage} from '../pages/';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<StartPage/>}/>
                    <Route path="/test" element={<TestPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;