import React, { useState, useRef } from 'react'
import '../index.css';
import img1 from '../images/lgin.png';
import img2 from '../images/contact1.png';
import { About } from './About';
import emailjs from 'emailjs-com';


export const Contact = () => {
    // const [fullData, setfullData] = useState({
    //     username: '',
    //     email: '',
    //     contactno: '',
    //     message: '',
    // })


    // function eventHandler(event) {
    //     const value = event.target.value;
    //     const name = event.target.name;

    //     setfullData((previous) => {
    //         return {
    //             ...previous,
    //             [name]: value,
    //         };
    //     })
    // }

   

    // function onSubmit(event) {
    //     event.preventDefault();
    //     alert(`hello ${fullData.username} your message ${fullData.message} has been submitted from email: ${fullData.email}`);
    // }

    const form = useRef();

    const sendEmail = (e) => {
        alert(`your message has been submitted: `)
        // e.preventDefault();
        
        emailjs.sendForm('service_x9p276i', 'template_dnjo66q', form.current, 'ktB4Ee0piwyX3KyKq')
        .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
      };

    return (
        <>
            <div class="background">
                <div class="container">
                    <div class="screen">
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title"  >
                                    <span >CONTACT</span>
                                    <span>US</span>
                                </div>
                                <div class="app-contact">CONTACT INFO : +92 333 0000</div>
                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                    <form ref={form} onSubmit = {sendEmail}>
                                    <div class="app-form-group">
                                        <input class="app-form-control"  name = 'username' placeholder="NAME" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control"  name = 'email' placeholder="EMAIL" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control"  name = 'contactno' placeholder="CONTACT NO" />
                                    </div>
                                    <div class="app-form-group message">
                                        <input class="app-form-control"  name = 'message' placeholder="MESSAGE" />
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button class="app-form-button">CANCEL</button>
                                        <button class="app-form-button">SEND</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
