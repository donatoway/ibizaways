import { Paper, Button } from '@mui/material'
import { Image } from 'next/image';
function Item({item})
{
    return (
        <Paper style={{alignContent:"center"}}>
            <img src={item} 
                    alt="a"
                    width="100%"
                    height="100%"
                    style={{flexDirection:"column", display:"flex"}}
            ></img>
        </Paper>
    )
}
export default Item;