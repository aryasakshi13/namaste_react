import { CDN_URL } from "../utills/constants";
type RestaurantCardProps = {
   resData: any;
    
  };
const RestaurentCard = (props:RestaurantCardProps) => {
    //  const {resData} = props;
    //  console.log("rest data:",resList)
    // console.log("props",props)
    const { name, cuisines, avgRating, costForTwo, sla,cloudinaryImageId } =
        props.resData.info;
      //  const { name, id, cusinines, rating, cloudinaryImageId } =
      //  props.resData.info;


    // console.log(props);
  return(
    <div className="res-card">
            <img className="res-logo" 
            alt = "res-logo"
            src ={CDN_URL +cloudinaryImageId}/>
        <h3>{name}</h3>
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