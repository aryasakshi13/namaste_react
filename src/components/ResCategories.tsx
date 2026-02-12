import {useState} from "react";
import ItemList from "./ItemList";
  
type ItemCard = {
  card: {
    info: {
      id: string;
      name: string;
      price?: number;
    };
  };
};
type ResCategoriesProps = {
  data: {
    title: string;
    itemCards: ItemCard[];
  };
    showItems: boolean;
    setshowIndex: () => void;
};
 
 const ResCategories = ({data,showItems, setshowIndex }: ResCategoriesProps) =>{
    // console.log("each categories data ",data);
//    const {title, itemCards} = data;
//    const [showItems, setshowItems] = useState(false);
      const handleClick = () => {
        setshowIndex(); 
      };
   return (
    <div>
        {/* Header */}
        <div className="w-6/12 bg-gray-50 shadow-lg padding-lg p-4 mx-auto my-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span  className="font-bold text-sm">
                {data.title}({data.itemCards.length})
            </span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList items ={data.itemCards}/>}
        </div>
      
        {/* Accordian Body */}
          
         
    </div>
   );
};
export default ResCategories;