import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { Vendornavigation } from './Vendornavigation';

export class Vendordashboard extends Component{
    constructor(props){
        super(props);
        this.state={vend:[]}
        
        
    }
    componentDidMount()
    {
        this.refreshList();
        
    }

    refreshList()
    {
        fetch('https://localhost:44349/api/vendordashboard')
        .then(response =>response.json())
        .then(data =>
                {
                  this.setState({vend:data});
                }
            );
    }

    handleSubmit(Id){
        
        fetch('https://localhost:44349/api/vendordashboard/'+Id,{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            
        })
        .then((response)=>response.json())
        .then((data)=>{
            alert(data);
        },
        (error)=>{alert('failed')}
        )
        

    };

    render()
    {
        const {vend} = this.state;
        
        return(
            <div>
                <Vendornavigation/>
            <Table className="mt-4" stripped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {vend.map(vend=>
                        <tr key={vend.Id}>
                            <td>{vend.Id}</td>
                            <td>{vend.Name}</td>
                            <td>{vend.Category}</td>
                            <td>{vend.Price}</td>
                            <td>
                                    <Button className="mr-2" onClick={()=>this.handleSubmit(vend.Id)} variant="info">
                                        Add to cart
                                    </Button>
                            </td>
                        </tr>
                        )}
                    
                </tbody>

            </Table>
            </div>
        )
        
    }
    }
