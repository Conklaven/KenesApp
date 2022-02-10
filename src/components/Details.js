import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'tachyons'
import '../App.css';


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
        console.log(this.props.SelectedName)
        let url = `https://maps.google.com/?q=${this.props.SelectedName.city}`
        return(
           
        <>
        <div>
            <a className="f2" href='/Restaurants'><button className="backBTN">Back</button></a>
        
        </div>
        <div className="detailscontainer">
            <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5' id="detail">
                <div className='f2'>{this.props.SelectedName.restaurant_name}</div> 
                <div className='f3'>{this.props.SelectedName.city}</div>
                <div className='f3'>{this.props.SelectedName.email}</div>
                <div className='f3'>{this.props.SelectedName.about}</div>
                <a className="f2" href={url} target="_blank">Get Directions</a>
                
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