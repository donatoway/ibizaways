/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import { ActionAreaCard } from "@/components/Card";
import { ResponsiveAppBar } from "@/components/app-bar";
import Image from "next/image";
import { useEffect } from 'react';
import { useRouter } from "next/router";
import {Contact} from "@/components/contactEmail"
import {Whatsapp} from "@/components/whatsapp"

const YatchDetail = [{
  name: "Sundacer 320",
  description: "The Sundancer 320 shatters all assumptions, reimagining the balance of indoor and outdoor space with a boat that is as versatile as it is elegant. Enjoy a crowd-pleasing cockpit, a remarkably comfortable cabin, and a new bow lounge area sure to be the most popular seat in the house. You'll enjoy the natural world as never before - and you'll wonder how you ever settled for anything but this. The Sundancer 320, only from Sea Ray",
  picture: "/Sundacer320/Sundacer320_4.jpg",
  images: ["/Sundacer320/Sundacer320.jpg",
  "/Sundacer320/Sundacer320_2.jpg",
  "/Sundacer320/Sundacer320_3.jpg",
  "/Sundacer320/Sundacer320_4.jpg",
  "/Sundacer320/Sundacer320_5.jpg",
  "/Sundacer320/Sundacer320_6.jpg"],
  info: ["/Sundacer320/info/Sundacer320Info1.png",
        "/Sundacer320/info/Sundacer320Info2.png",
        "/Sundacer320/info/Sundacer320Info3.png",
        "/Sundacer320/info/Sundacer320Info4.png"]
},
{
  name: "38 Formula Tech",
  description: "The Sundancer 320 shatters all assumptions, reimagining the balance of indoor and outdoor space with a boat that is as versatile as it is elegant. Enjoy a crowd-pleasing cockpit, a remarkably comfortable cabin, and a new bow lounge area sure to be the most popular seat in the house. You'll enjoy the natural world as never before - and you'll wonder how you ever settled for anything but this. The Sundancer 320, only from Sea Ray",
  picture: "/Formula38Fastech/formula2.png",
  images: [
  "/Formula38Fastech/formula2.png",
  "/Formula38Fastech/formula3.png",
  "/Formula38Fastech/formula4.png",
  "/Formula38Fastech/formula5.png",
  "/Formula38Fastech/formula6.png"],
  info: ["/Formula38Fastech/formula38Info.png", "/hoursInfo.png"
        ]
},
{
  name: "21 Brig 650",
  description: "",
  picture: "/speedy-gonzalez/speedy-gonzalez1.png",
  images: [
    "/speedy-gonzalez/speedy-gonzalez1.png",
    "/speedy-gonzalez/speedy-gonzalez2.png",
    "/speedy-gonzalez/speedy-gonzalez3.png",
    "/speedy-gonzalez/speedy-gonzalez4.png",
    "/speedy-gonzalez/speedy-gonzalez5.png",
    "/speedy-gonzalez/speedy-gonzalez6.png"],
  info: ["/speedy-gonzalez/speedy-gonzalezInfo.png", "/hoursInfo.png"
        ]
},
{
  name: "25 Chaparral 257",
  description: "",
  picture: "/Chaparral257/Chaparral257_1.png",
  images: [
    "/Chaparral257/Chaparral257_1.png",
    "/Chaparral257/Chaparral257_3.png",
    "/Chaparral257/Chaparral257_4.png",
    "/Chaparral257/Chaparral257_5.png",],
  info: ["/Chaparral257/Chaparral257Info.png", "/hoursInfo.png"
        ]
},
{
  name: "30 QuickSilver 875 Thunder",
  description: "",
  picture: "/QuickSilver875/quick-silver875.png",
  images: [
    "/QuickSilver875/quick-silver875.png",
    "/QuickSilver875/quick-silver875_1.png",
    "/QuickSilver875/quick-silver875_2.png",
    "/QuickSilver875/quick-silver875_3.png",
    "/QuickSilver875/quick-silver875_4.png"],
  info: [ "/QuickSilver875/quick-silver875Info.png", "/hoursInfo.png"
        ]
},
{
  name: "40 Sacs Carrera",
  description: "",
  picture: "/Carrera40sacs/Carrera40.png",
  images: [
    "/Carrera40sacs/Carrera40_2.png",
    "/Carrera40sacs/Carrera40_3.png",
    "/Carrera40sacs/Carrera40_4.png",
    "/Carrera40sacs/Carrera40_5.png",
    "/Carrera40sacs/Carrera40_1.png",],
  info: [ "/QuickSilver875/quick-silver875Info.png", "/hoursInfo.png"
        ]
},
{
  name: "40 Cayman",
  description: "",
  picture: "/Cayman/Cayman.png",
  images: [
    "/Cayman/Cayman_2.png",
    "/Cayman/Cayman_3.png",
    "/Cayman/Cayman_4.png",
    "/Cayman/Cayman_5.png",
    "/Cayman/Cayman_6.png",
    "/Cayman/Cayman_7.png"],
  info: [  "/Cayman/CaymanInfo.png", "/hoursInfo.png"
        ]
},
{
  name: "40 Van Dutch Smart Ass",
  description: "",
  picture:"/VanDutch/van-dutch.png",
  images: [
    "/VanDutch/van-dutch.png",
    "/VanDutch/van-dutch_1.png",
    "/VanDutch/van-dutch_2.png",
    "/VanDutch/van-dutch_3.png",
    "/VanDutch/van-dutch_4.png"],
  info: [  "/VanDutch/van-dutchInfo.png", "/hoursInfo.png"
        ]
},
{
  name: "42 Canados Bandido",
  description: "",
  picture:"/Canados42/Canados42.png",
  images: [
    "/Canados42/Canados42.png",
    "/Canados42/Canados42_2.png",
    "/Canados42/Canados42_3.png",
    "/Canados42/Canados42_4.png",
    "/Canados42/Canados42_5.png",],
  info: [ "/Canados42/Canados42Info.png", "/hoursInfo.png"
        ]
},
{
  name: "v58 Princess",
  description: "",
  picture:"/v58Princess/v58princess.png",
  images: [
    "/v58Princess/v58princess_2.png",
    "/v58Princess/v58princess_3.png",
    "/v58Princess/v58princess_4.png",
    "/v58Princess/v58princess_5.png",
    "/v58Princess/v58princess_6.png",],
  info: [ "/v58Princess/v58princessInfo.png",, "/hoursInfo.png"
        ]
},
{
  name: "68 SUNSEEKER PREDATOR CHARLIE FOX",
  description: "",
  picture:"/SunseekerPredator/sunseeker_1.png",
  images: [
    "/SunseekerPredator/sunseeker_2.png",
    "/SunseekerPredator/sunseeker_3.png",
    "/SunseekerPredator/sunseeker_4.png",
    "/SunseekerPredator/sunseeker_5.png",],
  info: [ "/SunseekerPredator/sunseekerInfo.png", "/hoursInfo.png"
        ]
},
{
  name: "7O BAIA ITALIA CHILLI",
  description: "",
  picture:"/BaiaItalia/baia-italia_1.png",
  images: [
    "/BaiaItalia/baia-italia_2.png",
    "/BaiaItalia/baia-italia_3.png",
    "/BaiaItalia/baia-italia_4.png",
    "/BaiaItalia/baia-italia_5.png",],
  info: [ "/BaiaItalia/baia-italiaInfo.png", "/hoursInfo.png"
        ]
},
{
  name: "CANADOS 90",
  description: "",
  picture:"/Canados90/Canados90_1.png",
  images: [
    "/Canados90/Canados90_1.png",
    "/Canados90/Canados90_2.png",
    "/Canados90/Canados90_3.png",
    "/Canados90/Canados90_4.png",
    "/Canados90/Canados90_5.png",],
  info: [ "/Canados90/Canados90Info.png", "/hoursInfo.png"
        ]
},
{
  name: "90 LEOPARD 27 AYA",
  description: "",
  picture:"/Leopard/Leopard_1.png",
  images: [
    "/Leopard/Leopard_1.png",
    "/Leopard/Leopard_2.png",
    "/Leopard/Leopard_3.png",
    "/Leopard/Leopard_4.png",
    "/Leopard/Leopard_5.png",
    "/Leopard/Leopard_6.png",],
  info: [ "/Leopard/LeopardInfo.png","/hoursInfo.png"
        ]
},
{
  name: "SUNSEEKER PREDATOR 102",
  description: "",
  picture:"/Sunseeker102/Sunseeker102_1.png",
  images: [
    "/Sunseeker102/Sunseeker102_1.png",
    "/Sunseeker102/Sunseeker102_2.png",
    "/Sunseeker102/Sunseeker102_3.png",
    "/Sunseeker102/Sunseeker102_4.png",
    "/Sunseeker102/Sunseeker102_5.png"],
  info: [ "/Sunseeker102/Sunseeker102Info.png","/hoursInfo.png"
        ]
}
]


