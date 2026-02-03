import { LOGO_URL } from "../utills/constants";
import { useState,useEffect } from "react";
const Header = () =>{
    const [button, setbutton] = useState("login");
    console.log("Header render");
    // if no dependency array - useEffect is call on every render
    // if dependency array is Empty [] - useEffect is call on initial render and just once when the component is render at the first time   
    // if dependency array is not empty - only render when the dependency changes (dependenc- b)  
    useEffect(()=>{
      console.log("useEffet called");
          
    },[button]);
       
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