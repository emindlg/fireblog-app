import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import blogPic from "../assests/blok.png"
import  Button  from '@mui/material/Button';
import google from "../assests/google.png"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { signIn, signUpProvider } from '../utils/firebase';


const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password);
  };
  


    const handleProviderLogin = () => {
      signUpProvider(navigate);
    }
  return (
    <>
    
    <div style={{border: "1px solid gray", height:"550px", width: "400px",margin: "50px auto", borderRadius: "5px",  alignItems: "center", flexWrap: "wrap", padding: "10px", boxShadow:"5px 5px 9px", backgroundColor: "white"}} >
      <form onSubmit={handleSubmit}>
          <div >
            <img src={ blogPic } alt=""not found/>
          </div>
          <h3>.....LOGIN.....</h3>
          <form onSubmit={handleSubmit}>
        <Box
          sx={{
            //display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >      
          <TextField 
          id="demo-helper-text-misaligned-no-helper" 
          label="Email" 
          required 
          onChange={(e)=> setEmail(e.target.value)} />
        </Box>
        <Box
          sx={{
            
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >      
          <TextField 
          id="demo-helper-text-misaligned-no-helper" 
          label="Password" 
          type="password"
          required
          onChange={(e)=> setPassword(e.target.value)} />
        </Box>
        </form>

        <div>
            <Button 
            variant="contained"
            type="submit" 
            style={{marginTop: "30px", 
            width: "270px"}}
            value = "Login"
            
            >
              Login
            </Button>
        </div>
        <div>
          <Button variant="contained" style={{margin: "10px", width: "270px", backgroundColor: "#7ddd", color: "black"}}>WITH <img src={google} alt="yok" style={{width: "65px", paddingLeft: "10px"}} onClick={handleProviderLogin}/></Button>
        </div>
      </form>
    </div>
    </>
  );
};

 export default Login;


