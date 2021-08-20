import './App.css';
import { Home } from './components/home';
import{Vendordashboard} from './components/Vendordashboard';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Navigation} from './components/Navigation';
import {Mycart} from './components/Mycart';
import {Registration} from './components/Registration';
import Loginpage from './components/Loginpage';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="row block justify-content-center">Supermarket Management System</h3>
      
      <Navigation/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/vendordashboard' component={Vendordashboard}/>
        <Route path='/mycart' component={Mycart}/>
        <Route path = '/registration' component = {Registration}/>
        <Route path = '/Loginpage' component = {Loginpage}/>
      
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
