import React,{Component} from "react";
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        return ( 
            <div className="heading-container">
                <img src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg" className="logo" alt="logo"/>
            </div>
         );
    }
}
 
export default Header;