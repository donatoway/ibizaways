/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { useRouter } from "next/router"
import {ResponsiveAppBar} from "@/components/app-bar/"
import  {Contact}  from "@/components/contactEmail";
import { List } from "@mui/material";
import { Whatsapp } from "@/components/whatsapp";
import Image from "next/image";
import Carousel from "@/components/Carousel-react/Carousel";

const snorkDetail = 
    {
        key: 'snork',
        name: "SNORKEL TOUR OF COVES AND CAVES IN IBIZA",
        description: "The Ibiza  Beaches and Caves Snorkeling Tour is a magnificent excursion of 3 hours duration for €60, valid for all audiences where you can explore snorkelling, paddle SUP or swimming safely in the most idyllic and inaccessible places on the Ibiza coast visiting Cala Bassa, the Nature Reserves of Poniente, Cala Conta and the most spectacular Sea Caves on the island of Ibiza. All in one excursion and with all the necessary equipment included",
        listDescription: [  "Valid for all audience and non swimmers (special life jacket provided).",
                            "Visiting two of the most beautiful beaches and one of the legendary sea caves of Ibiza.",
                            "Unlimited soft drinks incl. (beer, sangria, Fanta, water).",
                            "Daily departures",
                            "180 minutes of Pure Wild  Adventure",
                            "2 swim stops + visiting one sea cave",
                            "Meeting Point in San Antonio port.",
                            "Includes snorkel equipment (mask and tube),  Paddle SUP on board. 1 Relaxing Sea foam Mat",
                            "Perfect excursion during your holidays to explore Ibiza coast and to admire the underwater beauty of Ibiza with all included.",
                            "Highly recommended for families, a group of friends or an amazing celebration."
         ],
        Comte: "Once we reach Cala Conta area, we will anchor in a dream place with turquoise blue waters and whose transparency will leave us astonished, giving us the feeling of being in that authentic paradise that we have always sought, and we have finally found it.At this first stop of about 50 minutes approx., we can swim, snorkel, paddle surf and of course, relax in this idyllic place of sublime beauty. During the stay, we will be able to observe the majesty of the reserve islands that make up the natural reserves of the west such as the conejera island and the forest island that is located in front of Cala Conta.These anchorages of blue waters and white sands are home to very curious fishes, called Obladas, whose black speck on the tail differentiates them from others clearly, these fish form large banks that will wrap us without touching us, and if we put on snorkelling masks we can attend a beautiful spectacle watching how they swim around us.",
        Comte2: "After this first stop, we will navigate to the Torre des Savinar, erroneously called the Pirate Tower, This watchtower was used in the past to spot enemy ships or the feared Berber pirates, that ravaged the island fiercely, and heading towards Cala Bassa, we will sail through the interior of this beautiful cove, where we will see the caves of Cala Bassa on our left, where we will make a quick stop in front of one of them.we will lift anchors to anchor in a small bay not too far away from there, where the tranquillity even in August it is ensured.",
        CalaBassa: "In this second great stop, we will be able to do paddle surfing and snorkelling in crystal clear waters with backgrounds in which sand, rocks and seagrass meadows alternate, and we will be able to observe the varied marine fauna such as octopuses, rockfish and of course, the curious Obladas.After this last stop for swimming, snorkelling and paddle, we will enter the largest cave on the island of Ibiza with the boat, The legendary Pirate Cave, where we will be able to observe the ceiling and the grandeur of it during this brief stay in the cave . Once we leave it with the boat, we will head to the port of San Antonio without stopping where we will arrive in about 25 minutes and with a great experience in our hearts.",
        picture: "/EscursioneArena/escursioneArena.png",
        price: 60,
        images: [   "/EscursioneArena/escursioneArena.png",
        "/EscursioneArena/escursioneArena2.png",
        "/EscursioneArena/escursioneArena3.png",
        "/EscursioneArena/escursioneArena4.png",
        "/EscursioneArena/escursioneArena5.png",
    
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
                <h2>PRICE 1 PERSON : {snorkDetail.price},00€</h2>
                <h3>departure time: 10:30 am / 14:00 pm</h3>
            </div>
            <div style={{margin:"8%", textAlign:"left",paddingLeft:"10%", paddingRight:"10%", padding:"8%", border:"4%", background: "linear-gradient(90deg, rgba(113,221,252,0.47524947478991597) 0%, rgba(158,222,218,0.3197872899159664) 32%, rgba(198,222,227,0.11390493697478987) 76%)", borderRadius:"1%"}}>
                <p style={{fontWeight:"lighter"}}>
                    {snorkDetail.description}
                </p>
                <h4>General Info</h4>
                <List>

                    {
                        snorkDetail.listDescription.map( (obj) => (
                            <ul>✓ {obj}</ul>
                        ) )
                    }
                </List>
                <h1>TOUR DATAILS</h1>
                <List>
                    <h2>1ST SWIM STOP AT CALA CONTA AREA</h2>
                    <Image 
                        alt="cala comte"
                        src="/EscursioneArena/escursioneArena3.png"
                        width={350}
                        height={280}
                    />

                    <p style={{marginBottom:"10px"}}>{snorkDetail.Comte}</p>
                    <p>{snorkDetail.Comte2}</p>

                    <h2>2D SWIM STOP AT CALA BASSA AREA</h2>
                    <Image 
                        alt= "cala bassa"
                        src="/EscursioneArena/escursioneArena4.png"
                        width={350}
                        height={280}
                    />

                    <p>{snorkDetail.CalaBassa}</p>


                    
                </List>
                <p>

                </p>
            </div>

            <div>
                <Contact></Contact>
            </div>
            <Whatsapp></Whatsapp>
        </div>
    )
}