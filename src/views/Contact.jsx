import React from 'react'
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'

const Contact = (props) => {
    return (
        <div className="inner">
            <div className="contact">
                <ContactHero/>
            </div>
            <ContactForm/>

        </div>
    )
}

export default Contact
