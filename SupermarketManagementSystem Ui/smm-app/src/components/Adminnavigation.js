import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';


export class Adminavigation extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg"className="block nav" >
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>

                   <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/home">Home</NavLink>

                   <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/Registration">Register a new Vendor</NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/Admindashboard">Admindashboard</NavLink>
                   
                   <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/Invoice">Invoice History</NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/Vendordetails">Vendor Details</NavLink>

                </Nav>

                </Navbar.Collapse>

                

                 <div className="navbar-right">
                     <NavLink className="justify-content-end" style={{width:"100%"}} to="/">Logout</NavLink>
                 </div>
                 

            </Navbar>
        )

    }
    
    
}