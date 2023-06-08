/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { useRouter } from "next/router"
import {ResponsiveAppBar} from "@/components/app-bar/"
import { Contact } from "@/components/contactEmail";
import { Whatsapp } from "@/components/whatsapp";
import  Image  from "next/image";

const boatNoLicence = [
    {
        key: 'astec',
        name: "ASTEC 400",
        halfDay: 200,
        fullDay:300,
        halfDay_hours: "11:00-15:00 / 16:00-20:00",
        fullDay_hours: "11: 00-20:00",
        description: "The Boat that does not require license. Ideal for discovering the idyllic coves and corners such as Cala Conta, Cala Bassa, Port des Torrent, Cala Salada, crystal clear waters and caves. The bow solarium is ideal for relaxing and enjoying the sun. It has an awning and bathing ladders that make access to the water easy and comfortable. Enjoy a day with your friends surrounded by unique scenery. Fuel is included in the price! Embarcación que no requiere titulación. Ideal para descubrir las idílicas calas y rincones como Cala conta, Cala Bassa, Port des Torrent, Cala Salada, aguas cristalinas y cuevas. El solárium de proa es ideal para relajarse y disfrutar del sol. Dispone de toldo, y escalas de baño que hacen que el acceso al agua sea fácil y cómodo. Disfruta de un día con tus rodeado de un paisaje único. El combustible está incluido en el precio! Rent one of our boats as a couple or with friends and enjoy the best beaches and sunsets on the island of Ibiza. Enjoy the pleasure of navigating our crystal clear waters carrying the boat yourself. Our boats are very easy to handle. Motorboat of 4.50 meters with a 15cv motor very easy to drive, with all the necessary equipment such as anchor, bimini awning, fridge, mats, diving mask and all safety equipment. All included! Maximum 4 persons per boat!",
        picture: "/Boat-no-licence/Astec/Astec400.png",
        images: ["/Boat-no-licence/Astec/Astec400_2.png",
        "/Boat-no-licence/Astec/Astec400.png",
    ],
    },
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
    },
    {
        key: 'OLBAP KATAMARAN',
        name: "OLBAP KATAMARAN",
        halfDay:  250,
        fullDay: 350,
        halfDay_hours: "11:00-15:00 / 16:00-20:00",
        fullDay_hours: "11: 00-20:00",
        description: "Impressive catamaran of 4. 50 meters with capacity for 6 adults, with an incredible free on board that makes you feel safe when sailing with children, a 15 hp motor catamaran that is rented WITHOUT LICENSE and with which you can visit the wonderful coves as Cala conta, Cala bassa, Cala salada, island conejera, caves and crystal clear waters, enjoying an unforgettable ride, is equipped with bimini top and bow solarium, spacious and comfortable deck to enjoy sailing. Rent one of our boats as a couple or with friends and enjoy the best beaches and sunsets on the island of Ibiza. Enjoy the pleasure of navigating our crystal clear waters carrying the boat yourself. Our boats are very easy to handle.Motorboat of 5,00 meters with a 15cv motor very easy to drive, with all the necessary equipment such as anchor, bimini awning, fridge, mats, diving mask and all safety equipment. All included! Maximum 6 persons per boat!",
        picture: "/Boat-no-licence/Olmap/Olmap1.png",
        images: ["/Boat-no-licence/Olmap/Olmap1.png",
        "/Boat-no-licence/Olmap/Olmap2.png",
        "/Boat-no-licence/Olmap/Olmap3.png",
        "/Boat-no-licence/Olmap/Olmap4.png",
        "/Boat-no-licence/Olmap/Olmap5.png",
        "/Boat-no-licence/Olmap/Olmap6.png",
        "/Boat-no-licence/Dipol/Dipol9.png",
    ],
    },
    {
        key: 'ZODIAC MEDLINE',
        name: 'ZODIAC MEDLINE',
        halfDay:  350,
        fullDay: 450,
        halfDay_hours: "11:00-15:00 / 16:00-20:00",
        fullDay_hours: "11: 00-20:00",
        description: "Impressive zodiac with capacity for 8 adults, with an incredible free on board that makes you feel safe when sailing with children, a 60 hp motor that is rented WITH LICENSE and with which you can visit the wonderful coves as Cala conta, Cala bassa, Cala salada, island conejera, caves and crystal clear waters, enjoying an unforgettable ride, is equipped with bimini top and bow solarium, spacious and comfortable deck to enjoy sailing. Rent one of our boats as a couple or with friends and enjoy the best beaches and sunsets on the island of Ibiza. Enjoy the pleasure of navigating our crystal clear waters carrying the boat yourself. Maximum 8 persons!",
        picture: "/Boat-no-licence/Zodiac/zodiac.png",
        images: ["/Boat-no-licence/Zodiac/zodiac.png", "/Boat-no-licence/Zodiac/zodiac.png"],
    },
  ]

let object = 
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

    
    object = boatNoLicence.find((obj) => obj.name == name);
    console.log(object);
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
                    object.images.map((o) => {
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