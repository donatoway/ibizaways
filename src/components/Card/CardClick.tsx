import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ActionAreaCard = ({name, picture})  => {
  return (
    <Card  style={{margin:"25px", position: "relative", display:"inline-"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          image={picture}
          alt="img"
          width={300}
          height={400}
        />
        <CardContent style={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" style={{fontFamily:"fantasy"}} component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ActionAreaCard;