export default async function  () 
{
    const router = useRouter()
    const {
      query : {name}
    } = router;
   
    let prop = { name: "SUNSEEKER PREDATOR 102",
    description: "",
    picture:"/Sunseeker102/Sunseeker102_1.png",
    images: [
      "/Sunseeker102/Sunseeker102_1.png",
      "/Sunseeker102/Sunseeker102_2.png",
      "/Sunseeker102/Sunseeker102_3.png",
      "/Sunseeker102/Sunseeker102_4.png",
      "/Sunseeker102/Sunseeker102_5.png"],
    info: [ "/Sunseeker102/Sunseeker102Info.png","/hoursInfo.png"
          ]
    }

    async function findYatch ()
    {
      for (let index = 0; index < YatchDetail.length; index++) {
        if (name == YatchDetail.at(index).name)
        {
          prop = YatchDetail.at(index);
        }
        
      }
    }
    await findYatch();
    return (
      <div>
            <div>
              <ResponsiveAppBar />
                <h1 style={{textAlign:"center"}}>{prop.name}</h1>
            </div>
            
      
      
            <div  style={{display:"flow", marginTop:"20%", textAlign:"center", width:"100%", height:"100%"}}>
              <img
              src={prop.info.at(0)}
              width={'300'}
              height={'450'}
              alt="Picture of the author"
              style-={{display:"flex", width:"100%", height:"100%"}}
            />
            </div>
        <Whatsapp></Whatsapp>
      <Contact></Contact>
      </div>

    ) 
  }