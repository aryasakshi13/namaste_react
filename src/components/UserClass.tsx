
import React from "react";
type PropsClass = {
  name: string;
  Location: string;
  
};

type State = {
    count: number;
   
};
class UserClass extends React.Component<PropsClass, State>{
    constructor(props:PropsClass){
        super(props);
        this.state = {
            count: 0,
            
        };

        console.log(props);
    }
    render(){
        const {name, Location}= this.props;
        const {count} = this.state;
        return(
        <div className = "user-card">
            <h1>Count: {count}</h1>
           <button onClick={()=>{
               this.setState({
                count:this.state.count +1,
            });
           }}>Count Increment class</button>
            <h2>Name:{name}</h2>
            <h3>Location:{Location}</h3>
            <h4>Contact:@sakshi</h4>

       </div>
        );

    }
}
export default UserClass;