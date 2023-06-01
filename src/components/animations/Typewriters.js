import React from "react";
import Typewriter from "typewriter-effect";


function Typewriters(){
    return (
        <div className="container">
            <p style={{fontFamily:"cursive",
                          fontSize:"20px",
                          borderTop:"100px",
                          textAlign:"center",
                          color:"white",
                          margin:"10px"}}>
                <Typewriter options={{  autoStart: true,
                                        loop: true,
                                        delay: 40,
                                        strings: [`"Wherever we want to go, we go. That's what a ship is, you know. It's not just a keel and hull and a deck and sails. That's what a ship needs. But what a ship is... what the Black Pearl really is... is freedom...."`]

                                    }} /> 
            </p>
        </div>
    )
}
export default  Typewriters
