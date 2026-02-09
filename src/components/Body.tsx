import RestaurentCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";
import useOnlineStatus from "../utills/useOnlineStatus";

const Body = () =>{
  // local State variable - Super powerfull variable 
   const [ListofRestaurant,setListofRestaurant] = useState<any[]>([]);
   const[filteredRestaurant,setfilteredRestaurant] = useState<any[]>([]);

   const [Searchtext, setSearchtext] = useState("")
   
  //  Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
    console.log("body re-render")
   useEffect(()=>{
    fetchData();
   }, []);

   const fetchData = async() => {
      const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json()
      console.log("Restaurant data", json);
      const restaurants =
         json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      
      setListofRestaurant(restaurants);
      setfilteredRestaurant(restaurants);
   };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
      return(
       <h1>
          Looks you're offline!! Please check your internet connection ;
       </h1>
    );
      // Loader Screen
      // Shimmer UI : fake card is showing till the data is loaded
  //  console.log("body rendeer")
    return ListofRestaurant.length === 0 ?(
      <Shimmer/>
    ) : (
    <div className ="body-container">
        <div className = "filter flex gap-6 justify-center">
         <div className="search">
          <input type="text" className="search-box mr-4 border border-orange-400 rounded-md" value={Searchtext} onChange={(e) =>{
              setSearchtext(e.target.value);
          }}/>
          <button className="bg-orange-400 rounded-md pl-2 pr-2" onClick={() =>{ 
            console.log(Searchtext);

            const filteredList = ListofRestaurant.filter((res) =>
                 res.info.name.toLowerCase().includes(Searchtext.toLowerCase())
            );
            console.log(filteredList)
            setfilteredRestaurant(filteredList);
            console.log(filteredList);
   
           
          }}>search</button>
         </div>
       
         <button className="filter-btn rounded pl-2 pr-2 bg-orange-400" onClick={() => {
          const ListofRest = ListofRestaurant.filter((res)=> res?.info?.avgRating > 4.2);
          console.log(ListofRest);
           setListofRestaurant(ListofRest);
        }}>
         Top Rated Restaurant
         </button>
        </div> 
        <div className="res-Container pl-8 pt-6 flex flex-wrap gap-6 ">
            {/* Keys help React identify which items have changed, are added, 
            or are removed.Keys should be given to the elements inside the array 
             to give the elements a stable identity*/}
             {/* would use IDs from our data as keys: When we don’t have stable IDs for rendered items, 
             we may use the item index as a key as a last resort:
               */}    
            {filteredRestaurant.map((res)=>(
                <RestaurentCard
                key ={res?.info?.id} 
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