import './contact.css'
import phone from '../../image/phone.png'
import email from '../../image/email.png'
import address from '../../image/address.png'
import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'


function Contact() {
    const formRef = useRef();
    const [done,setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qutlajs', 'template_sprgo23', formRef.current, 'user_YwxcZU5KaI2igjXUbZMAS')
            .then((result) => {
                //console.log(result.text);
                setDone(true);
            }, (error) => {
                //console.log(error.text);
            });
    };

    return (
        <div className='contact' id='contact'>

            <div className="contact-bg"> </div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">
                        Let us hear from you!
                    </h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={phone} alt="" className="contact-icon" />
                            03001234567
                        </div>
                        <div className="contact-info-item">
                            <img src={email} alt="" className="contact-icon" />
                            abdulmoeez0812.gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={address} alt="" className="contact-icon" />
                            Lahore, Punjab, Pakistan
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>What's your story?</b> Get in touch for collabrations. Always available for freelance projects if right one comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" name="uname" placeholder='Name' />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" name="usubject" placeholder='Subject' />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" name="uemail" placeholder='Email' />
                        <textarea style={{backgroundColor: darkMode && "#333"}} name="umessage" placeholder='Message' rows="5"></textarea>
                        <button >Submit</button>
                        {done && 'Thank you for contacting.'}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
