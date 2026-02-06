import { useState } from "react";


type PropsClass = {
  count:number;
  name: string;
  Location:string;
};

const User = ({ name, Location }:PropsClass) =>{
     const [count] = useState(1);
    // const [count1] = useState(1);
    return (
       <div className = "user-card">
        <h2>count:{count}</h2>
        <h2>Name:{name}</h2>
        <h3>Location:{Location} </h3>
        <h4>Contact:@sakshi</h4>

       </div>
    );
};
export default User;