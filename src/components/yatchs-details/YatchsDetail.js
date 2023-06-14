/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { useRouter } from "next/router"
import {ResponsiveAppBar} from "@/components/app-bar/"
import { Contact } from "@/components/contactEmail";
import {Whatsapp} from "@/components/whatsapp"
import Image from "next/image";
import Carousel from '@/components/Carousel-react/Carousel'
const YatchsDetails = ({props}) => 
{
    return (
        <div>
           <div>
                <h1 style={{textAlign:"center"}}>{props.name}</h1>
            </div>

            <div>
                {
                    <Carousel obj={props}/>
                }
            </div>

            <div>
                {
                    props.info.map((obj) => {
                       return ( <Image 
                            src={obj}
                            width={500}
                            height={800}
                            style={{width:"100%", height:"100%"}}
                            alt={obj}
                        >

                        </Image>)
                    })
                }
            </div>
            <Whatsapp></Whatsapp>
        </div>
    )
}
export default YatchsDetails;