import { margin } from '@mui/system'
import {ImageSlider} from './'
import { top } from '@popperjs/core'

const Slider = ({slides}) =>
{

    const containerStyles = {
        width : "500",
        height: "280px",
        margin: "10px"
    }

    const divProp = {
        margin:"10px"
    }
    return (
        <div style={divProp}>
          <div style={containerStyles} >
            <ImageSlider slides={slides} parentWidth={500} />
          </div>
        </div>
      )
}
export default Slider;