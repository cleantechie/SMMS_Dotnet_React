import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form  } from "react-bootstrap";
import Snackbar from '@material-ui/core/Snackbar';
import  IconButton  from '@material-ui/core/IconButton';

export class Editcart extends Component{
    constructor(props){
        super(props);
        this.state={snackbaropen:false,snackbarmsg:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose=(event)=>{
        this.setState({snackbaropen:false});

    };
    
    handleSubmit(event)
    {
        event.preventDefault();
        fetch('https://localhost:44349/api/cart',{
                method:'PUT',
                    headers:{'Accept':'application/json',
                'Content-Type':'application/json'
                },
            body:JSON.stringify({
                Id:event.target.Id.value,
                Name:event.target.Name.value,
                Category:event.target.Category.value,
                Quantity:event.target.Quantity.value,
                Price:event.target.Price.value,
                TotalPrice:event.target.TotalPrice.value
            })
         })
        .then(res=>res.json())
        .then((result)=>{this.setState({snackbaropen:true,snackbarmsg:result})},
        (error)=>{this.setState({snackbaropen:true,snackbarmsg:'failed'})})
    }

    render(){
        return(
            <div className="container">
                <Snackbar
                anchorOrigin={{vertical:'bottom',horizontal:'center'}}
                open={this.state.snackbaropen}
                autoHideDuration={5000}
                message = {<span id ="message-id">{this.state.snackbarmsg}</span>}
                action = {
                    [
                        <IconButton key="close" arial-label="Close" color="inherit" onClick={this.snackbarClose}>
                            X
                        </IconButton>
                    ]
                }
                />
                <Modal 
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    <Modal.Header closeButton>
                        <Modal.Title id = "contained-modal-title-vcenter">
                            Edit Product
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Id">
                                        <Form.Control type="text" name="Id" required disabled defaultValue={this.props.Id} placeholder="Id"/>
                                    </Form.Group>

                                    <Form.Group controlId="Name">
                                        <Form.Control type="text" name="Name" required disabled defaultValue={this.props.Name} placeholder="Name"/>
                                    </Form.Group>

                                    <Form.Group controlId="Category">
                                        <Form.Control type="text" name="Category" required disabled defaultValue={this.props.Category} placeholder="Category"/>
                                    </Form.Group>

                                    <Form.Group controlId="Quantity">
                                        <Form.Control type="text" name="Quantity" required defaultValue={this.props.Quantity} placeholder="Quantity"/>
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Control type="text" name="Price" required disabled defaultValue={this.props.Price} placeholder="Price"/>
                                    </Form.Group>

                                    <Form.Group controlId="TotalPrice">
                                        <Form.Control type="text" name="TotalPrice" required disabled defaultValue={this.props.TotalPrice} placeholder="TotalPrice"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Product
                                        </Button>
                                    </Form.Group>


                                

                                    
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>


                </Modal>
            </div>



        )
    }
    
    
}