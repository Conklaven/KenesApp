import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
const SearchBox = (props =>{
    return(
        <>
        <nav className="nav">
            <div className="headcontainer">
                <img id="logo" src="https://1kur9t3xffe11yy9in1cqsuu-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/cropped-Kenes-tours_Logo-WHITE-3-2048x803.png" height= "35px"/>
                    <div className="Title">
                        <h2 className="f1">Restaurants</h2>
                        <Link to="/">
                        <button className="backBTN" 
                        // onClick={useNavigate(-1)}
                        >
                            <span id="return">Return Home
                            </span> 
                            <span id="arrow">
                                Back
                                {/* <i class="arrow left"></i> */}
                            </span>
                        </button>
                        </Link>
                     
                    </div>
            </div>
            <div className="search">
                <input className="pa3 ba b--red bg-white" id="searchbox" type='text' onChange={props.searchItem} placeholder="search restaurants"/>
                    <div className="kosherdiv">
                        <input onChange={props.checkBox} className="pa3 ba b--green bg-lightest-blue" type="checkbox" id="koshercheck" name="koshercheck"/>
                        <label htmlfor="koshercheck">Kosher</label>
                    </div>
            </div>
        </nav>
        </>
    )
})

export default SearchBox;