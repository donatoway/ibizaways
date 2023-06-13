import { Paper, Button } from '@mui/material'
import { Image } from 'next/image';
function Item({item})
{
    return (
        <Paper>
            <img src={item} 
                    alt="a"
                    width="100%"
                    height="315px"
                    style={{flexDirection:"column", display:"flex"}}
            ></img>
        </Paper>
    )
}
export default Item;