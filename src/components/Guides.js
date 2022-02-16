import React, {Component} from 'react';
import GuideSearch from './GuideSearch';
import {connect} from 'react-redux';
import {handleGuideArray, handleGuideText} from '../actions/Actions'
import GuideArray from './GuideArray';
import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
class Guides extends Component {
    constructor() {
        super();
        this.state = {
            guidearr:[],
            txt:'',
            kosher: ''
        }
    }
    componentDidMount = async (props) =>{
        try {
            const response = await fetch('https://enigmatic-river-02957.herokuapp.com/guides')
            const data = await response.json();
            console.log(data)
            this.props.myHandleGuideArray(data)
        } catch (e) {
            console.log(e)
        }
        console.log("Guides mounted")
        this.props.myHandleGuideText(this.state.txt)
    }
    backHome =() =>{
        const navigate = useNavigate();
        navigate(-1)
        // navigate.goBack()
        // window.open('/restaurants', "_self");
    }
    searchItem =(e) => {
        // console.log(e)
        console.log(e.target.value)
        this.props.myHandleGuideText(e.target.value)
        console.log(e.target.value)
    }
    
    
    render(props){
        return(
           
            <>
                <GuideSearch  searchItem={this.searchItem} backHome={this.backHome}/>
                <GuideArray/>
                <div id="centerlink" >
                    <div className='centerlink grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
                    <Link className="f2" to="/AddGuide">Add a Guide</Link>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      array: state.guidearray,
    guidetxt: state.txt
  }
  }
  
  const mapDispatchToProps =(dispatch)=>{
  return{
    myHandleGuideArray: (e) => dispatch(handleGuideArray(e)),
    myHandleGuideText: (e) => dispatch(handleGuideText(e)),

  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Guides);