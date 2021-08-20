import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import { Adminavigation } from './Adminnavigation';


export class Invoice extends Component{
    constructor(props){
        super(props);
        this.state={invoice:[]}
        
        
    }
    componentDidMount()
    {
        this.refreshList();
        
    }

    refreshList()
    {
        fetch('https://localhost:44349/api/invoice')
        .then(response =>response.json())
        .then(data =>
                {
                  this.setState({invoice:data});
                }
            );
    }

    render()
    {
        const {invoice} = this.state;
        
        return(
            <div>
                <Adminavigation/>
            <Table className="mt-4" stripped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>InvoiceId</th>
                        <th>VendorName</th>
                        <th>Date and Time of order</th>
                        <th>Total Bill</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice.map(invoice=>
                        <tr key={invoice.Id}>
                            <td>{invoice.Id}</td>
                            <td>{invoice.VendorName}</td>
                            <td>{invoice.PaymentDateTime}</td>
                            <td>{invoice.Amount}</td>
                            
                        </tr>
                        )}
                    
                </tbody>

            </Table>
            </div>

        )
        
    }
}