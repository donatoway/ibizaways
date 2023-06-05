/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/display-name */

import { ActionAreaCard } from "@/components/Card";
import { ResponsiveAppBar } from "@/components/app-bar";
import { Card } from "@mui/material";
import { useRouter } from "next/router";
import  Router  from "next/router";
import sunsetList from "../sunsetList";
import { Whatsapp } from "@/components/whatsapp";
/* eslint-disable import/no-anonymous-default-export */


function sendProp (obj:any)
{
  Router.push({
    pathname: `/SunsetTrip/SunsetTripDetail`,
    query: {
      name: obj.name,
      description: obj.description,
      picture: obj.picture,
      images: obj.images,
      price: obj.price,
      listDescription: obj.listDescription
    }
  })
}

export default function ()
{

    return (
        <div>
            <ResponsiveAppBar />
            {sunsetList.map((obj) => (
              <a onClick={() => sendProp(obj)}>
                 <ActionAreaCard {...obj}/>
              </a>
            ))}
            <Whatsapp></Whatsapp>
        </div>
    )
} 

export {sunsetList}