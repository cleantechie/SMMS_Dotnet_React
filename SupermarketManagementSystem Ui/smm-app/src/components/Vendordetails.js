import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import { Adminavigation } from './Adminnavigation';


export class Vendordetails extends Component{
    constructor(props){
        super(props);
        this.state={getvendor:[]}
        
        
    }
    componentDidMount()
    {
        this.refreshList();
        
    }

    refreshList()
    {
        fetch('https://localhost:44349/api/vendordetails')
        .then(response =>response.json())
        .then(data =>
                {
                  this.setState({getvendor:data});
                }
            );
    }

    render()
    {
        const {getvendor} = this.state;
        
        return(
            <div>
                <Adminavigation/>
            <Table className="mt-4" stripped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>VendorId</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Phonenumber</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {getvendor.map(getvendor=>
                        <tr key={getvendor.Id}>
                            <td>{getvendor.Id}</td>
                            <td>{getvendor.FirstName}</td>
                            <td>{getvendor.LastName}</td>
                            <td>{getvendor.PhoneNumber}</td>
                            <td>{getvendor.Email}</td>
                            <td>{getvendor.Password}</td>
                            
                            <td>{getvendor.Address}</td>
                            
                        </tr>
                        )}
                    
                </tbody>

            </Table>
            </div>

        )
        
    }
}