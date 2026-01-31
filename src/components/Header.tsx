import { LOGO_URL } from "../utills/constants";
import { useState } from "react";
const Header = () =>{

    const [button, setbutton] = useState("login");
    return(
        <div className ="Header">
            <div className = "logo-container">
               <img className = "logo" src={LOGO_URL}/>
            </div>
            <div className="nav-item">
             <ul>
                <li>Home</li>
                <li>about</li>
                <li>COntact Us </li>
                <li>Cart</li>
                <button className="login-btn" 
                 onClick={()=> {
                    button === "login"
                    ? setbutton("logout")
                    : setbutton("login");
                }}>
                 {button}
                 </button>
             </ul>
            </div>

        </div> 
    )
}
export default Header;