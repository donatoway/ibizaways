import { margin } from '@mui/system'
import ImageSlider from './ImageSlider'
import { top } from '@popperjs/core'

const Slider = () =>
{
    const slides = [
    {url: '/BaiaItalia/baia-italia_1.png', title: 'image1'},
    {url: '/Canados42/Canados42_2.png', title: 'image2'},
    {url: '/Canados90/Canados90_1.png', title: 'image3'},
    {url: '/Cayman/Cayman.png', title: 'image4'},
    {url: '/Leopard/Leopard_1.png', title: 'image5'},
    {url: '/QuickSilver875/quick-silver875_1.png', title: 'image6'},
    {url: '/Sundacer320/Sundacer320.jpg', title: 'image7'},
    {url: '/SunseekerPredator/sunseeker_1.png', title: 'image8'},
    {url: '/VanDutch/van-dutch_1.png', title: 'image9'},

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