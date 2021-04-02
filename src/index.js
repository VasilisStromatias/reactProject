import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignatureCocktailPage from './pages/SignatureCocktailPage';
import ContactUsPage from './pages/ContactUsPage';
import PageNotFound from './pages/PageNotFound';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import Test from './pages/Test';
import FoodMenuPage from './pages/FoodMenuPage';

ReactDOM.render(
  <Router>
    
    <NavBar />
    
    <Route path="/" component= {HomePage} exact/>
    <Route path="/signature-cocktail" component= {SignatureCocktailPage} />
    <Route path="/food-menu" component= {FoodMenuPage} />
    <Route path="/contact" component= {ContactUsPage} />

    <Footer />

    <Route path="/error" component= {PageNotFound} />

    <Route path="/test" component= {Test} />

  </Router>


  ,document.getElementById('root')
);

