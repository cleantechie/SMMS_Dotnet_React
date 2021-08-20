import React from 'react';
import { useState } from 'react';
import axios from 'axios';  



function Loginpage(props) {  
    const [credential, setcredentials] = useState({ Email: '', Password: ''});  
    const apiUrl = "https://localhost:44349/api/Login";    
    
    const Login = (e) => {    
            e.preventDefault();    
           
            debugger;   
            const data = { Email:credential.Email, Password: credential.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                 
                console.log(result.data.message);  
                if (result.data.status == '200')  
                {
                    if(result.data.isAdmin=='true')
                    {
                      alert("Success");
                    props.history.push('/')  
                    }
                    else
                    {
                      alert("Success");
                    props.history.push('/Vendordashboard')
                    }
                }  
                     
                     
                else    
                alert('Invalid User');
            })        
          };    

        
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setcredentials({...credential, [e.target.name]: e.target.value});    
              }  

       return(
           <div class="login-page">
                <main>
                    <div class="login-block1">
                        <h1>Log into your account</h1>
                        <form onSubmit={Login}>
                            <div class="form-group">
                                <div class="input-group">
                                     <span class="input-group-addon"><i class="fa fa-envelope ti-email"></i></span>
                                        <input type="text" class="form-control" placeholder="Your email/username" name="Email" value={credential.Email} onChange={ onChange }/>
                                </div>
                            </div>
                            <hr class="hr-xs"/>

                            <div class="form-group">
                              <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock ti-unlock"></i></span>
                                <input type="password" class="form-control" placeholder="password" name="Password" value={credential.Password} onChange={ onChange }/>
                              </div>
                            </div>
                            <hr class="hr-xs"/>
                            <button class="btn btn-primary btn-block" type="submit" >Login</button>

                            <div class="login-footer">
                              <h6>New user? Register</h6>
                              {/* <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                              </ul> */}
                            </div>

                        </form>
                    </div>

                    {/* <div class="login-links">
                      <p class="text-center">Already have an account? <a class="txt-brand" href="user-login.html">Login</a></p>
                    </div>
                 */}
                </main>
           </div>
       );
                }

export default Loginpage;