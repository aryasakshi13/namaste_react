import { LOGO_URL } from "../utills/constants";
const Header = () =>{
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
             </ul>
            </div>

        </div>
    )
}
export default Header;