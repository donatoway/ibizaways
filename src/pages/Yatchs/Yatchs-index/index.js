/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

import { ActionAreaCard } from "@/components/Card";
import { ResponsiveAppBar } from "@/components/app-bar";
import { Button } from "@mui/material";
import { RepeatOn } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import  Router  from "next/router";
import { title } from "process";
import  YatchDetail  from "./YatchsList.js";
import {Contact } from "@/components/contactEmail"
// eslint-disable-next-line import/no-anonymous-default-export
/*
const YatchDetail = [{
  name: "Sundacer320",
  description: Sundacer320,
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
}]
*/
function sendProp (obj)
{
  Router.push({
    pathname: '/Yatchs/Yatch-detail',
    query: {
      name: obj.name,
      description: obj.description,
      picture: obj.picture,
      images: obj.images,
      info: obj.info
    }
  })
}

export default function () {
  const router = useRouter();
    return (
      <div className="YatchPage">
      <Image
        src="/mare.jpg"
        alt="esvedra"
        quality="100"
        layout="fill"
        style={{opacity:"20%"}}
        />
          
            <ResponsiveAppBar />
            
            
          
            {YatchDetail.map((obj) => (
              <a onClick={() => sendProp(obj)}>
                 <ActionAreaCard {...obj}/>
              </a>
            ))}
       <Contact></Contact>
      </div>
    ) 
  }