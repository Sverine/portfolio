import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import "../styles/components/_contact.scss";



const Contact = ({color,content}) => {

    const form = useRef();

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    const templateParams={
        name,
        email,
        message
    }

    const displayMessage = (message)=> {
        let formMessage = document.querySelector(message);
        formMessage.style.opacity=1;
        
        setTimeout(()=>{
            formMessage.style.opacity=0;
        },3000);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        let inputs = e.target.childNodes;
        let values = [];
        for(let input of inputs){
            if (input.className==="input-form" && input.value){
                values.push(input.value);
            }
        };
        if (values.length === 3){
            emailjs.send('service_0pd0c7v', 'template_alzxn74', templateParams, 'user_xqQEx0mRXtsS4PCxIAyB6')
            .then((result) => {
                console.log(result.text);
                displayMessage('.validation-message');
                for (let input of inputs) input.value="";
                values=[];
              }, (error) => {
                  console.log(error.text);
              });
        }else{
            displayMessage('.error-message');
            values=[];
        }
      };

    const handleChange = (e)=>{
        
        switch(e.target.name){
            case "user_name":
                setName(e.target.value);
                break;
            
            case "user_email":
                setEmail(e.target.value);
                break;

            case "message":
                setMessage(e.target.value);
                break;
            
            default:
                setName("unknown user");
                setEmail("unknown email");
                setMessage("unknown message");
        }

        let inputForm = document.getElementsByClassName('input-form');
        let values = [];
        let button= document.querySelector('.button-form')
        for (let input of inputForm){
            if (input.value !== ""){values.push(input.value);}
        }

        if (values.length ===3){
            button.style.backgroundColor="#433D9C"
        }else{
            button.style.backgroundColor="#302A8B";
        }
    }


    return (
        <div className='contact'>
            <p style={{color:color}}>{content.intro}</p>
            
            <form ref={form} onSubmit={sendEmail} onChange={handleChange}>
                
                <input  className='input-form' type="text" name="user_name" placeholder={content.name} style={{boxShadow:color==="white"?"0px 0px 23px 7px #191649":"0px 0px 23px 7px white"}}/>
                
                <input  className='input-form' type="email" name="user_email" placeholder='E-mail'
                style={{boxShadow:color==="white"?"0px 0px 23px 7px #191649":"0px 0px 23px 7px white"}}/>

                <textarea className='input-form' name="message" placeholder='Message'
                style={{boxShadow:color==="white"?"0px 0px 23px 7px #191649":"0px 0px 23px 7px white"}}/>

                <p className='form-message error-message' style={{opacity:0}}>{content.error}</p>

                <p className='form-message validation-message' style={{opacity:0}}>{content.validation}</p> 

                <button type="submit" value="Send" className='button-form'>
                    <span>{content.button}</span>
                    <img src="./img/paper-plane.svg" alt="icon of paper plane"/>
                </button>
            </form>
        </div>
    );
};

export default Contact;