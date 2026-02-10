import useRestaurantMenu from "../utills/useRestaurantMenu";
import ResCategories from "./ResCategories";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    // useEffect(() => {
    //     fetchMenu();
    // }, []); 


    // const fetchMenu = async () => {

        // We use a CORS Proxy to trick Swiggy into thinking the request is safe

        // const response = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`);
        //    const response = await fetch(MENU_API + resId);
        // Check if response is actually there


    //     const json = await response.json();
    //     console.log("Success! Data is here:", json.data.cards);
    //     setresInfo(json.data);
    // };
    
    type RestaurantInfo = {
  name: string;
  cuisines: string[];
  costForTwoMessage: string;
  avgRating: number;

};
    const info = resInfo?.cards[2]?.card?.card?.info as RestaurantInfo | undefined;

    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating
    } = info ?? {};

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card?.card?.itemCards;
     console.log(itemCards);
     console.log("categories check cards", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
     const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
           c.card?.card?.["@type"] === 
           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

     console.log(categories);

    if (resInfo === null) return <Shimmer />;
    return (
        <div className="text-center">
            <h2 className="font-bold my-6 text-2xl">{name}</h2>
            <p className="font-bold my-10 text-">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
            {/*  categories Accodians */}
              {categories.map((category)=> (
                <ResCategories data ={categories?.card?.card}/>
                ))}
            
            {/* <p>{avgRating}</p>
            <h2>Recomended</h2> */}
            {/* <ul>
               { itemCards?.map((item) => (
                 <li key = {item.card.info.id}>
                    {item.card.info.name}
                     
                 </li>
               ))} 
                
            </ul> */}
        </div>
    )
};

export default RestaurantMenu;