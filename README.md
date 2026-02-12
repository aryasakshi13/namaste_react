# parcel 
Dev Build
Local Server
HMR_ Hot  odule Replacement 
File Watching Algorithm - Written in C++
Caching - Faster Builds 
Image Optimization
Minification
Bundling
Compressing

<!-- Project Structure -->
//**
//*Header
//-logo 
// - Nav Item 
// Body 
// - search
// -Restaurent Container
// -Restaurent card
// *Footer
// -Copyright
// -Links
// -Address
// -Contact
//  */
....

# React Hooks 
(Normal js utility function)
-UseState() - Supper Powerful state variable in react
useEffect () - 

   
# Routing,CreateBrowser, RouteProvider, OUtlet , Link 


# 2 types of Routing in Web apps 
  - client side Routing - Here We are not making any network call to moving towards the page Because all the components are already loaded into our app. When i load the for a first tie it already have the code for about us we are not doing any network call here  it doesn't refresh the whole page. 
  - Server side Routing - It index.html page, aboutus.html page if we click on anchor tag of /about page  it reloads te whole page it send the network call about.html fetch that html and renders it on to the webpage . It refreshes the whole page that is server side routing (make a network call and the about us page is comming from server ) 

  # class based component 
  - clas based component  is the older way of component 
  - A class based component a component is a class who extends react based component and it has a render method that return some piece of jsx .

  # funstional component 
  - it is a normal javascript function that return some piece of jsx .

  # behind the scene concept of state variable in class component (s)
   It is find the diff b/w two objeccts . Whenever this onclick button is clicked react will retrigger the concialation process. it will find the diff of that obj it will update the state variable , it eill re-render the component.

  # React Lifecycle method
  - ComponentDidMount()
  -
  # How It Works In class Component 
    - Firstly constructor call 
    - render call 
    - Component dis mount call
  -  made aapi call inside 
  
  - Why we do APi call inside component didpount 
     contru




     # How Lifecycle MEthod WOrk (when there are multiple children or multiple instance of same class)
     REact make batch the phase for render and Commit for fast rendering 

     - parent Constructor 
     - parent render 
     -first child constructor call 
     - first child render 
     -second child constructor call 
     -second child render
     -first child  Component did mount 
     -second child Did mount 
     -Parent Didi mount 

     in the react when the component is mounted it is mounted in two phases 
     - Render phase  - 
     - Commit phase 
    -In render phase  first of all the constructor is call , then the render is 
     call,
     then the react actually update the dom,
     then the ComponentDidMount is call which is in commit phase 

     - That's why this is best place to make an api call 
     
     React make the batch of render pahse of all child and parent component first because dom manupulation is very expensive and the render phase is the (find the diff b/w the two abjects and update the dom (react reconsiliation process)). That's why the react is so fast .


  # Mounting 

  - Constructor call (dummy data)
  - render data (dummy data)
  - <html dummy data> - Update in dom
  - Component did mount call 

  # Custom hook 
  # Lazy loading 
  # window event - Event Listner
  - Uses for online offline status check 

   # Css multple ways 
  - Saas and Scss
  -Style component 
  -Tailwind Css
  - Bootstrap
  - Material UI
  - Chakra Ui 
  - Ant Design 

# Css 
# Higher Order Component 
 -Higher order component is a function that takes a component as an input and  it inhances that component(add some feature onto that)  and returns a  new component.

 # Controlled and Uncontrolld component 
  when the component is controlled by  its parent (when the componet is relying upon its parent to its what to do it is called controlled compnent) 

  Uncontrolled not relying on  its parent it has own state (maning state by itself )

  # Lifting State 

  # Props Driling 

  # rect Context 
  Avoiding Props driling  . COntext is a global kind of object for react in react Application 
  # context in react 
  # how do we use context in functional ciomponent 
  using useContxrt hook 

  #  How do we use Context in class Component 
      We can use the hook with .consumer
      <UserContext.consumer>
         {(data) => console.log(data)}
      </UserContext.consumer> 
  # modify the Context 
  - <userContext.provider value ={{loggedInUser:userName}}>
   If we want to modify header then only import heade 
   </Header>
   if want to modify in whole app 
  </userContext.provider>