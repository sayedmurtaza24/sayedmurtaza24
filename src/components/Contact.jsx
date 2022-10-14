import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { useState } from 'react';

function Contact() {
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const messageInput = useRef(null);

    const [sent, setSent] = useState(false)

    const initializeEmailJs = async () => {
        emailjs.init("JMo4-OegvzXJb8jek")
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (sent) return;
        emailjs
            .send("default_service", "template_ujrvie6", {
                message: messageInput.current.value,
                from_name: nameInput.current.value,
                from_email: emailInput.current.value,
            })
            .then(() => setSent(true));
    }

    useEffect(() => {
        initializeEmailJs();
    }, []);

    return (
        <section className="contact-section">
            <div className="contact-section__text">
                Interested in working together? <br /> Get in touch!
            </div>
            <div className="contact-section__form">
                <form autoComplete='off'>
                    <h2 className="form-header">Contact Me</h2>
                    <div className="form-part">
                        <label className="form-label" htmlFor="name">Your Name:</label>
                        <input ref={nameInput}
                            placeholder='Name'
                            className="form-input"
                            type="text"
                            name="name"
                            id="name" />
                    </div>
                    <div className="form-part">
                        <label className="form-label" htmlFor="name">Your Email:</label>
                        <input ref={emailInput}
                            placeholder='Email'
                            className="form-input"
                            type="text"
                            name="email"
                            id="email" />
                    </div>
                    <div className="form-part">
                        <label className="form-label" htmlFor="message">Message:</label>
                        <textarea ref={messageInput}
                            placeholder='Message...'
                            className="form-input"
                            id="message"
                            name="message"
                            rows="4" cols="50" />
                    </div>
                    <div className="form-control">
                        <button onClick={sendEmail} className="form-button">Send</button>
                        {sent && <p className="sent-success">Sent 🤞</p>}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact