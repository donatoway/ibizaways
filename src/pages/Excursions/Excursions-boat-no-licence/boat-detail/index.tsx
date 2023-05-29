/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import CarouselFun from "@/components/Carousel/carousel";
import { useRouter } from "next/router"
import {ResponsiveAppBar} from "@/components/app-bar/"
import { Contact } from "@/components/contactEmail";

export default function ()
{
    const router = useRouter();

    const {query: {name, picture, halfDay, fullDay, description, images, halfDay_hours, fullDay_hours} } = router;

    const props = {name, picture, halfDay, fullDay, description, images, halfDay_hours, fullDay_hours} ;


    return (
        <div>
           <div>
              <ResponsiveAppBar />
                <h1 style={{textAlign:"center"}}>{props.name}</h1>
              <CarouselFun {...props} ></CarouselFun>
            </div>

            <div style={{
                    background: "linear-gradient(90deg, rgba(82,177,205,0.6391150210084033) 0%, rgba(147,193,190,0.3197872899159664) 32%, rgba(198,222,227,0.20774247198879547) 76%)", marginTop:"120px", marginLeft:"80px",marginRight:"80px", textAlign:"center", border:"4%", fontSize:"14px", padding:"8%", borderRadius:"10%"}}>
                <h2>PRICE HALF DAY: {props.halfDay},00€</h2>
                <h2>PRICE FULL DAY : {props.fullDay},00€</h2>
                <h3>Half day hours: {props.halfDay_hours}</h3>
                <h3>Half day hours: {props.fullDay_hours}</h3>
            </div>
            <div style={{margin:"8%", textAlign:"left",paddingLeft:"10%", paddingRight:"10%", padding:"8%", border:"4%", background: "linear-gradient(90deg, rgba(113,221,252,0.47524947478991597) 0%, rgba(158,222,218,0.3197872899159664) 32%, rgba(198,222,227,0.11390493697478987) 76%)", borderRadius:"10%"}}>
                <h4 style={{fontFamily:"sans-serif"}}>
                    {props.description}
                </h4>
            </div>

            <div>
                <Contact></Contact>
            </div>
        </div>
    )
}