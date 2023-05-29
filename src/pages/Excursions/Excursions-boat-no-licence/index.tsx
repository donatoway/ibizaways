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
import boatNoLicence from "./boat-no-licence";
/* eslint-disable import/no-anonymous-default-export */


function sendProp (obj:any)
{
  Router.push({
    pathname: `/Excursions/Excursions-boat-no-licence/boat-detail`,
    query: {
      name: obj.name,
      description: obj.description,
      picture: obj.picture,
      images: obj.images,
      halfDay: obj.halfDay,
      fullDay: obj.fullDay,
      halfDay_hours: obj.halfDay_hours,
      fullDay_hours: obj.fullDay_hours
    }
  })
}

export default function ()
{

    return (
        <div>
            <ResponsiveAppBar />
            {boatNoLicence.map((obj) => (
              <a onClick={() => sendProp(obj)}>
                 <ActionAreaCard {...obj}/>
              </a>
            ))}
        </div>
    )
} 