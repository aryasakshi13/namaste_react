
import React from "react";
type PropsClass = {
  name: string;
  Location: string;
  
};

type State = {
    // count: number;
   userInfo: {
    name: string;
    location: string;
    avatar_url : string;
  };
};
class UserClass extends React.Component<PropsClass, State>{
    constructor(props:PropsClass){
        super(props);
        this.state = {
            userInfo:{
                name :"Dummy",
                location:"Default", 
                avatar_url: "htp://dummy-photo.com"
            },
          
        };
        // this.state = {
            // count: 0,};

        // console.log(props);
        // console.log("constructor call");
    }

     async componentDidMount(){
        const data = await fetch("https://api.github.com/users/aryasakshi13");

        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
     }
     componentDidUpdate(){
        console.log("Compnent did Update")
     }
     componentWillUnmount(){
        console.log("compoent will unmout")
     }
    render(){
        const {name, location, avatar_url}= this.state.userInfo;
        // const {count} = this.state;
        console.log("chile render");
        return(
        <div className = "user-card">
            <img src ={avatar_url}/>
            {/* <h1>Count: {count}</h1>
           <button onClick={()=>{
               this.setState({
                count:this.state.count +1,
            });
           }}>Count Increment class</button> */}
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:@sakshi</h4>

       </div>
        );

    }
}
export default UserClass;


