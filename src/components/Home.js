import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'tachyons'
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            arr:[],
            txt:'',
            kosher: '',
            SelectedName: ''
        }
    }
    
    render(props){
        
        return(
           
        <div className="maincontainer">
        <div id="main">
                <img id="Mainlogo" src="https://1kur9t3xffe11yy9in1cqsuu-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/cropped-Kenes-tours_Logo-WHITE-3-2048x803.png" height= "200px"/>
        </div>
            <div id="links" className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
             <Link className="f2" to="/Restaurants">Restaurants</Link>
             </div>
             <div id="links" className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
             <Link className="f2" to="/Guides">Guides</Link>
             </div>
             <div id="links" className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
             <Link className="f2" to="/AddRest">Add a New Restaurant</Link>
             </div>
        </div>
        )
    }
}


  export default Home;