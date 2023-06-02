/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/display-name */

import ActionAreaCard from "@/components/Card/CardClick";
import { ResponsiveAppBar } from "@/components/app-bar";
import { Router, useRouter } from "next/router";
import jetskiList from "../Excursions-jetski/jetskiList";
import {Whatsapp} from "@/components/whatsapp"
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

            <Whatsapp></Whatsapp>
        </div>


    )
}