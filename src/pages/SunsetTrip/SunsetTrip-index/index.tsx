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
import { Whatsapp } from "@/components/whatsapp";
/* eslint-disable import/no-anonymous-default-export */

const sunsetList = [
  {
      key: 'Sunset Tour',
      name: "Sunset Tour",
      price: 70,
      hours: "3 hours before sunset",
      description: "This magnificent excursion in capital letters is designed for all audiences, from families to couples, it is the ideal activity for those explorers who want to visit the most beautiful, wild and remote places on the coast of Ibiza, being able to swim, snorkel and paddle surf. In the most crystalline waters of the island of Ibiza. We will sail from the port of San Antonio and head west, to the underwater quarry. From there, we will sail to Cala Conta, during approximately 20 minutes of navigation we will be able to observe the majestic beauty of the coast with its coves of pristine waters in the that if the state of the sea allows it, they will be shown the small caves that this coast has.",
      listDescription: ["We depart 3 hours before sunset, due to the sundown time changes, we will inform you one time you book, but the times are really close to booking times shown.",
      "Valid for  and non-swimmers (special life jacket is provided).",
      "Visiting two of the most beautiful beaches and sea caves in Ibiza.",
      "You will see the sunset with a glass of cava from our boat in front of CAFE MAMBO",
      "Unlimited drinks included. (Cava, beer, sangria, Fanta, water).",
      "Daily departures.",
      "Duration of 3 hours (1 swim stops + 1 to watch the sunset)",
      "Meeting point in the port of San Antonio.",
      "Includes snorkel equipment (mask and tube), 6 SUP Paddles on board. 1 Relaxing sea foam mattress",
      "Perfect excursion during your holidays to explore the coast of Ibiza and admire the underwater beauty of Ibiza with everything included.",
      "Highly recommended for a group of friends, couples or an incredible celebration."],
      picture: "/Sunset/trip70euro.jpeg",
      images: ["/Sunset/trip70euro.jpeg",
      "/Sunset/trip70euro2.jpeg",
      "/Sunset/trip70euro3.jpeg",
      "/Sunset/trip70euro4.jpeg",
  ],
  },
]


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