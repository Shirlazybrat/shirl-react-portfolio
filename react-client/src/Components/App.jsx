import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browerHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponents/NavBar';
import Footer from './FooterComponent/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="home" exact path ="/" component={HomePage} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;