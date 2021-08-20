import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';


export class Vendornavigation extends Component{
    render(){
        return(
            
            <Navbar bg="dark" expand="lg"className="block nav" >
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>

                   <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/home">Home</NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/Vendordashboard">Vendordashboard</NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/Mycart">Mycart</NavLink>

                   
    

                </Nav>

                </Navbar.Collapse>
                 <div className="navbar-right">
                     <NavLink className="justify-content-end" style={{width:"100%"}} to="/">Logout</NavLink>
                 </div>

            </Navbar>
        )

    }
    
    
}