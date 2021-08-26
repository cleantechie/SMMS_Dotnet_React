import React, {Component} from 'react';
import { Adminavigation } from './Adminnavigation';



export class Home extends Component{
    
    

    render()
    {

    
        return(
            <div>
                <Adminavigation/>
                
            <div className="mt-5 d-flex justify-content-left">
                <h3>
                    Welcome to Supermarket Management System!
                    This is Home page
                </h3>
            </div>
            </div>

        )
        
    };
    
}

export default Home
