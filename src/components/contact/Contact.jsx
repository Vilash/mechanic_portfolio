import './contact.css';
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import { useRef, useState } from 'react';

import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef()
    const [done,setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_8tdvci5', 
            'template_kx7mfk8', 
            formRef.current, 
            'user_hUhJpZ0g3gg4HTjZDK20L')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };           
    return (
      <div className="c">
          <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +44 ##### #####
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            themechanic14159@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                            Leicester, United Kingdom
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Mechanic's Communicator</b> 
                    </p>
                    <p className='c-desc'> if you have the right project, Mechanic is available to freelance. </p>
                    <form ref = {formRef} onSubmit={handleSubmit} >
                        <input type="text" placeholder='Name' name="user_name" />
                        <input type="text" placeholder='Subject' name="user_subject" />
                        <input type="text" placeholder='Email' name="user_email" />
                        <textarea name="message" rows="5" placeholder= "your Story" />
                        <button>Submit</button>
                    </form>
                    {done && " Thank You..."}
                </div>
            </div>   
          
      </div>
  )
};

export default Contact;
