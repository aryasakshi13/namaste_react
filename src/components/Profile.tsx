
import {useState, useEffect} from "react";
const Profile = ()=>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
       
    });
    return (
        <div>
            <h2>Profile COmponent</h2>
            <h3>Name</h3>
            <h3>Count: </h3>
            <button onClick = {()=>{
                 setCount(1);
            }}>

            </button>
        </div>
    )
}