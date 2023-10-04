import React from 'react';
import '../styles/ContactSection.css';
import { BsFacebook, BsInstagram, BsTelephoneFill, BsTiktok, BsYoutube } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const ContactSection = () => {
    return (
        <>
            <section className='contactSection'>
                <div className='contactSectionContent'>
                    <p className='contactSectionContentHeading'> GET IN TOUCH </p>
                    <p className='contactSectionContentPhone'><i><BsTelephoneFill /> </i>Phone: +977-986928374</p>
                    <p className='contactSectionContentEmail'><i><MdEmail /></i> Email: Nephara23@gmail.com</p>
                    <div className='contactSectionContentSocials'>
                        <button><BsFacebook /> </button>
                        <button> <BsInstagram /> </button>
                        <button>  <BsYoutube /></button>
                        <button><BsTiktok /> </button>
                    </div>
                </div>
                <div className='contactSectionForm'>
                    <div className='contactSectionInputs'>
                        <div className='contactSectionInputsInfo'>
                            <input placeholder='Your name*' />
                            <input placeholder='Your Phone*' />
                            <input placeholder='Your Email*' />
                        </div>
                        <textarea className='contactSectionInputsMessage' placeholder='Your Message...' />
                    </div>
                    <button> SEND MESSAGE </button>
                </div>
            </section>
        </>
    )
}

export default ContactSection