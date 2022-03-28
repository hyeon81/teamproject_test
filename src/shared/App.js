import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
<<<<<<< HEAD
import {StartPage, TestPage} from '../pages/';
=======
import {StartPage, TestPage, } from '../pages/';
import ResultPage from "../pages/ResultPage";
>>>>>>> 97ce3d8a592abcb3482d6ca864ffee875e9bde1a

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<StartPage/>}/>
                    <Route path="/test" element={<TestPage/>}/>
<<<<<<< HEAD
=======
                    <Route path="/result" element={<ResultPage/>}/>
>>>>>>> 97ce3d8a592abcb3482d6ca864ffee875e9bde1a
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;