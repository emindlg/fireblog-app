import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { display } from '@mui/system';
import { useFetch } from "../utils/function";
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import loading from "../assests/loading.gif";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AppClock = () =>{
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="App">
      <h1>{date}</h1>
    </div>
  );
}

const Loader = () => {
  return (
      <div
      style={{
        background: "white",
        height:'100%',
        width:"100%"
      }}>
          <center>
              <img src={loading} height="250" width="250" alt=""/>
          </center>
      </div>
  )
}



export default function RecipeReviewCard({updateHandler}) {

  const navigate = useNavigate();
  const {isLoading, blogList} = useFetch();  
  const currentDate = AppClock();

  const handleDetailClick =(e) =>{
    e.preventDefault();    
    navigate("/Details");
  }

  return (
    <div style={{padding: '50px'}}>
    <Grid container spacing={2} > 
    {isLoading ? 
      (Loader()) :     
      (blogList?.map((item, index, ) => ( 
          // 
      <Grid item  sm={12} md={6} lg={4} xl={3}>
      <Card sx={{ maxWidth: 400, backgroundColor: "lightgray", gap: "10px", cursor: "pointer" }} onClick={handleDetailClick}>
            <CardMedia
              component="img"
              height="204"
              image={item.imgUrl}
              alt="Paella dish"     
              
            />

            <CardHeader       
              title={item.title}                
            />

            <CardContent style={{height: 200}}>            
              <Typography variant="body2" color="text.secondary">
                <h5 style={{display: "flex", fontSize: "8px"}}
                >{currentDate}</h5>
              {item.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ChatBubbleOutlineIcon />                
              </IconButton>        
            </CardActions>           
          </Card>
          
      </Grid>
       )))}
      
    </Grid>
    </div>
  );
}


{/*<div 
      sx={{ flexGrow: 1 }} 
      style={{backgroundColor: "cadetblue", padding: "20px", height:"100%" }}>
        <h2>DASHBOARD</h2>
      {blogList?.map((item, index) => (

       <Grid container spacing={3} key={index}>
        <Grid item xs={3} md={2.4} lg={2}>
          <Card sx={{ maxWidth: 345, backgroundColor: "lightgray", margin: "30px"}}>
            <CardMedia
              component="img"
              height="204"
              image={item.imgUrl}
              alt="Paella dish"
              
            />

            <CardHeader       
              title={item.title}                
            />

            <CardContent >
            
              <Typography variant="body2" color="text.secondary">
                <h5 style={{display: "flex", fontSize: "8px"}}
                >{currentDate}</h5>
              {item.content}
              </Typography>
            </CardContent>
            <CardContent content={item.content}/>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ChatBubbleOutlineIcon />
              </IconButton>        
            </CardActions>
            
          </Card> 
        </Grid> 
        </Grid>))}
    </div>*/}