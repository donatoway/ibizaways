/* eslint-disable @next/next/no-sync-scripts */
import "./style.css"
import './script'
const CarouselFun = () =>
{

  return (
    <div className="bodyCarousel">
    <div className="gallery">
        <div className="gallery-container">
          <img class="gallery-item gallery-item-1" src="/Sundacer320/Sundacer320_2.jpg" data-index="1"></img>
          <img class="gallery-item gallery-item-2" src="/Sundacer320/Sundacer320_3.jpg" data-index="2"></img>
          <img class="gallery-item gallery-item-3" src="/Sundacer320/Sundacer320_4.jpg" data-index="3"></img>
          <img class="gallery-item gallery-item-4" src="/Sundacer320/Sundacer320_5.jpg" data-index="4"></img>
          <img class="gallery-item gallery-item-5" src="/Sundacer320/Sundacer320_5.jpg" data-index="5"></img>
        </div>
        <div className="gallery-controls"></div>
    </div>
    <script src="script.js"></script>
    </div>
  )
}
export default CarouselFun;