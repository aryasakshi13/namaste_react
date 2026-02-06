import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste React web Series </h2>
        <User name = {"sakshi(function)"} Location={"Delhi"}/>
        <UserClass name = {"Sakshi(class)"}  Location = {"Delhi"}/>

      </div>
    );
  }
};

export default About;