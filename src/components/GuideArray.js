import React, {Component} from 'react';
import GuideCard from './GuideCard';
import {connect} from 'react-redux';
import {handleSelected} from '../actions/Actions'
import Details from './Details';
import { useNavigate } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
class GuideArray extends Component {
    constructor() {
        super();
        this.state = {
            guidearr:[],
            txt:'',
            kosher: '',
            name:'',
        }
    }
    componentDidMount(){
      console.log("mounted")
      // this.props.text = ""
    }
    restDetails=(e) => {
      this.props.myHandleSelected(e)
    }

    render(props){
        // console.log(this.props.array)
        // console.log(this.props.txt)
        const filtered = this.props.array.filter(item => {
            console.log(item)
            return item.first_name.toLowerCase().includes(this.props.txt.toLowerCase())
            || item.last_name.toLowerCase().includes(this.props.txt.toLowerCase())
            || item.city.toLowerCase().includes(this.props.txt.toLowerCase())
            || item.languages.toLowerCase().includes(this.props.txt.toLowerCase())
            || item.group_type.toLowerCase().includes(this.props.txt.toLowerCase());
        })
        // const filtered = this.props.array.filter(item => {
        //   console.log(this.props.txt)
          // return item.first_name.toLowerCase().includes(this.props.txt.toLowerCase()) 
          // || item.city.toLowerCase().includes(this.props.txt.toLowerCase()) 
          
      // })
        return(
           
            <>
        <div className="robotcontain">
                {
                    filtered.map((item, i) =>{
                      return <GuideCard user={item} restDetails={this.restDetails}/>
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
      array: state.guidearray,
    txt: state.guidetxt,
    SelectedName: state.selectedname
  }
  }
  
  const mapDispatchToProps =(dispatch)=>{
  return{
    myHandleSelected: (e) => dispatch(handleSelected(e)),
    // myHandleDown: (e) => dispatch(handleDown(e))
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(GuideArray);
