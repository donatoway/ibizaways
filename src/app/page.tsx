'use client'
import Image from 'next/image'
import {ResponsiveAppBar} from '../components/app-bar'
import { Component } from 'react'
import { createContext } from 'react'
import {Slider} from '../components/HomeSlider'
import IMAGE from 'next/image'
import { Opacity } from '@mui/icons-material'
import TextField from "@mui/material/TextField";
import { SearchComponent } from '@/components/SearchBar'
import { useSpring, animated } from "react-spring";
import { url } from 'inspector'
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/navigation';
// reactstrap components
import { Button } from "reactstrap";
import { Typewriters } from '@/components/animations'
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { Router } from 'next/router'
import { Social } from '@/components/Social'
import jetskiList from "../pages/Excursions/Excursions-jetski/jetskiList";

const slides = [
  {url: '/BaiaItalia/baia-italia_1.png', title: 'image1'},
  {url: '/Canados42/Canados42_2.png', title: 'image2'},
  {url: '/Canados90/Canados90_1.png', title: 'image3'},
  {url: '/Cayman/Cayman.png', title: 'image4'},
  {url: '/Leopard/Leopard_1.png', title: 'image5'},
  {url: '/QuickSilver875/quick-silver875_1.png', title: 'image6'},
  {url: '/Sundacer320/Sundacer320.jpg', title: 'image7'},
  {url: '/SunseekerPredator/sunseeker_1.png', title: 'image8'},
  {url: '/VanDutch/van-dutch_1.png', title: 'image9'},
  ]

  const slides2 = [
    {url: '/snorkeling/snorkeling1.png', title: 'image1'},
    {url: '/Jetski/jetski-cala-conta/jetskiConta0.png', title: 'image2'},
    {url: '/Jetski/jetski-puerta/jetski-puerta.png', title: 'image3'},
    {url: '/Boat-no-licence/Dipol/Dipol.png', title: 'image4'},
    {url: '/Boat-no-licence/Dipol/Dipol2.png', title: 'image5'},
    {url: '/Jetski/jetski-atlantis/jetski-atlantis.png', title: 'image6'},
    {url: '/Boat-no-licence/Astec/Astec400.png', title: 'image7'},
    {url: '/snorkeling/snorkeling2.png', title: 'image8'},
    {url: '/snorkeling/snorkeling7.png', title: 'image9'},
    ]

export default function Home() {
  const router = useRouter();
  return (
    <div>
      
      <ResponsiveAppBar />
              <h1 style={{fontFamily:"cursive",
                          fontSize:"20px",
                          borderTop:"100px",
                          textAlign: "center",
                          color:"white",
                          margin:"50px"}}>
             <Typewriters></Typewriters>
              </h1>
          <div style={{ margin:"70px", textAlign:"center"}}>
            <SearchComponent />
          </div>

          <div style={{fontStyle:"-moz-initial",
                fontSize:"30px",
                borderTop:"100px",
                textAlign: "center",
                color:"white",}}>
              Yatchs
              <div >
                <a onClick={() => router.push(`Yatchs/Yatchs-index`)}>
                <Slider  slides={slides}/>
                </a>
              </div>
              Excursion
                <Slider slides={slides2}/>
              Boat Party
                <Slider slides={slides}/>
              <Social />
          </div>
        </div>
  )
}
// CREARE LA YATCHS PAGE