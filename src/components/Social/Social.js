/* eslint-disable react/jsx-no-undef */
import React, { useRef } from "react";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from "react";
// reactstrap components
import { Button } from "reactstrap";
import { Email } from "@mui/icons-material";
import { Contact } from "../contactEmail";

const  Social = () => {
        const [showEmail, setShowEmail] = useState(false);
        const ref = useRef(null)
        const doClick = () => ref.current?.scrollIntoView({behavior: 'smooth'});
        const router = useRouter();

        async function  onEmailSelect  () 
        {
                await setShowEmail(true);
                await  doClick();
        }
  return (
    <div>

        <Image 
                alt="insta"
                src="/instagram2.png"
                width={70}
                height={40}
                style={{margin:"30px", display:"inline"}}
                onClick={() => router.push("https://instagram.com/in_viaggio_con_donny?igshid=NTc4MTIwNjQ2YQ==")}
                />
        <Image 
                alt="email"
                src="/email2.png"
                width={70}
                height={40}
                style={{margin:"30px", display:"inline"}}
                onClick={onEmailSelect}
                />
        {
              showEmail == true && 
                <div ref={ref}>
                        <Contact></Contact>
                </div>  
        }
          
        
        </div>
  );
}
export default Social;