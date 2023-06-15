/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/display-name */

import ActionAreaCard from "@/components/Card/CardClick";
import { ResponsiveAppBar } from "@/components/app-bar";
import { useRouter } from "next/router";
import {Whatsapp} from "@/components/whatsapp"
import { a } from "react-spring";
import { Social } from "@/components/Social";
/* eslint-disable import/no-anonymous-default-export */

const jetski = {name: "JETSKI TOUR", picture: "/Jetski/jetski-conta/jetskiConta0.png"}
const  boatNoLicence = {name :"BOAT NO LICENCE", picture: "/Boat-no-licence/Astec/Astec400.png"}
const snorkeling = {name : "SNORKELING EXCURSIONS", picture: "/snorkeling/snorkeling1.png" }
const snorkelingArena = {name : "SNORKEL TOUR OF COVES AND CAVES IN IBIZA", picture: "/EscursioneArena/escursioneArena.png" }
const jetBoat = {name : "JET BOAT 360", picture: "/jetBoat360/jetBoat1.jpg"}
export default function  ()
{
    const router = useRouter()
    return (
        <div>
            <ResponsiveAppBar />
            <div>

            
            <a onClick={() => router.push("/Excursions/Excursions-jetski")}>
                <ActionAreaCard {...jetski}/>
            </a>

            <a onClick={() => router.push("/Excursions/Excursions-boat-no-licence")}>
                <ActionAreaCard {...boatNoLicence}/>
            </a>

            <a onClick={() => router.push("/Excursions/Excursions-snorkeling")}>
                <ActionAreaCard {...snorkeling}/>
            </a>

            <a onClick={() => router.push("/Excursions/Excursions-Arena-snorkeling")}>
                <ActionAreaCard {...snorkelingArena}/>
            </a>

            <a onClick={() => router.push("/Excursions/Excursions-jetBoat")}>
                <ActionAreaCard {...jetBoat}/>
            </a>
            </div>
            <div style={{position:"relative",  textAlign: "center",}}>
            <Social />
            </div>
            <Whatsapp></Whatsapp>
        </div>


    )
}