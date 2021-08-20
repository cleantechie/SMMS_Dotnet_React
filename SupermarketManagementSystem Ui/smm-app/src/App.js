import './App.css';
import { Home } from './components/home';
import{Vendordashboard} from './components/Vendordashboard';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {Mycart} from './components/Mycart';
import {Registration} from './components/Registration';
import Loginpage from './components/Loginpage';
import { Admindashboard } from './components/Admindashboard';
import { Invoice } from './components/Invoice';
import { Vendordetails } from './components/Vendordetails';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="row block justify-content-center">Supermarket Management System</h3>
      
      
      <Switch>
        <Route path='/' component={Loginpage} exact/>
        <Route path='/home' component={Home}/>
        <Route path='/vendordashboard' component={Vendordashboard}/>
        <Route path='/mycart' component={Mycart}/>
        <Route path = '/registration' component = {Registration}/>
        <Route path = '/loginpage' component = {Loginpage}/>
        <Route path='/admindashboard' component={Admindashboard}/>
        <Route path='/invoice' component={Invoice}/>
        <Route path='/vendordetails' component={Vendordetails}/>
        
      
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
