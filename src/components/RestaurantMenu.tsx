import { useState } from "react";
import useRestaurantMenu from "../utills/useRestaurantMenu";
import ResCategories from "./ResCategories";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
type ItemCard = {
  card: {
    info: {
      id: string;
      name: string;
      price?: number;
    };
  };
};

type ItemCategory = {
  card: {
    card: {
      "@type": string;
      title: string;
      itemCards: ItemCard[];
    };
  };
};

type RestaurantInfo = {
        name: string;
        cuisines: string[];
        costForTwoMessage: string;
        avgRating: number;

    };

const RestaurantMenu = () => {


    const { resId } = useParams<{ resId: string }>();

    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setshowIndex] = useState(null);

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
    const categories:ItemCategory[] = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c): c is ItemCategory =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )?? [];

    console.log(categories);

    if (resInfo === null) return <Shimmer />;
    return (
        <div className="text-center">
            <h2 className="font-bold my-6 text-2xl">{name}</h2>
            <p className="font-bold my-10 text-">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
            {/*  categories Accodians */}  
            {categories.map((category, index) => (
                <ResCategories 
                key={category.card?.card.title} 
                data={category.card?.card}
                showItems = {index === showIndex ? true : false}
                setshowIndex= {() => setshowIndex(index)}
                 />
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