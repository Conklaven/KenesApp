import React, {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {AppContext} from '../App'

export const Auth = (props) =>{
    const {accessToken} = useContext(AppContext);
    const [redirect, setRedirect] = useState(null);

let navigate =useNavigate();
useEffect(async () =>{
try {
    let response = await axios.get('https://enigmatic-river-02957.herokuapp.com/tokens', {
    // let response = await axios.get('http://localhost:5001/tokens', {

        withCredentials:true,
                    headers:{
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'x-access-token': accessToken.accessToken
                    }
    })
    console.log('auth response', response);
    setRedirect(1)
} catch (error) {
    console.log(error)
    navigate('/login')
}
},[])
return (

    redirect ? props.children: null
)
}
