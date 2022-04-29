import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import blogPic from "../assests/blok.png";
import blogPic2 from "../assests/feedback.png";
import  Button  from '@mui/material/Button';
import google from "../assests/google.png";
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { AddBlog } from "../utils/function";



const NewBlog = ({info, setInfo, handleSubmit}) => {

   
  const handleChange = (e) => {
    e.preventDefault();
    
    const {name, value} = e.target;
    console.log(name, value);
    setInfo({...info,[name]:value});
   


  }

    //const handleProviderLogin = () => {
    //  signUpProvider(navigate);
    //}
  return (
    <>
    
    <div style={{alignItems: "center", 
        flexWrap: "wrap", 
        padding: "10px", 
        backgroundColor: "white", 
        height: "100vh"}} >
    <form onSubmit={handleSubmit}>
          <div>
            <img 
                src={ blogPic2 } 
                alt="not found" 
                style={{width: "230px", 
                height: "230px"}}/>
          </div>
          <h3>NEW BLOG</h3>

        <Box
          sx={{
            //display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >      
          <TextField 
          id="demo-helper-text-misaligned-no-helper" 
          label="Title"
          name="title" 
          value={info.title}
          required 

          //onChange={(e)=> setEmail(e.target.value)} />
          onChange={handleChange} />
        </Box>
        <Box
          sx={{
            
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >      
          <TextField 
          id="demo-helper-text-misaligned-no-helper" 
          label="Image URL" 
          name="imgUrl" 
          value={info.imgUrl}
          type="text"
          required
          onChange={handleChange} />
        </Box>
        <Box
          sx={{
            
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
            
          }}
        >      
          <TextField
          id="multiline-static"
          label="Content"
          name="content" 
          value={info.content}
          multiline
          rows={10} 
                   
          //defaultValue="Content"        
          onChange={handleChange} />
        </Box>
        

        <div>
            <Button 
            variant="contained"
            type="submit" 
            style={{marginTop: "30px", 
            width: "270px"}}
            value = "Submit"
            
            
            >
              SUBMIT
            </Button>
        </div>
        
        </form>
    </div>
    </>
  );
};

 export default NewBlog;