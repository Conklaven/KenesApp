import React, {useState} from 'react';
import axios from 'axios';
const AddRest = (props =>{

    const[restaurant_name, setrestaurant_name] = useState('')
    const[phone, setphone] = useState('')
    const[email, setemail] = useState('')
    const[city, setcity] = useState('')
    const[cuisine, setcuisine] = useState('')
    const[about, setabout] = useState('')
    const[website, setwebsite] = useState('')
    const[social, setsocial] = useState('')
    const[kosher, setkosher] = useState('false')
    const[recommended_by, setrecommended_by] = useState('')

    const backHome = () =>{
        window.open('/', "_self");
    }

    const handleSumbit= async (e) =>{
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('restaurant_name', restaurant_name)
        // formData.append('phone', phone)
        // formData.append('email', email)
        // console.log("this is the form data", formData);
     try {
         const data = await axios.post('http://localhost:5000/newrest', {
             restaurant_name,
             phone,
             email,
             city,
             cuisine,
             about,
             website,
             social,
             kosher,
             recommended_by

             
         })
         let successmsg = document.getElementById('success')
         successmsg.innerHTML = "Restaurant added successfully"
         console.log(data.data)
     } catch (error) {
         console.log(error)
     }

    }
    return(
        <>
        <button onClick={backHome}>Go Back</button>
        <div className="formContain">
        <form className="addrest" onSubmit={handleSumbit}>
            <h2>Add a New Restaurant</h2>
            <div>
            <label for="restaurant_name">Name</label>
            <input className="addinput" onChange={(e)=> setrestaurant_name(e.target.value)} type="text" ></input>
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