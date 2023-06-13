/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { useRouter } from "next/router"
import {ResponsiveAppBar} from "@/components/app-bar/"
import { Contact } from "@/components/contactEmail";
import { List } from "@mui/material";
import { Whatsapp } from "@/components/whatsapp";
import  Carousel  from "@/components/Carousel-react/Carousel";

const jetBoatDetail = 
    {
        key: 'snork',
        name: "JET BOAT 360",
        price: 60,

        description: "come and try the unforgettable experience soak up with this High Speed Jet with us, if you really like strong emotions this is your trip in Ibiza.This boat that is like a giant water bike, makes turns, spins, and brakes¡¡, you will notice how the centrifugal force pushes you like a roller coaster, and you will experience sensations that you will never forget with our High Speed JET, besides it is not a simple one activity where we will perform these amazing pirouettes, at the same time, we will show you the most hidden places on the island. It is a very safe activity where our experienced skipper will notify beforehand the whole pirouette passage that he is going to make, so grab that he comes curves! And experience with us 2G accelerations along with the experience of soaking with your tops and braking. Nobody will leave indifferent in this magnificent adventure.",
        requirements: "Due to the nature of the activity, it is not recommended for pregnant, people with back problems, or minors with heights less than 120 cm.",
        noIncluse: "Service of photos and videos, snacks, drinks, and transfers to the hotel.",
        picture: "/jetBoat360/jetBoat1.jpg",
        images: [   "/jetBoat360/jetBoat1.jpg",
        "/jetBoat360/jetBoat2.jpg",
        "/jetBoat360/jetBoat3.jpg"
    ],
}

export default function ()
{
    const router = useRouter();

    return (
        <div>
           <div>
              <ResponsiveAppBar />
                <h1 style={{textAlign:"center"}}>{jetBoatDetail.name}</h1>
            </div>

            <Carousel obj={jetBoatDetail}></Carousel>

            <div style={{
                    background: "linear-gradient(90deg, rgba(82,177,205,0.6391150210084033) 0%, rgba(147,193,190,0.3197872899159664) 32%, rgba(198,222,227,0.20774247198879547) 76%)", marginTop:"120px", marginLeft:"80px",marginRight:"80px", textAlign:"center", border:"4%", fontSize:"14px", padding:"8%", borderRadius:"1%"}}>
                <h2>PRICE : {jetBoatDetail.price},00€</h2>
            </div>
            <div style={{margin:"8%", textAlign:"left",paddingLeft:"10%", paddingRight:"10%", padding:"8%", border:"4%", background: "linear-gradient(90deg, rgba(113,221,252,0.47524947478991597) 0%, rgba(158,222,218,0.3197872899159664) 32%, rgba(198,222,227,0.11390493697478987) 76%)", borderRadius:"1%"}}>
                <h1>Description</h1>
                <p style={{fontWeight:"lighter"}}>
                    {jetBoatDetail.description}
                </p>
                <h4>General Info</h4>
                <List>
                    <ul>✓ We meet at our diving club</ul>
                    <ul>✓ Fifty minutes of Amazing, Thrilling  Excursion.</ul>
                    <ul>✓ You will visit beaches, coves, and caves.</ul>
                    <ul>✓ No age limit, minimum height 120 cm.be sure that  all the passengers accomplish it.</ul>
                    <ul>✓ If any booking does not fit the minimum height, it will not be able to preform the activity, with no refund in any case.</ul>
                    <ul>✓ Due to the nature of the activity, it is not recommended for pregnant, people with back problems, or minors with heights less than 120 cm.</ul>
                    <ul>✓ Those who own eyeglasses or contact lenses can come perfectly.</ul>
                    <ul>✓ We provide life jackets (mandatory).</ul>
                    <ul>✓ We keep your belongings safe during the experience.</ul>
                </List>

                <p></p>
            </div>

            <div>
                <Contact></Contact>
            </div>
            <Whatsapp></Whatsapp>
        </div>
    )
}