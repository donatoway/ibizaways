/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/display-name */

import { ActionAreaCard } from "@/components/Card";
import { ResponsiveAppBar } from "@/components/app-bar";
import { Card } from "@mui/material";
import { useRouter } from "next/router";
import  Router  from "next/router";
import jetskiList from "./jetskiList";
/* eslint-disable import/no-anonymous-default-export */

function sendProp (obj:any)
{
  Router.push({
    pathname: `/Excursions/Excursions-jetski/jetski-detail`,
    query: {
      name: obj.name,
      description: obj.description,
      picture: obj.picture,
      images: obj.images,
      priceHighSeason: obj.priceHighSeason,
      priceLowSeason: obj.priceLowSeason,
    }
  })
}

export default function ()
{

    return (
        <div>
            <ResponsiveAppBar />
            {jetskiList.map((obj) => (
              <a onClick={() => sendProp(obj)}>
                 <ActionAreaCard {...obj}/>
              </a>
            ))}
        </div>
    )
} 