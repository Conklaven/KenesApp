import React, {Component} from 'react';
import SearchBox from './SearchBox';
import {connect} from 'react-redux';
import {handleArray, handleText, handleChecked} from '../actions/Actions'
import RestArray from './RestArray';
import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

class Restaurants extends Component {
    constructor() {
        super();
        this.state = {
            arr:[],
            txt:'',
            kosher: ''
        }
    }
    componentDidMount = async (props) =>{
        try {
            const response = await fetch('https://enigmatic-river-02957.herokuapp.com/api/images')
            const data = await response.json();
            // console.log(data)
            this.props.myHandleArray(data)
        } catch (e) {
            console.log(e)
        }
        console.log("restaurant mounted")
        this.props.myHandleText(this.state.txt)
        this.props.myHandlechecked(this.state.kosher)

        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(data =>{
        //     this.setState({arr:data})
    // })
    }
    backHome =() =>{
        const navigate = useNavigate();
        navigate(-1)
        // navigate.goBack()
        // window.open('/restaurants', "_self");
    }
    searchItem =(e) => {
        // console.log(e)
        this.props.myHandleText(e.target.value)
        console.log(e.target.value)
    }
    checkBox =(e) => {
        // console.log(e)
        // this.props.myHandleCheck(e.target.value)
        console.log(e.target.checked)
        if (e.target.checked === true){
            this.props.myHandlechecked('kosher')
        }else{
            this.props.myHandlechecked('')
        }
        

    }
    
    render(props){
        return(
           
            <>
                <SearchBox  searchItem={this.searchItem} checkBox={this.checkBox} backHome={this.backHome}/>
                <RestArray/>
                <div id="centerlink" >
                    <div className='centerlink grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
                        <Link className="f2" to="/AddRest">Add a Restaurant</Link>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      array: state.array,
    txt: state.txt
  }
  }
  
  const mapDispatchToProps =(dispatch)=>{
  return{
    myHandleArray: (e) => dispatch(handleArray(e)),
    myHandleText: (e) => dispatch(handleText(e)),
    myHandlechecked: (e) => dispatch(handleChecked(e))

  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);