import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import {handleSelected} from '../actions/Actions'
import Details from './Details';
import { useNavigate } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
class RestArray extends Component {
    constructor() {
        super();
        this.state = {
            arr:[],
            txt:'',
            kosher: '',
            name:'',
        }
    }
    restDetails=(e) => {
      console.log(e)
      console.log(this.props.restaurant_name)
      console.log(this.props.Name)
      this.props.myHandleSelected(e)
    }

    render(props){
        // console.log(this.props.array)
        // console.log(this.props.txt)
        console.log(this.props.SelectedName)

        const kosherArr = this.props.array.filter(item => {
          console.log(this.props.kosher)
          return item.kosher.toLowerCase().includes(this.props.kosher);

      })
        // const {arr,txt} = this.props;
        const filterArr = kosherArr.filter(item => {
            // console.log(item)
            return item.restaurant_name.toLowerCase().includes(this.props.txt.toLowerCase()) 
            || item.city.toLowerCase().includes(this.props.txt.toLowerCase()) 
            // || item.cuisine.toLowerCase().includes(this.props.txt.toLowerCase())
            // || item.kosher.toLowerCase().includes(this.props.txt.toLowerCase()) 
            // && item.kosher.toLowerCase().includes(this.props.txt);

        })
        return(
           
            <>
        <div className="robotcontain">
                {
                    filterArr.map((item, i) =>{
                      return <Card user={item} restDetails={this.restDetails}/>
                    })
                  }
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
  console.log(state.selectedname)
    return {
      array: state.array,
    txt: state.txt,
    kosher: state.kosher,
    SelectedName: state.selectedname
  }
  }
  
  const mapDispatchToProps =(dispatch)=>{
  return{
    myHandleSelected: (e) => dispatch(handleSelected(e)),
    // myHandleDown: (e) => dispatch(handleDown(e))
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(RestArray);
