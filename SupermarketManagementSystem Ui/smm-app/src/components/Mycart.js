import React, {Component} from 'react';
import {Button, ButtonToolbar, Table} from 'react-bootstrap';
import { Editcart } from './Editcart';



export class Mycart extends Component{
    constructor(props){
        super(props);
        this.state={cart:[],editcart:false,paydone:[]}
    }
    componentDidMount()
    {
        this.refreshList();
        
    }
    componentDidUpdate()
    {
        this.refreshList();

    }
    deleteProduct(Id){
        
        if(window.confirm('Are you sure you want to delete the item'))
        {
            fetch('https://localhost:44349/api/paydone'+Id,{
                method:'DELETE',
                header:{'Accept':'application/json',
                     'Content-Type':'application/json'
            }
            })
        }
    }

    
    refreshList()
    {
        fetch('https://localhost:44349/api/cart')
        .then(response =>response.json())
        .then(data =>
                {

                  this.setState({cart:data});
                }
            );
    }

    calCartTotal()
    {
        fetch('https://localhost:44349/api/paydone')
        .then(response =>response.json())
        .then(data =>
                {

                  this.setState({paydone:data});
                }
            );
        
    }

    render()
    {
        const {cart,Id,Name,Category,Price,Quantity,TotalPrice,paydone} = this.state
        
        let editcartClose
         = () =>this.setState({editcart:false})
        return(
            <Table className="mt-4" stripped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>TotalPrice</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(cart=>
                        <tr key={cart.Id}>
                            <td>{cart.Id}</td>
                            <td>{cart.Name}</td>
                            <td>{cart.Category}</td>
                            <td>{cart.Price}</td>
                            <td>{cart.Quantity}</td>
                            <td>{cart.TotalPrice}</td>
                            <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info" onClick={()=>this.setState({editcart:true,Id:cart.Id,Name:cart.Name,Category:cart.Category,Price:cart.Price,Quantity:cart.Quantity,TotalPrice:cart.TotalPrice})}>
                                        Edit
                                    </Button>
                                    {'  '}
                                    <Button className="mr-2" onClick={()=>this.deleteProduct(cart.Id)} variant="danger">
                                        Delete
                                    </Button>
                                    <Editcart show={this.state.editcart} onHide={editcartClose} Id={Id} Name={Name} Category={Category} Price={Price} Quantity={Quantity} TotalPrice={TotalPrice}/>
                                </ButtonToolbar>
                            </td>
                        </tr>
                        
                        )}
                        
                        <Button className="mr-5" onClick={this.calCartTotal()}>
                            Cart Total
                        </Button>
                        <Button className="ml-5" onClick={this.emptyCart}>
                            Pay
                        </Button>
                    
                </tbody>

            </Table>

         
        )
           

    }
    
}

