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
                <img src="assets/logo.svg"></img>
            </div>
         );
    }
}
 
export default Header;