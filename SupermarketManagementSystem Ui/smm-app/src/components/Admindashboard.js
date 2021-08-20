import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {AddProduct} from './AddProduct.js';
import { EditProduct } from './EditProduct.js';
import { Adminavigation } from './Adminnavigation';
    

export class Admindashboard extends Component{

    constructor (props){
        super(props);
        this.state={prd:[], addModalShow: false,editproduct:false}
    }

    componentDidMount(){
        this.refreshList();
        
    }

    componentDidUpdate(){
        this.refreshList();
        
    }

    refreshList(){
         fetch('https://localhost:44349/api/admin')
         .then(response=> response.json())
         .then(data => {
             this.setState({prd:data});
         })
        };
        deleteProduct(Id){
            console.log(Id)
        
            if(window.confirm('Are you sure you want to delete the item from store'))
            {
                fetch('https://localhost:44349/api/admin/'+Id,{
                    method:'DELETE',
                    header:{'Accept':'application/json',
                         'Content-Type':'application/json'
                }
                })
            }
        }
    
        

render(){
    
        const {prd,Id,Name,Category,Price}=this.state;
        let addModalClose =() => this.setState({addModalShow:false});
        let editproductClose
         = () =>this.setState({editproduct:false})
        return(
         <div>
             <Adminavigation/>
             <Table className= "mt-4" striped bordered hover size ="sm">

                 <thead>
                     <tr>
                         <th>Id</th>
                         <th>Name</th>
                         <th>Category</th>
                         <th>Price</th>
                     </tr>
                 </thead>    
                 <tbody>
                     {prd.map(prd=>
                        <tr key= {prd.Id}>
                            <td>{prd.Id}</td>
                            <td>{prd.Name}</td>
                            <td>{prd.Category}</td>
                            <td>{prd.Price}</td>
                            <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info" onClick={()=>this.setState({editproduct:true,Id:prd.Id,Name:prd.Name,Category:prd.Category,Price:prd.Price})}>
                                        Edit
                                    </Button>
                                    {'  '}
                                    <Button className="mr-2" onClick={()=>this.deleteProduct(prd.Id)} variant="danger">
                                        Delete
                                    </Button>
                                    <EditProduct show={this.state.editproduct} onHide={editproductClose} Id={Id} Name={Name} Category={Category} Price={Price}/>
                                </ButtonToolbar>
                            </td>
                        </tr>

                        )}

                 </tbody>    

            </Table> 
 <ButtonToolbar>
     <Button
     variant='primary'
     onClick={()=>this.setState({addModalShow: true})}
     >Add Product</Button>

    <AddProduct show ={this.state.addModalShow}
    onHide={addModalClose}/>

 </ButtonToolbar>
 </div>

        )
        }

    }