import './Card.css'
import GuideDetails from './GuideDetails'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

const GuideCard = (props) => {
    const {user} = props;
    const {id,first_name,last_name,email,city, bio, languages, telephone, group_type} = props.user;
    const mail = `mailto:${email}`


    return(
        <>

    <div 
    className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-3'  id={id}>
        <Link className='fw6 db black link dim 'to="/GuideDetails" onClick={() =>props.restDetails(props.user)}>
        <h2 className='f2' id={id}>{first_name} {last_name}</h2>
        <h2 id={id}>{city}</h2>
        <h4 id={id}>{email}</h4>
        {/* <h4 id={restaurant_id}>{kosher}</h4> */}
        </Link>

    </div>
        </>
    )
}


export default GuideCard


