import React, {Component} from 'react';
import {Button, ButtonToolbar, Table} from 'react-bootstrap';
import { Editcart } from './Editcart';
import { Vendornavigation } from './Vendornavigation';





export class Mycart extends Component{
    constructor(props){
        super(props);
        this.state={cart:[],editcart:false,cartTotal:0}
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
        console.log(Id);
        if(window.confirm('Are you sure you want to delete the item')) //for del from cart
        {
            fetch('https://localhost:44349/api/cart/'+Id,{
                method:'DELETE',
                header:{'Accept':'application/json',
                     'Content-Type':'application/json'
            }
            })
        }
    }

    
    refreshList()
    {
        fetch('https://localhost:44349/api/cart') //for cartitems
        .then(response =>response.json())
        .then(data =>
                {

                  this.setState({cart:data});
                }
            );
    }

    calCartTotal()
    {
        fetch('https://localhost:44349/api/paydone',{ //to cartTotal
                    method:'GET',
                    header:{'Accept':'application/json',
                         'Content-Type':'application/json'
                }
                })
                .then(response => response.json())
                .then(data =>
                    {
                      this.setState({cartTotal:data});
                    },
                (error)=>
                {
                    console.log("failed")
                }

                )

        
    }

    emptyCart()
    {
        if(window.confirm('Pay the total Amount')) //for del from cart
        {
            fetch('https://localhost:44349/api/paydone',{
                method:'DELETE',
                header:{'Accept':'application/json',
                     'Content-Type':'application/json'
            }
            })
        }
    }

    render()
    {
        const {cart,Id,Name,Category,Price,Quantity,TotalPrice,cartTotal} = this.state
        
        let editcartClose
         = () =>this.setState({editcart:false})
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
                         

                         
                        
                        
                    
                </tbody>
                
                {"\n"}
                        
                        <Button className="ml-1" onClick={this.calCartTotal()}>
                            Total Amount=₹{cartTotal}
                        </Button>


                {"\n"} {"\n"} {"\n"}
            
                <Button className="ml-1" onClick={()=>this.emptyCart()}>
                            Pay=₹{cartTotal}
                </Button>

            </Table>

            </div>

            

         
        )
           

    }
    
}

