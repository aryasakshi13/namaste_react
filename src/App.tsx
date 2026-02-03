


import React from "react";

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";



// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World welcome react!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Episode -2 
// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1", {}, "I am an h1 tag"),
//         React.createElement("h2", {}, "I am an h2 tag"),
//     ]),
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1", {}, "I am an h1 tag"),
//         React.createElement("h2", {}, "I am an h2 tag"),
//     ]),
// ]) ;

// console.log(parent); // object
//  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
//  root.render(parent);

// Episode 3  - Laying the foundation 

// const heading:React.ReactElement = React.createElement("h1", {id:"Heading"}, "NAmste React!");

// jsx
// React Element 
// const heading = (
// <h2 className ="head" tabIndex={5}>React Revision!</h2>
// );

// const Title = (
//     <h1 className = "title">This is React element</h1>
// )
// //  React Functional component 
//  const HeadingComponent  = () =>(
//     <div id ="container">
//      {Title}
//     <h1 className = "heading">
//      It is functional component 
//      </h1>
    
//       </div>
// );
 

//   REder the react element 
//  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

//  root.render(jsxheading);
// root.render(<HeadingComponent/>);

// Episode -4 
 
const AppLayout = () =>{
    return(
        <div id = "app">
         <Header/>
          <Body/>
        </div>
    );
};

const appRouter = createBrowserRouter([
   {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error/>,
   },
   {
    path:"/about",
    element:<About/>,
   },
    {
    path:"/contact",
    element:<Contact/>,
   },
   
  
])
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<RouterProvider router={appRouter}/>);







 


