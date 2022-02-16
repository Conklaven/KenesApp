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

class GuideDetails extends Component {
    constructor() {
        super();
        this.state = {
            guidearr:[],
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
        <Link to="/Guides">
            <a className="f2" ><button className="backBTN">Back</button></a>
            </Link>
        </div>
        <div className="detailscontainer">
            <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5' id="detail">
                <div className='f2'>{this.props.SelectedName.first_name} {this.props.SelectedName.last_name}</div> 
                <div className='f3'>{this.props.SelectedName.city}</div>
                <div className='f3'><a href ={email} >{this.props.SelectedName.email}</a></div>
                <div className='f3'>{this.props.SelectedName.bio}</div>
                <div className='f3'>{this.props.SelectedName.telephone}</div>

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
        array: state.guidearray,
      txt: state.txt,
      kosher: state.kosher,
      SelectedName: state.selectedname
  }
}
  export default connect(mapStateToProps)(GuideDetails);