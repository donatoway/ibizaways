import { margin } from '@mui/system'
import ImageSlider from './ImageSlider'
import { top } from '@popperjs/core'

const Slider = () =>
{
    const slides = [
    {url: '/yatch2.png', title: 'image1'},
    {url: '/hand-yatch.jpg', title: 'image2'},
    {url: '/yatch2.png', title: 'image3'},
    {url: '/hand-yatch.jpg', title: 'image4'},
    {url: '/yatch2.png', title: 'image5'}
    ]

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