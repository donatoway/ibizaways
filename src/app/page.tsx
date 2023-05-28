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
                <Slider />
                </a>
                </div>
              Excursion
                <Slider />
              Boat Party
                <Slider />
              <Social />
          </div>
        </div>
  )
}
// CREARE LA YATCHS PAGE