import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utills/constants";
import RestaurantMenu from "./RestaurantMenu";
type RestaurantCardProps = {
   resData: any;
    
  };
const RestaurentCard = (props:RestaurantCardProps) => {
  const navigate = useNavigate();
    //  const {resData} = props;
    //  console.log("rest data:",resList)
    // console.log("props",props)
    const { name, cuisines, avgRating, costForTwo, sla,cloudinaryImageId,id } =
        props.resData.info;
      //  const { name, id, cusinines, rating, cloudinaryImageId } =
      //  props.resData.info;


    // console.log(props);
  return(
    <div  onClick={() => navigate(`/restaurant/${props.resData.info.id}`)} className="res-card w-56 border p-1 rounded-md bg-gray-50 hover:bg-gray-200">
            <img className="res-logo rounded-md" 
            alt = "res-logo"
            src ={CDN_URL +cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} star</h3>
             <h3>{costForTwo}</h3>
            <h3>{sla.deliveryTime} minutes</h3> 
            
        {/* <h3>{props.resData.info.cuisines}</h3>
        <h3>{props.resData.info.avgRating}</h3>
        <h3>{props.resData.info.costForTwo }</h3> */}
        </div>
        
  );
};
export default RestaurentCard;