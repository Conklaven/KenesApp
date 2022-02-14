import React from 'react';
import logo from './logo.svg';
import './App.css';
import Robots from './components/Restaurants'
import 'tachyons'
import Restaurants from './components/Restaurants';
import Details from './components/Details';
import Home from './components/Home';
import Login from './components/Login';
import AddRest from './components/AddRest';
import Guides from './components/Guides';
import {Auth} from './authenticate/Auth.js'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <div className="App-intro">
     <ToastContainer />

        <Routes>
       <Route path="/login" element={<Login title={'Login'}/>}/>
       <Route path="/Register" element={<Login title={'Register'}/>}/>
      <Route path="/restaurants" element={<Auth><Restaurants title={'Restaurants'}/></Auth>}/>
      <Route path="/" element={<Auth><Home title={'Home'}/></Auth>}/>
      <Route path="/Details" element={<Auth><Details title={'Detials'}/></Auth>}/>
      <Route path="/AddRest" element={<Auth><AddRest title={'Add Restaurant'}/></Auth>}/>
      <Route path="/Guides" element={<Auth><Guides title={'Guides'}/></Auth>}/>




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