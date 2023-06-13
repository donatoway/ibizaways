/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { useRouter } from "next/router"
import {ResponsiveAppBar} from "@/components/app-bar/"
import { Contact } from "@/components/contactEmail";
import { List } from "@mui/material";
import { Whatsapp } from "@/components/whatsapp";
import Carousel from "@/components/Carousel-react/Carousel"
const snorkDetail = 
    {
        key: 'snork',
        name: "SNORKELING EXCURSION",
        priceOneP: 60,
        priceTwoP: 100,
        description: "Amazing 2 hours excursion visiting the most beautiful beaches of Ibiza, Cala Bassa and Cala Conta, villas of the rich and famous, scenic spots, cliffs, caves and other islands only accesible by boat like the kiss cave, s’illa des bosc and more around the natural park. Includes 1hour stop to swim and snorkel in one of the crystal water beaches and we provide snorkel gear, the exhilarating bladefish sea jet, free drinks and good music on board.",
        picture: "/snorkeling/snorkeling1.png",
        images: [   "/snorkeling/snorkeling1.png",
        "/snorkeling/snorkeling2.png",
        "/snorkeling/snorkeling3.png",
        "/snorkeling/snorkeling4.png",
        "/snorkeling/snorkeling5.png",
        "/snorkeling/snorkeling6.png",
        "/snorkeling/snorkeling7.png",
        "/snorkeling/snorkeling8.png",
    
    ],
}

export default function ()
{
    const router = useRouter();

    return (
        <div>
           <div>
              <ResponsiveAppBar />
                <h1 style={{textAlign:"center"}}>{snorkDetail.name}</h1>
            </div>
            <div>
              <Carousel obj={snorkDetail}></Carousel>
            </div>
            <div style={{
                    background: "linear-gradient(90deg, rgba(82,177,205,0.6391150210084033) 0%, rgba(147,193,190,0.3197872899159664) 32%, rgba(198,222,227,0.20774247198879547) 76%)", marginTop:"120px", marginLeft:"80px",marginRight:"80px", textAlign:"center", border:"4%", fontSize:"14px", padding:"8%", borderRadius:"1%"}}>
                <h2>PRICE 1 PERSON : {snorkDetail.priceOneP},00€</h2>
                <h2>PRICE 2 PEOPLES : {snorkDetail.priceTwoP},00€</h2>
                <h4>DEPARTURE: 12:00 / 16:00</h4>
            </div>
            <div style={{margin:"8%", textAlign:"left",paddingLeft:"10%", paddingRight:"10%", padding:"8%", border:"4%", background: "linear-gradient(90deg, rgba(113,221,252,0.47524947478991597) 0%, rgba(158,222,218,0.3197872899159664) 32%, rgba(198,222,227,0.11390493697478987) 76%)", borderRadius:"1%"}}>
                <p style={{fontWeight:"lighter"}}>
                    {snorkDetail.description}
                </p>
                <h4>General Info</h4>
                <List>
                    <ul>✓ Suitable for all ages.</ul>
                    <ul>✓ If you do not know how to swim, we will give you a special vest.</ul>
                    <ul>✓ 2hr  duration day time trips and sunset</ul>
                    <ul>✓ Includes snorkel equipment (mask and tube), Paddle SUP on board.</ul>
                    <ul>✓ Maximum 12 passengers per slots times.</ul>
                    <ul>✓ Includes unlimited soft drinks</ul>
                </List>
            </div>

            <div>
                <Contact></Contact>
            </div>
            <Whatsapp></Whatsapp>
        </div>
    )
}