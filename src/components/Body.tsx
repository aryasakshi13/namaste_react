import RestaurentCard from "./RestaurantCard";
import resList from "../utills/mockData";
import { useState } from "react";
const Body = () =>{
  const restaurants = resList[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   const [ListofRestaurant,setListofRestaurant] = useState(restaurants)
    // const restaurants = resList[0].card.card.gridElements.infoWithStyle.restaurants;
    return(
    <div className ="body-container">
        <div className = "search-bar">Search</div>
        <button className="filter-btn" onClick={() => {
          const ListofRest = ListofRestaurant.filter((res)=> res.info.avgRating < 4);
          console.log(ListofRest);
           setListofRestaurant(ListofRest);
        }}>
         Top Rated Restaurant
        </button>
        <div className="res-Container">
            {/* Keys help React identify which items have changed, are added, 
            or are removed.Keys should be given to the elements inside the array 
             to give the elements a stable identity*/}
             {/* would use IDs from your data as keys: When you don’t have stable IDs for rendered items, 
             you may use the item index as a key as a last resort:
               */}    
            {ListofRestaurant.map((res)=>(
                <RestaurentCard
                key ={res.info.id} 
                resData={res}/>
                ))}
                {/* {restaurants.map((res)=>(
                <RestaurentCard
                key ={res.info.id} 
                resData={res}/>
                ))} */}
          {/*  Hardcoded :- <RestaurentCard resData ={resList[0].card.card.gridElements.infoWithStyle.restaurants[0]}/> 
          <RestaurentCard resData ={resList[0].card.card.gridElements.infoWithStyle.restaurants[1]}/>  
          <RestaurentCard resData ={resList[0].card.card.gridElements.infoWithStyle.restaurants[2]}/> 
           */}
          
        </div>
    </div>
    );
};
export default Body;