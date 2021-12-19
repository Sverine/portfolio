import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import "../styles/components/_contact.scss";



const Contact = ({color}) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0pd0c7v', 'template_alzxn74', form.current, 'user_xqQEx0mRXtsS4PCxIAyB6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return (
        <div className='contact'>
            <p style={{color:color}}>Wanna say hi ?</p>
            
            <form ref={form} onSubmit={sendEmail}>
                
                <input type="text" name="user_name" placeholder='Name'/>
                
                <input type="email" name="user_email" placeholder='E-mail'/>

                <textarea name="message" placeholder='Message'/>

                <button type="submit" value="Send">
                    <span>Send</span>
                    <img src="./img/paper-plane.svg" alt="icon of paper plane"/>
                </button>
            </form>
        </div>
    );
};

export default Contact;