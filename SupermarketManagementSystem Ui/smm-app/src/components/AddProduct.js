import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'; 

import  Snackbar  from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class AddProduct extends Component{


    constructor(props){
        super(props);
         this.state ={snackbaropen: false, snackbarmsg: ''};
         this.handleSubmit = this.handleSubmit.bind(this);   

    }

    snackbarClose = (event) => {
        this.setState({snackbaropen:false});
    };
      
    handleSubmit(event){
        event.preventDefault();
         fetch('https://localhost:44349/api/admin',{
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
                 Id:null,
                 Name: event.target.Name.value,
                 Category: event.target.Category.value,
                 Price: event.target.Price.value
             })
         })
         .then(res=>res.json())
         .then((result)=>
         {
             //alert(result);
              this.setState({snackbaropen: true, snackbarmsg:result});
                

         },
         (error)=>
         {
             //alert('Failed')
             this.setState({snackbaropen: true, snackbarmsg:'Failed'});
         }
         )
    }

    render(){
        return( 
            <div classname = "container">

<Snackbar anchorOrigin = {{vertical:'center', horizontal:'center'}}
open =  {this.state.snackbaropen}
autoHideDuration = {2000}
onClose={this.snackbarClose}

message = {<span id= "message-id">{this.state.snackbarmsg}</span>}
action ={[
    <IconButton
    key="close"
    arial-label="Close"
    color="inherit"
    onClick={this.snackbarClose}
    >
        x
    </IconButton>    
]}
/>

            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add the Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         
              <Row>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>
                       <Form.Group controlId="Id">
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                            type="text"
                            name="Id"
                            disabled   
                            placeholder="Product Id"/>
                       </Form.Group>

                       <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="Name"
                            required    
                            placeholder="Product Name"/>
                       </Form.Group>

                       <Form.Group controlId="Category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="Category"
                            required    
                            placeholder="Product Category"/>
                       </Form.Group>

                       <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            name="Price"
                            required    
                            placeholder="Product Price"/>
                       </Form.Group>

                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Add Product
                            </Button>    

                        </Form.Group>

                      </Form>    
                    </Col>
            </Row>

         

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
        );
    }
}

