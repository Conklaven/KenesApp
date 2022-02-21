import './Card.css'
import Details from './Details'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

const Card = (props) => {
    const {user} = props;
    const {restaurant_id,restaurant_name,email,city,kosher, cuisine, about, lat, lng} = props.user;
    const mail = `mailto:${email}`


    return(
        <>

    <div 
    className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-3'  id={restaurant_id}>
        <Link className='fw6 db black link dim 'to="/Details" onClick={() =>props.restDetails(props.user)}>
        <h2 className='f2' id={restaurant_id}>{restaurant_name}</h2>
        <h2 id={restaurant_id}>{city}</h2>
        <h4 id={restaurant_id}>{email}</h4>
        {/* <h4 id={restaurant_id}>{kosher}</h4> */}
        <h4 id={restaurant_id}>{cuisine}</h4>
        </Link>

    </div>
        </>
    )
}


export default Card


