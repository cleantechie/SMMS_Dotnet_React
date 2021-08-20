import React,{Component} from 'react';

import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';


export class Registration extends Component{
    constructor(props)
    {
        super(props);
 
        this.state={snackbaropen: false, snackbarmsg: ''};
        this.handleSubmit= this.handleSubmit.bind(this);
    }
      snackbarClose=(event)=>{
        this.setState({snackbaropen: false});
      };
     handleSubmit(event)
     {
       event.preventDefault();
       fetch('https://localhost:44349/api/registration',{
         method:'POST',
         headers:{
           'Accept':'application/json',
           'Content-Type':'application/json'
         },
         body:JSON.stringify({
          
            Id :null,
            FirstName:event.target.FirstName.value,
            LastName :event.target.LastName.value,
            PhoneNumber : event.target.PhoneNumber.value,
            Email : event.target.Email.value,
            Password :event.target.Password.value,
            ConfirmPassword : event.target.ConfirmPassword.value,
            Address : event.target.Address.value
            
         })
       })
 .then(res=>res.json())
 .then((result)=>
 {
   //  alert(result);
   this.setState({snackbaropen: true, snackbarmsg:result});
 },
 (error)=>
 {
   // alert("failed");
   this.setState({snackbaropen: true, snackbarmsg:'failed'});
 }
 )
     }

   render()
   {
       return(
         <div className="container"> 

                <Snackbar anchorOrigin={{vertical:'bottom',horizontal:'center'}}
                open={this.state.snackbaropen}
                autoHideDuration={3000}
                onClose={this.snackbarClose}
                message={<span id="message-id">{this.state.snackbarmsg}</span>}
                action={[
                <IconButton key="close" arial-label="Close" color="inherit"
                onClick={this.snackbarClose}
                > x</IconButton>
                ]}
                /> 
            <div class="page-wrapper">
           	<div class="wrapper wrapper--w790">
            <div class="card card-5">
                <div class="card-heading">
                    
                	{/* <img src="h.gif" style="height:40px; width:40px; margin-left:45%; margin-top:15px"></img> */}
                    <h2 class="title">New Vendor Registration Form</h2>
                </div>
                <div class="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-row ">
                        <div class="form-row">
                            <div class="name">FirstName</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text"  name="FirstName"/>
                                </div>
                            </div>
                        </div>
                        </div>
                            


                        <div class="form-row">
                            <div class="name">LastName</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text"  name="LastName"/>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="name">PhoneNumber</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text"  name="PhoneNumber"/>
                                </div>
                            </div>
                        </div>


                         <div class="form-row">
                            <div class="name">Email</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="email" name="Email"/>
                                </div>
                            </div>
                        </div> 

                        <div class="form-row">
                            <div class="name">Password</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="password" name="Password"/>
                                </div>
                            </div>
                        </div> 
                        
                         <div class="form-row">
                            <div class="name">Confirm Password</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="password" name="ConfirmPassword"/>
                                </div>
                            </div>
                        </div> 

                        <div class="form-row">
                            <div class="name">Address</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text"  name="Address"/>
                                </div>
                            </div>
                        </div> 
                            <span> </span>
                            <div class="ab">
                            <button class="btn1 btn--radius-2 btn--red" type="submit">Register</button>
                            </div>
                        
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>

  
  
       );
   }


}