/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import { ActionAreaCard } from "@/components/Card";
import { ResponsiveAppBar } from "@/components/app-bar";
import Image from "next/image";
import { useEffect } from 'react';
import { useRouter } from "next/router";
import {Contact} from "@/components/contactEmail"
import {Whatsapp} from "@/components/whatsapp"
// eslint-disable-next-line import/no-anonymous-default-export



export default function () {
    const router = useRouter()

    const {
      query : {name, description, picture, images, info}
    } = router;

    const props = 
    {
      name,
      description,
      picture,
      images,
      info
    }

    return (
      <div>
            <div>
              <ResponsiveAppBar />
                <h1 style={{textAlign:"center"}}>{props.name}</h1>
            </div>

        {
          props.info.map((p) => 
          (
            // eslint-disable-next-line react/jsx-key
            <div  style={{display:"flow", marginTop:"20%", textAlign:"center", width:"100%", height:"100%"}}>
            {
              <Image
              src={p}
              width={'300'}
              height={'450'}
              alt="Picture of the author"
              style={{display:"flex", width:"100%", height:"100%"}}
              
            />}
             
            </div>
          ))
        }
        <Whatsapp></Whatsapp>
      <Contact></Contact>
      </div>
    ) 
  }