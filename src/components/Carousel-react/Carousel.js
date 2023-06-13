import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
function Example({obj})
{
    return (
        <Carousel>
            {
                // eslint-disable-next-line react/jsx-key
                obj.images.map( (item) => <Item  item={item} /> )
            }
        </Carousel>
    )
}
export default Example;