import React, {Component} from 'react';
import Card from './Card';
import SearchBox from './SearchBox';
import {connect} from 'react-redux';
import {handleArray, handleText, handleChecked} from '../actions/Actions'
import RestArray from './RestArray';
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
            const response = await fetch('http://localhost:5000/api/images')
            const data = await response.json();
            // console.log(data)
            this.props.myHandleArray(data)
        } catch (e) {
            console.log(e)
        }
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(data =>{
        //     this.setState({arr:data})
    // })
    }
    backHome =() =>{
        window.open('/', "_self");
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
        if (e.target.checked == true){
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