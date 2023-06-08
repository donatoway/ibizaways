/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import  Image  from "next/image";
import { CarouselFun } from "../CarouselFun";

  

const BoatDetail = ({props}) =>
{
    console.log(props);
    return (
        <div>
           <div>
                <h1 style={{textAlign:"center"}}>{props.name}</h1>
            </div>

           
            <div>
                {
                  /*  props.images.map((iter) => 
                    {
                        return (<Image 
                        src={iter}
                        width={300}
                        height={400}
                        alt="miao"
                        
                        />
                    )
                    })
                    */
                  <CarouselFun></CarouselFun>
                }
            </div>

            <div style={{
                    background: "linear-gradient(90deg, rgba(82,177,205,0.6391150210084033) 0%, rgba(147,193,190,0.3197872899159664) 32%, rgba(198,222,227,0.20774247198879547) 76%)", marginTop:"120px", marginLeft:"80px",marginRight:"80px", textAlign:"center", border:"4%", fontSize:"14px", padding:"8%", borderRadius:"2%"}}>
                <h2>PRICE HALF DAY: {props.halfDay},00€</h2>
                <h2>PRICE FULL DAY : {props.fullDay},00€</h2>
                <h3>Half day hours: {props.halfDay_hours}</h3>
                <h3>Half day hours: {props.fullDay_hours}</h3>
            </div>
            <div style={{margin:"8%", textAlign:"left",paddingLeft:"10%", paddingRight:"10%", padding:"8%", border:"4%", background: "linear-gradient(90deg, rgba(113,221,252,0.47524947478991597) 0%, rgba(158,222,218,0.3197872899159664) 32%, rgba(198,222,227,0.11390493697478987) 76%)", borderRadius:"2%"}}>
                <p style={{fontWeight:"lighter"}}>
                    {props.description}
                </p>
            </div> 
        </div>
    )
}
export default BoatDetail;