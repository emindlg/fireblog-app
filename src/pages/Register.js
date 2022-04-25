import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import blogPic from "../assests/blok.png"
import  Button  from '@mui/material/Button';
import google from "../assests/google.png"


export default function HelperTextMisaligned() {
  return (
    <div style={{border: "1px solid gray", height:"550px", width: "400px",margin: "50px auto", borderRadius: "5px",  alignItems: "center", flexWrap: "wrap", padding: "10px", boxShadow:"5px 5px 9px"}}>
      <div>
        <img src={ blogPic } alt=""not found/>
      </div>
      <h3>.....LOGIN.....</h3>
      
    <Box
      sx={{
        //display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >      
      <TextField id="demo-helper-text-misaligned-no-helper" label="Email" required />
    </Box>
    <Box
      sx={{
        //display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >      
      <TextField id="demo-helper-text-misaligned-no-helper" label="Password" required />
    </Box>

    <div>
    <Button variant="contained" style={{marginTop: "30px", width: "270px"}}>Register</Button>
    </div>
    <div>
    <Button variant="contained" style={{margin: "10px", width: "270px", backgroundColor: "#7ddd", color: "black"}}>WITH <img src={google} alt="yok" style={{width: "65px", paddingLeft: "10px"}} /></Button>
    </div>
    
    </div>
  );
}




//