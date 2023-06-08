/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { useRouter } from "next/router"
import {ResponsiveAppBar} from "@/components/app-bar/"
import { Contact } from "@/components/contactEmail";
import { Whatsapp } from "@/components/whatsapp";
import  Image  from "next/image";

const obj = 
{
    key: 'Dipol',
    name: "Dipol 450",
    halfDay:  230,
    fullDay:330,
    halfDay_hours: "11:00-15:00 / 16:00-20:00",
    fullDay_hours: "11: 00-20:00",
    description: "Rent one of our boats as a couple or with friends and enjoy the best beaches and sunsets on the island of Ibiza. Enjoy the pleasure of navigating our crystal clear waters carrying the boat yourself. Our boats are very easy to handle. Motorboat of 4.50 meters with a 15cv motor very easy to drive, with all the necessary equipment such as anchor, bimini awning, fridge, mats, diving mask and all safety equipment. All included! Maximum 5 persons per boat!",
    picture: "/Boat-no-licence/Dipol/Dipol2.png",
    images: ["/Boat-no-licence/Dipol/Dipol2.png",
    "/Boat-no-licence/Dipol/Dipol2.png",
    "/Boat-no-licence/Dipol/Dipol4.png",
    "/Boat-no-licence/Dipol/Dipol5.png",
    "/Boat-no-licence/Dipol/Dipol6.png",
    "/Boat-no-licence/Dipol/Dipol7.png",
    "/Boat-no-licence/Dipol/Dipol8.png",
    "/Boat-no-licence/Dipol/Dipol9.png",
    ],
}

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
            </div>

           { /*<div>
                <Image 
                    src="/VanDutch/van-dutch_1.png"
                    width={300}
                    height={400}
                    alt="miao"
                    
                    />
            </div>
    */}
            <div>
                {
                    obj.images.map((o) => {
                       return ( 
                       
                       <Image
                            src={o}
                            width={500}
                            height={400}
                            alt="ciao"
                        >
                        </Image>
                       )
                    })
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

            <div>
                <Contact></Contact>
            </div>
            <Whatsapp></Whatsapp>
        </div>
    )
}