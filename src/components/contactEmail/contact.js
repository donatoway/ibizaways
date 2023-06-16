import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => 
{
    const form = useRef()
    const [sent, setSent] = useState(true);


    const sendEmail = async (e) => {
        e.preventDefault();
    
     await    emailjs.sendForm('service_po7mnzu', 'template_tb54mlb', form.current, 'SFiZplkl1iagvZrPo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          setSent(false)
      };
    return (
       sent != false &&  
            <form ref={form}  onSubmit={sendEmail}  style={{ display:"grid", margin:"40px", marginLeft:"35px", marginRight:"30px", marginTop:"100px", textAlign:"center"}}>
            <h2>Contact Us</h2>
            <h3>name</h3>
             <TextField
                required
                id="outlined-required"
                name="user_name"
                label="Required"
                defaultValue="name"
                style={{marginBottom:"10px"}}
                />
            <h3>email</h3>
            <TextField
                required
                id="outlined-required"
                name="user_email"
                label="Required"
                defaultValue="email"
                style={{marginBottom:"10px"}}
                />
            <h3>subject</h3>
            <TextField
                required
                name="subject"
                id="outlined-required"
                label="Required"
                defaultValue="subject"
                style={{marginBottom:"10px"}}
                />
            <textarea name="message" style={{width:"100%", height:"150px", color:"black", font:"message-box"}}/>
            
            
            <Button type="submit"  style={{/*margin:"20px", marginLeft:"50px",width:"180px", height:"40px", display:"inline-flex" */margin:"30px"}} variant="contained">
                Send
            </Button>
            </form>
    )
}
export default Contact;