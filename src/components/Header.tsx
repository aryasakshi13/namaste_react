import { LOGO_URL } from "../utills/constants";
import { useState,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
import UserContext from "../utills/UserContext";
const Header = () =>{
    const [button, setbutton] = useState("login" );

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log("Header render");
    // if no dependency array - useEffect is call on every render
    // if dependency array is Empty [] - useEffect is call on initial render and just once when the component is render at the first time   
    // if dependency array is not empty - only render when the dependency changes (dependenc- b)  
    // useEffect(()=>{
    //   console.log("useEffet called");
          
    // },[button]);
    //    logo-container
    return(
        <div className ="Header flex flex-row justify-between gap-3 z-10 shadow-lg mb-10">
            <div className = "logo-container w-[6rem]">
               <img className = "logo" src={LOGO_URL}/>
            </div>
            <div className="nav-item">
             <ul className="flex gap-7 pt-10 pr-20 ">
                <li className=" hover:text-orange-500 transition cursor-pointer">
                    Online Status: {onlineStatus ? "✅": "🔴"}
                </li>
                <li className="hover:text-orange-500 transition cursor-pointer">
                  <Link to = "/">House
                  </Link>  </li>
                <li className="hover:text-orange-500 transition cursor-pointer">
                   <Link to = "/about"> about</Link></li>
                <li className="hover:text-orange-500 transition cursor-pointer">
                   <Link to = "/grocery"> Grocery</Link></li>
                

                <li className="hover:text-orange-500 transition cursor-pointer">
                  <Link to= "/contact">Contact Us  </Link> </li> 
                <li className="hover:text-orange-500 transition cursor-pointer">Cart</li>
                <button className="login-btn hover:text-orange-500 transition cursor-pointer" 
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