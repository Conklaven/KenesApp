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
const AddGuide = (props =>{

    const[first_name, setfirst_name] = useState('')
    const[last_name, setlast_name] = useState('')
    const[telephone, settelephone] = useState('')
    const[email, setemail] = useState('')
    const[languages, setlanguages] = useState('')
    const[city, setcity] = useState('')
    const[group_type, setgroup_type] = useState('')
    const[bio, setbio] = useState('')


    const handleSumbit= async (e) =>{
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('restaurant_name', restaurant_name)
        // formData.append('phone', phone)
        // formData.append('email', email)
        // console.log("this is the form data", formData);
     try {
         const data = await axios.post('https://enigmatic-river-02957.herokuapp.com/newguide', {
        //  const data = await axios.post('http://localhost:5001/newguide', {

             first_name,
             last_name,
             telephone,
             email,
             languages,
             city,
             group_type,
             bio

             
         })
         let successmsg = document.getElementById('success')
         toast.success("Guide added successfully")
         successmsg.innerHTML = "Guide added successfully"
         console.log(data.data)
     } catch (error) {
         console.log(error)
         let failmsg = document.getElementById('fail')
         toast.error("Guide not added")
         failmsg.innerHTML = "Guide Not Added"
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
            <h2>Add a New Guide</h2>
            <div>
            <label for="first_name">First Name</label>
            <input className="addinput" onChange={(e)=> setfirst_name(e.target.value)} type="text" required></input>
            </div>
        <br/>
        <div>
            <label for="last_name">Last Name</label>
            <input className="addinput" onChange={(e)=> setlast_name(e.target.value)} type="text" required></input>
            </div>
        <br/>
        <div>
            <label for="telephone">Phone</label>
            <input className="addinput" type="text" onChange={(e)=> settelephone(e.target.value)}></input>
            </div>
        <br/>
        <div>
            <label for="email">Email</label>
            <input className="addinput" type="text" onChange={(e)=> setemail(e.target.value)}></input>
            </div>
            <br/>
            <div>
            <label for="city">City</label>
            <input className="addinput" type="text" onChange={(e)=> setcity(e.target.value)}></input>
            </div>
            <br/>
            <div>
            <label for="languages">Languages</label>
            <input className="addinput" type="text" onChange={(e)=> setlanguages(e.target.value)}></input>
            </div>
            <br/>
            <div>
            <label for="bio">Bio</label>
            <input className="addinput" type="textarea" onChange={(e)=> setbio(e.target.value)}></input>
            </div>
            <br/> 
            <div>
            <label for="group_type">Type of Group</label>
            <select className="addinput"  onChange={(e)=> setgroup_type(e.target.value)} id="kosher">
                <option value="Private">Private</option>
                <option value="Group">Group</option>
                <option value="Both">Both</option>

            </select>
            
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

export default AddGuide;