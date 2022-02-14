import React, {Component} from 'react';
import {connect} from 'react-redux';import 
ReactDOM from 'react-dom';

import 'tachyons'
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

class Details extends Component {
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
        console.log(this.props.SelectedName.about)
        let url = `https://maps.google.com/?q=${this.props.SelectedName.city}`
        let email = `mailto: ${this.props.SelectedName.email}`
        let rating = this.props.SelectedName.rating
        const getStars = stars => {
            let content = [];
            console.log(rating)
            if (rating == null){
               
            } else{
                content.push(<span className="rating">Rating:</span>)
            for (let i = 0; i < rating ; i++) {
              content.push(<span className="fa fa-star checked"></span>);
            }
            return content;
        }
          };
        return(
           
        <>
        <div>
        <Link to="/restaurants">
            <a className="f2" ><button className="backBTN">Back</button></a>
            </Link>
        </div>
        <div className="detailscontainer">
            <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5' id="detail">
                <div className='f2'>{this.props.SelectedName.restaurant_name}</div> 
                <div className='f3'>{this.props.SelectedName.city}</div>
                <div className='f3'><a href ={email} >{this.props.SelectedName.email}</a></div>
                <div className='f3'>{this.props.SelectedName.about}</div>
                <a className="f2" href={url} target="_blank">Get Directions</a>
                <br/>
                {}
                <div className="rating" > 
                {/* <span id="rating">Rating:</span> */}
                {getStars()}
                </div>
            </div>
            </div>
        </>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state.selectedName)
    return {
        array: state.array,
      txt: state.txt,
      kosher: state.kosher,
      SelectedName: state.selectedname
  }
}
  export default connect(mapStateToProps)(Details);