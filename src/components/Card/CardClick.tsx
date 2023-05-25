import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ActionAreaCard = ({name, description, picture})  => {
  return (
    <Card sx={{ maxWidth: 300 }} style={{margin:"25px", position: "relative", display:"inline-flex"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          image={picture}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ActionAreaCard;