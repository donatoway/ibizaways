/* eslint-disable react/jsx-no-undef */
import React from "react";
import Image from 'next/image'
import { useRouter } from 'next/navigation';

// reactstrap components
import { Button } from "reactstrap";

const  Social = () => {
    const router = useRouter();
  return (
    <div>

        <Image 
                alt="insta"
                src="/instagram2.png"
                width={70}
                height={40}
                style={{margin:"30px", display:"inline"}}
                onClick={() => router.push("http://google.it")}
                />
        <Image 
                alt="email"
                src="/email2.png"
                width={70}
                height={40}
                style={{margin:"30px", display:"inline"}}
                onClick={() => router.push("http://google.it")}
                />
        </div>
  );
}
export default Social;