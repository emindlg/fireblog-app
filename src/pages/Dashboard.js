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
import { useFetch } from "../utils/function"



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

export default function RecipeReviewCard({updateHandler}) {

  const {isLoading, blogList} = useFetch();
  
  const currentDate = AppClock();

  return (
    <div>
    {blogList?.map((item, index) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="154"
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
         
        </Typography>
      </CardContent>
      <CardContent title={item.content}/>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
        </IconButton>        
      </CardActions>
      
    </Card> ))};

    </div>

  );
}
