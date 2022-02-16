import React, {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
const AddRest = (props =>{

    const[restaurant_name, setrestaurant_name] = useState('')
    const[phone, setphone] = useState('')
    const[email, setemail] = useState('')
    const[city, setcity] = useState('')
    const[rating, setrating] = useState('')
    const[cuisine, setcuisine] = useState('')
    const[about, setabout] = useState('')
    const[website, setwebsite] = useState('')
    const[social, setsocial] = useState('')
    const[kosher, setkosher] = useState('false')
    const[recommended_by, setrecommended_by] = useState('')


    const handleSumbit= async (e) =>{
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('restaurant_name', restaurant_name)
        // formData.append('phone', phone)
        // formData.append('email', email)
        // console.log("this is the form data", formData);
     try {
         const data = await axios.post('https://enigmatic-river-02957.herokuapp.com/newrest', {
             restaurant_name,
             phone,
             email,
             city,
             cuisine,
             about,
             website,
             social,
             kosher,
             rating,
             recommended_by

             
         })
         let successmsg = document.getElementById('success')
         toast.success("Restaurant added successfully")
         successmsg.innerHTML = "Restaurant added successfully"
         console.log(data.data)
     } catch (error) {
         console.log(error)
         let failmsg = document.getElementById('fail')
         toast.error("Restaurant not added")
         failmsg.innerHTML = "Restaurant Not Added"
     }

    }
    return(
        <>
        <div className="backcontain">
        <Link to="/">
        <button className="addpage backBTN">Go Back</button>
        </Link>
        </div>
        <div className="formContain">
        <form className="addrest" onSubmit={handleSumbit}>
            <h2>Add a New Restaurant</h2>
            <div>
            <label for="restaurant_name">Name</label>
            <input className="addinput" onChange={(e)=> setrestaurant_name(e.target.value)} type="text" required></input>
            </div>
        <br/>
        <div>
            <label for="phone">Phone</label>
            <input className="addinput" type="text" onChange={(e)=> setphone(e.target.value)}></input>
            </div>
        <br/>
        <div>
            <label for="email">Email</label>
            <input className="addinput" type="text" onChange={(e)=> setemail(e.target.value)}></input>
            </div>
            <br/>
            <div>
            <label for="city">Address</label>
            <input className="addinput" type="text" onChange={(e)=> setcity(e.target.value)}></input>
            </div>
            <br/>

            <div>
            <label for="rating">Rating</label>
            <select className="addinput"  onChange={(e)=> setrating(e.target.value)} id="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>
            </div>
            <br/>
            <div>
            <label for="cuisine">Cuisine</label>
            <input className="addinput" type="text" onChange={(e)=> setcuisine(e.target.value)}></input>
            </div>
            <br/>
            <div>
            <label for="about">About</label>
            <input className="addinput" type="textarea" onChange={(e)=> setabout(e.target.value)}></input>
            </div>
            <br/>
            <div>
            <label for="website">Website</label>
            <input className="addinput" type="text" onChange={(e)=> setwebsite(e.target.value)}></input>
            </div>
            <br/>
            <div>
            <label for="social">Facebook</label>
            <input className="addinput" type="text" onChange={(e)=> setsocial(e.target.value)}></input>
            </div>
            <br/> 
            <div>
            <label for="kosher">Kosher?</label>
            <select className="addinput"  onChange={(e)=> setkosher(e.target.value)} id="kosher">
                <option value="Kosher">Yes</option>
                <option value="false">No</option>
            </select>
            
            </div>
            <br/>
            <div>
            <label for="recommended_by">Your Name</label>
            <input className="addinput" type="text" onChange={(e)=> setrecommended_by(e.target.value)}></input>
            </div>
            <br/>
            <div className="buttonContain">
            <button type="submit">Submit</button>
            </div>
        </form>
        <div id="success"></div>
        </div>
        </>
    )
})

export default AddRest;