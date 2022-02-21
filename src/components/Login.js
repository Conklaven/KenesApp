import React, {useState, useEffect, useContext} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-toastify'
import './login.css';
import {AppContext} from '../App'

const Login =({title}) =>{
    const {setAccessToken} = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    let navigate = useNavigate()

    useEffect(() =>{
        setMsg('')
    },[])
    const handleAction = async (id) => {
        console.log('handleAction', id)
        if (id === 'Register'){
            try {
                let response = await axios.post('https://enigmatic-river-02957.herokuapp.com/register',{
                // let response = await axios.post('http://localhost:5001/register',{
                   
                email,password
                },{
                    withCredentials:true,
                    headers:{
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                })
            console.log('Register response', response)
            navigate('/login')

            } catch (error) {
                console.log('error', error)
                setMsg(error.response.data.msg)
                toast.error(error.response.data.msg )

            }
        }else if (id === 'Login'){
            try {
                let response = await axios.post('https://enigmatic-river-02957.herokuapp.com/login',{
                    // let response = await axios.post('http://localhost:5001/login',{
                    
                email,password
                },{
                    withCredentials:true,
                    headers:{
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                })
                console.log('login response', response)
                setAccessToken(response.data)
            navigate('/')

            } catch (error) {
                console.log(error)
                setMsg(error.response.data.msg)
                toast.error(error.response.data.msg)
            }
        }
    }
    return(
    <>
        <div className="authcontainer">
            <div id="main">
                <img id="Mainlogo" src="https://1kur9t3xffe11yy9in1cqsuu-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/cropped-Kenes-tours_Logo-WHITE-3-2048x803.png" height= "200px"/>
            </div>
            <div>
                <h2>{title} Form</h2>
            </div>
            <Box component="form"
                sx={{m:1}}
                noValidate
                autoComplete ="off">
                    <TextField
                    className="inputs"
                    sx={{m:1}}
                    id='email'
                    label='Enter Email'
                    variant='outlined'
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                    className="inputs"
                    type="password"
                    sx={{m:1}}
                    id='password'
                    label='Enter password'
                    variant='outlined'
                    onChange={(e)=>setPassword(e.target.value)}/>
            </Box>
                <Button variant="contained"
                    onClick={()=>handleAction(title)}
                    >{title}
                </Button>
                <div>
                    {msg}
                </div>
                <div className="access"> 
                    Please contact Kenes Tours admin for access
                </div>
                {/* <div className="secret">{title==="Register" ? <Link to ='/login'>Login</Link>:<Link to ='/register'>Register</Link>}</div> */}
        </div>
    </>
    )
}

export default Login;