import React from 'react'
import './Contact.css'

function Contact() {
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
                        <input placeholder='Name' className="form-input" type="text" name="name" id="name" />
                    </div>
                    <div className="form-part">
                        <label className="form-label" htmlFor="name">Your Email:</label>
                        <input placeholder='Email' className="form-input" type="text" name="email" id="email" />
                    </div>
                    <div className="form-part">
                        <label className="form-label" htmlFor="message">Message:</label>
                        <textarea placeholder='Message...' className="form-input" id="message" name="message" rows="4" cols="50"></textarea>
                    </div>
                    <button className="form-button">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact