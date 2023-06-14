/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { useRouter } from "next/router"
import {ResponsiveAppBar} from "@/components/app-bar/"
import { Contact } from "@/components/contactEmail";
import { Whatsapp } from "@/components/whatsapp";
import { List } from "@mui/material";
import {Social} from "@/components/Social"
const sunsetList = [
    {
        key: 'Sunset Tour',
        name: "Sunset Tour",
        price: 70,
        hours: "3 hours before sunset",
        description: "This magnificent excursion in capital letters is designed for all audiences, from families to couples, it is the ideal activity for those explorers who want to visit the most beautiful, wild and remote places on the coast of Ibiza, being able to swim, snorkel and paddle surf. In the most crystalline waters of the island of Ibiza. We will sail from the port of San Antonio and head west, to the underwater quarry. From there, we will sail to Cala Conta, during approximately 20 minutes of navigation we will be able to observe the majestic beauty of the coast with its coves of pristine waters in the that if the state of the sea allows it, they will be shown the small caves that this coast has.",
        listDescription: ["We depart 3 hours before sunset, due to the sundown time changes, we will inform you one time you book, but the times are really close to booking times shown.",
        "Valid for  and non-swimmers (special life jacket is provided).",
        "Visiting two of the most beautiful beaches and sea caves in Ibiza.",
        "You will see the sunset with a glass of cava from our boat in front of CAFE MAMBO",
        "Unlimited drinks included. (Cava, beer, sangria, Fanta, water).",
        "Daily departures.",
        "Duration of 3 hours (1 swim stops + 1 to watch the sunset)",
        "Meeting point in the port of San Antonio.",
        "Includes snorkel equipment (mask and tube), 6 SUP Paddles on board. 1 Relaxing sea foam mattress",
        "Perfect excursion during your holidays to explore the coast of Ibiza and admire the underwater beauty of Ibiza with everything included.",
        "Highly recommended for a group of friends, couples or an incredible celebration."],
        picture: "/Sunset/trip70euro.jpeg",
        images: ["/Sunset/trip70euro.jpeg",
        "/Sunset/trip70euro2.jpeg",
        "/Sunset/trip70euro3.jpeg",
        "/Sunset/trip70euro4.jpeg",
    ],
    },
]

export default function ()
{
    const router = useRouter();

    const {query: {name, picture, description, images, price, listDescription} } = router;

    const props = {name, picture, description, images, price, listDescription} ;

    return (
        <div>
           <div>
              <ResponsiveAppBar />
                <h1 style={{textAlign:"center"}}>{props.name}</h1>
            </div>

            <div style={{
                    background: "linear-gradient(90deg, rgba(82,177,205,0.6391150210084033) 0%, rgba(147,193,190,0.3197872899159664) 32%, rgba(198,222,227,0.20774247198879547) 76%)", marginTop:"120px", marginLeft:"80px",marginRight:"80px", textAlign:"center", border:"4%", fontSize:"14px", padding:"8%", borderRadius:"2%"}}>
                <h2>PRICE: {props.price},00€</h2>
            </div>
            <div style={{margin:"8%", textAlign:"left",paddingLeft:"10%", paddingRight:"10%", padding:"8%", border:"4%", background: "linear-gradient(90deg, rgba(113,221,252,0.47524947478991597) 0%, rgba(158,222,218,0.3197872899159664) 32%, rgba(198,222,227,0.11390493697478987) 76%)", borderRadius:"2%"}}>
                <p style={{fontWeight:"lighter"}}>
                    {props.description}
                </p>
                
                <List>
                    {sunsetList.at(0)?.listDescription.map((obj) => 
                    (
                        
                        <ul>☞ {obj}</ul>
                    ))}
                 </List>
                
            </div>

            <div>
                <Contact></Contact>
            </div>
            <div style={{position:"relative",  textAlign: "center",}}>
                <Social />
            </div>
            <Whatsapp></Whatsapp>
        </div>
    )
}