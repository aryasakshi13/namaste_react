import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const[onlineStatus, setOnlineStatus] = useState(true);
   //  check if online 
     useEffect (() =>{
    // EventListener need to exeute at once 
       window.addEventListener("ofline", (event) => {
         setOnlineStatus(false);
});
     window.addEventListener("online", (event) => {
         setOnlineStatus(true);
});   
     },[])

    //  return boolean value 
    return onlineStatus;
}
export default useOnlineStatus; 