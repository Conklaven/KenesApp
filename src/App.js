import React from 'react';
import logo from './logo.svg';
import './App.css';
import Robots from './components/Restaurants'
import 'tachyons'
import Restaurants from './components/Restaurants';
import Details from './components/Details';
import Home from './components/Home'
import AddRest from './components/AddRest';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      arr:[]
    }
  }


  render(){
return(
  <>
<div className="menu">
          <ul>
            {/* <li> <Link to="/restaurants">Restaurants</Link> </li>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Details">Details</Link> </li> */}
          </ul>
      </div>
      <div className="App-intro">
        <Routes>
      <Route path="/restaurants" element={<Restaurants/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Details" element={<Details/>}/>
      <Route path="/AddRest" element={<AddRest/>}/>




      </Routes>
    </div>
    </>
  );
}
}
export default App;
function RestaurantPage(){
  return (<Restaurants/>);
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Details() {
//   return <h2>Here is where the info goes</h2>;
// }