/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
'use client'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';
import { ActionAreaCard } from "@/components/Card";
import { ResponsiveAppBar } from "@/components/app-bar";
import { RepeatOn } from "@mui/icons-material";
import Image from "next/image";
import { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export

const YatchDetail = {
  name: "Marine",
  info: "questo yatch e bellissimo ne"
} 

export default function (params) {
    const router = useRouter();
    
    useEffect(() => {
        alert(params.router.query.name); // Alerts 'Someone'
      }, [params.router.query]);

    return (
      <div className="YatchPage">
      <Image
        src="/yatch2.jpg"
        alt="esvedra"
        quality="100"
        layout="fill"
        style={{opacity:"20%"}}
        />
        <ResponsiveAppBar />
        
        CREARE UNA SCHEDA PRODOTTO
        IMMAGINE PRINCIPALE
        sotto un listato di immagini
        A SINISTRA LA SCHEDA TECNICA
        SOTTO FORM DA COMPLETARE PER RICHIEDERE INFORMAZIONI
      </div>
    ) 
  }