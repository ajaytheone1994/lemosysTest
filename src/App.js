import React from 'react';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/AboutUs';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
 
 export default function App() {
   return (
      <>
      <Router>
        {/* <Navbar/> */}
        <Header/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
     
       
          <Redirect to="/"/>
       </Switch>
       <Footer/>
       </Router>
      </>
   )
 }
 