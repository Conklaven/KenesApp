import './App.css';
import 'tachyons'
import React, {useState,useEffect,createContext} from 'react';
import Restaurants from './components/Restaurants';
import Details from './components/Details';
import Home from './components/Home';
import Login from './components/Login.js';
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
export const AppContext = createContext(null);

const App = () => {
  const [accessToken, setAccessToken] = useState();

  return(
  <AppContext.Provider value={{accessToken,setAccessToken}}>
      <div className="App-intro">
      <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login title={'Login'}/>}/>
          <Route path="/Register" element={<Login title={'Register'}/>}/>
          <Route path="/restaurants" element={
            <Auth>
              <Restaurants title={'Restaurants'}/>
            </Auth>
          }/>
          <Route path="/" element={
            <Auth>
              <Home title={'Home'}/>
            </Auth>
          }/>
          <Route path="/" element={
            <Auth>
              <Home title={'Home'}/>
            </Auth>
          }/>
          <Route path="/Details" element={
            <Auth>
              <Details title={'Detials'}/>
            </Auth>
          }/>
          <Route path="/AddRest" element={
            // <Auth>
              <AddRest title={'Add Restaurant'}/>
            // </Auth>
          }/>
          <Route path="/Guides" element={
            <Auth>
              <Guides title={'Guides'}/>
            </Auth>
          }/>
 <Route path="/home" element={<Home title={'Home'}/>}/>



      </Routes>
    </div>
    </AppContext.Provider>
  );
}
export default App;
